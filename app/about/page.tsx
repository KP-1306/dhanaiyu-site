// app/about/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About DhanAIyu | Time Is Medicine",
  description:
    "DhanAIyu is building humane healthcare software: AI wait‑time intelligence, transparent queues, and unified workflows for clinics, hospitals, and veterinary care.",
};

const values = [
  {
    title: "AI with Empathy",
    body:
      "Technology should remove friction, not humanity. Our models support decisions; people stay in control.",
  },
  {
    title: "Time as Care",
    body:
      "We treat a saved minute like a saved cost and a restored dignity. Waiting is a solvable pain.",
  },
  {
    title: "Trust by Design",
    body:
      "Privacy, security, and clear consent are defaults—not addons. We meet DPDP, GDPR (where applicable), and HIPAA principles.",
  },
  {
    title: "Ship the Useful",
    body:
      "We deliver pragmatic, clinic‑tested features over vanity dashboards. Measurable outcomes win.",
  },
];

const milestones = [
  {
    year: "2024",
    title: "The Question",
    body:
      "Could clinics see waiting time as clearly as a patient’s name on the board? DhanAIyu begins as a time‑intelligence prototype.",
  },
  {
    year: "2025",
    title: "Pilot & Proof",
    body:
      "Queue predictions, vaccination reminders, and emergency fast‑track tested in live clinics and a veterinary practice.",
  },
  {
    year: "2026",
    title: "Platform", 
    body:
      "Unified scheduling, patient updates, and clinic dashboards become a cohesive operating layer for care teams.",
  },
];

const team = [
  { name: "Kamal Bisht", role: "Co‑Founder / Product", img: "/team_kamal.png" },
  { name: "Arti Bisht", role: "Co‑Founder / Ops", img: "/team_arti.png" },
  { name: "Advisors", role: "Clinical & Data", img: "/team_advisors.png" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -right-10 h-72 w-72 rounded-full bg-blue-100 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-emerald-100 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-10 md:pt-24 md:pb-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500" /> Our Story
              </span>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                Time Is Medicine.
              </h1>
              <p className="mt-4 text-slate-600 md:text-lg">
                We build AI that gives time back to patients and care teams—
                by predicting delays, clarifying queues, and orchestrating smooth visits across clinics and veterinary practices.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:opacity-90">
                  Talk to Us
                </Link>
                <Link href="/petcare" className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-slate-900 transition hover:bg-slate-50">
                  See PetCare →
                </Link>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[520px]">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                <Image
                  src="/one_dashboard.png"
                  alt="DhanAIyu dashboards"
                  fill
                  sizes="(max-width:768px) 100vw, 520px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM / SPARK / SOLUTION */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">The Problem</h3>
            <p className="mt-2 text-slate-600">
              Healthcare runs on compassion but breaks under queues, delays, and uncertainty. Patients wait. Doctors rush. No one truly knows when a turn will come.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">The Spark</h3>
            <p className="mt-2 text-slate-600">
              We asked: What if waiting time was visible and predictable like a schedule? Our founders saw families losing hours—not just minutes—and decided time should be returned.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">The Solution</h3>
            <p className="mt-2 text-slate-600">
              DhanAIyu’s wait‑time engine learns clinic rhythms, traffic, and appointment patterns to forecast delays and orchestrate smooth, transparent visits.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="mx-auto max-w-6xl px-4 pb-8 md:pb-20">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Principles we build by</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-slate-600">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PHILOSOPHY CALLOUT */}
      <section className="mx-auto max-w-6xl px-4 pb-8 md:pb-20">
        <div className="rounded-2xl bg-slate-900 px-6 py-10 text-white md:px-10">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">AI with Empathy</h3>
              <p className="mt-2 text-slate-300">
                Predictions help; people decide. We design for transparency, consent, and control so clinics and pet parents always know what’s next.
              </p>
            </div>
            <div className="relative h-56 w-full md:h-48">
              <Image
                src="/predict_delay.png"
                alt="Predict delays"
                fill
                sizes="(max-width:768px) 100vw, 480px"
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES / TIMELINE */}
      <section className="mx-auto max-w-6xl px-4 pb-8 md:pb-20">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Milestones</h2>
        <ol className="mt-6 space-y-4 border-l border-slate-200 pl-6">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[9px] top-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="text-xs font-medium uppercase tracking-wide text-slate-500">{m.year}</div>
                <div className="mt-1 text-base font-semibold text-slate-900">{m.title}</div>
                <p className="mt-1 text-slate-600">{m.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-6xl px-4 pb-8 md:pb-20">
        <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Team</h2>
        <p className="mt-2 max-w-2xl text-slate-600">
          A small, focused group shipping useful software. Advisors include clinicians and data leaders across care settings.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {team.map((t) => (
            <div key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-slate-200 bg-slate-50">
                <Image src={t.img} alt={t.name} width={112} height={112} className="object-cover" />
              </div>
              <div className="mt-3 text-base font-semibold text-slate-900">{t.name}</div>
              <div className="text-sm text-slate-600">{t.role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-semibold text-slate-900 md:text-3xl">Never wait to be cared for.</h3>
              <p className="mt-2 text-slate-600">
                Go live with queue transparency, realistic waiting windows, and modern patient updates.
              </p>
            </div>
            <div className="md:text-right">
              <Link href="/contact" className="inline-flex items-center rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:opacity-90">
                Request a demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
