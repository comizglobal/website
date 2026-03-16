import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  ShieldCheck,
  Factory,
  TruckIcon,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Our Services - CoMiz Global",
  description:
    "International trading services including sourcing, quality control, production management, and logistics.",
};

const services = [
  {
    image: "/images/product-management.png",
    title: "Sourcing & Procurement",
    description:
      "We identify and eliminate fake factories and unreliable suppliers before they impact your business. Complete risk assessment and verification for consumer electronics, home goods, fashion accessories, and trending products.",
  },
  {
    image: "/images/quality-assurance.png",
    title: "Quality Control",
    description:
      "Multi-stage inspections eliminate quality mismatches. We ensure what you approve is what you receive—no surprises in production.",
  },
  {
    image: "/images/global.png",
    title: "Production Management",
    description:
      "Full control and oversight of manufacturing to prevent delays and quality issues. Regular updates keep your project secured, on schedule, and within budget.",
  },
  {
    image: "/images/truck.png",
    title: "Logistics & Delivery",
    description:
      "Expert customs handling eliminates shipping delays and compliance issues. We navigate regulations so your shipments arrive on time across Middle East, Israel, and Europe.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Discovery",
    description: "Understand requirements and specifications",
  },
  {
    step: 2,
    title: "Sourcing",
    description: "Identify and verify suitable manufacturers",
  },
  {
    step: 3,
    title: "Production",
    description: "Monitor manufacturing and quality control",
  },
  {
    step: 4,
    title: "Logistics",
    description: "Coordinate shipping and delivery",
  },
];

const industries = [
  { name: "Electronics", iconSrc: "/icons/components.png" },
  { name: "Home & Lifestyle", iconSrc: "/icons/home.png" },
  { name: "Fashion / Textile", iconSrc: "/icons/tshirt.png" },
  { name: "Trending Products", iconSrc: "/icons/trend.png" },
  { name: "Consumer Goods", iconSrc: "/icons/shopping-bag.png" },
  { name: "Smart Devices", iconSrc: "/icons/gadgets.png" },
  { name: "Accessories", iconSrc: "/icons/gift.png" },
  { name: "Seasonal Items", iconSrc: "/icons/fire.png" },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-accent-beige py-20 md:py-32 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight animate-fade-in-up animation-delay-200">
              Our Services
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-[280px] sm:max-w-2xl md:max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in-up animation-delay-400">
              From factory verification to final delivery, every step is
              controlled. We secure your operations by eliminating sourcing
              risks before they impact your business.
            </p>

            {/* Process boxes */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animation-delay-600">
              {["Industries", "Support", "Process"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-full text-sm font-medium text-neutral-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-xs sm:text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                What We Offer
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              End-to-End Trade Support
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-[280px] sm:max-w-2xl mx-auto">
              We control and secure every stage of your supply chain to
              eliminate risks before they reach you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service) => (
              <Card
                key={service.title}
                className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-[#1C4332]/5 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1C4332]/0 to-[#1C4332]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1C4332]/20 rounded-full filter blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                      {/* <service.image className="w-7 h-7 text-white" /> */}

                      <Image
                        src={service.image}
                        alt={service.title}
                        width={28}
                        height={28}
                        className="object-contain brightness-0 saturate-100"
                      />

                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-[#1C4332] transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 h-1 w-16 bg-gradient-to-r from-[#1C4332] to-[#1C4332] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50/30 via-white to-accent-beige/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                  How We Work
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Simple, Structured, Fully Controlled
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Every step is monitored and controlled to eliminate risks before
                they reach you. From factory verification to final delivery,
                your operations are secured.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  step: "01",
                  title: "Factory Verification",
                  description:
                    "Comprehensive vetting of manufacturers through on-site audits, certifications review, and production capability assessment.",
                },
                {
                  step: "02",
                  title: "Sampling & Validation",
                  description:
                    "Product samples reviewed against your specifications. No production starts until you approve quality, materials, and finish.",
                },
                {
                  step: "03",
                  title: "Production Monitoring",
                  description:
                    "Ongoing oversight during manufacturing with regular updates, quality checks, and timeline management.",
                },
                {
                  step: "04",
                  title: "Final Inspection & Delivery",
                  description:
                    "Pre-shipment inspection, compliance verification, and coordinated logistics to ensure on-time delivery.",
                },
              ].map((item, index) => (
                <div key={item.step} className="relative group">
                  <div className="flex gap-6">
                    {/* Step Number */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg"
                      style={{
                        background:
                          "linear-gradient(to bottom right, #1C4332, #245940)",
                      }}
                    >
                      <span className="text-2xl font-bold text-white">
                        {item.step}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="text-xl font-bold text-neutral-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Line (hidden on last item in each column on mobile) */}
                  {index < 3 && (
                    <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-green-300 to-transparent"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                Our Expertise
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Specializing in fast-moving consumer goods and trending products
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {industries.map((industry) => (
                <Card
                  key={industry.name}
                  className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-white to-green-50/30 hover:-translate-y-1 cursor-default"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={industry.iconSrc}
                        alt={`${industry.name} icon`}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <p className="font-semibold text-neutral-900 text-sm group-hover:text-green-700 transition-colors">
                      {industry.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-accent-beige">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-brand-primary via-green-800 to-brand-primary">
              <CardContent className="p-10 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Secure Your Sourcing Operations?
                </h2>
                <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                  Tell us about your needs and we&apos;ll eliminate the risks
                  while connecting you with verified manufacturing partners.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-green-50 text-brand-primary font-semibold px-8 py-6 text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
                  >
                    <span className="flex items-center gap-2">
                      Start Your Project
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
