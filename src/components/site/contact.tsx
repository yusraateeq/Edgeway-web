"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./reveal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { CONTACT, SERVICES } from "./site-data";


const formSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please tell us a bit more (10+ characters)"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Request failed");
      }
      setSubmitted(true);
      toast({
        title: "Request received",
        description: "We'll be in touch within one business day.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Something went wrong",
        description:
          err instanceof Error
            ? err.message
            : "Please try again or call us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      aria-labelledby="contact-heading"
      className="bg-background py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Left: contact info */}
          <Reveal variant="slide-right" className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              Get in Touch
            </span>
            <h2
              id="contact-heading"
              className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground"
            >
              Get Your Free Security Assessment
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Tell us about your site and we&rsquo;ll build a tailored quote —
              usually within one business day. Prefer to talk? Call us now.
            </p>

            <div className="mt-8 space-y-3">
              <a
                href={CONTACT.phoneHref}
                className="card-glow group flex items-center gap-4 rounded-xl p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-gold">
                  <Phone className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Phone
                  </span>
                  <span className="font-heading text-base font-bold text-foreground group-hover:text-gold-dark">
                    {CONTACT.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={CONTACT.emailHref}
                className="card-glow group flex items-center gap-4 rounded-xl p-4"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-gold">
                  <Mail className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Email
                  </span>
                  <span className="font-heading text-base font-bold text-foreground group-hover:text-gold-dark truncate">
                    {CONTACT.email}
                  </span>
                </span>
              </a>

              <div className="card-glow flex items-center gap-4 rounded-xl p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-gold">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Service Area
                  </span>
                  <span className="text-sm font-medium text-foreground">
                    {CONTACT.addressLine}
                  </span>
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-amber/30 bg-amber/5 p-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-ink text-amber">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Hours
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    24/7/365 — Dispatch Always On
                  </span>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal variant="slide-left" className="lg:col-span-3">
            <div className="card-glow rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold/15 text-gold-dark">
                    <CheckCircle2 className="h-9 w-9" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-foreground">
                    Thank you — request received
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Our team will review your site details and reach out within
                    one business day. For urgent needs, call{" "}
                    <a
                      href={CONTACT.phoneHref}
                      className="font-semibold text-gold-dark underline-offset-4 hover:underline"
                    >
                      {CONTACT.phoneDisplay}
                    </a>
                    .
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setSubmitted(false)}
                  >
                    Send another request
                  </Button>
                </div>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold uppercase tracking-wide">
                              Full Name
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Jane Smith"
                                autoComplete="name"
                                className="h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-xs font-bold uppercase tracking-wide">
                              Phone
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="(747) 555-0123"
                                type="tel"
                                autoComplete="tel"
                                className="h-11"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wide">
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="you@company.com"
                              type="email"
                              autoComplete="email"
                              className="h-11"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="service"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wide">
                            Service of Interest
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={field.value}
                          >
                            <FormControl>
                              <SelectTrigger className="h-11 w-full">
                                <SelectValue placeholder="Select a service" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {SERVICES.map((s) =>
                                s.offerings.map((o) => (
                                  <SelectItem
                                    key={o.name}
                                    value={`${s.title} — ${o.name}`}
                                  >
                                    {s.title} — {o.name}
                                  </SelectItem>
                                )),
                              )}
                              <SelectItem value="Not sure — I need advice">
                                Not sure — I need advice
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-xs font-bold uppercase tracking-wide">
                            Tell Us About Your Site
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="What are you protecting? Where is the site? Any specific concerns or times?"
                              className="min-h-[120px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={form.formState.isSubmitting}
                      className="w-full bg-gold text-ink font-bold uppercase tracking-wide shadow-lg shadow-gold/20 hover:bg-gold-light hover:text-ink disabled:opacity-60"
                    >
                      {form.formState.isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Request Free Quote
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground">
                      We respond within one business day. Your information is
                      never shared.
                    </p>
                  </form>
                </Form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
