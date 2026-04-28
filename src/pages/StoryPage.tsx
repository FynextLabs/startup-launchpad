import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Story } from "@/components/Story";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";

const StoryPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <PageHeader
        eyebrow="Our story"
        title="Built by founders. For founders."
        subtitle="We've been in your shoes — sometimes flying, often crashing. Here's what we learned."
      />
      <Story />
      <section className="container mx-auto pb-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { n: "7+", l: "Startups we've launched (ours and clients')" },
            { n: "5", l: "Of our own that didn't make it" },
            { n: "100%", l: "Of the lessons baked into your build" },
          ].map((s) => (
            <div key={s.n} className="comic-border p-6 text-center">
              <div className="text-4xl font-bold mb-1">{s.n}</div>
              <p className="text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </div>
);

export default StoryPage;
