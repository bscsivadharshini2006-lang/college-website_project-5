import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteLayout";
import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import entranceImg from "@/assets/campus-entrance.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Dharmapuram Adhinam Arts College" },
      { name: "description", content: "Visit, call, or write to us. Find directions and a contact form for enquiries." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string)?.trim() ?? "";
    const email = (fd.get("email") as string)?.trim() ?? "";
    const message = (fd.get("message") as string)?.trim() ?? "";
    const errs: Record<string, string> = {};
    if (name.length < 2) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email.";
    if (message.length < 10) errs.message = "Message must be at least 10 characters.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from prospective students, parents, alumni, and collaborators." bgImage={entranceImg} />
      <section className="mx-auto max-w-7xl px-4 py-16 lg:px-8 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-serif text-2xl font-semibold">Reach Us</h2>
          <ul className="mt-6 space-y-5 text-muted-foreground">
            <li className="flex gap-3">
              <MapPin className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <div className="font-medium text-foreground">Address</div>
                Dharmapuram Adhinam Arts College,<br />
                Dharmapuram, Mayiladuthurai,<br />
                Tamil Nadu 609001, India
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <div className="font-medium text-foreground">Phone</div>
                +91 4364 222 234 / 235
              </div>
            </li>
            <li className="flex gap-3">
              <Mail className="h-5 w-5 mt-0.5 text-primary shrink-0" />
              <div>
                <div className="font-medium text-foreground">Email</div>
                info@daac.edu.in
              </div>
            </li>
          </ul>
          <div className="mt-8 overflow-hidden rounded-lg border border-border shadow-sm">
            <iframe
              title="College location map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.64%2C11.08%2C79.72%2C11.13&layer=mapnik&marker=11.103%2C79.6535"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form onSubmit={onSubmit} noValidate className="rounded-lg border border-border bg-card p-8 shadow-sm h-fit">
          <h2 className="font-serif text-2xl font-semibold">Send us a message</h2>
          {sent && (
            <div className="mt-4 flex items-center gap-2 rounded-md bg-secondary p-3 text-sm text-secondary-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              Thanks — we'll get back to you within two working days.
            </div>
          )}
          <div className="mt-6 space-y-4">
            <Field name="name" label="Full Name" error={errors.name} />
            <Field name="email" label="Email" type="email" error={errors.email} />
            <Field name="subject" label="Subject" />
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}

function Field({ name, label, type = "text", error }: { name: string; label: string; type?: string; error?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/30"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
