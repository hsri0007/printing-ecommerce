import { NextResponse } from "next/server"

export async function GET() {
  // In a real app, this could read from a DB. For now, we return structured JSON.
  const data = {
    header: {
      brand: "Brahmani Grahics",
    },
    services: [
      {
        id: "business-cards",
        title: "Business Cards",
        description: "Professional business cards with premium finishes",
        priceLabel: "Starting from ₹299",
        image: "/images/services/business-cards/tech-startup.png",
        href: "/services/business-cards",
        popular: true,
      },
      {
        id: "t-shirt-printing",
        title: "T-Shirt Printing",
        description: "Custom t-shirts with your designs and logos",
        priceLabel: "Starting from ₹199",
        image: "/images/services/t-shirt-printing/custom-tshirt-printing.png",
        href: "/services/t-shirt-printing",
        popular: true,
      },
      {
        id: "wedding-cards",
        title: "Wedding Cards",
        description: "Beautiful wedding invitations for your special day",
        priceLabel: "Starting from ₹15/card",
        image: "/images/services/wedding-cards/royal-traditional.png",
        href: "/services/wedding-cards",
      },
      {
        id: "pamphlets-flyers",
        title: "Pamphlets & Flyers",
        description: "Eye-catching promotional materials",
        priceLabel: "Starting from ₹2/piece",
        image: "/images/services/pamphlets-flyers/beauty-salon.png",
        href: "/services/pamphlets-flyers",
      },
      {
        id: "flex-printing",
        title: "Flex Printing",
        description: "Large format printing for banners and displays",
        priceLabel: "Starting from ₹25/sq ft",
        image: "/images/services/flex-printing/hero.png",
        href: "/services/flex-printing",
      },
      {
        id: "hoardings",
        title: "Hoardings",
        description: "Large outdoor advertising displays",
        priceLabel: "Starting from ₹150/sq ft",
        image: "/images/services/pamphlets-flyers/beauty-salon.png",
        href: "/services/hoardings",
      },
    ],
    features: [
      {
        iconKey: "printer",
        title: "High-Quality Printing",
        description: "State-of-the-art printing technology for crisp, vibrant results",
      },
      {
        iconKey: "palette",
        title: "Custom Designs",
        description: "Professional design services to bring your vision to life",
      },
      {
        iconKey: "clock",
        title: "Fast Turnaround",
        description: "Quick delivery without compromising on quality",
      },
      {
        iconKey: "shield",
        title: "Quality Guarantee",
        description: "100% satisfaction guarantee on all our printing services",
      },
    ],
    stats: [
      { number: "40+", label: "Happy Customers" },
      { number: "500+", label: "Orders Completed" },
      { number: "99.9%", label: "Customer Satisfaction" },
      { number: "24/7", label: "Customer Support" },
    ],
    testimonials: [
      {
        name: "Rajesh Kumar",
        role: "Business Owner",
        content: "Excellent quality and service. PrintPro delivered exactly what we needed for our marketing campaign.",
        rating: 5,
        image: "/customer-avatar-rajesh.png",
      },
      {
        name: "Priya Sharma",
        role: "Event Manager",
        content: "Fast delivery and professional finish. The wedding cards were absolutely beautiful!",
        rating: 5,
        image: "/customer-avatar-priya.png",
      },
      {
        name: "Amit Patel",
        role: "Marketing Director",
        content: "Great value for money. The flex banners helped boost our brand visibility significantly.",
        rating: 5,
        image: "/customer-avatar-amit.png",
      },
    ],
    contact: {
      phone: "+91 8121146633",
      email: "info@brahmanigrahics.com",
      address: "1-1-54 STREET NO.1 Kakateeya Nagar, Habsiguda, Hyderabad, Telangana 500007",
    },
  }

  return NextResponse.json(data, {
    headers: {
      // Cache API response for 10 minutes (tune as needed)
      "Cache-Control": "public, s-maxage=600, stale-while-revalidate=60",
    },
  })
}
