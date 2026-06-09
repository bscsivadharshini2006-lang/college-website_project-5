import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import { useState } from "react";
import { Search } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty & Staff | Dharmapuram Adhinam Arts College" },
      { name: "description", content: "Meet our distinguished faculty across departments — scholars committed to teaching and research." },
    ],
  }),
  component: Faculty,
});

const faculty = [
  { name: "Dr. S. Murugesan", role: "Principal & Professor of Tamil", dept: "Tamil" },
  { name: "Dr. K. Lakshmi", role: "Vice Principal & Professor of English", dept: "English" },
  { name: "Dr. R. Venkatesan", role: "Head of Department", dept: "History" },
  { name: "Dr. M. Saravanan", role: "Associate Professor", dept: "Commerce" },
  { name: "Dr. P. Anitha", role: "Head of Department", dept: "Economics" },
  { name: "Dr. T. Ramesh", role: "Professor", dept: "Mathematics" },
  { name: "Dr. V. Karthik", role: "Head of Department", dept: "Computer Science" },
  { name: "Dr. N. Bhuvana", role: "Associate Professor", dept: "Physics" },
  { name: "Dr. S. Iyappan", role: "Head of Department", dept: "Chemistry" },
  { name: "Prof. G. Meena", role: "Assistant Professor", dept: "Tamil" },
  { name: "Prof. A. Selvam", role: "Assistant Professor", dept: "English" },
  { name: "Prof. K. Divya", role: "Assistant Professor", dept: "Computer Science" },
];

function Faculty() {
  const [q, setQ] = useState("");
  const filtered = faculty.filter((f) =>
    [f.name, f.role, f.dept].join(" ").toLowerCase().includes(q.toLowerCase())
  );
  return (
    <>
      <PageHeader title="Faculty & Staff" subtitle="A community of scholars and teachers dedicated to the success of every student." />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name or department"
            className="w-full rounded-md border border-input bg-card py-2.5 pl-10 pr-3 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
          />
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((f) => (
            <div key={f.name} className="rounded-lg border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-serif text-lg font-semibold text-primary">
                  {f.name.split(" ").slice(-1)[0]?.[0] ?? "F"}
                </div>
                <div>
                  <div className="font-serif text-lg font-semibold leading-tight">{f.name}</div>
                  <div className="text-xs text-muted-foreground">{f.dept}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">{f.role}</p>
            </div>
          ))}
          {filtered.length === 0 && (
            <p className="text-muted-foreground">No faculty match your search.</p>
          )}
        </div>
      </section>
    </>
  );
}
