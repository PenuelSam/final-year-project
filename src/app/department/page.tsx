import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, BookOpen, Globe, ExternalLink, Mail } from "lucide-react"

export default function DepartmentPage() {
  const facultyMembers = [
    {
      name: "Dr. Sarah Mitchell",
      title: "Professor & Department Head",
      specialization: "Cultural Anthropology, Indigenous Studies",
      email: "s.mitchell@university.edu",
    },
    {
      name: "Dr. James Rodriguez",
      title: "Associate Professor",
      specialization: "Archaeological Theory, Digital Archaeology",
      email: "j.rodriguez@university.edu",
    },
    {
      name: "Dr. Amara Okafor",
      title: "Assistant Professor",
      specialization: "Medical Anthropology, Global Health",
      email: "a.okafor@university.edu",
    },
    {
      name: "Dr. Michael Chen",
      title: "Professor",
      specialization: "Prehistoric Archaeology, Stone Tool Technology",
      email: "m.chen@university.edu",
    },
  ]

  const researchAreas = [
    "Cultural Heritage Preservation",
    "Indigenous Knowledge Systems",
    "Urban Anthropology",
    "Environmental Archaeology",
    "Digital Humanities",
    "Public Archaeology",
    "Medical Anthropology",
    "Linguistic Anthropology",
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Department of Anthropology & Archaeology</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Exploring human culture, society, and history through innovative research, rigorous scholarship, and community
          engagement.
        </p>
      </div>

      {/* Department Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">25</div>
            <div className="text-slate-600">Faculty Members</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
            <div className="text-slate-600">Students Enrolled</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-600">Research Projects</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-slate-600">Countries Studied</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* About the Department */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">About Our Department</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Established in 1985, our Department of Anthropology & Archaeology has grown to become a leading center for
              research and education in the study of human culture, society, and history. We are committed to
              understanding the full spectrum of human experience across time and space.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our interdisciplinary approach combines traditional anthropological and archaeological methods with
              cutting-edge technologies and contemporary theoretical frameworks. We emphasize both rigorous academic
              training and practical application of knowledge to address real-world challenges.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The department is home to the prestigious Waja Journal, which has been publishing high-quality research
              for over two decades, contributing significantly to the global discourse in anthropology and archaeology.
            </p>
          </CardContent>
        </Card>

        {/* Research Excellence */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Research Excellence</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              Our faculty and students engage in groundbreaking research that spans the globe and covers the full
              temporal range of human existence. From prehistoric archaeological sites to contemporary urban
              communities, our work contributes to understanding human diversity and cultural change.
            </p>
            <p className="text-slate-700 leading-relaxed">
              We maintain active field projects on multiple continents and collaborate with communities, museums, and
              institutions worldwide. Our research is supported by major funding agencies and has resulted in numerous
              publications, exhibitions, and policy recommendations.
            </p>
            <div className="pt-4">
              <Button asChild variant="outline">
                <Link href="/contact">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Explore Research Opportunities
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Research Areas */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Research Areas</CardTitle>
          <CardDescription>
            Our department covers a broad spectrum of anthropological and archaeological specializations.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {researchAreas.map((area) => (
              <Badge key={area} variant="secondary" className="justify-center py-2">
                {area}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Faculty Highlights */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Faculty Highlights</CardTitle>
          <CardDescription>
            Meet some of our distinguished faculty members who contribute to the Waja Journal editorial board.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facultyMembers.map((faculty) => (
              <div key={faculty.name} className="border rounded-lg p-4">
                <h4 className="font-semibold text-lg mb-1">{faculty.name}</h4>
                <p className="text-blue-600 text-sm mb-2">{faculty.title}</p>
                <p className="text-slate-600 text-sm mb-3">{faculty.specialization}</p>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`mailto:${faculty.email}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Programs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Academic Programs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <h4 className="font-semibold">Undergraduate Programs</h4>
              <ul className="text-sm text-slate-600 ml-4 list-disc">
                <li>B.A. in Anthropology</li>
                <li>B.A. in Archaeology</li>
                <li>Minor in Anthropology</li>
                <li>Minor in Archaeology</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Graduate Programs</h4>
              <ul className="text-sm text-slate-600 ml-4 list-disc">
                <li>M.A. in Anthropology</li>
                <li>M.A. in Archaeology</li>
                <li>Ph.D. in Anthropology</li>
                <li>Ph.D. in Archaeology</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Facilities & Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="text-sm text-slate-600 space-y-1">
              <li>• Archaeological Laboratory</li>
              <li>• Digital Humanities Center</li>
              <li>• Ethnographic Collections</li>
              <li>• GIS and Remote Sensing Lab</li>
              <li>• Conservation Laboratory</li>
              <li>• Research Library</li>
              <li>• Field Equipment Center</li>
              <li>• Student Research Spaces</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Contact Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Contact Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900">Department Office</h4>
                <p className="text-slate-600">
                  Humanities Building, Room 301
                  <br />
                  University Campus
                  <br />
                  City, State 12345
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Phone & Email</h4>
                <p className="text-slate-600">
                  Phone: (555) 123-4567
                  <br />
                  Email: anthro-arch@university.edu
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900">Office Hours</h4>
                <p className="text-slate-600">
                  Monday - Friday: 9:00 AM - 5:00 PM
                  <br />
                  Saturday: 10:00 AM - 2:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
              <div className="pt-4">
                <Button asChild>
                  <Link href="/contact">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Us a Message
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
