// app/page.tsx
import Image from "next/image";
import FeatureCarousel from "./components/FeatureCarousel";

export default function Page() {
  return (
    <div>
      {/* ============================ */}
      {/* HERO                         */}
      {/* ============================ */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy + CTAs */}
          <div>
            <h1 className="h1">AI that understands and respects your time.</h1>
            <p className="sub">
              DhanAIyu’s intelligence engine predicts realistic waiting windows,
              streamlines check-ins, and keeps families informed—before you leave home.
            </p>

            <div className="mt-8 flex gap-3">
              <a href="/contact" className="btn btn-primary">
                Join the Waitlist
              </a>
              <a href="/clinics" className="btn btn-ghost">
                For Clinics
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge border-blue-200">AI Wait-Time Intelligence</span>
              <span className="badge border-teal-200">Smart Queue & Check-in</span>
              <span className="badge border-amber-200">Emergency Mode</span>
            </div>
          </div>

          {/* Right: 5-image carousel (pulls from /public) */}
          <div className="card overflow-hidden">
            <FeatureCarousel
              items={[
                {
                  src: "/doctor_delay_intelligence.png",
                  alt: "Doctor Delay Intelligence",
                  caption: "Doctor Delay Intelligence",
                },
                {
                  src: "/predict_delay.png",
                  alt: "Predict Delay",
                  caption: "Predict Delay",
                },
                {
                  src: "/one_dashboard.png",
                  alt: "One Dashboard",
                  caption: "One Dashboard",
                },
                {
                  src: "/ai_health_companion.png",
                  alt: "AI Health Companion",
                  caption: "AI Health Companion",
                },
                {
                  src: "/emergency_mode.png",
                  alt: "Emergency Mode",
                  caption: "Emergency Mode",
                },
              ]}
              interval={5000} // safe with your existing FeatureCarousel type
            />
          </div>
        </div>
      </section>

      {/* ============================ */}
      {/* HIGHLIGHTS                   */}
      {/* ============================ */}
      <section className="section bg-slate-50">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {
              title: "AI Wait-Time Intelligence",
              body: "Live predictions trained on clinic flow patterns.",
            },
            {
              title: "Smart Queue & Check-in",
              body: "QR check-in and live updates from the front desk.",
            },
            {
              title: "Emergency Mode",
              body: "Flag urgent cases so clinics can respond faster.",
            },
          ].map((c, i) => (
            <div key={i} className="card">
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="mt-2 text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ */}
      {/* 1–2–3 STEPS                  */}
      {/* ============================ */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            { n: "1", title: "Find", body: "Search the right doctor or clinic." },
            { n: "2", title: "Book", body: "Pick a time window that fits your day." },
            { n: "3", title: "Track", body: "Live updates; arrive with confidence." },
          ].map((s, i) => (
            <div key={i} className="card">
              <div className="text-3xl font-semibold">{s.n}</div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ */}
      {/* PET CARE (COMING SOON)       */}
      {/* ============================ */}
      <section className="section bg-slate-50">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div>
            <div className="text-sm font-medium tracking-wide text-sky-700 uppercase">
              Coming Soon
            </div>
            <h2 className="h2 mt-2">Pet Care — same DhanAIyu intelligence, for your pets</h2>
            <p className="sub mt-3">
              Manage your pet’s appointments, reminders, vaccinations, and prescriptions
              in one place. Real-time wait windows, smart notifications, and a single,
              clean dashboard—powered by DhanAIyu intelligence.
            </p>

            <ul className="mt-6 space-y-2 text-slate-700">
              <li>• Real-time wait windows & queue status</li>
              <li>• Appointment & vaccination reminders</li>
              <li>• Prescriptions tracked alongside medical history</li>
              <li>• Vet & Pet-parent friendly, privacy-first design</li>
            </ul>

            <div className="mt-8 flex gap-3">
              <a href="/pets" className="btn btn-primary">
                Learn More
              </a>
              <a href="/contact" className="btn btn-ghost">
                Join Early Access
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="card overflow-hidden">
            <div className="relative w-full aspect-[16/10]">
              <Image
                src="/pet_care_hero.png"
                alt="DhanAIyu Pet Care — unified dashboard for your pets"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============================ */}
      {/* TRUST                        */}
      {/* ============================ */}
      <section className="section">
        <div className="container text-center">
          <div className="h1">Built for privacy and trust</div>
          <p className="sub">
            Minimal data collection; clinics and vets own care and fees.
            Compliance-ready foundation for HIPAA/SOC2/DPDP.
          </p>
        </div>
      </section>
    </div>
  );
}
