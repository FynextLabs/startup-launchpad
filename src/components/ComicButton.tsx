import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "accent" | "pop" | "ghost";

interface ComicButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  asChildHref?: string;
  size?: "md" | "lg";
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  accent: "bg-accent text-accent-foreground",
  pop: "bg-pop text-pop-foreground",
  ghost: "bg-card text-foreground",
};

export const ComicButton = forwardRef<HTMLButtonElement, ComicButtonProps>(
  ({ className, variant = "primary", size = "md", asChildHref, children, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center font-bold rounded-2xl border-[3px] border-foreground transition-transform duration-150",
      "shadow-comic hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-comic-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-comic-sm",
      size === "lg" ? "px-7 py-4 text-lg" : "px-5 py-3 text-base",
      variantClasses[variant],
      className,
    );

    if (asChildHref) {
      return (
        <a href={asChildHref} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  },
);
ComicButton.displayName = "ComicButton";
