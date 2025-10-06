
export const metadata = { title: "Careers — DhanAIyu" };
export default function Page() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="h1">Build health tech that people actually use.</h1>
        <p className="sub">Ownership, fast releases, and user‑first design.</p>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="card">
            <div className="text-xl font-semibold">Open Roles</div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li>Flutter Developer (Contract) — Remote/Hybrid</li>
              <li>Frontend Engineer (React) — Remote/Hybrid</li>
              <li>Clinic Success Lead — Field</li>
            </ul>
          </div>
          <div className="card">
            <div className="text-xl font-semibold">Apply</div>
            <p className="mt-2 text-slate-700">Send your LinkedIn/GitHub and a short note to hello@dhanaiyu.com or use the Contact form.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
