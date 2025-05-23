"use client";

import React from "react";
import Image from "next/image";

export const How = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 sm:px-8 md:px-12 lg:px-16">
      <h1 className="text-4xl font-extrabold text-orange-600 mb-12 text-center">
        How to Use BookIt!
      </h1>

      {/* Users Section */}
      <div className="mb-20 grid gap-10 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex justify-center md:order-1 order-1 mb-6 md:mb-0">
          <Image
            src="/dent.jpg"
            alt="Users using BookIt"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover
              w-48 sm:w-64 md:w-full"
            priority={false}
          />
        </div>

        {/* Text */}
        <div className="md:order-2 order-2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            For Users
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Find local services fast — salons, clinics, restaurants, and more —
            all from your browser or WhatsApp. Simple. Secure. Easy.
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>
              <strong>Search Smart:</strong> Quickly find services by category,
              location, or availability.
            </li>
            <li>
              <strong>Pick Your Best Match:</strong> Filter by rating, price, or
              distance.
            </li>
            <li>
              <strong>Book Instantly:</strong> Choose your date and time, then
              confirm in seconds.
            </li>
            <li>
              <strong>Stay Updated:</strong> Get booking confirmations and
              reminders via SMS and email.
            </li>
            <li>
              <strong>Manage Easily:</strong> View or cancel upcoming bookings
              anytime.
            </li>
            <li>
              <strong>Ask BookAI:</strong> Our AI assistant helps you find and
              book exactly what you need.
            </li>
          </ol>
        </div>
      </div>

      {/* Providers Section */}
      <div className="grid gap-10 md:grid-cols-2 items-center">
        {/* Image */}
        <div className="flex justify-center md:order-2 order-1 mb-6 md:mb-0">
          <Image
            src="/dent1.jpg"
            alt="Service Providers managing bookings"
            width={600}
            height={400}
            className="rounded-2xl shadow-md object-cover
              w-48 sm:w-64 md:w-full"
            priority={false}
          />
        </div>

        {/* Text */}
        <div className="md:order-1 order-2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            For Service Providers
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Manage your bookings and grow your customer base effortlessly.
            BookIt! keeps it smooth, smart, and secure.
          </p>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>
              <strong>Sign Up & Verify:</strong> Join us and get your business
              ready.
            </li>
            <li>
              <strong>Build Your Profile:</strong> Add your services, hours,
              prices, location, and photos.
            </li>
            <li>
              <strong>Control Your Bookings:</strong> Confirm, cancel, or update
              appointments anytime.
            </li>
            <li>
              <strong>Keep Availability Accurate:</strong> Only let customers
              book when you’re open.
            </li>
            <li>
              <strong>Get Noticed:</strong> Reach more customers with our
              growing platform.
            </li>
            <li>
              <strong>Connect Directly:</strong> Chat with your customers and
              provide top-notch service.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default How;
