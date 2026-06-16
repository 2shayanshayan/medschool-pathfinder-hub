import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowLeft, Clock, MessageSquare, MapIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

// TODO: Replace with your real Calendly URL
const CALENDLY_URL = "https://calendly.com/shayanali41256/30min";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book your free consultation — Ascend Admissions" },
      { name: "description", content: "Schedule a free 30-minute consultation to discuss your medical or dental school application and decide if 1:1 coaching is right for you." },
      { property: "og:title", content: "Book your free consultation — Ascend Admissions" },
      { property: "og:description", content: "A no-obligation 30-minute call to plan your route into medicine or dentistry." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <SiteHeader />

      <section className="relative pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            A relaxed 30-minute conversation about your child's current position.
            We'll go over their current revision strategy, the resources they
            use, and where they're struggling. Then we'll map out exactly what
            needs to happen to land the result. If we're a fit, we move forward.
            If not, you walk away with a clearer plan and no obligation
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-foreground md:text-6xl">
            Let's map out your route in.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Pick a time that works for you. We'll meet on Zoom — students and
            parents are both welcome on the call.
          </p>
        </div>
      </section>

      {/* Calendly embed */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div
            className="calendly-inline-widget"
            data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=1f2a44`}
            style={{ minWidth: "320px", height: "720px" }}
          />
        </div>
      </section>

      {/* What to expect */}
      <section className="border-t border-border/60 mt-24 py-24 md:py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              What to expect
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              An honest conversation.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              The call exists so you can decide whether working together makes
              sense. Here's what we'll cover.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Where you are now",
                body: "Current UCAT/BMAT scores, predicted grades, target schools, and what you've already tried.",
              },
              {
                icon: MapIcon,
                title: "Where you need to be",
                body: "A realistic look at the gap to your target offers and the timeline you've got left to close it.",
              },
              {
                icon: MessageSquare,
                title: "Whether we're a fit",
                body: "If coaching makes sense, we'll outline a plan. If it doesn't, we'll tell you that too.",
              },
            ].map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-card p-7"
              >
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Medentra Academy</p>
          <p>Independent tutoring &middot; Not affiliated with any university</p>
        </div>
      </footer>
    </div>
  );
}