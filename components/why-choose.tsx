import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reasons = [
  {
    title: "Same-Day & Next-Day Delivery",
    description:
      "Fast flex printing service in Uppal with guaranteed quick turnaround for urgent business needs.",
  },
  {
    title: "High-Quality Prints",
    description:
      "Premium materials and vibrant colors that make your banners, posters, and hoardings stand out.",
  },
  {
    title: "Best Prices in Uppal",
    description:
      "Transparent pricing with no hidden charges — perfect for bulk and repeat orders.",
  },
  {
    title: "Custom Sizes & Designs",
    description:
      "We handle any size — small posters to large hoardings — with personalized design support.",
  },
  {
    title: "Trusted by Local Businesses",
    description:
      "Serving Uppal, Habsiguda, Ramanthapur and surrounding areas with consistent quality.",
  },
];

export default function WhyChooseFlexUppal() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold tracking-tight">
          Why Choose Our Flex Printing in <span className="text-primary">Uppal?</span>
        </h2>
        <p className="text-muted-foreground mt-2">
          Reliable, affordable, and high-quality printing trusted by
          businesses across Uppal & East Hyderabad.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reasons.map((item, index) => (
          <Card key={index} className="shadow-sm border border-gray-200">
            <CardContent className="flex items-start gap-4 p-6">
              <CheckCircle className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
