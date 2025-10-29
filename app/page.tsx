import { Gallery } from "@/components/gallery"
import { PDFSection } from "@/components/pdf-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="border-b border-border">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance mb-6">
            Kigambira Safari Lodge Media Gallery.
          </h1>
          {/* <p className="text-lg md:text-xl text-white max-w-2xl text-pretty">
            Explore our collection of images and documents showcasing the beauty and offerings of Kigambira Safari
            Lodge.
          </p> */}
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Image Gallery</h2>
            <p className="text-white text-lg">
              A selection of high-quality images showcasing our lodge and surroundings.
            </p>
          </div>
          <Gallery />
        </div>
      </section>

      {/* PDF Documents Section */}
      <section className="py-16 md:py-24 ">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Documents</h2>
            <p className="text-white text-lg">Access and download our PDF resources</p>
          </div>
          <PDFSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-muted-foreground">© 2025 Kigambira Safari Lodge. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
