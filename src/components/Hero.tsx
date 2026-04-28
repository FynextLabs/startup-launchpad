import { ComicButton } from "./ComicButton";
import { Sparkles, Rocket } from "lucide-react";
import heroWoman from "@/assets/hero-woman.png";

export const Hero = () => {
  return (
    <section id="top" className="container mx-auto py-16 md:py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 comic-border-sm bg-accent px-3 py-1 text-sm font-bold mb-6">
            <Sparkles className="h-4 w-4" /> Remote full stack team
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
            We build startups <span className="bg-secondary comic-border-sm inline-block px-3 -rotate-2">with you</span>, not for ourselves.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
            From a solo founder with an idea to a well-funded team scaling fast — we design, code, ship, maintain and grow your product alongside you.
          </p>
          <div className="flex flex-wrap gap-4">
            <ComicButton variant="primary" size="lg" asChildHref="#contact">
              <Rocket className="mr-2 h-5 w-5" /> Schedule a call
            </ComicButton>
            <ComicButton variant="ghost" size="lg" asChildHref="#services">See what we do</ComicButton>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-2">
              {["bg-primary", "bg-secondary", "bg-accent", "bg-pop"].map((c) => (
                <div key={c} className={`h-9 w-9 rounded-full border-[3px] border-foreground ${c}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">A small team. Real founders. Real scars.</p>
          </div>
        </div>

        {/* Hero portrait surrounded by comic stickers */}
        <div className="relative mx-auto w-full max-w-md aspect-square">
          {/* Portrait panel */}
          <div className="comic-border-lg bg-card p-3 h-full w-full overflow-hidden rotate-1">
            <div className="halftone bg-primary/15 h-full w-full rounded-2xl flex items-end justify-center overflow-hidden">
              <img
                src={heroWoman}
                alt="Friendly Startup Labs founder portrait"
                width={768}
                height={1024}
                className="h-[110%] w-auto object-contain object-bottom drop-shadow-[4px_4px_0_hsl(var(--ink))]"
              />
            </div>
          </div>

          {/* Floating stickers */}
          <div className="absolute -top-5 -left-5 comic-border-sm bg-primary/40 px-4 py-2 font-bold -rotate-6">
            Idea ✨
          </div>
          <div className="absolute -top-4 -right-6 comic-border-sm bg-secondary/70 px-4 py-2 font-bold rotate-6">
            Design 🎨
          </div>
          <div className="absolute -bottom-5 -left-6 comic-border-sm bg-pop/70 px-4 py-2 font-bold -rotate-6">
            Build 🛠️
          </div>
          <div className="absolute -bottom-4 -right-5 comic-border-sm bg-accent px-4 py-2 font-bold rotate-6">
            Launch 🚀
          </div>

          {/* Comic shouts */}
          <div className="absolute top-10 -right-10 hidden md:block comic-border-sm bg-accent px-3 py-1 font-bold rotate-12 text-sm">
            POW!
          </div>
          <div className="absolute bottom-16 -left-10 hidden md:block comic-border-sm bg-pop px-3 py-1 font-bold -rotate-12 text-sm">
            Ship it!
          </div>
        </div>
      </div>
    </section>
  );
};
