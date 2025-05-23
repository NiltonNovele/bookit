"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center py-20 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
      </div>

      <div className="relative z-10 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* Left Text Section */}
        <motion.div
          className="flex-1 text-center md:text-left px-4 md:px-8"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-orange-600 leading-tight mb-6">
            Book Local Services <br className="hidden md:block" /> Instantly
          </h1>
          <p className="text-gray-700 text-lg md:text-xl mb-8 max-w-xl mx-auto md:mx-0">
            Discover and reserve appointments at salons, clinics, restaurants,
            and more — all in one place or via WhatsApp. Fast. Easy. Reliable.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              href="#"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full text-base font-medium shadow-lg hover:bg-orange-700 transition"
            >
              <CalendarCheck size={20} />
              Try BookIt Now
            </Link>
          </div>
        </motion.div>

        {/* Right Image/Illustration */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end w-full max-w-xl lg:max-w-2xl px-4 md:px-8"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="relative w-full aspect-[3/2] min-h-[220px] md:min-h-0">
            <Image
              src="/illus.jpg"
              alt="Booking Illustration"
              fill
              className="rounded-3xl shadow-xl object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
