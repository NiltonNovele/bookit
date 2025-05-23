"use client";

import { useState } from "react";
import { Accordion, AccordionItem } from "@radix-ui/react-accordion";
import {
  Rocket,
  Users,
  BookOpenText,
  MessageCircle,
  FileText,
  ChevronDown,
  Smartphone,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const sections = [
  { id: "about", label: "About" },
  { id: "team", label: "Team" },
  { id: "how", label: "How It Works" },
  { id: "ai", label: "BookAI" },
  { id: "docs", label: "Docs" },
];

const AboutPage = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const toggleAccordion = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <main className="w-full bg-white text-[#333]">
      {/* Sticky Navigation */}
      <nav className="relative w-full bg-white/90 backdrop-blur border-b border-orange-100 shadow-sm py-4">
        <ul className="flex justify-center gap-6 text-sm sm:text-base font-semibold text-orange-600">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:underline">
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section
        id="about"
        className="max-w-7xl mx-auto px-6 py-20 text-center space-y-8"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
        >
          <Rocket className="w-12 h-12 text-orange-500 mx-auto" />
          <h1 className="text-5xl font-bold text-orange-600">
            BookIt: Booking Made Simple
          </h1>
          <p className="text-gray-700 max-w-3xl mx-auto text-lg">
            Born in Cape Town, BookIt was crafted by young African students who
            believe booking a service should be as easy as sending a message.
            Whether you're in the Kaap Stad or Jo'burg — we bridge the gap
            between you and what you need.
          </p>
          <div className="w-full h-64 rounded-xl bg-orange-100 shadow-inner flex items-center justify-center mt-6">
            [ Hero Image / Banner Placeholder ]
          </div>
        </motion.div>
      </section>

      <section
        id="team"
        className="max-w-7xl mx-auto px-6 py-20 space-y-12 text-center"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          <Users className="w-12 h-12 text-orange-500 mx-auto" />
          <h2 className="text-4xl font-bold text-orange-600">
            Meet the Founders
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Driven by curiosity, design, and a mission to empower service
            providers across Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-12 pt-10">
            <div className="text-center space-y-2">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/nilton.jpeg"
                  alt="Nilton Novele"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-bold">Nilton Novele</h4>
              <p className="text-sm text-gray-600">CTO</p>
            </div>

            <div className="text-center space-y-2">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg">
                <Image
                  src="/jumpex.jpg"
                  alt="Partner Name"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="text-lg font-bold">Henzel Tibana</h4>
              <p className="text-sm text-gray-600">COO</p>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="how" className="bg-orange-50 py-20 px-6">
        <motion.div
          className="max-w-7xl mx-auto space-y-16"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl font-bold text-orange-600 text-center">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-2xl text-orange-500 font-semibold">
                <Smartphone /> Clients
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Search services via web or WhatsApp</li>
                <li>Filter by location, category, or availability</li>
                <li>No login, no hassle — just book!</li>
                <li>Confirmation via SMS & Email</li>
              </ul>
              <div className="h-48 bg-orange-200 rounded-lg flex items-center justify-center text-orange-600">
                [ Screenshot - Client View ]
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-2xl text-orange-500 font-semibold">
                <Lightbulb /> Providers
              </h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                <li>Build a profile with your services & pricing</li>
                <li>Get bookings in real-time</li>
                <li>Use our dashboard to manage traffic</li>
                <li>Connect with clients via WhatsApp</li>
              </ul>
              <div className="h-48 bg-orange-200 rounded-lg flex items-center justify-center text-orange-600">
                [ Screenshot - Provider Dashboard ]
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="ai"
        className="max-w-7xl mx-auto px-6 py-20 text-center space-y-8"
      >
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <MessageCircle className="text-orange-500 w-10 h-10 mx-auto" />
          <h2 className="text-4xl font-bold text-orange-600">
            BookAI + WhatsApp
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            No more forms. Just type “Book a haircut at 2pm” and BookAI handles
            it all. Seamlessly connects to WhatsApp so service providers can
            reply fast.
          </p>
          <div className="h-64 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600">
            [ BookAI + WhatsApp Screenshot ]
          </div>
        </motion.div>
      </section>

      <section id="docs" className="bg-orange-50 py-20 px-6">
        <motion.div
          className="max-w-4xl mx-auto space-y-10"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <FileText className="text-orange-500 w-10 h-10 mx-auto" />
          <h2 className="text-4xl font-bold text-orange-600 text-center">
            Legal & Documentation
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                title: "Terms & Conditions",
                desc: "All terms, legal responsibilities, and platform liabilities.",
                file: "/docs/terms-and-conditions.pdf",
              },
              {
                title: "Privacy Policy",
                desc: "How we manage and protect your data, including AI and WhatsApp use.",
                file: "/docs/privacy-policy.pdf",
              },
              {
                title: "Terms of Use",
                desc: "Guidelines for using BookIt as a client or service provider.",
                file: "/docs/terms-of-use.pdf",
              },
            ].map(({ title, desc, file }, i) => (
              <AccordionItem key={i} value={title}>
                <button
                  onClick={() => toggleAccordion(title)}
                  className="w-full text-left flex justify-between items-center py-4 px-5 bg-orange-100 rounded-lg shadow"
                >
                  <span className="font-semibold text-orange-800">{title}</span>
                  <ChevronDown
                    className={`transition-transform ${
                      openItem === title ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openItem === title && (
                  <div className="bg-white px-5 py-4 border border-orange-200 rounded-b-xl shadow-sm">
                    <p className="text-sm text-gray-700 mb-2">{desc}</p>
                    <a
                      href={file}
                      target="_blank"
                      className="text-orange-600 underline text-sm font-medium"
                    >
                      Download PDF
                    </a>
                  </div>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </section>
    </main>
  );
};

export default AboutPage;
