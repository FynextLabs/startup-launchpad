const steps = [
  { n: "01", title: "Chat", desc: "We hop on a call, listen to your idea, your goals, your budget.", bg: "bg-accent" },
  { n: "02", title: "Plan", desc: "A clear scope, timeline and tech stack — no jargon, no surprises.", bg: "bg-secondary" },
  { n: "03", title: "Build", desc: "Weekly demos. You see real progress, not slide decks.", bg: "bg-primary/40" },
  { n: "04", title: "Launch", desc: "We ship it live and stay on as your long-term tech partner.", bg: "bg-pop/60" },
];

export const Process = () => (
  <section id="process" className="bg-muted border-y-[3px] border-foreground">
    <div className="container mx-auto py-20">
      <div className="max-w-2xl mb-12">
        <span className="comic-border-sm bg-secondary px-3 py-1 text-sm font-bold inline-block mb-4">How it works</span>
        <h2 className="text-4xl md:text-5xl mb-4">Four panels. One launched startup.</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <div key={s.n} className={`comic-border p-6 ${i % 2 === 0 ? "rotate-[-1deg]" : "rotate-[1deg]"}`}>
            <div className={`comic-border-sm ${s.bg} inline-block px-3 py-1 font-bold mb-4`}>{s.n}</div>
            <h3 className="text-xl mb-2">{s.title}</h3>
            <p className="text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
