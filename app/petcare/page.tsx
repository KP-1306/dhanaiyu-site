// app/petcare/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "PetCare Intelligence – DhanAIyu",
  description:
    "Run an on-time veterinary practice with AI: vaccination reminders, unified dashboards, grooming & pharmacy, smart queueing, and appointment nudges.",
  openGraph: {
    title: "PetCare Intelligence – DhanAIyu",
    description:
      "AI for modern vet practices: on-time visits, reminders, unified board, grooming, pharmacy, and smart queueing.",
    images: ["/petcare_services.png"],
  },
};

export default function PetCarePage() {
  return (
    <div>
      {/* HERO */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">PetCare Intelligence</h1>
            <p className="sub">
              AI-powered tools for veterinary practices and pet parents: run on-time visits,
              send smart reminders, and keep everything in one unified board.
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="/contact" className="btn btn-primary">
                Talk to Us
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Join the Waitlist
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge border-teal-200">Vaccination Reminders</span>
              <span className="badge border-purple-200">Unified Pet Dashboard</span>
              <span className="badge border-amber-200">Smart Queue & ETA</span>
            </div>
          </div>

          <div className="card overflow-hidden">
            <Image
              src="/petcare_services.png"
              alt="DhanAIyu PetCare Intelligence"
              width={1280}
              height={720}
              className="w-full h-auto object-contain rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section bg-slate-50">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {
              title: "On-time Vet Visits",
              body: "AI learns your flow to predict delays and nudge arrivals—no crowded waiting rooms.",
            },
            {
              title: "Vaccination & Medication Reminders",
              body: "Auto-remind pet parents via WhatsApp/SMS/Email—smart intervals & follow-ups.",
            },
            {
              title: "Unified Pet Dashboard",
              body: "Appointments, records, bills, grooming and pharmacy—everything in one place.",
            },
            {
              title: "Grooming & Bath Scheduling",
              body: "Book slots, allocate staff, and keep your grooming bay perfectly planned.",
            },
            {
              title: "Queue & ETA",
              body: "Real-time status and predicted wait times reduce stress for pets and parents.",
            },
            {
              title: "Pharmacy & Billing",
              body: "Sell RX items, track bills & receipts, and maintain clean, exportable records.",
            },
          ].map((f, i) => (
            <div key={i} className="card">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="mt-2 text-slate-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container text-center">
          <div className="h1">Ready to modernize your veterinary practice?</div>
          <p className="sub">
            Join the early access program and run an on-time, insight-driven clinic with DhanAIyu.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <Link href="/contact" className="btn btn-primary">
              Get Early Access
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
