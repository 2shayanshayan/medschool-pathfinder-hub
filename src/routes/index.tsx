import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, LineChart, BookOpenCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ascend Admissions — 1:1 Tutoring for Medical & Dental School Applicants" },
      { name: "description", content: "Specialist UCAT, BMAT and interview coaching for ambitious medical and dental school applicants. Structured revision, targeted weak-point work, and weekly progress tracking." },
      { property: "og:title", content: "Ascend Admissions — Medical & Dental School Tutoring" },
      { property: "og:description", content: "Specialist 1:1 coaching that turns ambitious applicants into med and dental school offer-holders." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-32">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full opacity-60 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.78 0.12 35 / 0.45), transparent)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Medicine &middot; Dentistry &middot; UK Applicants
          </p>
          <h1 className="text-balance text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl">
            An offer from <em className="font-serif italic text-accent">your</em> medical
            or dental school. Earned, not hoped for.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            1:1 coaching for Year 12 and Year 13 applicants — UCAT, personal
            statement, interview, and the long game in between. Built around
            you, measured every week.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
            >
              Book your free consultation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            30 minutes &middot; No obligation &middot; Parents welcome
          </p>
        </div>
      </section>

      {/* Approach */}
      <section className="relative border-t border-border/60 bg-background/60 py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              The approach
            </p>
            <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              A system, not a stack of past papers.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Three principles run through every session. Together they turn an
              uncertain timeline into a predictable one.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: BookOpenCheck,
                num: "01",
                title: "Structured revision",
                body: "A weekly plan that sequences UCAT, school content and admissions tasks so nothing competes for the same hour. You always know what to do next.",
              },
              {
                icon: Target,
                num: "02",
                title: "Weak-point targeting",
                body: "Diagnostics surface the questions and topics costing you marks. Each session attacks the highest-leverage gap — not whatever felt comfortable to revise.",
              },
              {
                icon: LineChart,
                num: "03",
                title: "Progress tracking",
                body: "Scores, accuracy and timing are logged after every session. Parents get a clear monthly summary; you see exactly how far the next jump needs to go.",
              },
            ].map(({ icon: Icon, num, title, body }) => (
              <div
                key={num}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition hover:border-foreground/20 hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                  <span className="font-serif text-3xl text-muted-foreground/50">
                    {num}
                  </span>
                </div>
                <h3 className="mt-8 font-serif text-2xl font-semibold text-card-foreground">
                  {title}
                </h3>
                <p className="mt-3 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border/60 py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Find out if we're the right fit.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            A short, honest call. We'll talk through your current position,
            your target schools, and whether 1:1 coaching is worth your time.
          </p>
          <Link
            to="/book"
            className="group mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            Book your free consultation
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Ascend Admissions</p>
          <p>Independent tutoring &middot; Not affiliated with any university</p>
        </div>
      </footer>
    </div>
  );
}
