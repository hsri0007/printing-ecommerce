"use client";
import React, { useState } from "react";
import { HOMEPAGE_DATA } from "@/data/home-data/home-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type SectionKey =
  | "header"
  | "footer"
  | "services"
  | "features"
  | "stats"
  | "testimonials"
  | "contact";

export default function ProfessionDashboard() {
  // editable state for all sections
  const [header, setHeader] = useState(HOMEPAGE_DATA.header);
  const [footer, setFooter] = useState(HOMEPAGE_DATA.footer);
  const [services, setServices] = useState(HOMEPAGE_DATA.services);
  const [features, setFeatures] = useState(HOMEPAGE_DATA.features);
  const [stats, setStats] = useState(HOMEPAGE_DATA.stats);
  const [testimonials, setTestimonials] = useState(
    HOMEPAGE_DATA.testimonials
  );
  const [contact, setContact] = useState(HOMEPAGE_DATA.contact);

  const [activeSection, setActiveSection] =
    useState<SectionKey>("header");

  const handleChange = <
    T extends Record<string, any> | Record<string, any>[]
  >(
    section: T,
    key: string,
    value: string | number,
    idx: number | null = null
  ): T => {
    if (idx !== null) {
      const updated = [...(section as Record<string, any>[])];
      updated[idx] = { ...updated[idx], [key]: value };
      return updated as T;
    } else {
      return { ...(section as Record<string, any>), [key]: value } as T;
    }
  };

  const handleSave = async (section: SectionKey) => {
    let payload: any;
    switch (section) {
      case "header":
        payload = header;
        break;
      case "footer":
        payload = footer;
        break;
      case "services":
        payload = services;
        break;
      case "features":
        payload = features;
        break;
      case "stats":
        payload = stats;
        break;
      case "testimonials":
        payload = testimonials;
        break;
      case "contact":
        payload = contact;
        break;
    }

    await fetch("/api/admin/homepage", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ section, data: payload }),
    });
    // show toast / re‑fetch as needed
  };

  const renderSectionForm = () => {
    switch (activeSection) {
      case "header":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Header</h2>
            <div>
              <Label htmlFor="brand">Brand</Label>
              <Input
                id="brand"
                value={header.brand}
                onChange={(e) =>
                  setHeader(
                    handleChange(header, "brand", e.target.value)
                  )
                }
              />
            </div>
            <div>
              <Label htmlFor="tagline">Tagline</Label>
              <Input
                id="tagline"
                value={header.tagline}
                onChange={(e) =>
                  setHeader(
                    handleChange(header, "tagline", e.target.value)
                  )
                }
              />
            </div>
            <Button onClick={() => handleSave("header")}>Save</Button>
          </div>
        );
      case "footer":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Footer</h2>
            <div>
              <Label htmlFor="footer-brand">Brand</Label>
              <Input
                id="footer-brand"
                value={footer.brand}
                onChange={(e) =>
                  setFooter(
                    handleChange(footer, "brand", e.target.value)
                  )
                }
              />
            </div>
            <div>
              <Label htmlFor="footer-description">Description</Label>
              <Textarea
                id="footer-description"
                value={footer.description}
                onChange={(e) =>
                  setFooter(
                    handleChange(footer, "description", e.target.value)
                  )
                }
              />
            </div>
            <div>
              <Label htmlFor="footer-tagline">Tagline</Label>
              <Input
                id="footer-tagline"
                value={footer.tagline}
                onChange={(e) =>
                  setFooter(
                    handleChange(footer, "tagline", e.target.value)
                  )
                }
              />
            </div>
            <Button onClick={() => handleSave("footer")}>Save</Button>
          </div>
        );
      case "services":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Services</h2>
            {services.map((s, idx) => (
              <div key={idx} className="space-y-2 border-b pb-4">
                <Label htmlFor={`service-title-${idx}`}>Title</Label>
                <Input
                  id={`service-title-${idx}`}
                  value={s.title}
                  onChange={(e) =>
                    setServices(
                      handleChange(services, "title", e.target.value, idx)
                    )
                  }
                />
                <Label htmlFor={`service-desc-${idx}`}>Description</Label>
                <Textarea
                  id={`service-desc-${idx}`}
                  value={s.description}
                  onChange={(e) =>
                    setServices(
                      handleChange(
                        services,
                        "description",
                        e.target.value,
                        idx
                      )
                    )
                  }
                />
              </div>
            ))}
            <Button onClick={() => handleSave("services")}>Save</Button>
          </div>
        );
      case "features":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Features</h2>
            {features.map((f, idx) => (
              <div key={idx} className="space-y-2 border-b pb-4">
                <Label htmlFor={`feature-title-${idx}`}>Title</Label>
                <Input
                  id={`feature-title-${idx}`}
                  value={f.title}
                  onChange={(e) =>
                    setFeatures(
                      handleChange(features, "title", e.target.value, idx)
                    )
                  }
                />
                <Label htmlFor={`feature-desc-${idx}`}>Description</Label>
                <Textarea
                  id={`feature-desc-${idx}`}
                  value={f.description}
                  onChange={(e) =>
                    setFeatures(
                      handleChange(
                        features,
                        "description",
                        e.target.value,
                        idx
                      )
                    )
                  }
                />
              </div>
            ))}
            <Button onClick={() => handleSave("features")}>Save</Button>
          </div>
        );
      case "stats":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Stats</h2>
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 border-b pb-4">
                <Label htmlFor={`stat-label-${idx}`}>Label</Label>
                <Input
                  id={`stat-label-${idx}`}
                  value={stat.label}
                  onChange={(e) =>
                    setStats(
                      handleChange(stats, "label", e.target.value, idx)
                    )
                  }
                />
                <Label htmlFor={`stat-value-${idx}`}>Value</Label>
                <Input
                  id={`stat-value-${idx}`}
                  type="number"
                  value={stat.number}
                  onChange={(e) =>
                    setStats(
                      handleChange(
                        stats,
                        "number",
                        e.target.value,
                        idx
                      )
                    )
                  }
                />
              </div>
            ))}
            <Button onClick={() => handleSave("stats")}>Save</Button>
          </div>
        );
      case "testimonials":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Testimonials</h2>
            {testimonials.map((t, idx) => (
              <div key={idx} className="space-y-2 border-b pb-4">
                <Label htmlFor={`testimonial-quote-${idx}`}>Quote</Label>
                <Textarea
                  id={`testimonial-quote-${idx}`}
                  value={t.content}
                  onChange={(e) =>
                    setTestimonials(
                      handleChange(testimonials, "content", e.target.value, idx)
                    )
                  }
                />
                <Label htmlFor={`testimonial-author-${idx}`}>Author</Label>
                <Input
                  id={`testimonial-author-${idx}`}
                  value={t.name}
                  onChange={(e) =>
                    setTestimonials(
                      handleChange(testimonials, "name", e.target.value, idx)
                    )
                  }
                />
                <Label htmlFor={`testimonial-role-${idx}`}>Role</Label>
                <Input
                  id={`testimonial-role-${idx}`}
                  value={t.role}
                  onChange={(e) =>
                    setTestimonials(
                      handleChange(testimonials, "role", e.target.value, idx)
                    )
                  }
                />
              </div>
            ))}
            <Button onClick={() => handleSave("testimonials")}>
              Save
            </Button>
          </div>
        );
      case "contact":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Contact</h2>
            <div>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                value={contact.email}
                onChange={(e) =>
                  setContact(
                    handleChange(contact, "email", e.target.value)
                  )
                }
              />
            </div>
            <div>
              <Label htmlFor="contact-phone">Phone</Label>
              <Input
                id="contact-phone"
                value={contact.phone}
                onChange={(e) =>
                  setContact(
                    handleChange(contact, "phone", e.target.value)
                  )
                }
              />
            </div>
            <div>
              <Label htmlFor="contact-address">Address</Label>
              <Textarea
                id="contact-address"
                value={contact.address}
                onChange={(e) =>
                  setContact(
                    handleChange(contact, "address", e.target.value)
                  )
                }
              />
            </div>
            <Button onClick={() => handleSave("contact")}>Save</Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen">
      {/* left sidebar / navigation */}
      <aside className="w-56 border-r">
        <nav className="flex flex-col p-4 space-y-2">
          {(
            [
              "header",
              "footer",
              "services",
              "features",
              "stats",
              "testimonials",
              "contact",
            ] as SectionKey[]
          ).map((sec) => (
            <button
              key={sec}
              className={`text-left p-2 rounded ${
                activeSection === sec
                  ? "bg-gray-200"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => setActiveSection(sec)}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      {/* right panel / form */}
      <main className="flex-1 p-8 overflow-auto">
        {renderSectionForm()}
      </main>
    </div>
  );
}
