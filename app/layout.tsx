import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "DhanAIyu — Smarter Health Appointments",
  description: "Predictable waiting windows, QR check‑in, and live updates for Indian clinics and families. Privacy‑first, simple to use.",
  openGraph: { title: "DhanAIyu — Smarter Health Appointments", description: "Predictable waiting windows, QR check‑in, and live updates for Indian clinics and families.", images: ["/og.png"] },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en"><body>
      <header className="border-b border-slate-200">
        <div className="container flex items-center justify-between py-4 gap-6">
          <Link href="/" className="flex items-center gap-3"><img src="/logo.png" alt="DhanAIyu" className="h-8 w-8 rounded-lg" /><span className="font-semibold text-xl">DhanAIyu</span></Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/product">Product</Link>
            <Link href="/clinics">Clinics</Link>
            <Link href="/about">About</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/contact" className="btn btn-ghost">Talk to Us</Link>
            <Link href="/contact" className="btn btn-primary">Join the Waitlist</Link>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 mt-24">
        <div className="container py-10 grid md:grid-cols-4 gap-8 text-sm">
          <div><div className="flex items-center gap-3 mb-3"><img src="/logo.png" className="h-8 w-8 rounded-lg" alt="logo" /><span className="font-semibold">DhanAIyu</span></div><p className="text-slate-600">AI that understands your time.</p></div>
          <div><div className="font-semibold mb-2">Product</div><ul className="space-y-1 text-slate-600"><li><Link href="/product">How it works</Link></li><li><Link href="/clinics">For Clinics</Link></li></ul></div>
          <div><div className="font-semibold mb-2">Company</div><ul className="space-y-1 text-slate-600"><li><Link href="/about">About</Link></li><li><Link href="/careers">Careers</Link></li><li><Link href="/contact">Contact</Link></li></ul></div>
          <div><div className="font-semibold mb-2">Legal</div><ul className="space-y-1 text-slate-600"><li><Link href="/legal/privacy">Privacy</Link></li><li><Link href="/legal/terms">Terms</Link></li></ul></div>
        </div>
        <div className="border-t border-slate-200"><div className="container py-6 text-xs text-slate-500">© {new Date().getFullYear()} DhanAIyu. All rights reserved.</div></div>
      </footer>
    </body></html>
  );
}
