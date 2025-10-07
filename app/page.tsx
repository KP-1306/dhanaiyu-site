// app/page.tsx
import FeatureCarousel from "./components/FeatureCarousel";

export default function Page() {
  return (
    <div>
      {/* ============================= HERO ============================= */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          {/* Left: copy + CTAs */}
          <div>
            <h1 className="h1">AI that understands and respects your time.</h1>
            <p className="sub">
              DhanAIyu’s intelligence engine predicts realistic waiting windows, streamlines
              check-ins, and keeps families informed—before you leave home. Built for clinics,
              hospitals, and modern veterinary practices.
            </p>

            <div className="mt-8 flex gap-3">
              <a href="/contact" className="btn btn-primary">Join the Waitlist</a>
              <a href="/clinics" className="btn btn-ghost">For Clinics</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge border-blue-200">AI Wait-Time Intelligence</span>
              <span className="badge border-teal-200">Smart Queue & Check-in</span>
              <span className="badge border-amber-200">Emergency Mode</span>
              <span className="badge border-purple-200">PetCare Intelligence</span>
            </div>
          </div>

          {/* Right: image carousel pulling from /public assets */}
          <div className="card overflow-hidden">
            <FeatureCarousel
              interval={5000}
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
                  caption: "One Unified Dashboard",
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
                {
                  src: "/petcare_services.png", // <- PetCare hero slide
                  alt: "DhanAIyu PetCare Intelligence – on-time vet visits, reminders, unified board",
                  caption: "PetCare Intelligence",
                },
              ]}
            />
          </div>
        </div>
      </section>

      {/* ========================= HIGHLIGHTS ========================== */}
      <section className="section bg-slate-50">
        <div className="container grid md:grid-cols-4 gap-6">
          {[
            {
              title: "AI Wait-Time Intelligence",
              body: "Live predictions trained on clinic flow patterns.",
            },
            {
              title: "Smart Queue & Check-in",
              body: "QR check-in and real-time status from the front desk.",
            },
            {
              title: "Emergency Mode",
              body: "Instant prioritization when every second counts.",
            },
            {
              title: "PetCare Intelligence",
              body: "On-time vet visits, vaccination reminders, unified board.",
            },
          ].map((c, i) => (
            <div key={i} className="card">
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="mt-2 text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== HUMANS & PETS SERVICES =================== */}
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-8 items-start">
          <div className="card">
            <div className="text-lg font-semibold">For People</div>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Find & book doctors with smart arrival windows</li>
              <li>• Live queue and ETA updates to avoid waiting rooms</li>
              <li>• AI Health Companion: prescriptions, bills, reminders</li>
            </ul>
          </div>
          <div className="card">
            <div className="text-lg font-semibold">For Pets</div>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• PetCare Intelligence for on-time veterinary care</li>
              <li>• Vaccination reminders & appointment nudges</li>
              <li>• Unified pet dashboard: treatments, grooming, bills</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============================ STEPS ============================ */}
      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            { n: "1", title: "Find", body: "Search the right doctor, clinic, or vet." },
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

      {/* ============================ TRUST ============================ */}
      <section className="section bg-slate-50">
        <div className="container text-center">
          <div className="h1">Built for privacy and trust</div>
          <p className="sub">
            Minimal data collection; clinics own care and fees. Compliance-ready foundation
            for HIPAA/SOC2/DPDP.
          </p>
        </div>
      </section>
    </div>
  );
}
