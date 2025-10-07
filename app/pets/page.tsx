// app/pets/page.tsx
import Image from "next/image";

export default function PetsPage() {
  return (
    <section className="section">
      <div className="container grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="h1">DhanAIyu for Pets</h1>
          <p className="sub mt-3">
            The same AI that respects your family’s time—now for your pets.
            Smarter scheduling, unified records, and reminders that actually help.
          </p>

          <ul className="mt-6 space-y-2 text-slate-700">
            <li>• Real-time wait windows & queue status</li>
            <li>• Appointment & vaccination reminders</li>
            <li>• Prescriptions & medical history in one place</li>
            <li>• Vet & Pet-parent friendly, privacy-first design</li>
          </ul>

          <div className="mt-8 flex gap-3">
            <a href="/contact" className="btn btn-primary">Join Early Access</a>
            <a href="/" className="btn btn-ghost">Back to Home</a>
          </div>
        </div>

        <div className="card overflow-hidden">
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/pet_care_hero.png"
              alt="DhanAIyu Pet Care — unified dashboard for your pets"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 600px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
