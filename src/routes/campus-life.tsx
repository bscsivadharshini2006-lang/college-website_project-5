import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import { Library, Trophy, Music, Home, Utensils, Wifi } from "lucide-react";
import groundsImg from "@/assets/campus-grounds.jpg";

export const Route = createFileRoute("/campus-life")({
  head: () => ({
    meta: [
      { title: "Campus Life | Dharmapuram Adhinam Arts College" },
      { name: "description", content: "Facilities, student clubs, sports, festivals, and traditions on a campus that feels like home." },
    ],
  }),
  component: CampusLife,
});

const facilities = [
  { icon: Library, title: "Central Library", desc: "Over 80,000 volumes, digital archives, and quiet reading halls." },
  { icon: Home, title: "Hostels", desc: "Separate residential blocks for men and women with mess and amenities." },
  { icon: Trophy, title: "Sports Complex", desc: "Cricket, kabaddi, athletics, indoor games, and an annual sports meet." },
  { icon: Music, title: "Auditorium", desc: "650-seat venue for cultural events, Tamil drama, and conferences." },
  { icon: Utensils, title: "Canteen", desc: "Hygienic, affordable South Indian meals served through the day." },
  { icon: Wifi, title: "Wi-Fi Campus", desc: "High-speed internet across classrooms, library, and hostels." },
];

function CampusLife() {
  return (
    <>
      <PageHeader
        title="Campus Life"
        subtitle="A residential campus where classrooms, temples, playing fields, and libraries shape rounded young scholars."
        bgImage={groundsImg}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold">Facilities</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => (
            <div key={f.title} className="rounded-lg border border-border bg-card p-6 shadow-sm">
              <f.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 font-serif text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold">Student Life & Activities</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-xl font-semibold">Clubs & Societies</h3>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                <li>Tamil Mandram — literary debates and poetry recitals</li>
                <li>Quiz & Debate Society</li>
                <li>NSS and NCC units</li>
                <li>Photography & Fine Arts Club</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-xl font-semibold">Festivals & Traditions</h3>
              <ul className="mt-3 list-disc pl-5 text-muted-foreground space-y-1 text-sm">
                <li>Saraswati Pooja — beginning of the academic year</li>
                <li>Thiruvalluvar Day — Tamil cultural celebrations</li>
                <li>Annual Day & College Sports Meet</li>
                <li>Alumni Homecoming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
