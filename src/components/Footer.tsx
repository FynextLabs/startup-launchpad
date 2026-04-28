export const Footer = () => (
  <footer className="border-t-[3px] border-foreground bg-muted">
    <div className="container mx-auto py-10 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border-[3px] border-foreground bg-accent shadow-comic-sm font-bold">SL</span>
        <span className="font-bold">Startup Labs</span>
      </div>
      <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} startuplabs.dev — Built remotely, with love.</p>
    </div>
  </footer>
);
