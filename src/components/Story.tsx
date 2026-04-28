export const Story = () => (
  <section id="story" className="container mx-auto py-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="comic-border-lg p-8 bg-card -rotate-2">
          <div className="halftone rounded-xl p-6 bg-accent/40">
            <p className="text-2xl font-bold leading-snug">
              "We failed startups not from bad code — but from bad funding. That pain became our superpower."
            </p>
          </div>
        </div>
        <div className="absolute -bottom-6 right-4 comic-border-sm bg-secondary px-4 py-2 font-bold rotate-3">
          — The Startup Labs crew
        </div>
      </div>
      <div>
        <span className="comic-border-sm bg-primary/40 px-3 py-1 text-sm font-bold inline-block mb-4">Our story</span>
        <h2 className="text-4xl md:text-5xl mb-6">Built by founders. For founders.</h2>
        <p className="text-lg text-muted-foreground mb-4">
          We've launched our own startups. Some flew. Most crashed — usually because of funding, not the product. Along the way we learned how to cut costs, build in-house tools, and squeeze every drop out of a runway.
        </p>
        <p className="text-lg text-muted-foreground">
          Today we don't build for ourselves. We use that mixed, hard-earned experience to help other founders make their dream a real, working business.
        </p>
      </div>
    </div>
  </section>
);
