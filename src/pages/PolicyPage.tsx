import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";

interface Section { heading: string; body: string; }
interface PolicyData { eyebrow: string; title: string; subtitle: string; sections: Section[]; }

const policies: Record<string, PolicyData> = {
  privacy: {
    eyebrow: "Legal",
    title: "Privacy Policy",
    subtitle: "How we handle your data — in plain English.",
    sections: [
      { heading: "What we collect", body: "We collect the info you give us (name, email, project details) and basic analytics about how you use our site. That's it." },
      { heading: "How we use it", body: "Only to reply to you, run the project, and improve our service. We never sell your data." },
      { heading: "Where it lives", body: "On reputable cloud providers in encrypted form. Access is limited to the team members working on your project." },
      { heading: "Your rights", body: "You can ask us to delete or export your data anytime by emailing hello@startuplabs.dev." },
    ],
  },
  terms: {
    eyebrow: "Legal",
    title: "Terms of Service",
    subtitle: "The ground rules for working together.",
    sections: [
      { heading: "Scope of work", body: "Each engagement is defined in a separate Statement of Work. These Terms apply on top of it." },
      { heading: "Payment", body: "Invoices are issued at agreed milestones and due within 14 days. Ongoing maintenance is billed monthly." },
      { heading: "Ownership", body: "Once invoices are paid, all source code and assets created for you belong to you. We retain rights to our internal frameworks." },
      { heading: "Termination", body: "Either side can end the engagement with 14 days' notice. We hand over all work-in-progress." },
    ],
  },
  cookies: {
    eyebrow: "Legal",
    title: "Cookie Policy",
    subtitle: "What we store in your browser, and why.",
    sections: [
      { heading: "Essential cookies", body: "Required to make the site work (e.g., remembering your theme preference)." },
      { heading: "Analytics", body: "Privacy-friendly analytics to understand which pages help founders most. No third-party ad tracking." },
      { heading: "Your choice", body: "You can disable cookies in your browser settings. The site will still work." },
    ],
  },
  refund: {
    eyebrow: "Legal",
    title: "Refund Policy",
    subtitle: "Fair money, both ways.",
    sections: [
      { heading: "Discovery phase", body: "If after the discovery call we're not the right fit, you owe nothing." },
      { heading: "Milestones", body: "Each milestone has clear deliverables. If we miss them and can't fix it, the milestone fee is refunded." },
      { heading: "Maintenance", body: "Monthly retainers can be cancelled anytime — pro-rated refund for unused days." },
    ],
  },
  nda: {
    eyebrow: "Trust",
    title: "Mutual NDA",
    subtitle: "Your idea is safe with us. Sign on request.",
    sections: [
      { heading: "Confidential information", body: "Anything you share — code, designs, business plans, financials — is treated as strictly confidential." },
      { heading: "Our commitment", body: "We won't disclose, copy, or use your confidential info for anything other than your project." },
      { heading: "Term", body: "Confidentiality lasts 5 years from the date of signing, even after the engagement ends." },
      { heading: "Request a signed copy", body: "Email hello@startuplabs.dev and we'll send you a mutual NDA ready for e-signature." },
    ],
  },
  msa: {
    eyebrow: "Trust",
    title: "Master Services Agreement",
    subtitle: "The umbrella contract for ongoing work.",
    sections: [
      { heading: "Purpose", body: "An MSA sets the standard terms once, so each new project just needs a short Statement of Work." },
      { heading: "Liability", body: "Capped at fees paid in the previous 6 months — fair to both sides." },
      { heading: "IP & licensing", body: "Clear assignment of project IP to you, with a license back to us for our reusable components." },
      { heading: "Get a copy", body: "Available on request — email hello@startuplabs.dev." },
    ],
  },
  security: {
    eyebrow: "Trust",
    title: "Security & Data",
    subtitle: "How we keep your startup's data safe.",
    sections: [
      { heading: "Access control", body: "Least-privilege access. 2FA on every account. Quarterly access reviews." },
      { heading: "Code & secrets", body: "Secrets stored in managed vaults, never in repos. All code reviewed before merge." },
      { heading: "Backups", body: "Automated daily backups with point-in-time recovery for production databases." },
      { heading: "Incidents", body: "Any security incident affecting your data is reported within 24 hours with a full post-mortem." },
    ],
  },
  sla: {
    eyebrow: "Trust",
    title: "Support SLA",
    subtitle: "What you can expect when something breaks.",
    sections: [
      { heading: "Critical issues", body: "Production down: response within 1 hour, work continues until resolved." },
      { heading: "High priority", body: "Major feature broken: response within 4 business hours, fix within 1 business day." },
      { heading: "Standard", body: "Bugs and improvements: response within 1 business day, scheduled in the next sprint." },
      { heading: "Channels", body: "Email, shared Slack channel, or your preferred chat tool — whatever your team already uses." },
    ],
  },
};

const PolicyPage = ({ slug }: { slug: keyof typeof policies }) => {
  const p = policies[slug];
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle} />
        <section className="container mx-auto pb-20">
          <div className="max-w-3xl mx-auto comic-border p-6 md:p-10 bg-card space-y-6">
            <p className="text-sm text-muted-foreground">Last updated: April 2026</p>
            {p.sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold mb-2">{s.heading}</h2>
                <p className="text-muted-foreground">{s.body}</p>
              </div>
            ))}
            <p className="text-sm text-muted-foreground border-t-[3px] border-foreground pt-4">
              Questions? Email <a href="mailto:hello@startuplabs.dev" className="underline">hello@startuplabs.dev</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PolicyPage;
