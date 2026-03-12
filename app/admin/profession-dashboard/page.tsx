"use client";
import React, { useState } from "react";
import { HOMEPAGE_DATA } from "@/data/home-data/home-data";

export default function ProfessionDashboard() {
  // Editable state for all text fields
  const [header, setHeader] = useState(HOMEPAGE_DATA.header);
  const [footer, setFooter] = useState(HOMEPAGE_DATA.footer);
  const [services, setServices] = useState(HOMEPAGE_DATA.services);
  const [features, setFeatures] = useState(HOMEPAGE_DATA.features);
  const [stats, setStats] = useState(HOMEPAGE_DATA.stats);
  const [testimonials, setTestimonials] = useState(HOMEPAGE_DATA.testimonials);
  const [contact, setContact] = useState(HOMEPAGE_DATA.contact);

  // Generic handler for text fields
const handleChange = <T extends Record<string, any> | Record<string, any>[]>(
    section: T,
    key: string,
    value: string | number,
    idx: number | null = null
): T => {
    if (idx !== null) {
        // For array sections
        const updated = [...(section as Record<string, any>[])];
        updated[idx] = { ...updated[idx], [key]: value };
        return updated as T;
    } else {
        // For object sections
        return { ...(section as Record<string, any>), [key]: value } as T;
    }
};

  return (
    <div className="p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Profession Dashboard (Editable)</h1>

      {/* Header Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Header</h2>
        <input
          className="border p-2 rounded w-full mb-2"
          value={header.brand}
          onChange={e => setHeader(handleChange(header, "brand", e.target.value))}
          placeholder="Brand Name"
        />
        <input
          className="border p-2 rounded w-full"
          value={header.tagline}
          onChange={e => setHeader(handleChange(header, "tagline", e.target.value))}
          placeholder="Tagline"
        />
      </section>

      {/* Footer Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Footer</h2>
        <input
          className="border p-2 rounded w-full mb-2"
          value={footer.brand}
          onChange={e => setFooter(handleChange(footer, "brand", e.target.value))}
          placeholder="Footer Brand"
        />
        <input
          className="border p-2 rounded w-full mb-2"
          value={footer.description}
          onChange={e => setFooter(handleChange(footer, "description", e.target.value))}
          placeholder="Footer Description"
        />
        <input
          className="border p-2 rounded w-full"
          value={footer.tagline}
          onChange={e => setFooter(handleChange(footer, "tagline", e.target.value))}
          placeholder="Footer Tagline"
        />
      </section>

      {/* Services Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Services</h2>
        {services.map((service, idx) => (
          <div key={service.id} className="border rounded p-4 mb-4">
            <input
              className="border p-2 rounded w-full mb-2"
              value={service.title}
              onChange={e => setServices(handleChange(services, "title", e.target.value, idx))}
              placeholder="Service Title"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={service.description}
              onChange={e => setServices(handleChange(services, "description", e.target.value, idx))}
              placeholder="Service Description"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={service.priceLabel}
              onChange={e => setServices(handleChange(services, "priceLabel", e.target.value, idx))}
              placeholder="Price Label"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={service.image}
              onChange={e => setServices(handleChange(services, "image", e.target.value, idx))}
              placeholder="Image URL"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={service.alternativeText}
              onChange={e => setServices(handleChange(services, "alternativeText", e.target.value, idx))}
              placeholder="Alternative Text"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={service.href}
              onChange={e => setServices(handleChange(services, "href", e.target.value, idx))}
              placeholder="Service Link"
            />
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Features</h2>
        {features.map((feature, idx) => (
          <div key={feature.iconKey} className="border rounded p-4 mb-4">
            <input
              className="border p-2 rounded w-full mb-2"
              value={feature.title}
              onChange={e => setFeatures(handleChange(features, "title", e.target.value, idx))}
              placeholder="Feature Title"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={feature.description}
              onChange={e => setFeatures(handleChange(features, "description", e.target.value, idx))}
              placeholder="Feature Description"
            />
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Stats</h2>
        {stats.map((stat, idx) => (
          <div key={stat.label} className="border rounded p-4 mb-4 flex gap-2">
            <input
              className="border p-2 rounded w-1/3"
              value={stat.number}
              onChange={e => setStats(handleChange(stats, "number", e.target.value, idx))}
              placeholder="Number"
            />
            <input
              className="border p-2 rounded w-2/3"
              value={stat.label}
              onChange={e => setStats(handleChange(stats, "label", e.target.value, idx))}
              placeholder="Label"
            />
          </div>
        ))}
      </section>

      {/* Testimonials Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Testimonials</h2>
        {testimonials.map((t, idx) => (
          <div key={idx} className="border rounded p-4 mb-4">
            <input
              className="border p-2 rounded w-full mb-2"
              value={t.name}
              onChange={e => setTestimonials(handleChange(testimonials, "name", e.target.value, idx))}
              placeholder="Name"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={t.role}
              onChange={e => setTestimonials(handleChange(testimonials, "role", e.target.value, idx))}
              placeholder="Role"
            />
            <textarea
              className="border p-2 rounded w-full mb-2"
              value={t.content}
              onChange={e => setTestimonials(handleChange(testimonials, "content", e.target.value, idx))}
              placeholder="Testimonial Content"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={t.rating}
              type="number"
              min="1"
              max="5"
              onChange={e => setTestimonials(handleChange(testimonials, "rating", e.target.value, idx))}
              placeholder="Rating"
            />
            <input
              className="border p-2 rounded w-full mb-2"
              value={t.image}
              onChange={e => setTestimonials(handleChange(testimonials, "image", e.target.value, idx))}
              placeholder="Image URL"
            />
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Contact</h2>
        <input
          className="border p-2 rounded w-full mb-2"
          value={contact.phone}
          onChange={e => setContact(handleChange(contact, "phone", e.target.value))}
          placeholder="Phone"
        />
        <input
          className="border p-2 rounded w-full mb-2"
          value={contact.email}
          onChange={e => setContact(handleChange(contact, "email", e.target.value))}
          placeholder="Email"
        />
        <input
          className="border p-2 rounded w-full"
          value={contact.address}
          onChange={e => setContact(handleChange(contact, "address", e.target.value))}
          placeholder="Address"
        />
      </section>
    </div>
  );
}
