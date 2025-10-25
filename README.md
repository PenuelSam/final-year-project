# WAJA Journal Inventory System

A dynamic web application that manages and displays journal volumes for the **Waja Journal of the Department of Anthropology & Archaeology**.  
The system automatically updates when new inventory entries are submitted via a connected Google Form.

---

## 📚 Overview

This project replaces the previous static data setup with a **dynamic Google Sheets integration**, allowing real-time updates without code changes.  
When a new volume is submitted through the Google Form, the data automatically appears on the website.

---

## 🔗 Live Links

- **Website:** [https://waja-inventory.vercel.app](https://waja-inventory.vercel.app)
- **Google Form (Add New Volume):** [https://forms.gle/k9pwpvMCdUkUL2cc8](https://forms.gle/k9pwpvMCdUkUL2cc8)
- **Google Spreadsheet (Data Source):** [https://docs.google.com/spreadsheets/d/1mIAL2PndK7aPmELyts-iaTcv5CAREHbpt-FCz17yFJE/edit?resourcekey=&gid=1200740444#gid=1200740444](https://docs.google.com/spreadsheets/d/1mIAL2PndK7aPmELyts-iaTcv5CAREHbpt-FCz17yFJE/edit?resourcekey=&gid=1200740444#gid=1200740444)

---

## ⚙️ How It Works

1. **Google Form → Google Sheet:**  
   Each new submission from the form automatically populates the connected Google Sheet.

2. **Google Sheet → API Endpoint:**  
   The Next.js `/api/inventory` route fetches data directly from Google Sheets using the Google Sheets API and a Service Account.

3. **API → Frontend Display:**  
   The app fetches data from the API and displays the latest volumes dynamically on the website.

---

## 🧠 Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **UI Components:** Tailwind CSS + ShadCN UI
- **Data Source:** Google Sheets (linked via Google Form)
- **Hosting:** Vercel
- **Authentication:** Google Cloud Service Account
- **Environment Variables:**
  - `SHEET_ID` – Google Spreadsheet ID
  - `GOOGLE_CREDENTIALS` – JSON key from the Google Cloud Service Account
  - `NEXT_PUBLIC_SITE_URL` – Deployed website base URL (e.g., `https://waja-inventory.vercel.app`)

---

## 🚀 Deployment Setup

### 1. Create a `.env.local` File
```bash
SHEET_ID=<your_google_sheet_id>
GOOGLE_CREDENTIALS=<your_service_account_json>
NEXT_PUBLIC_SITE_URL=https://waja-inventory.vercel.app
