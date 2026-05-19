import { contactDetails } from "@/data/portfolio";

export function Contact() {
  const { email, phone } = contactDetails;

  return (
    <section id="contact" className="section container mx-auto max-width pb-24">
      <h2 className="text-center text-2xl font-semibold text-dark-heading dark:text-light-heading md:text-3xl lg:text-5xl md:font-bold">
       Contact me now! 
      </h2>
      <h3 className="mb-10 pt-5 text-center text-2xl font-semibold text-gradient md:pt-10 md:text-4xl lg:text-5xl md:font-bold">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>
      <span className=" block text-center text-xl font-light text-content">
        or
      </span>
      <h3 className="pt-2 text-center text-2xl font-semibold text-gradient md:py-6 md:text-4xl lg:text-5xl md:font-bold">
        <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
      </h3>
    </section>
  );
}
