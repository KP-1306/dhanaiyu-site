
export const metadata = { title: "Clinics — DhanAIyu" };
export default function Page() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="h1">Run on‑time, every time.</h1>
        <p className="sub">AI‑guided arrival windows smooth the waiting room and reduce stress for staff and patients.</p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="card">
            <div className="text-xl font-semibold">Benefits</div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li>Predictable Flow</li>
              <li>Transparent Delays (reason codes)</li>
              <li>Lighter Front Desk (auto check‑in)</li>
              <li>Happier Patients (+20% on‑time target)</li>
            </ul>
          </div>
          <div className="card">
            <div className="text-xl font-semibold">How Onboarding Works</div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li>Soft Onboarding: minimal setup</li>
              <li>Full Onboarding: payments, invoice, GST</li>
              <li>Assistant Role: update now serving / avg time / delay reason</li>
            </ul>
          </div>
        </div>

        <div className="card mt-10">
          <div className="text-xl font-semibold">What you get</div>
          <p className="mt-2 text-slate-700">Clinic console for live queue; QR check‑in; simple delay reasons; exportable logs.</p>
          <div className="mt-6 flex gap-3">
            <a href="/contact" className="btn btn-primary">Book a 15‑min demo</a>
            <a href="/contact" className="btn btn-ghost">Partner with Us</a>
          </div>
        </div>
      </div>
    </div>
  );
}
