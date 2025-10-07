// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "DhanAIyu — Smarter Health Appointments",
  description:
    "Predictable waiting windows, smart queue & check-in, live updates — built for clinics, families, and pets.",
  openGraph: {
    title: "DhanAIyu — Smarter Health Appointments",
    description:
      "Predictable waiting windows, smart queue & check-in, live updates — built for clinics, families, and pets.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        {/* Header */}
        <header className="border-b border-slate-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-4 gap-6">
              <Link href="/" className="flex items-center gap-3">
                <img src="/logo.png" alt="DhanAIyu" className="h-8 w-8 rounded" />
                <span className="font-semibold text-xl">DhanAIyu</span>
              </Link>

              <nav className="hidden md:flex items-center gap-6 text-sm">
                <Link href="/product">Product</Link>
                <Link href="/clinics">Clinics</Link>
                <Link href="/petcare">PetCare</Link>{/* NEW */}
                <Link href="/about">About</Link>
                <Link href="/careers">Careers</Link>
                <Link href="/contact">Contact</Link>
              </nav>

              <div className="flex items-center gap-3">
                <Link href="/contact" className="btn btn-ghost">Talk to Us</Link>
                <Link href="/contact" className="btn btn-primary">Join the Waitlist</Link>
              </div>
            </div>
          </div>
        </header>

        {/* Main */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="border-t border-slate-200 mt-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 py-12">
              <div>
                <div className="font-semibold text-lg">Company</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/careers">Careers</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-lg">Quick Links</div>
                {/* <<<<<< This is the block you were looking for */}
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li><Link href="/product">Product</Link></li>
                  <li><Link href="/clinics">Clinics</Link></li>
                  <li><Link href="/petcare">PetCare</Link></li> {/* NEW */}
                  <li><Link href="/privacy">Privacy</Link></li>
                  <li><Link href="/terms">Terms</Link></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-lg">Resources</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/news">News</Link></li>
                  <li><Link href="/docs">Docs</Link></li>
                </ul>
              </div>

              <div>
                <div className="font-semibold text-lg">Get Started</div>
                <ul className="mt-3 space-y-2 text-sm text-slate-600">
                  <li><Link href="/contact">Request a demo</Link></li>
                  <li><Link href="/contact">Join the Waitlist</Link></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-200 py-6 text-center text-sm text-slate-500">
              © {new Date().getFullYear()} DhanAIyu. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
