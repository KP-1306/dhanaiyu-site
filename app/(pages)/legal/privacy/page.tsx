
export const metadata = { title: "Privacy — DhanAIyu" };
export default function Page() {
  return (
    <div className="section">
      <div className="container prose max-w-none">
        <h1>Privacy Policy (Phase‑1)</h1>
        <p>We collect the minimum data required for booking, reminders, and queue updates. Clinics control care, clinical decisions, fees, and timing.</p>
        <ul>
          <li>Personal data: name, contact, city (for communication and reminders).</li>
          <li>Appointment data: doctor, time window, status, queue updates.</li>
          <li>No medical records stored until the Health Locker feature launches (opt‑in).</li>
        </ul>
        <p>Data subject rights: export or delete on request. Security: data encrypted in transit and at rest.</p>
      </div>
    </div>
  );
}
