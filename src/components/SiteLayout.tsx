import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Mail, Phone, MapPin } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/faculty", label: "Faculty" },
  { to: "/campus-life", label: "Campus Life" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-xl font-bold shadow-elegant">
            D
          </div>
          <div className="leading-tight">
            <div className="font-serif text-base font-semibold text-foreground sm:text-lg">
              Dharmapuram Adhinam
            </div>
            <div className="text-xs text-muted-foreground">Arts College</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
              activeProps={{ className: "bg-accent text-accent-foreground" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-border"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/80 hover:bg-accent"
                activeProps={{ className: "bg-accent text-accent-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <h3 className="font-serif text-xl font-semibold">Dharmapuram Adhinam Arts College</h3>
          <p className="mt-3 text-sm text-primary-foreground/80">
            A premier institution rooted in Tamil tradition, fostering excellence in arts,
            humanities, and sciences since 1967.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold">Quick Links</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            {navItems.slice(1).map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="hover:text-gold">{i.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Dharmapuram, Mayiladuthurai, Tamil Nadu 609001</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> +91 4364 222 234</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> info@daac.edu.in</li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg font-semibold">Affiliations</h4>
          <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
            <li>Bharathidasan University</li>
            <li>UGC Recognised</li>
            <li>NAAC Accredited</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 py-4 text-center text-xs text-primary-foreground/70">
        © {new Date().getFullYear()} Dharmapuram Adhinam Arts College. All rights reserved.
      </div>
    </footer>
  );
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

export function PageHeader({ title, subtitle, bgImage }: { title: string; subtitle?: string; bgImage?: string }) {
  return (
    <section className="relative isolate overflow-hidden text-primary-foreground">
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          width={1920}
          height={640}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-hero-gradient" />
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-primary-foreground/85">{subtitle}</p>}
      </div>
    </section>
  );
}
