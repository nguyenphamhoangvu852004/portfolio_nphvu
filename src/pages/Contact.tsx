import { SEO } from "@/components/SEO";
import { contactDetails } from "@/data/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import React, { useState } from "react";

export function Contact() {
  const { email, phone } = contactDetails;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Mock submit loader
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Nguyen Pham Hoang Vu. Reach out via email, phone, or send an instant message through the contact form."
      />

      <section className="container mx-auto max-width py-8 lg:py-0 lg:h-[calc(100dvh-160px)] lg:min-h-[500px] lg:max-h-[750px] lg:flex lg:flex-col lg:justify-center lg:overflow-hidden">
        <SectionHeadingAndIntro />

        <div className="grid grid-cols-1 gap-6 mt-6 lg:grid-cols-5 lg:gap-8 lg:mt-8 lg:items-stretch">
          {/* Contact Details cards */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-dark-content/10 bg-slate-50/50 p-5 dark:border-light-content/10 dark:bg-dark-card/30 space-y-4">
              <h3 className="text-base font-semibold text-dark-heading dark:text-light-heading">
                Contact Information
              </h3>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-sm">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-dark-heading dark:text-light-heading">
                    Email
                  </h4>
                  <a
                    href={`mailto:${email}`}
                    className="text-xs font-light text-content hover:underline md:text-sm"
                  >
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-sm">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-dark-heading dark:text-light-heading">
                    Phone
                  </h4>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-xs font-light text-content hover:underline md:text-sm"
                  >
                    {phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-brand text-white shadow-sm">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-dark-heading dark:text-light-heading">
                    Location
                  </h4>
                  <p className="text-xs font-light text-content md:text-sm">
                    Ho Chi Minh City, Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl border border-dark-content/10 p-5 dark:border-light-content/10 dark:bg-dark-card/10">
            <AnimatePresence mode="wait">
              {submitSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-8 text-center"
                >
                  <CheckCircle2 className="h-12 w-12 text-emerald-500 mb-3 animate-bounce" />
                  <h3 className="text-xl font-bold text-dark-heading dark:text-light-heading">
                    Message Sent!
                  </h3>
                  <p className="text-content mt-1.5 max-w-xs text-xs font-light">
                    Thank you for reaching out! I've received your request and
                    will get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="mt-4 rounded-lg bg-gradient-brand px-5 py-2 text-xs font-semibold text-white shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-3.5 lg:space-y-4"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-dark-heading dark:text-light-heading mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full rounded-lg border bg-transparent px-3.5 py-2 text-xs text-dark-heading outline-none dark:text-light-heading transition-colors duration-200 ${
                          errors.name
                            ? "border-red-500"
                            : "border-dark-content/20 dark:border-light-content/20 focus:border-sky-500"
                        }`}
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-500 mt-0.5">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-dark-heading dark:text-light-heading mb-1">
                        Email
                      </label>
                      <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full rounded-lg border bg-transparent px-3.5 py-2 text-xs text-dark-heading outline-none dark:text-light-heading transition-colors duration-200 ${
                          errors.email
                            ? "border-red-500"
                            : "border-dark-content/20 dark:border-light-content/20 focus:border-sky-500"
                        }`}
                        placeholder="Your email"
                      />
                      {errors.email && (
                        <p className="text-[10px] text-red-500 mt-0.5">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark-heading dark:text-light-heading mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-dark-content/20 bg-transparent px-3.5 py-2 text-xs text-dark-heading outline-none dark:border-light-content/20 dark:text-light-heading focus:border-sky-500 transition-colors duration-200"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-dark-heading dark:text-light-heading mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full rounded-lg border bg-transparent px-3.5 py-2 text-xs text-dark-heading outline-none dark:text-light-heading transition-colors duration-200 ${
                        errors.message
                          ? "border-red-500"
                          : "border-dark-content/20 dark:border-light-content/20 focus:border-sky-500"
                      }`}
                      placeholder="Your message details..."
                    />
                    {errors.message && (
                      <p className="text-[10px] text-red-500 mt-0.5">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-brand py-2.5 text-xs font-semibold text-white shadow-md hover:scale-[1.01] active:scale-[0.99] disabled:opacity-80 transition-all duration-200"
                  >
                    {isSubmitting ? (
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        Send Message (Feature is in progress 😊)
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeadingAndIntro() {
  return (
    <div className="space-y-1">
      <h2 className="text-2xl font-bold text-dark-heading dark:text-light-heading md:text-3xl lg:text-4xl xl:text-5xl xl:leading-tight">
        Let's Work Together
      </h2>
      <p className="text-content text-xs md:text-sm lg:text-base leading-relaxed">
        Have an exciting project, job opportunity, or just want to chat backend
        architecture? Shoot me a message!
      </p>
    </div>
  );
}
