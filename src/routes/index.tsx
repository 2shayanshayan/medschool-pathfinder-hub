import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, LineChart, BookOpenCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medentra Academy — 1:1 Tutoring for Medical & Dental School Applicants" },
      { name: "description", content: "Specialist UCAT, BMAT and interview coaching for ambitious medical and dental school applicants. Structured revision, targeted weak-point work, and weekly progress tracking." },
      { property: "og:title", content: "Medentra Academy — Medical & Dental School Tutoring" },
      { property: "og:description", content: "Specialist 1:1 coaching that turns ambitious applicants into med and dental school offer-holders." },
    ],
  }),
  component: Index,
});

function Index() {
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowStickyCta(window.scrollY > 500);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <SiteHeader />

      <Link
        to="/book"
        aria-label="Book a call"
        className={`group fixed right-4 top-4 z-50 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg transition-all duration-300 hover:bg-primary/90 md:right-6 md:top-6 md:px-5 md:py-3 ${
          showStickyCta
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        <span>Book a call</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>



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
          <h1 className="text-balance text-5xl font-bold leading-[1.05] text-foreground md:text-7xl">
            <span className="text-accent">Admission</span> to your&nbsp;medical or dental school.<br />
            Within 4-6 months.<br />
            Guarenteed.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            1:1 coaching for aspiring doctors and dentists to win admissions to UK
            medical and dental schools within 4-6 months through our proven Future
            Doctor Framework. All Protected through our no admission, no fee
            guarantee
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
            >
              <span>Book a call&nbsp;</span>
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
              THE FUTURE DOCTOR FRAMEWORK
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
                body: "A weekly plan that sequences UCAT, school content and admissions tasks so nothing competes for the same hour. You always know what to do next and are held accountable by weekly 1-1 calls.\u00a0",
              },
              {
                icon: Target,
                num: "02",
                title: "Weak-point targeting",
                body: "Diagnostics surface the questions and topics costing you marks. Each session attacks the highest-leverage gap, not whatever felt comfortable to revise.",
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

      {/* About Me */}
      <section className="border-t border-border/60 py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              About Me
            </h2>
          </div>

          <div className="mt-16 grid items-start gap-10 md:grid-cols-[340px_1fr] lg:grid-cols-[380px_1fr]">
            <div className="overflow-hidden rounded-2xl border border-border">
              <img
                src="/about-me-photo.jpg"
                alt="Shayan Ali"
                className="h-auto w-full object-cover"
              />
            </div>
            <div className="md:pl-6 lg:pl-8">
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
                Shayan Ali
              </h3>
              <div className="mt-6 space-y-3 text-muted-foreground leading-[1.65] text-justify">
                <p>
                  &nbsp; &nbsp;I'm a dental student at University of Manchester and achieved a top percentile score in my UCAT alongside all As and A*s in GCSEs and A Levels. For the past 3 years I have been walking students through the Medical and Dental admissions process and coaching them through GCSEs and A levels.&nbsp;
                </p>
                <p>
                  &nbsp;&nbsp;
                </p>
                <p>
                  &nbsp; &nbsp;I built Medentra Academy after witnessing multiple family friends fail to get admission into medical school in the UK despite spending thousands on tuition and taking multiple gap years. This happens every year with 90% of dental applicants not getting in first time round. This programme is in place to stop this from happening to you.&nbsp;
                </p>
                <p>
                  &nbsp; &nbsp;
                </p>
                <p>
                  &nbsp; This programme leverages one core principle: The admissions process punishes students who don't have a structured revision framework. My programme implements personalised weekly action points for each and every student to ensure high UCAT scores, A level grades and smashing interviews becomes routine.
                </p>
              </div>
            </div>
          </div>

          <blockquote className="mx-auto mt-16 max-w-3xl text-center text-lg italic text-muted-foreground">
            "UK medical and dental applications assess you on grades, aptitude tests, a personal statement, and interview performance — all simultaneously. Every element needs to be built steadily, not rushed."
          </blockquote>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-border/60 py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-balance text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Find out if we're the right fit.
          </h2>
        </div>
      </section>
    </div>
  );
}
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            A zero commitment, 30-minute conversation about your child's current
            position. We'll go over their current revision strategy, the
            resources they use, and where they're struggling. Then we'll map out
            exactly what needs to happen to land the result. If we're a fit, we
            move forward. If not, you walk away with a clearer plan and no
            obligation
          </p>
          <Link
            to="/book"
            className="group mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            <span>Book a call&nbsp;</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
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
