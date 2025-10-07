// app/vets/page.tsx
import Image from "next/image";
export const metadata = {
  title: "Veterinary Clinics — DhanAIyu",
  description:
    "Run an on-time veterinary practice with live queue & ETA, vaccination reminders, multi-pet profiles, and emergency triage.",
};

export default function VetsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">Run an on-time veterinary practice.</h1>
            <p className="sub">
              Live queue and smart arrival windows reduce lobby stress. Automated reminders for
              vaccinations, deworming, and follow-ups keep pet families on track.
            </p>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="btn btn-primary">Talk to Us</a>
              <a href="/clinics" className="btn btn-ghost">For Human Clinics</a>
            </div>
          </div>

          <div className="card overflow-hidden">
            {/* Replace /vets_hero.png with your uploaded image in /public */}
            <div className="relative w-full aspect-[16/9]">
              <Image
                src="/vets_hero.png"
                alt="DhanAIyu for Vets — Queue, ETA, Reminders"
                fill
                className="object-cover md:object-contain rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Four tiles */}
      <section className="section bg-slate-50">
        <div className="container grid md:grid-cols-4 gap-6">
          {[
            {t:'Smart Vet Queue & ETA', b:'Predictable turns reduce anxiety for pets and parents.'},
            {t:'Vaccination & Wellness Reminders', b:'Auto SMS/WhatsApp for due shots and checkups.'},
            {t:'Multi-Pet Family Profiles', b:'Manage all pets under one secure account.'},
            {t:'Emergency & Triage Mode', b:'Fair, fast prioritization for critical cases—with audit.'},
          ].map((c,i)=>(
            <div key={i} className="card">
              <div className="text-lg font-semibold">{c.t}</div>
              <p className="mt-2 text-slate-600">{c.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Insight banner */}
      <section className="section">
        <div className="container">
          <div className="card md:flex md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold">Operational Insights</div>
              <p className="mt-1 text-slate-600">
                Live occupancy, predicted rush hours, and no-show risk help you staff right and run on time.
              </p>
            </div>
            <a href="/contact" className="btn btn-primary mt-6 md:mt-0">Get a Demo</a>
          </div>
        </div>
      </section>
    </div>
  );
}
