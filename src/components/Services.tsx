import { Code2, Palette, Server, LineChart, Wrench, Lightbulb } from "lucide-react";

const services = [
  { icon: Lightbulb, title: "Idea to MVP", desc: "Validate fast. Ship a real product in weeks, not months.", bg: "bg-accent" },
  { icon: Palette, title: "Product Design", desc: "Clean, friendly UI/UX that users actually enjoy using.", bg: "bg-secondary" },
  { icon: Code2, title: "Full Stack Build", desc: "Frontend, backend, APIs, databases — all under one roof.", bg: "bg-primary/40" },
  { icon: Server, title: "Infra & DevOps", desc: "Lean hosting and in-house tools to keep your burn low.", bg: "bg-pop/60" },
  { icon: Wrench, title: "Maintenance", desc: "We stick around. Bug fixes, updates, and uptime handled.", bg: "bg-accent" },
  { icon: LineChart, title: "Growth", desc: "Analytics, experiments and features that move the needle.", bg: "bg-secondary" },
];

export const Services = ({ hideHeader = false }: { hideHeader?: boolean }) => (
  <section id="services" className="container mx-auto py-20">
    {!hideHeader && (
      <div className="max-w-2xl mb-12">
        <span className="comic-border-sm bg-pop px-3 py-1 text-sm font-bold inline-block mb-4">What we do</span>
        <h2 className="text-4xl md:text-5xl mb-4">Everything your startup needs, in one team.</h2>
        <p className="text-lg text-muted-foreground">No agencies stacked on agencies. One small remote crew that owns the whole journey with you.</p>
      </div>
    )}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map(({ icon: Icon, title, desc, bg }) => (
        <article key={title} className="comic-border p-6 hover:-translate-y-1 transition-transform">
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border-[3px] border-foreground ${bg} mb-4`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl mb-2">{title}</h3>
          <p className="text-muted-foreground">{desc}</p>
        </article>
      ))}
    </div>
  </section>
);
