import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Do you work with solo founders?", a: "Absolutely. Whether you're a solo founder with an idea or a funded team scaling up, we tailor scope and pricing to fit." },
  { q: "What tech stack do you use?", a: "We pick the right tool for the job — typically TypeScript, React, Node, Postgres and modern cloud infra. We optimize for low costs and easy maintenance." },
  { q: "Do you keep maintaining the product after launch?", a: "Yes. That's the whole point. We grow with our customers — fixing, improving, and shipping new features as you scale." },
  { q: "How fast can we start?", a: "Most projects kick off within a week of our first call. Book a slot and let's talk." },
];

export const FAQ = () => (
  <section id="faq" className="container mx-auto py-20">
    <div className="max-w-2xl mb-10">
      <span className="comic-border-sm bg-accent px-3 py-1 text-sm font-bold inline-block mb-4">FAQ</span>
      <h2 className="text-4xl md:text-5xl">Quick answers.</h2>
    </div>
    <div className="comic-border p-4 md:p-8 max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-lg font-bold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
