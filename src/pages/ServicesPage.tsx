import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Services } from "@/components/Services";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";

const ServicesPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <PageHeader
        eyebrow="What we do"
        title="Everything your startup needs, in one team."
        subtitle="No agencies stacked on agencies. One small remote crew that owns the whole journey with you."
      />
      <Services hideHeader />
      <CTA />
    </main>
    <Footer />
  </div>
);

export default ServicesPage;
