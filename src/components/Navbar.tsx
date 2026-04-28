import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ComicButton } from "./ComicButton";

const links = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#story", label: "Our Story" },
  { href: "#faq", label: "FAQ" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b-[3px] border-foreground">
      <nav className="container mx-auto flex items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border-[3px] border-foreground bg-accent shadow-comic-sm font-bold">SL</span>
          <span className="font-bold text-lg">Startup Labs</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="font-medium hover:text-primary transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <ComicButton variant="primary" asChildHref="#contact">Schedule a call</ComicButton>
        </div>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border-[3px] border-foreground bg-card shadow-comic-sm"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t-[3px] border-foreground bg-background">
          <ul className="container mx-auto py-4 flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-2 font-medium">{l.label}</a>
              </li>
            ))}
            <li>
              <ComicButton variant="primary" asChildHref="#contact" className="w-full">Schedule a call</ComicButton>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
