interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ eyebrow, title, subtitle }: Props) => (
  <section className="container mx-auto py-16 md:py-20 text-center">
    <span className="comic-border-sm bg-accent px-3 py-1 text-sm font-bold inline-block mb-4">{eyebrow}</span>
    <h1 className="text-4xl md:text-6xl mb-4 max-w-3xl mx-auto leading-tight">{title}</h1>
    {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
  </section>
);
