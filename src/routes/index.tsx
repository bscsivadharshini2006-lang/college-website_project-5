import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, BookOpen, Users, Award, ArrowRight, Calendar } from "lucide-react";
import heroImg from "@/assets/hero-campus.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dharmapuram Adhinam Arts College | Excellence Since 1967" },
      { name: "description", content: "A premier arts and science college in Mayiladuthurai, Tamil Nadu — affiliated to Bharathidasan University, fostering tradition, scholarship, and character." },
      { property: "og:title", content: "Dharmapuram Adhinam Arts College" },
      { property: "og:description", content: "Premier arts and science college rooted in Tamil tradition." },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: GraduationCap, title: "20+ Programs", desc: "Undergraduate and postgraduate degrees across arts, commerce, and sciences." },
  { icon: Users, title: "5,000+ Students", desc: "A vibrant residential community drawn from across Tamil Nadu and beyond." },
  { icon: BookOpen, title: "120+ Faculty", desc: "Distinguished scholars, many with doctorates from leading universities." },
  { icon: Award, title: "NAAC Accredited", desc: "Recognised by UGC and reaccredited with a strong institutional grade." },
];

const news = [
  { date: "15 Jun 2026", title: "Admissions open for academic year 2026–27" },
  { date: "02 Jun 2026", title: "Annual Tamil literary symposium — call for papers" },
  { date: "20 May 2026", title: "College ranks among top arts colleges in Tamil Nadu" },
];

function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Dharmapuram Adhinam Arts College campus at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-hero-gradient" />
        <div className="mx-auto max-w-7xl px-4 py-24 lg:px-8 lg:py-36 text-primary-foreground">
          <p className="font-serif text-sm uppercase tracking-[0.3em] text-gold">Estd. 1967</p>
          <h1 className="mt-4 max-w-3xl text-balance font-serif text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            A legacy of learning, rooted in Tamil tradition.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-primary-foreground/85">
            Dharmapuram Adhinam Arts College nurtures scholars, artists, and citizens through
            rigorous academics, devotion to heritage, and an unwavering commitment to character.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/admissions" className="inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 text-sm font-semibold text-gold-foreground shadow-elegant hover:opacity-90">
              Apply for Admission <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/academics" className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/40 bg-primary-foreground/10 px-6 py-3 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary-foreground/20">
              Explore Programs
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-lg border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-elegant">
              <h.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-serif text-xl font-semibold">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="font-serif uppercase tracking-widest text-primary text-sm">Our Heritage</p>
            <h2 className="mt-3 font-serif text-3xl font-semibold sm:text-4xl">
              An Adhinam tradition of scholarship since 1967.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Founded under the auspices of the Dharmapuram Adhinam — one of the most ancient
              Saiva monastic institutions of Tamil Nadu — our college blends classical learning
              with modern academic disciplines. Generations of students have walked these
              corridors to become teachers, civil servants, writers, and leaders.
            </p>
            <Link to="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all">
              Read our story <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-2 text-primary">
              <Calendar className="h-5 w-5" />
              <h3 className="font-serif text-xl font-semibold">Latest News & Events</h3>
            </div>
            <ul className="mt-6 divide-y divide-border">
              {news.map((n) => (
                <li key={n.title} className="py-4">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{n.date}</div>
                  <div className="mt-1 font-medium">{n.title}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
