import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:py-8">
        <Link to="/" className="font-serif text-xl font-semibold tracking-tight text-foreground md:text-2xl whitespace-nowrap">
          Medentra <span className="text-accent">Academy</span>
        </Link>
        <Link
          to="/book"
          className="group inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition hover:bg-primary/90 md:px-5 md:py-3"
        >
          <span className="hidden sm:inline">Book your free consultation</span>
          <span className="sm:hidden">Book a call</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </header>
  );
}