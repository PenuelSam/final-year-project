import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About Waja Journal</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          A premier academic publication dedicated to advancing knowledge in anthropology and archaeology through
          rigorous research, scholarly discourse, and cultural understanding.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <Card className="text-center">
          <CardContent className="pt-6">
            <BookOpen className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">42</div>
            <div className="text-slate-600">Volumes Published</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-slate-600">Research Articles</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
            <div className="text-slate-600">Years of Excellence</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-slate-600">Countries Reached</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Mission */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              The Waja Journal serves as a vital platform for disseminating cutting-edge research in anthropology and
              archaeology. We are committed to fostering scholarly dialogue, promoting cultural understanding, and
              advancing the frontiers of human knowledge.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our mission extends beyond mere publication—we strive to bridge the gap between academic research and
              practical applications, ensuring that our contributions have meaningful impact on both scholarly
              communities and society at large.
            </p>
          </CardContent>
        </Card>

        {/* Vision */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Our Vision</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-slate-700 leading-relaxed">
              We envision a world where anthropological and archaeological research contributes to a deeper
              understanding of human diversity, cultural heritage, and our shared past. Through rigorous scholarship and
              open dialogue, we aim to promote cross-cultural understanding and preserve the rich tapestry of human
              experience.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Our vision encompasses the democratization of knowledge, making high-quality research accessible to
              scholars, students, and interested readers worldwide.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Editorial Scope */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Editorial Scope</CardTitle>
          <CardDescription>
            The Waja Journal publishes original research across diverse areas of anthropological and archaeological
            inquiry.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-lg">Anthropological Focus Areas</h4>
              <div className="space-y-2">
                <Badge variant="outline">Cultural Anthropology</Badge>
                <Badge variant="outline">Social Anthropology</Badge>
                <Badge variant="outline">Linguistic Anthropology</Badge>
                <Badge variant="outline">Medical Anthropology</Badge>
                <Badge variant="outline">Economic Anthropology</Badge>
                <Badge variant="outline">Political Anthropology</Badge>
                <Badge variant="outline">Environmental Anthropology</Badge>
                <Badge variant="outline">Urban Anthropology</Badge>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-lg">Archaeological Specializations</h4>
              <div className="space-y-2">
                <Badge variant="outline">Prehistoric Archaeology</Badge>
                <Badge variant="outline">Historical Archaeology</Badge>
                <Badge variant="outline">Maritime Archaeology</Badge>
                <Badge variant="outline">Environmental Archaeology</Badge>
                <Badge variant="outline">Digital Archaeology</Badge>
                <Badge variant="outline">Public Archaeology</Badge>
                <Badge variant="outline">Heritage Studies</Badge>
                <Badge variant="outline">Archaeological Theory</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Publication Standards */}
      <Card className="mb-12">
        <CardHeader>
          <CardTitle className="text-2xl">Publication Standards</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">Peer Review Process</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                All submissions undergo rigorous double-blind peer review by recognized experts in the field. Our review
                process ensures the highest standards of scholarly integrity and methodological rigor.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Editorial Standards</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                We maintain strict editorial standards, emphasizing originality, methodological soundness, theoretical
                contribution, and clear presentation of research findings and implications.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Ethical Guidelines</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                Our publication adheres to international ethical standards for research involving human subjects,
                cultural sensitivity, and responsible scholarship in anthropology and archaeology.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Open Access Commitment</h4>
              <p className="text-slate-700 text-sm leading-relaxed">
                We are committed to making research accessible to the global scholarly community while respecting
                intellectual property rights and supporting sustainable academic publishing.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Journal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Journal Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900">ISSN</h4>
                <p className="text-slate-600">2789-1234 (Print) • 2789-5678 (Online)</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Publication Frequency</h4>
                <p className="text-slate-600">Annual (with special issues as needed)</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Language</h4>
                <p className="text-slate-600">English (with abstracts in multiple languages)</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900">Indexing</h4>
                <p className="text-slate-600">Anthropology Plus, JSTOR, Project MUSE, EBSCO</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Publisher</h4>
                <p className="text-slate-600">Department of Anthropology & Archaeology</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">Founded</h4>
                <p className="text-slate-600">1999</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
