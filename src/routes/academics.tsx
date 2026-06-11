import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import libraryImg from "@/assets/campus-library.jpg";

export const Route = createFileRoute("/academics")({
  head: () => ({
    meta: [
      { title: "Academics & Programs | Dharmapuram Adhinam Arts College" },
      { name: "description", content: "Undergraduate and postgraduate programmes in Tamil, English, Commerce, Mathematics, Computer Science, and more." },
    ],
  }),
  component: Academics,
});

const departments = [
  { name: "Tamil", ug: "B.A. Tamil", pg: "M.A. Tamil, M.Phil." },
  { name: "English", ug: "B.A. English Literature", pg: "M.A. English" },
  { name: "History", ug: "B.A. History", pg: "M.A. History" },
  { name: "Commerce", ug: "B.Com., B.Com. (CA)", pg: "M.Com." },
  { name: "Economics", ug: "B.A. Economics", pg: "M.A. Economics" },
  { name: "Mathematics", ug: "B.Sc. Mathematics", pg: "M.Sc. Mathematics" },
  { name: "Computer Science", ug: "B.Sc. Computer Science, BCA", pg: "M.Sc. CS" },
  { name: "Physics", ug: "B.Sc. Physics", pg: "M.Sc. Physics" },
  { name: "Chemistry", ug: "B.Sc. Chemistry", pg: "M.Sc. Chemistry" },
];

function Academics() {
  return (
    <>
      <PageHeader
        title="Academics"
        subtitle="A broad curriculum across the arts, commerce, and sciences — taught by faculty committed to scholarship and student success."
        bgImage={libraryImg}
      />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold">Departments & Programmes</h2>
        <p className="mt-3 max-w-3xl text-muted-foreground">
          All programmes are affiliated to Bharathidasan University and follow the Choice Based
          Credit System (CBCS). Curricula are reviewed annually by Boards of Studies.
        </p>
        <div className="mt-10 overflow-hidden rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary text-secondary-foreground">
              <tr>
                <th className="px-4 py-3 font-semibold">Department</th>
                <th className="px-4 py-3 font-semibold">Undergraduate</th>
                <th className="px-4 py-3 font-semibold">Postgraduate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {departments.map((d) => (
                <tr key={d.name}>
                  <td className="px-4 py-3 font-serif text-base font-semibold">{d.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{d.ug}</td>
                  <td className="px-4 py-3 text-muted-foreground">{d.pg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
          <h2 className="font-serif text-3xl font-semibold">Academic Calendar</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-xl font-semibold">Odd Semester</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>Commencement: 1 July</li>
                <li>Mid-semester exams: September</li>
                <li>End-semester exams: November</li>
              </ul>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-serif text-xl font-semibold">Even Semester</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                <li>Commencement: 15 December</li>
                <li>Mid-semester exams: February</li>
                <li>End-semester exams: April</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
