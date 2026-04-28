import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { PageHeader } from "@/components/PageHeader";
import { team } from "@/data/team";

const TeamPage = () => (
  <div className="min-h-screen">
    <Navbar />
    <main>
      <PageHeader
        eyebrow="The crew"
        title="Seven humans. Six time zones. One team."
        subtitle="Real founders with real scars — now using everything we learned to build with you."
      />
      <section className="container mx-auto pb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((m, i) => (
            <article
              key={m.name}
              className={`comic-border p-6 bg-card flex flex-col ${i % 2 === 0 ? "rotate-[-0.5deg]" : "rotate-[0.5deg]"}`}
            >
              <div className="comic-border-sm overflow-hidden mb-4 bg-muted">
                <img
                  src={m.photo}
                  alt={`Portrait of ${m.name}`}
                  loading="lazy"
                  width={512}
                  height={512}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-xl">{m.name}</h3>
                <span className="text-2xl" aria-hidden>{m.flag}</span>
              </div>
              <p className="font-bold text-primary text-sm mb-2">{m.title}</p>
              <p className="text-sm text-muted-foreground mb-3">📍 {m.location} · {m.experience}</p>
              <p className="text-sm mb-3">{m.bio}</p>
              <div className="comic-border-sm bg-accent/50 p-3 mt-auto">
                <p className="text-xs font-bold mb-1">Hard-earned scar 🩹</p>
                <p className="text-sm">{m.scars}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
    <Footer />
  </div>
);

export default TeamPage;
