import { NextResponse } from "next/server";
import { GoogleAuth } from "google-auth-library";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface RawRow {
  [key: string]: string | undefined;
}

interface Article {
  title: string;
  author: string;
  pages: string;
}

interface Volume {
  id: number;
  number: number;
  year: number;
  slug: string;
  title: string;
  summary: string;
  description: string;
  editor: string;
  isbn?: string;
  topics: string[];
  tableOfContents: Article[];
  articles: number;
  coverImage?: string;
  featured?: boolean;
}

// Google Sheets constants
const SHEETS_SCOPE = "https://www.googleapis.com/auth/spreadsheets.readonly";
const SHEETS_API_BASE = "https://sheets.googleapis.com/v4/spreadsheets";

// Utility functions
function parseTopics(value?: string): string[] {
  if (!value) return [];

  try {
    // If it's a JSON array, parse it directly
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) return parsed.map((t) => String(t).trim()).filter(Boolean);
  } catch {
    // Fall back to splitting by commas, semicolons, or newlines
  }

  return value
    .split(/[;,\n]/)
    .map((topic) => topic.trim())
    .filter(Boolean);
}

function parseTableOfContents(value?: string): Article[] {
  if (!value) return [];

  try {
    // If it’s already a JSON array
    const parsed = JSON.parse(value);
    if (Array.isArray(parsed)) {
      return parsed
        .map((entry) => ({
          title: typeof entry?.title === "string" ? entry.title : "",
          author: typeof entry?.author === "string" ? entry.author : "",
          pages: typeof entry?.pages === "string" ? entry.pages : String(entry?.pages ?? ""),
        }))
        .filter((entry) => entry.title);
    }
  } catch {
    // Not JSON? Try plain text format
  }

  // Split text lines into individual items
  return value
    .split(/\n|\r|,|;/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const [title, author, pages] = line.split("|").map((p) => p.trim());
      return { title, author: author ?? "", pages: pages ?? "" };
    })
    .filter((entry) => entry.title);
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/[\s_-]+/g, "-");
}

function isTruthy(value?: string): boolean {
  if (!value) return false;
  return ["true", "1", "yes", "y"].includes(value.trim().toLowerCase());
}

function buildVolume(row: RawRow, fallbackId: number): Volume {
  const tableOfContents = parseTableOfContents(row.tableOfContents);
  const parsedId = parseInt(row.id ?? "", 10);
  const parsedNumber = parseInt(row.number ?? "", 10);
  const parsedYear = parseInt(row.year ?? "", 10);
  const parsedArticles = parseInt(row.articles ?? "", 10);

  const title = row.title?.trim() ?? `Untitled Volume ${fallbackId}`;
  const slug = (row.slug && row.slug.trim()) || slugify(title);

  return {
    id: Number.isFinite(parsedId) ? parsedId : fallbackId,
    number: Number.isFinite(parsedNumber) ? parsedNumber : fallbackId,
    year: Number.isFinite(parsedYear) ? parsedYear : new Date().getFullYear(),
    slug,
    title,
    summary: row.summary?.trim() ?? "",
    description: row.description?.trim() ?? "",
    editor: row.editor?.trim() ?? "",
    isbn: row.isbn?.trim() || undefined,
    topics: parseTopics(row.topics),
    tableOfContents,
    articles: Number.isFinite(parsedArticles) ? parsedArticles : tableOfContents.length,
    coverImage: row.coverImage?.trim() || undefined,
    featured: isTruthy(row.featured),
  };
}

function mapRowsToVolumes(rows: string[][]): Volume[] {
  if (rows.length === 0) return [];

  // Skip the Google Form header and use the real header row
  const [headerRow, ...dataRows] = rows;
  const headers = headerRow.map((header) => header.trim());

  return dataRows.map((rowValues, index) => {
    const entry: RawRow = {};
    headers.forEach((header, i) => {
      if (header) entry[header] = rowValues[i];
    });
    return buildVolume(entry, index + 1);
  });
}

// Fetch spreadsheet data
async function fetchSheetValues(sheetId: string, token: string): Promise<string[][]> {
  const metadataResponse = await fetch(
    `${SHEETS_API_BASE}/${sheetId}?fields=sheets(properties/title)`,
    { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
  );

  if (!metadataResponse.ok) {
    const errorBody = await metadataResponse.text();
    throw new Error(`Failed to fetch spreadsheet metadata: ${metadataResponse.status} ${errorBody}`);
  }

  const metadata = (await metadataResponse.json()) as {
    sheets?: { properties?: { title?: string } }[];
  };

  const firstSheetTitle = metadata.sheets?.[0]?.properties?.title;
  if (!firstSheetTitle) {
    throw new Error("Spreadsheet does not contain any sheets");
  }

  const sheetName = "inventory_data"; // <-- your actual tab name
const valuesResponse = await fetch(
  `${SHEETS_API_BASE}/${sheetId}/values/${encodeURIComponent(sheetName)}`,
  { headers: { Authorization: `Bearer ${token}` }, cache: "no-store" }
);

  if (!valuesResponse.ok) {
    const errorBody = await valuesResponse.text();
    throw new Error(`Failed to fetch sheet values: ${valuesResponse.status} ${errorBody}`);
  }

  const values = (await valuesResponse.json()) as { values?: string[][] };
  return values.values ?? [];
}

export async function GET() {
  const sheetId = process.env.SHEET_ID;
  const credentialsRaw = process.env.GOOGLE_CREDENTIALS
  if (!sheetId || !credentialsRaw) {
    return NextResponse.json({ error: "Missing SHEET_ID environment variable" }, { status: 500 });
  }

  let credentials;
  try {
    credentials = JSON.parse(credentialsRaw);
  } catch {
    return NextResponse.json({ error: "Invalid GOOGLE_CREDENTIALS format" }, { status: 500 });
  }

  try {
    // Use GoogleAuth to handle signing automatically
    const auth = new GoogleAuth({
      credentials,
      scopes: [SHEETS_SCOPE],
    });

    const client = await auth.getClient();
    const { token } = await client.getAccessToken();
if (!token) throw new Error("Failed to retrieve access token");

const rows = await fetchSheetValues(sheetId, token);
    const volumes = mapRowsToVolumes(rows);

    return NextResponse.json({ volumes });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
