// app/petcare/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function PetCarePage() {
  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy + CTAs */}
          <div>
            <h1 className="h1">AI-Driven PetCare</h1>
            <p className="sub mt-3">
              Run an on-time veterinary practice with DhanAIyu: AI predicts delays, keeps
              visits on schedule, sends vaccination reminders, and unifies bills, prescriptions,
              and appointments in one clean dashboard for clinics and pet families.
            </p>

            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="btn btn-primary">Talk to Us</Link>
              <Link href="/contact" className="btn btn-ghost">Join the Waitlist</Link>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge border-blue-200">Vaccination Reminders</span>
              <span className="badge border-teal-200">Unified Dashboard</span>
              <span className="badge border-amber-200">Smart Scheduling</span>
              <span className="badge border-fuchsia-200">Grooming & Bath</span>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="card overflow-hidden">
            {/* If you added a pet image to /public, set it here (e.g., /petcare_hero.png). */}
            <div className="relative w-full max-w-[820px] aspect-[16/9] md:aspect-[21/9] mx-auto">
              <Image
                src="/petcare_hero.png"
                alt="DhanAIyu PetCare — AI for on-time visits, reminders, and unified care"
                fill
                className="object-contain rounded-2xl shadow-xl"
                sizes="(max-width: 768px) 100vw, 820px"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-slate-50">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Predictable Visits",
                body:
                  "AI watches clinic flow and predicts late or early runs—so owners plan better and pets stress less.",
              },
              {
                title: "Vaccination Reminders",
                body:
                  "Smart recalls for upcoming doses with flexible follow-ups via SMS/WhatsApp/email.",
              },
              {
                title: "Unified Dashboard",
                body:
                  "Appointments, prescriptions, invoices, lab results—everything in one place for staff & pet parents.",
              },
              {
                title: "Grooming & Bath Scheduler",
                body:
                  "Book haircuts and baths with accurate time windows and automated reminders.",
              },
              {
                title: "Billing & Packages",
                body:
                  "Simple billing, memberships, and health packages with transparent tracking for families.",
              },
              {
                title: "Owner App & Live Updates",
                body:
                  "Families get live queue status, ETA, and after-visit instructions right on their phones.",
              },
            ].map((f) => (
              <div key={f.title} className="card">
                <div className="text-lg font-semibold">{f.title}</div>
                <p className="mt-2 text-slate-600">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                n: "1",
                title: "Set Up",
                body:
                  "Connect your appointment book and services. Choose reminders, channels, and working hours.",
              },
              {
                n: "2",
                title: "Predict",
                body:
                  "DhanAIyu forecasts waits and optimizes grooming/vet appointments based on real clinic flow.",
              },
              {
                n: "3",
                title: "Delight",
                body:
                  "Owners get exact windows and reminders; staff gets fewer calls and smoother days.",
              },
            ].map((s) => (
              <div key={s.n} className="card">
                <div className="text-3xl font-semibold">{s.n}</div>
                <div className="mt-2 text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-slate-600">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-slate-50">
        <div className="container text-center">
          <div className="h1">Built for busy vets and happy families</div>
          <p className="sub mt-3">
            Less waiting, fewer surprises, and a single source of truth for every pet.
            Private by design. Ready for multi-location practices.
          </p>

          <div className="mt-8 flex items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">Request a Demo</Link>
            <Link href="/contact" className="btn btn-ghost">Get Pricing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
