import { ComicButton } from "./ComicButton";
import { Calendar, Mail } from "lucide-react";

export const CTA = () => (
  <section id="contact" className="container mx-auto py-20">
    <div className="comic-border-lg p-8 md:p-14 bg-accent text-center relative overflow-hidden">
      <div className="absolute inset-0 halftone opacity-30 pointer-events-none" />
      <div className="relative">
        <span className="comic-border-sm bg-card px-3 py-1 text-sm font-bold inline-block mb-6">Let's talk</span>
        <h2 className="text-4xl md:text-6xl mb-4 max-w-3xl mx-auto leading-tight">
          Talk to Humphrey. Kick-start your journey.
        </h2>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl mx-auto">
          Our project manager Humphrey — calling in from the Himalayan mountains of Uttarakhand 🏔️ — is the first friendly human you'll meet. Bring the idea, the half-built MVP, or the scaling headache. We'll bring the experience.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <ComicButton variant="primary" size="lg" asChildHref="mailto:humphrey@startuplabs.dev?subject=Let's%20kick-start%20my%20startup">
            <Calendar className="mr-2 h-5 w-5" /> Talk to Humphrey
          </ComicButton>
          <ComicButton variant="ghost" size="lg" asChildHref="mailto:hello@startuplabs.dev">
            <Mail className="mr-2 h-5 w-5" /> hello@startuplabs.dev
          </ComicButton>
        </div>
      </div>
    </div>
  </section>
);
