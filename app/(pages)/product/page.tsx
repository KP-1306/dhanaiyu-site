
export const metadata = { title: "Product — DhanAIyu" };
export default function Page() {
  return (
    <div className="section">
      <div className="container">
        <h1 className="h1">A simple app made smarter by AI.</h1>
        <p className="sub">Designed around clinic reality—predictability and flow, not just appointment slots.</p>

        <div className="mt-10 grid md:grid-cols-2 gap-8">
          <div className="card">
            <div className="text-xl font-semibold">Available Now</div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li>Phone OTP Onboarding</li>
              <li>Clinic & Doctor Discovery</li>
              <li>Doctor Profiles</li>
              <li>Book / Cancel / Reschedule (windowed)</li>
              <li>AI Wait‑Time Intelligence (v0)</li>
              <li>Emergency Booking Mode</li>
              <li>Reminders & Notifications</li>
            </ul>
          </div>
          <div className="card">
            <div className="text-xl font-semibold">Coming Soon</div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li>Auto Check‑in + QR</li>
              <li>Advanced Doctor Calendar (buffers, leaves)</li>
              <li>AI Wait‑Time Intelligence (v1)</li>
              <li>Tele‑consultation & E‑Prescription</li>
              <li>Health Record Locker</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          <div className="card">
            <div className="text-xl font-semibold">How our AI helps</div>
            <ul className="mt-4 list-disc pl-5 space-y-2 text-slate-700">
              <li>Learns clinic rhythms to recommend best arrival windows.</li>
              <li>Detects high‑load patterns and re‑predicts delays in real time.</li>
              <li>Surfaces transparent reasons for delays to reduce anxiety.</li>
              <li>Suggests optimal scheduling to smooth peaks.</li>
            </ul>
          </div>
          <div className="card">
            <div className="text-xl font-semibold">FAQs</div>
            <div className="mt-4 space-y-4 text-slate-700">
              <div><b>What’s a “time window”?</b><br/>A realistic arrival band that absorbs small clinic delays so you wait less.</div>
              <div><b>Who decides fees and timings?</b><br/>Clinics do. We’re a booking platform; we don’t set prices or treatment.</div>
              <div><b>Is my data safe?</b><br/>We collect the minimum required for booking and reminders; you control sharing.</div>
              <div><b>Do I need the latest phone?</b><br/>No—DhanAIyu works on common Android/iOS devices.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
