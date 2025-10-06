
export const metadata = { title: "Contact — DhanAIyu" };
export default function Page() {
  return (
    <div className="section">
      <div className="container max-w-2xl">
        <h1 className="h1">Let’s talk.</h1>
        <p className="sub">We use your info only to respond to your query.</p>
        <form className="card mt-8 grid gap-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div><label className="block text-sm font-medium">Name</label><input className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="Your name"/></div>
            <div><label className="block text-sm font-medium">Email / Phone</label><input className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="you@example.com"/></div>
          </div>
          <div><label className="block text-sm font-medium">City</label><input className="mt-1 w-full border rounded-xl px-3 py-2" placeholder="Your city"/></div>
          <div>
            <label className="block text-sm font-medium">Purpose</label>
            <select className="mt-1 w-full border rounded-xl px-3 py-2">
              <option>Patient</option>
              <option>Clinic/Doctor</option>
              <option>Investor/Partner</option>
              <option>Other</option>
            </select>
          </div>
          <div><label className="block text-sm font-medium">Message</label><textarea className="mt-1 w-full border rounded-xl px-3 py-2" rows={5} placeholder="How can we help?"/></div>
          <button type="button" className="btn btn-primary">Send</button>
        </form>
        <div className="mt-6 text-slate-600">Or email us at <a href="mailto:hello@dhanaiyu.com" className="underline">hello@dhanaiyu.com</a>.</div>
      </div>
    </div>
  );
}
