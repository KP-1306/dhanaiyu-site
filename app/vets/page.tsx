// app/vets/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Veterinary Clinics — DhanAIyu",
  description:
    "Run an on-time veterinary practice with live queue & ETA, vaccination reminders, multi-pet profiles, and emergency triage—powered by DhanAIyu.",
};

export default function VetsPage() {
  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">Run an on-time veterinary practice.</h1>
            <p className="sub">
              Live queue and smart arrival windows reduce lobby stress. Automated reminders for
              vaccinations, deworming, and follow-ups keep pet families on track.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="btn btn-primary">Get a Demo</a>
              <a href="/clinics" className="btn btn-ghost">For Human Clinics</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge border-teal-200">Vet Queue & ETA</span>
              <span className="badge border-amber-200">Vaccination Reminders</span>
              <span className="badge border-blue-200">Multi-Pet Profiles</span>
              <span className="badge border-rose-200">Emergency & Triage Mode</span>
            </div>
          </div>

          <div className="card overflow-hidden">
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/vets_hero.svg" // replace if you upload a PNG/JPG
                alt="DhanAIyu for Vets — queue, ETA, reminders, multi-pet profiles"
                fill
                className="object-cover md:object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE TILES */}
      <section className="section bg-slate-50">
        <div className="container grid md:grid-cols-4 gap-6">
          {[
            {
              t: "Smart Vet Queue & ETA",
              b: "Predictable turns reduce anxiety for pets and parents.",
            },
            {
              t: "Vaccination & Wellness Reminders",
              b: "Auto SMS/WhatsApp for due shots and checkups.",
            },
            {
              t: "Multi-Pet Family Profiles",
              b: "Manage all pets under one secure account.",
            },
            {
              t: "Emergency & Triage Mode",
              b: "Fair, fast prioritization for critical cases—with audit trail.",
            },
          ].map((c, i) => (
            <div key={i} className="card">
              <div className="text-lg font-semibold">{c.t}</div>
              <p className="mt-2 text-slate-600">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSIGHT BANNER */}
      <section className="section">
        <div className="container">
          <div className="card md:flex md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">Operational Insights</div>
              <p className="mt-1 text-slate-600">
                Live occupancy, predicted rush hours, and no-show risk help you staff right and run on time.
              </p>
            </div>
            <a href="/contact" className="btn btn-primary mt-6 md:mt-0">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* FAQ (optional, keeps it professional) */}
      <section className="section bg-slate-50">
        <div className="container grid md:grid-cols-2 gap-6">
          {[
            {
              q: "Does DhanAIyu work with walk-ins and online bookings?",
              a: "Yes. We merge both into a single fair queue with live ETA and alerts.",
            },
            {
              q: "Can we customize reminders by vaccine type?",
              a: "Absolutely. Set schedules for core vs. non-core vaccines and recurring wellness checks.",
            },
            {
              q: "Do you integrate with existing vet software?",
              a: "We provide APIs and can sync basics (appointments, statuses, reminders).",
            },
            {
              q: "Is pet data secure?",
              a: "Yes—data is encrypted, access-controlled, and built on compliance-first foundations.",
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <div className="font-semibold">{f.q}</div>
              <p className="mt-2 text-slate-600">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section">
        <div className="container text-center">
          <div className="h2">Ready to run calmer, on-time vet visits?</div>
          <p className="sub">Let’s set up your queue, reminders, and insights in a week.</p>
          <a href="/contact" className="btn btn-primary mt-6">Book a Demo</a>
        </div>
      </section>
    </div>
  );
}
