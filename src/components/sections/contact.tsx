import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Check, Clock, Github, Linkedin, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { PERSON } from "@/data/portfolio";
import { Section, SectionHeading } from "@/components/common/section";
import { Reveal } from "@/components/common/reveal";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  subject: z.string().trim().min(2, "Add a short subject").max(140),
  message: z.string().trim().min(10, "Tell me a little more").max(1500),
});

type FormValues = z.infer<typeof schema>;

const FIELDS = [
  { name: "name", label: "Your name", type: "text" },
  { name: "email", label: "Email address", type: "email" },
  { name: "subject", label: "Subject", type: "text" },
] as const;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    const body = `${values.message}\n\n— ${values.name} (${values.email})`;
    window.location.href = `mailto:${PERSON.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
    toast.success("Opening your email client", { description: "Your message is ready to send." });
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <Section id="contact">
      <div className="surface-card relative overflow-hidden rounded-3xl px-6 py-12 sm:px-10 lg:px-14">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/4 h-72 w-[36rem] rounded-full opacity-30 blur-[110px]"
          style={{ background: "radial-gradient(circle, var(--color-primary), transparent 65%)" }}
        />

        <div className="relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Let's build something worth remembering."
              description="Tell me about the project. I reply to every serious enquiry."
            />

            <Reveal delay={0.1} className="mt-8 space-y-3">
              {[
                { icon: Phone, label: PERSON.phone, href: `tel:${PERSON.phone}` },
                { icon: Mail, label: PERSON.email, href: `mailto:${PERSON.email}` },
                { icon: MapPin, label: PERSON.location },
                { icon: Clock, label: PERSON.responseTime },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3 text-sm">
                  <span className="grid size-9 place-items-center rounded-xl border border-border/70 bg-surface/70 text-primary">
                    <row.icon className="size-4" />
                  </span>
                  {row.href ? (
                    <a href={row.href} className="hover:text-primary">
                      {row.label}
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{row.label}</span>
                  )}
                </div>
              ))}
            </Reveal>

            <Reveal delay={0.15} className="mt-8 flex gap-3">
              <a
                href={PERSON.github}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-surface/60 px-4 py-2.5 text-sm transition-colors hover:text-primary"
              >
                <Github className="size-4" /> GitHub
              </a>
              <a
                href={PERSON.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-surface/60 px-4 py-2.5 text-sm transition-colors hover:text-primary"
              >
                <Linkedin className="size-4" /> LinkedIn
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5" noValidate>
              {FIELDS.map((field) => (
                <div key={field.name} className="group relative">
                  <input
                    id={field.name}
                    type={field.type}
                    placeholder=" "
                    autoComplete={field.name === "name" ? "name" : field.name}
                    aria-invalid={Boolean(errors[field.name])}
                    {...register(field.name)}
                    className={cn(
                      "peer h-14 w-full rounded-xl border border-border/70 bg-surface/50 px-4 pt-5 text-sm outline-none transition-all",
                      "focus:border-primary/60 focus:ring-4 focus:ring-primary/12",
                      errors[field.name] && "border-destructive/60",
                    )}
                  />
                  <label
                    htmlFor={field.name}
                    className="pointer-events-none absolute top-2 left-4 text-[11px] text-muted-foreground transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:translate-y-0 peer-focus:text-[11px] peer-focus:text-primary"
                  >
                    {field.label}
                  </label>
                  {errors[field.name] && (
                    <p className="mt-1.5 text-xs text-destructive">{errors[field.name]?.message}</p>
                  )}
                </div>
              ))}

              <div className="group relative">
                <textarea
                  id="message"
                  rows={5}
                  placeholder=" "
                  aria-invalid={Boolean(errors.message)}
                  {...register("message")}
                  className={cn(
                    "peer w-full resize-none rounded-xl border border-border/70 bg-surface/50 px-4 pt-7 pb-4 text-sm outline-none transition-all",
                    "focus:border-primary/60 focus:ring-4 focus:ring-primary/12",
                    errors.message && "border-destructive/60",
                  )}
                />
                <label
                  htmlFor="message"
                  className="pointer-events-none absolute top-2.5 left-4 text-[11px] text-muted-foreground transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-2.5 peer-focus:text-[11px] peer-focus:text-primary"
                >
                  Project details
                </label>
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <motion.div whileTap={{ scale: 0.98 }}>
                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full rounded-xl">
                  {isSubmitting ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : sent ? (
                    <Check className="size-4" />
                  ) : (
                    <Send className="size-4" />
                  )}
                  {sent ? "Message ready" : "Send message"}
                </Button>
              </motion.div>
            </form>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
