import { createFileRoute } from "@tanstack/react-router";
import {
  Activity,
  CheckCircle,
  ClipboardList,
  MessageCircle,
  Phone,
  Repeat,
  Target,
  TrendingUp,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";

export const Route = createFileRoute("/pitch-x9k2m7-hq")({
  head: () => ({
    meta: [
      { title: "Student HQ, Medentra Academy" },
      { name: "robots", content: "noindex, nofollow, noarchive, nosnippet" },
      { name: "description", content: "Private overview of how we track student progress and assign work." },
    ],
  }),
  component: PitchPage,
});

function PitchPage() {
  return (
    <div className="relative min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative pt-32 pb-12 md:pt-44 md:pb-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-accent">
            Inside the coaching system
          </p>
          <h1 className="text-balance text-4xl font-semibold leading-[1.1] text-foreground md:text-6xl">
            Student HQ.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            A single hub where every student's progress, weak areas, and weekly
            plan live, so nothing drifts and no week is wasted.
          </p>
        </div>
      </section>

      {/* Diagram */}
      <section className="px-6">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-8 shadow-sm md:p-12">
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-accent">
            The weekly loop
          </p>
          <div className="grid gap-4 md:grid-cols-5">
            {[
              { icon: Activity, label: "Track", body: "Scores logged by section, topic, and question type." },
              { icon: Target, label: "Diagnose", body: "Weak areas surface automatically, no guessing." },
              { icon: ClipboardList, label: "Assign", body: "Targeted work matched to the exact gap." },
              { icon: Repeat, label: "Review", body: "Re-test, re-score, repeat. The loop tightens each week." },
              { icon: CheckCircle, label: "Accountability", body: "Students know exactly where they stand and what they owe next week." },
            ].map(({ icon: Icon, label, body }, i) => (
              <div key={label} className="relative rounded-xl border border-border bg-background p-5">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-serif text-lg font-semibold text-card-foreground">
                  {label}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How progress is tracked */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                How progress is tracked
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                Every score, broken down, never just a number.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Mocks and practice sets are logged section by section. We don't
                just see <em>"Verbal Reasoning: 650"</em>, we see which
                question types are dragging the score down, how timing is
                holding up under pressure, and how the trend is moving week to
                week.
              </p>
              <ul className="mt-6 space-y-3 text-muted-foreground">
                <li className="flex gap-3"><TrendingUp className="mt-1 h-4 w-4 flex-shrink-0 text-accent" /> Section-level scores tracked over time</li>
                <li className="flex gap-3"><TrendingUp className="mt-1 h-4 w-4 flex-shrink-0 text-accent" /> Weak question types flagged automatically</li>
                <li className="flex gap-3"><TrendingUp className="mt-1 h-4 w-4 flex-shrink-0 text-accent" /> Timing and accuracy treated as separate problems</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-7 shadow-sm">
              <div className="space-y-4">
                {[
                  { name: "Verbal Reasoning", val: 72, color: "bg-accent" },
                  { name: "Decision Making", val: 86, color: "bg-accent" },
                  { name: "Quantitative", val: 64, color: "bg-accent/70" },
                  { name: "Situational Judgement", val: 91, color: "bg-accent" },
                ].map((row) => (
                  <div key={row.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-card-foreground">{row.name}</span>
                      <span className="font-medium text-muted-foreground">{row.val}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                      <div className={`h-full ${row.color}`} style={{ width: `${row.val}%` }} />
                    </div>
                  </div>
                ))}
                <p className="pt-3 text-xs text-muted-foreground">
                  Illustrative, actual dashboards stay private to each student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How work is assigned */}
      <section className="border-t border-border/60 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              How work is assigned
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              The plan changes when the data does.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              No generic "do 50 questions a day." Every week's task list is
              built around the gaps that surfaced in the last review.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Targeted, not generic", body: "If timing is the issue in DM, the week's work is timed drills, not more theory." },
              { icon: ClipboardList, title: "A clear weekly list", body: "Students know on Monday exactly what to do, in what order, by Sunday." },
              { icon: Repeat, title: "Always re-evaluated", body: "Last week's gaps either close or stay, and that decides next week's focus." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review cadence */}
      <section className="border-t border-border/60 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1 rounded-2xl border border-border bg-card p-7 shadow-sm">
              <ul className="space-y-5">
                {[
                  { day: "Mon", title: "Weekly plan drops", body: "Tailored task list lands in Student HQ." },
                  { day: "Wed", title: "Mid-week check-in", body: "Quick async message, anything stuck?" },
                  { day: "Sat", title: "Scored mock or set", body: "Logged and broken down by section." },
                  { day: "Sun", title: "1:1 review call", body: "Walk through results, set next week's focus." },
                ].map((row) => (
                  <li key={row.day} className="flex gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-accent/10 text-xs font-semibold uppercase tracking-wider text-accent">
                      {row.day}
                    </div>
                    <div>
                      <p className="font-medium text-card-foreground">{row.title}</p>
                      <p className="text-sm text-muted-foreground">{row.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
                Review cadence
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
                A consistent rhythm, not waiting for the next call to course-correct.
              </h2>
              <p className="mt-5 text-muted-foreground">
                Students hear from us through the week, not just on call day.
                Small adjustments happen quickly, so a bad mock on Tuesday
                doesn't waste the rest of the week.
              </p>
              <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-muted/40 p-4">
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-accent" />
                <p className="text-sm text-muted-foreground">
                  Parents get a short progress note each week so you're never
                  guessing how things are going.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Parent involvement */}
      <section className="border-t border-border/60 py-20 md:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-accent">
              Parent involvement
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
              Parents stay in the loop, monthly and weekly.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              You don't need to chase me for updates. The weekly progress note
              keeps you informed, and a monthly call gives us space to talk
              through what is working, what is next, and any questions you have.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {[
              { icon: MessageCircle, title: "Weekly progress note", body: "A short, plain-English summary of the week: what was completed, what improved, and what the next week targets." },
              { icon: Phone, title: "Monthly parent call", body: "A dedicated call with me to review the bigger picture, adjust goals, and answer questions, not just a routine check-in." },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-2xl border border-border bg-card p-7">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h3 className="mt-6 font-serif text-xl font-semibold text-card-foreground">{title}</h3>
                <p className="mt-2 text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-sm text-muted-foreground md:flex-row">
          <p>&copy; {new Date().getFullYear()} Medentra Academy</p>
          <p>Private overview &middot; Not linked from the public site</p>
        </div>
      </footer>
    </div>
  );
}
