import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Target, LineChart, BookOpenCheck, ShieldCheck, Star, Users } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { useEffect, useState } from "react";
import { BarRisesChart } from "@/components/BarRisesChart";
import { CalendlyEmbed } from "@/components/CalendlyEmbed";

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
        <span>Book a free call</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>



      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-20">
        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="inline-block rounded-full border border-primary/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">
            Medicine &middot; Dentistry &middot; UK Applicants
          </span>
          <h1 className="mx-auto mt-8 max-w-5xl text-balance font-serif text-5xl font-bold leading-[1.08] text-foreground md:text-7xl lg:text-[5.25rem]">
            Guaranteed admission to{" "}
            <span className="italic font-normal">your</span> medical or dental school.
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-pretty text-lg font-light leading-relaxed text-foreground/80 md:text-xl">
            1:1 coaching for ambitious students to secure UK offers within 5–8
            months via the Future Doctor Framework. Protected by our{" "}
            <span className="font-semibold text-foreground">no-admission, no-fee guarantee.</span>
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-8">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 bg-primary px-10 py-5 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors duration-300 hover:bg-foreground"
            >
              <span>Book a free diagnostic call</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <p className="text-xs font-medium tracking-tight text-primary">
              30 minutes &middot; No obligation &middot; Parents welcome
            </p>
          </div>
        </div>
      </section>

      {/* Bento proof grid */}
      <section className="pb-24 md:pb-32">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 px-6 md:grid-cols-12">
          {/* Framework */}
          <div className="flex min-h-[320px] flex-col justify-between bg-secondary p-10 md:col-span-7 lg:col-span-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                The Method
              </span>
              <h3 className="mt-4 font-serif text-3xl leading-tight text-foreground">
                Future Doctor Framework
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/75">
                A systematic four-pillar approach covering clinical aptitude,
                interview mastery, personal statement craft and weekly academic
                strategy, built around each student.
              </p>
            </div>
            <div className="mt-8 flex items-center">
              <div className="h-px w-12 bg-[#a8c0a0]" />
              <span className="ml-4 text-xs font-semibold tracking-widest text-foreground/80">
                STRUCTURED · PERSONAL · ACCOUNTABLE
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col items-center justify-center bg-foreground p-10 text-center text-background md:col-span-5 lg:col-span-4">
            <div className="font-serif text-6xl font-bold">100%</div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">
              Interview Success Rate
            </div>
            <div className="my-6 h-px w-full bg-background/20" />
            <div className="font-serif text-4xl font-bold">3+ yrs</div>
            <div className="text-xs font-medium uppercase tracking-[0.2em] opacity-60">
              Coaching Experience
            </div>
          </div>

          {/* Testimonial */}
          <div className="border border-secondary bg-card p-8 md:col-span-5">
            <div className="mb-6 flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" strokeWidth={0} />
              ))}
            </div>
            <p className="mb-8 font-serif text-lg italic leading-relaxed text-foreground">
              "The support was unparalleled. Medentra turned what felt like an
              impossible hurdle into a structured, manageable path to my
              first-choice school."
            </p>
            <div className="text-sm font-semibold text-foreground">Younis A.</div>
            <div className="mt-1 text-[10px] uppercase tracking-widest text-primary">
              Cardiff University · Medicine Offer Holder
            </div>
          </div>

          {/* Who it's for */}
          <div className="border border-[#a8c0a0] bg-background p-8 md:col-span-4">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Users className="h-4 w-4" strokeWidth={1.75} />
              <h4 className="text-xs font-bold uppercase tracking-[0.2em]">
                For Whom
              </h4>
            </div>
            <ul className="space-y-3 text-sm text-foreground/85">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" /> Year 12 &amp; 13 UK Students
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" /> Graduate Entry Applicants
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" /> Parents of Aspiring Medics
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-primary" /> International Applicants
              </li>
            </ul>
          </div>

          {/* Guarantee */}
          <div className="flex flex-col items-center justify-center bg-[#a8c0a0] p-8 text-center text-foreground md:col-span-3">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-foreground/20">
              <ShieldCheck className="h-7 w-7" strokeWidth={1.5} />
            </div>
            <div className="text-sm font-bold uppercase tracking-widest">
              No Admission, No Fee
            </div>
          </div>

          {/* Closing CTA tile */}
          <Link
            to="/book"
            className="group col-span-1 flex flex-col items-start justify-between gap-6 bg-primary p-10 text-primary-foreground transition-colors hover:bg-foreground md:col-span-12 md:flex-row md:items-center"
          >
            <div>
              <h3 className="font-serif text-3xl">Ready to start your journey?</h3>
              <p className="mt-2 opacity-80">
                See if you're a fit for the next cohort.
              </p>
            </div>
            <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-widest">
              Schedule Diagnostics
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
            </div>
          </Link>
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
                body: "Scores, accuracy and timing are logged after every session. Parents get a clear monthly summary; you see exactly how far the next jump needs to go. Students also recieve 24/7 support from me personally",
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
            "UK medical and dental applications assess you on grades, aptitude tests, a personal statement, and interview performance all simultaneously. Every element needs to be built steadily, not rushed."
          </blockquote>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/60 py-24 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Testimonials
            </h2>
            <p className="mt-4 text-muted-foreground">
              Real results from students I've coached through their applications.
            </p>
          </div>

          <div
            className="relative mx-auto mt-14 max-w-2xl snap-y snap-mandatory space-y-5 overflow-y-auto pr-3"
            style={{ height: "560px", scrollbarGutter: "stable" }}
          >
            {[
              {
                quote: "I was struggling with the unqiue style of interviews at Cardiff but Shayan Organised a personalised structured plan for me to win an admission",
                name: "Younis A.",
                achievement: "Offer holder · Cardiff University (Medicine)",
                bg: "bg-secondary",
              },
              {
                quote: "The interview questions were extremely similar to the real thing. Really grateful since Manchester was my only interview offer.",
                name: "Aafan A.\u00a0",
                achievement: "Offer holder · University of Manchester (Denstistry)",
                bg: "bg-[#ece7de]",
              },
              {
                quote: "Shayans style of tutoring paired with accountability and a weekly system kept me from going astray.",
                name: "Anish",
                achievement: "GCSE's Achieved · All As and A*s",
                bg: "bg-card",
              },
              {
                quote: "Honestly the best decision my parents made. The structure made A Level chemistry click in a way nothing else did.",
                name: "Eleanor M.",
                achievement: "Offer holder · University of Bristol (Dentistry)",
                bg: "bg-[#ece7de]",
              },
              {
                quote: "Shayan for sure helped me a lot, I knew exactly what to do each week and it showed in my results. I really appreciate what hes done for me.",
                name: "Maneesh P",
                achievement: "A Levels Acheived · A* achieved\u00a0",
                bg: "bg-card",
              },
            ].map((t, i) => (
              <figure
                key={i}
                className={`${t.bg} snap-start rounded-2xl border border-border/40 p-8 shadow-sm md:p-10`}
              >
                <blockquote className="font-serif text-lg leading-relaxed text-foreground md:text-xl">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-sm text-foreground/70">
                  <span className="font-medium text-foreground">{t.name}</span>
                  <span className="mx-2">·</span>
                  <span>{t.achievement}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Scroll within the panel to see more
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      {/* The bar rises */}
      <section className="border-t border-border/60 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-balance text-center text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            The Bar Rises
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-muted-foreground">
            Mean UCAT scores of University of Manchester Dentistry applicants and shortlisted offer holders, 2021–2025 entry.
          </p>
          <div className="mt-10 w-full rounded-2xl border border-border/60 bg-card p-4 md:p-6">
            <BarRisesChart />
          </div>
          <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-border/60 bg-muted/30 p-6 text-base leading-relaxed text-foreground/80 md:p-8">
            <p>
              Each year the average UCAT score of Manchester Dental offer holders climbs by a significant margin. The UCAT itself is not getting harder, the bar is. Applicants are revising smarter, longer and with better resources and the cut-off shifts upward in lockstep.
            </p>
            <p className="mt-4">
              Without a structured revision plan and a framework outlining daily targets, the gap between effort and outcomes increases exponentially. Applicants without a system get swept under the rug by universities, no matter how many hours they put in.
            </p>
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
            A no-pressure 30-minute chat about your child's A-Level Maths journey. We'll take a look at how they're revising, what resources they're using, and where they're finding it tough. Then build a clear picture of the road ahead and what is needed to land them an admission to medical or dental school.&nbsp;If we're a fit, we move forward. If not, you walk away with a clearer plan and no obligation.
          </p>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <CalendlyEmbed height={700} />
          </div>
          <Link
            to="/book"
            className="group mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-4 text-base font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
          >
            <span>Book a free diagnostics call&nbsp;</span>
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
