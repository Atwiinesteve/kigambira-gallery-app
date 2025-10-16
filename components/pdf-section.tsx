import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText } from "lucide-react"

// Sample PDF files - replace with your actual PDFs
const pdfFiles = [
  {
    id: 1,
    title: "Kigambira Safari Lodge Limited Profile.",
    description: "Comprehensive overview of our company and services.",
    fileSize: "3.38 MB",
    downloadUrl: "https://drive.google.com/file/d/1Yz29yjQ3NeBRpvz9QEzDHKkFWUy9dAs1/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Kigambira Safari Lodge Limited 2025 Rate Card.",
    description: "Detailed pricing information for our offerings.",
    fileSize: "7.83 MB",
    downloadUrl: "https://drive.google.com/file/d/1HfvCOPM_pJCQbjz9w0EbsDPvIsdbdKhn/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Kigambira Safari Lodge Limited 2026 Rate Card.",
    description: "Detailed pricing information for our offerings.",
    fileSize: "7.83 MB",
    downloadUrl: "https://drive.google.com/file/d/1DLY6dmzVLXOtVe-Wdc-UdFbQAnqhBf_I/view?usp=drive_link",
  },
  {
    id: 4,
    title: "Kigambira Safari Lodge Limited Fact Sheet.",
    description: "Key facts and figures about our lodge",
    fileSize: "4 MB",
    downloadUrl: "https://drive.google.com/file/d/1-Qf1aB_SvpYuaZgiqTqhOFna3BmGFxiu/view?usp=drive_link",
  },
]

export function PDFSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pdfFiles.map((pdf) => (
        <Card key={pdf.id} className="group hover:border-primary/50 transition-colors">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-lg">{pdf.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{pdf.fileSize}</p>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="mb-4 leading-relaxed">{pdf.description}</CardDescription>
            <Button
              variant="outline"
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors bg-transparent"
              asChild
            >
              <a href={pdf.downloadUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
