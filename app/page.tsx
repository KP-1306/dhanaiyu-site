
export default function Page() {
  return (
    <div>
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="h1">AI that understands your time.</h1>
            <p className="sub">DhanAIyu’s intelligence engine predicts realistic waiting windows, streamlines check‑ins, and keeps families informed—before you leave home.</p>
            <div className="mt-8 flex gap-3">
              <a href="/contact" className="btn btn-primary">Join the Waitlist</a>
              <a href="/clinics" className="btn btn-ghost">For Clinics</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="badge border-blue-200">AI Wait‑Time Intelligence</span>
              <span className="badge border-teal-200">Smart Queue & Check‑in</span>
              <span className="badge border-amber-200">Emergency Mode</span>
            </div>
          </div>
          <div>
            <div className="card h-[380px] flex items-center justify-center">
              <span className="text-slate-400">📱 Phone mockup placeholder (Search → Window → Live Queue)</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {title:'AI Wait‑Time Intelligence', body:'Live predictions trained on clinic flow patterns.'},
            {title:'Smart Queue & Check‑in', body:'QR check‑in and live updates from the front desk.'},
            {title:'Emergency Mode', body:'Flag urgent cases so clinics can respond faster.'},
          ].map((c,i)=> (
            <div key={i} className="card">
              <div className="text-lg font-semibold">{c.title}</div>
              <p className="mt-2 text-slate-600">{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container grid md:grid-cols-3 gap-6">
          {[
            {n:'1',title:'Find', body:'Search the right doctor or clinic.'},
            {n:'2',title:'Book', body:'Pick a time window that fits your day.'},
            {n:'3',title:'Track', body:'Live updates; arrive with confidence.'},
          ].map((s,i)=> (
            <div key={i} className="card">
              <div className="text-3xl font-semibold">{s.n}</div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <p className="mt-2 text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container text-center">
          <div className="h1">Built for privacy and trust</div>
          <p className="sub">Minimal data collection; clinics own care and fees. Compliance‑ready foundation for HIPAA/SOC2/DPDP.</p>
        </div>
      </section>
    </div>
  );
}
