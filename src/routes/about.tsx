import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import { Target, Eye, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Dharmapuram Adhinam Arts College" },
      { name: "description", content: "Discover the history, mission, vision, and values of Dharmapuram Adhinam Arts College — a Tamil Nadu institution since 1967." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        title="About the College"
        subtitle="Founded in 1967 under the spiritual guidance of the Dharmapuram Adhinam, our institution carries forward a centuries-old tradition of Tamil learning."
      />
      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8 prose prose-lg">
        <h2 className="font-serif text-3xl font-semibold">Our History</h2>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Dharmapuram Adhinam is one of the most venerable Saiva monastic institutions of South
          India, with an unbroken lineage of pontiffs stretching back over five centuries. In
          1967, recognising the need to bring modern academic education to the children of the
          Cauvery delta, the Adhinam founded this Arts College on a generous tract of land in
          Mayiladuthurai.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Affiliated to Bharathidasan University and recognised by the University Grants
          Commission, the college today offers undergraduate and postgraduate programmes across
          the humanities, commerce, and sciences, while remaining grounded in its founding
          commitment to Tamil language, culture, and spiritual values.
        </p>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { icon: Target, title: "Mission", text: "To impart quality higher education that develops intellect, character, and a deep appreciation of Tamil heritage." },
              { icon: Eye, title: "Vision", text: "To be a leading centre of learning where tradition and modernity meet, producing graduates of integrity and competence." },
              { icon: Heart, title: "Values", text: "Devotion to learning, respect for heritage, service to society, and unwavering ethical conduct in all endeavours." },
            ].map((v) => (
              <div key={v.title} className="rounded-lg border border-border bg-card p-8 shadow-sm">
                <v.icon className="h-10 w-10 text-primary" />
                <h3 className="mt-4 font-serif text-2xl font-semibold">{v.title}</h3>
                <p className="mt-3 text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold">Leadership</h2>
        <p className="mt-4 text-muted-foreground">
          The college operates under the patronage of His Holiness the Pontiff of Dharmapuram
          Adhinam, with day-to-day administration led by the Principal and the College Council.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            { name: "His Holiness the 27th Pontiff", role: "Chancellor & Patron" },
            { name: "Dr. S. Murugesan", role: "Principal" },
            { name: "Dr. K. Lakshmi", role: "Vice Principal (Academics)" },
            { name: "Prof. R. Venkatesan", role: "Controller of Examinations" },
          ].map((p) => (
            <div key={p.name} className="rounded-md border border-border bg-card p-5">
              <div className="font-serif text-lg font-semibold">{p.name}</div>
              <div className="text-sm text-muted-foreground">{p.role}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
