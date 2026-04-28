import { ComicButton } from "./ComicButton";
import { Sparkles, Rocket } from "lucide-react";

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

        {/* Comic panel illustration */}
        <div className="relative">
          <div className="comic-border-lg bg-card p-6 md:p-8 rotate-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="comic-border-sm bg-primary/30 p-4 h-40 flex items-end">
                <span className="font-bold">Idea ✨</span>
              </div>
              <div className="comic-border-sm bg-secondary/40 p-4 h-40 flex items-end -rotate-2">
                <span className="font-bold">Design 🎨</span>
              </div>
              <div className="comic-border-sm bg-pop/40 p-4 h-40 flex items-end rotate-2">
                <span className="font-bold">Build 🛠️</span>
              </div>
              <div className="comic-border-sm bg-accent p-4 h-40 flex items-end">
                <span className="font-bold">Launch 🚀</span>
              </div>
            </div>
          </div>
          <div className="absolute -top-6 -right-4 comic-border-sm bg-accent px-4 py-2 font-bold rotate-6">
            POW!
          </div>
          <div className="absolute -bottom-6 -left-4 comic-border-sm bg-pop px-4 py-2 font-bold -rotate-6">
            Ship it!
          </div>
        </div>
      </div>
    </section>
  );
};
