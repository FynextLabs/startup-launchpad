export const Story = () => (
  <section id="story" className="container mx-auto py-20">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      <div className="relative">
        <div className="comic-border-lg p-8 bg-card -rotate-2">
          <div className="halftone rounded-xl p-6 bg-accent/40">
            <p className="text-2xl font-bold leading-snug">
              "We met on Reddit, answering the same lonely founder's question. Turns out we were all that founder."
            </p>
          </div>
        </div>
        <div className="absolute -bottom-6 right-4 comic-border-sm bg-secondary px-4 py-2 font-bold rotate-3">
          — How Startup Labs began
        </div>
      </div>
      <div>
        <span className="comic-border-sm bg-primary/40 px-3 py-1 text-sm font-bold inline-block mb-4">Our story</span>
        <h2 className="text-4xl md:text-5xl mb-6">Built by founders. For founders.</h2>
        <p className="text-lg text-muted-foreground mb-4">
          It started in a Reddit thread. One of us was answering a solo founder's question — and the others jumped in with the same hard-won advice. We quickly realised we'd all walked the same lonely road: shipping alone, running out of cash alone, pivoting alone.
        </p>
        <p className="text-lg text-muted-foreground mb-4">
          Soon we were quietly helping each other on Discord — debugging stacks, reviewing pitch decks, talking each other off ledges at 2am. Then Humphrey said it out loud: <span className="font-bold text-foreground">"Why don't we just form a team and help others with everything we've learned?"</span>
        </p>
        <p className="text-lg text-muted-foreground">
          And that's how Startup Labs was born — a remote crew of ex-solo founders, now pooling our scars so you don't have to collect your own.
        </p>
      </div>
    </div>

    {/* Currently building */}
    <div className="mt-20">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="comic-border-sm bg-pop px-3 py-1 text-sm font-bold inline-block mb-4">Currently shipping</span>
        <h3 className="text-3xl md:text-4xl">Our latest startups in the wild.</h3>
        <p className="text-muted-foreground mt-3">We don't just preach it — we're still building our own products, right alongside our clients.</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <a
          href="https://avatok.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="comic-border p-6 bg-card hover:-translate-y-1 transition-transform block rotate-[-0.5deg]"
        >
          <div className="comic-border-sm bg-accent inline-block px-3 py-1 text-xs font-bold mb-3">AI · Live</div>
          <h4 className="text-2xl mb-2">avatok.ai →</h4>
          <p className="text-muted-foreground">AI avatars that actually look like you. Our playground for everything generative.</p>
        </a>
        <a
          href="https://vendoragenie.com"
          target="_blank"
          rel="noopener noreferrer"
          className="comic-border p-6 bg-card hover:-translate-y-1 transition-transform block rotate-[0.5deg]"
        >
          <div className="comic-border-sm bg-secondary inline-block px-3 py-1 text-xs font-bold mb-3">SaaS · Live</div>
          <h4 className="text-2xl mb-2">vendoragenie.com →</h4>
          <p className="text-muted-foreground">A smarter way for businesses to find, vet and manage vendors. Built from real procurement pain.</p>
        </a>
      </div>
    </div>
  </section>
);
