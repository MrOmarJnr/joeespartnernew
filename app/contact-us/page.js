import React from "react";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/footer";
import ContactBanner from "@/components/banners/contactBanner";
import Reveal from "@/components/animations/reveal";
import { pagePath } from "@/components/navigation/pagePath";
import Image from "next/image";
import arc from "@/public/home/arc.webp";
import JsonLd from "@/components/metaTools/json-ld";

export const metadata = {
  title: pagePath.contactUs.title,
  description: pagePath.contactUs.description,
  keywords: pagePath.contactUs.keyword,
  openGraph: {
    title: pagePath.contactUs.title,
    description: pagePath.contactUs.description,
  },
  alternates: {
    canonical: pagePath.contactUs.src,
  },
};

export default function ContactUs() {
  const jsonLdWebpage = {
    "@context": "https://schema.org/",
    "@type": "WebPage",
    name: pagePath.contactUs.title,
    description: pagePath.contactUs.description,
    url: `${pagePath.website.url}${pagePath.contactUs.src}`,
    publisher: {
      "@type": "WebSite",
      name: pagePath.website.name,
    },
  };

  const ContactInfo = ({ title, addressLines, isCall }) => (
    <div className="flex gap-x-2 items-center">
      {isCall ? (
        <Image src="/contact/call_us.svg" alt="Call us" width={32} height={32} />
      ) : (
        <svg
          className="text-[#969694] w-8 h-8"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
            d="M256 48c-79.5 0-144 61.39-144 137 0 87 96 224.87 131.25 272.49a15.77 15.77 0 0 0 25.5 0C304 409.89 400 272.07 400 185c0-75.61-64.5-137-144-137z"
          ></path>
          <circle
            cx="256"
            cy="192"
            r="48"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="32"
          ></circle>
        </svg>
      )}
      <div>
        <strong>{title}</strong>
        <p className="mt-1">{addressLines.join("\n")}</p>
      </div>
    </div>
  );

  return (
    <>
      <JsonLd schema={jsonLdWebpage} />
      <Header />
      <main className="bg-[#222222]">
        <ContactBanner />
        <section className="py-24 xl:py-32 md:py-12">
          <div className="container">
            <div className="flex md:flex-col justify-between gap-10">
              <div className="w-full md:w-full flex flex-col gap-10">
                <Reveal>
                  <h2 className="mb-6 text-green-5">Let&apos;s get in Touch</h2>
                </Reveal>
                <Reveal>
                  <p className="w-5/6 text-p ">
                    If you have any questions, or wish to see how our services can transform your business, get in touch with us.
                  </p>
                </Reveal>
                <Reveal>
                  <h4 className="mb-2 text-[#ffffff] font-semibold">Our Location</h4>
                  <div className="flex flex-col gap-4">
                    <ContactInfo 
                      title="SIC Building, Tema Comm. 2"
                      addressLines={["Tema – Ghana", "P.O. Box BT 625, Tema – Ghana"]}
                    />
                    <ContactInfo 
                      title="Afieziwah Style Homes"
                      addressLines={["2nd Addogono link Addogono-Nungua"]}
                    />
                  </div>
                </Reveal>
                <Reveal>
                  <h4 className="mt-6 mb-6 text-[#ffffff]">Call us</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ContactInfo 
                      title="Tema Office:"
                      addressLines={["0264349170", "0244819343"]}
                      isCall
                    />
                    <ContactInfo 
                      title="Addogono-Nungua Office:"
                      addressLines={["0264349170", "0208117484", "0244649540"]}
                      isCall
                    />
                  </div>
                </Reveal>
              </div>
              <div className="w-full md:w-full flex flex-col gap-8">
                <Reveal>
                  <h2 className="mb-6 text-[#ffffff]">Locate us</h2>
                </Reveal>
                <div className="w-full">
                  <iframe
                    className="w-full h-96 border-0 rounded-md"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.551478858392!2d-0.0124017!3d5.6330195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf8745b1640c7f%3A0x3d493f7b1d9c89d5!2sSIC%20Life%20Company%20Limited-Tema%20Branch%20Office!5e0!3m2!1sen!2sgh!4v1739874025707!5m2!1sen!2sgh"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <Reveal className="w-full relative mt-24 xl:mt-32">
            <Image src={arc} alt="Arc" width={1920} height={68} className="mix-blend-lighten pt-12" />
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
