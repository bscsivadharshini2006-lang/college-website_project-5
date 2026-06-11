import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import { CheckCircle2 } from "lucide-react";
import entranceImg from "@/assets/campus-entrance.jpg";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Dharmapuram Adhinam Arts College" },
      { name: "description", content: "Eligibility, application process, and important dates for admission to UG and PG programmes." },
    ],
  }),
  component: Admissions,
});

const dates = [
  { label: "Application opens", date: "01 May 2026" },
  { label: "Last date to apply (UG)", date: "30 June 2026" },
  { label: "Last date to apply (PG)", date: "15 July 2026" },
  { label: "Merit list publication", date: "10 July 2026" },
  { label: "Counselling & admission", date: "15–25 July 2026" },
  { label: "Classes commence", date: "01 August 2026" },
];

function Admissions() {
  return (
    <>
      <PageHeader
        title="Admissions 2026–27"
        subtitle="Join a community committed to scholarship, character, and service. Applications are accepted online and at the College Office."
        bgImage={entranceImg}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-3xl font-semibold">Eligibility</h2>
          <ul className="mt-6 space-y-3">
            {[
              "Undergraduate (B.A./B.Sc./B.Com.): Pass in Higher Secondary (10+2) with relevant subjects.",
              "Postgraduate (M.A./M.Sc./M.Com.): Bachelor's degree in the relevant discipline with at least 50% aggregate.",
              "M.Phil.: Master's degree in the relevant subject with at least 55% aggregate.",
              "Admissions follow Government of Tamil Nadu reservation norms.",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 mt-0.5 text-primary shrink-0" />
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-serif text-3xl font-semibold">Application Process</h2>
          <ol className="mt-6 space-y-4 text-muted-foreground">
            {[
              "Fill the online application form on the College portal.",
              "Upload scanned copies of marksheets, ID proof, and photograph.",
              "Pay the non-refundable application fee of ₹250.",
              "Submit the printed acknowledgement at the College Office during counselling.",
            ].map((s, i) => (
              <li key={s} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary font-serif font-semibold text-primary-foreground">{i + 1}</span>
                <span className="pt-1">{s}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="rounded-lg border border-border bg-card p-8 shadow-sm h-fit">
          <h3 className="font-serif text-2xl font-semibold">Important Dates</h3>
          <ul className="mt-6 divide-y divide-border">
            {dates.map((d) => (
              <li key={d.label} className="flex items-center justify-between py-3">
                <span className="text-sm">{d.label}</span>
                <span className="font-mono text-sm font-semibold text-primary">{d.date}</span>
              </li>
            ))}
          </ul>
          <a
            href="#apply"
            className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Start Application
          </a>
        </aside>
      </section>
    </>
  );
}
