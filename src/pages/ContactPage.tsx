import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { ComicButton } from "@/components/ComicButton";
import { Mail, Calendar, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", stage: "Idea", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`New startup chat — ${form.name} (${form.stage})`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nStage: ${form.stage}\n\n${form.message}`);
    window.location.href = `mailto:hello@startuplabs.dev?subject=${subject}&body=${body}`;
    toast({ title: "Opening your email…", description: "We'll reply within 24 hours." });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Let's talk"
          title="Schedule a call. Let's discuss your startup."
          subtitle="Bring the idea, the half-built MVP, or the scaling headache. We'll bring the experience."
        />
        <section className="container mx-auto pb-20">
          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-2 comic-border p-6 md:p-8 bg-card">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-bold mb-1">Your name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full comic-border-sm bg-background px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Email</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full comic-border-sm bg-background px-4 py-3"
                  />
                </div>
                <div>
                  <label className="block font-bold mb-1">Where are you?</label>
                  <select
                    value={form.stage}
                    onChange={(e) => setForm({ ...form, stage: e.target.value })}
                    className="w-full comic-border-sm bg-background px-4 py-3"
                  >
                    <option>Just an idea</option>
                    <option>Validating</option>
                    <option>MVP in progress</option>
                    <option>Launched, need to grow</option>
                    <option>Scaling / funded</option>
                  </select>
                </div>
                <div>
                  <label className="block font-bold mb-1">Tell us about your startup</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full comic-border-sm bg-background px-4 py-3"
                  />
                </div>
                <ComicButton variant="primary" size="lg">
                  <Calendar className="mr-2 h-5 w-5" /> Send & schedule
                </ComicButton>
              </form>
            </div>
            <div className="space-y-4">
              <div className="comic-border p-6 bg-accent">
                <Mail className="h-6 w-6 mb-2" />
                <h3 className="font-bold mb-1">Email us</h3>
                <a href="mailto:hello@startuplabs.dev" className="text-sm underline">hello@startuplabs.dev</a>
              </div>
              <div className="comic-border p-6 bg-secondary">
                <MessageSquare className="h-6 w-6 mb-2" />
                <h3 className="font-bold mb-1">Response time</h3>
                <p className="text-sm">Within 24 hours, every weekday.</p>
              </div>
              <div className="comic-border p-6 bg-pop/60">
                <Calendar className="h-6 w-6 mb-2" />
                <h3 className="font-bold mb-1">Free 30-min call</h3>
                <p className="text-sm">No pitch. Just a real conversation about your startup.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
