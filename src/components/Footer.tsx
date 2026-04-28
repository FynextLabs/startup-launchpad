import { Link } from "react-router-dom";

const cols = [
  {
    title: "Company",
    links: [
      { to: "/story", label: "Our Story" },
      { to: "/team", label: "Team" },
      { to: "/services", label: "Services" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy Policy" },
      { to: "/terms", label: "Terms of Service" },
      { to: "/cookies", label: "Cookie Policy" },
      { to: "/refund", label: "Refund Policy" },
    ],
  },
  {
    title: "Trust",
    links: [
      { to: "/nda", label: "NDA Agreement" },
      { to: "/msa", label: "Master Services Agreement" },
      { to: "/security", label: "Security & Data" },
      { to: "/sla", label: "Support SLA" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t-[3px] border-foreground bg-muted">
    <div className="container mx-auto py-14">
      <div className="grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-[3px] border-foreground bg-accent shadow-comic-sm font-bold">SL</span>
            <span className="font-bold">Startup Labs</span>
          </Link>
          <p className="text-sm text-muted-foreground max-w-xs">
            A small remote crew building startups with founders — from idea to launch and well beyond.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-bold mb-3">{c.title}</h4>
            <ul className="space-y-2">
              {c.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-10 pt-6 border-t-[3px] border-foreground flex flex-col md:flex-row gap-3 items-center justify-between">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} startuplabs.dev — Built remotely, with love.</p>
        <p className="text-sm text-muted-foreground">hello@startuplabs.dev</p>
      </div>
    </div>
  </footer>
);
