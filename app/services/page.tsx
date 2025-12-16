import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Search,
  ShieldCheck,
  Factory,
  TruckIcon,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Package,
  Cpu,
  Home,
  Shirt,
  Zap,
  Watch,
  Gift,
} from "lucide-react";

export const metadata = {
  title: "Our Services - CoMiz Global",
  description:
    "International trading services including sourcing, quality control, production management, and logistics.",
};

const services = [
  {
    icon: Search,
    title: "Sourcing & Procurement",
    description:
      "We identify and eliminate fake factories and unreliable suppliers before they impact your business. Complete risk assessment and verification for consumer electronics, home goods, fashion accessories, and trending products.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "Multi-stage inspections eliminate quality mismatches. We ensure what you approve is what you receive—no surprises in production.",
  },
  {
    icon: Factory,
    title: "Production Management",
    description:
      "Full control and oversight of manufacturing to prevent delays and quality issues. Regular updates keep your project secured, on schedule, and within budget.",
  },
  {
    icon: TruckIcon,
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
  { name: "Electronics", icon: Cpu },
  { name: "Home & Lifestyle", icon: Home },
  { name: "Fashion / Textile", icon: Shirt },
  { name: "Trending Products", icon: Zap },
  { name: "Consumer Goods", icon: Package },
  { name: "Smart Devices", icon: Watch },
  { name: "Accessories", icon: Gift },
  { name: "Seasonal Items", icon: Sparkles },
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
              Our{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Services</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200 opacity-30 -z-10 transform -skew-y-1"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              From factory verification to final delivery, every step is
              controlled. We secure your operations by eliminating sourcing
              risks before they impact your business.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                What We Offer
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              End-to-End Trade Support
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
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
                    <div className="w-14 h-14 bg-gradient-to-br from-[#1C4332] to-[#1C4332] rounded-xl flex items-center justify-center shrink-0 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <service.icon className="w-7 h-7 text-white" />
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-accent-blue-gray/30 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                How We Work
              </span>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto mt-2"></div>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A fully controlled approach that eliminates risks at every stage,
              from concept to delivery
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative group">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-green-400 to-green-200"></div>
                  )}

                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4 shadow-lg transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 relative z-10">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-neutral-900 mb-2 text-lg group-hover:text-green-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {item.description}
                    </p>
                  </div>
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
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto mt-2"></div>
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
                      <industry.icon className="w-6 h-6 text-green-600" />
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
