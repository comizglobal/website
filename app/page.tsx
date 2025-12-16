import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Globe2,
  Shield,
  TruckIcon,
  Search,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      icon: Search,
      title: "Sourcing & Procurement",
      description:
        "Direct access to verified manufacturers with comprehensive risk assessment. We eliminate fake factories and middlemen before they impact your business.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Multi-stage inspections and quality control to prevent product mismatches. What you approve is what you receive—no surprises.",
    },
    {
      icon: TruckIcon,
      title: "Logistics Management",
      description:
        "End-to-end shipping coordination with expert customs handling. We navigate regulations so your shipments arrive on time, without delays.",
    },
    {
      icon: Globe2,
      title: "Global Network",
      description:
        "Operations spanning Middle East, Israel, and Europe with local expertise to manage regional compliance and market-specific risks.",
    },
  ];

  const stats = [
    { value: "3+", label: "Continents Served" },
    { value: "100%", label: "Transparency" },
    { value: "24h", label: "Response Time" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-accent-beige py-20 md:py-32 lg:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight animate-fade-in-up animation-delay-200">
              International Trading
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">& Sourcing</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200 opacity-30 -z-10 transform -skew-y-1"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              We identify and eliminate sourcing risks before they impact your
              business.
            </p>

            {/* Region Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animation-delay-400">
              {["China", "Middle East", "Israel", "Europe"].map((region) => (
                <span
                  key={region}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-full text-sm font-medium text-neutral-700"
                >
                  {region}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-green-700 text-white font-semibold px-8 py-6 text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl shimmer-hover group"
                >
                  <span className="flex items-center gap-2">
                    Get In Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-300 hover:border-green-600 text-neutral-700 hover:text-green-700 font-semibold px-8 py-6 text-base rounded-xl transition-all duration-200 bg-white/50 backdrop-blur-sm"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-neutral-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-neutral-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                  What We Offer
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto mt-2"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Complete Trade Solutions
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                From factory verification to final delivery, every step is
                controlled. Our role is to secure your operations, not just find
                suppliers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="group relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-white to-green-50/20 card-glow"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-5">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #1C4332, #245940)",
                        }}
                      >
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3
                          className="text-xl font-bold text-neutral-900 mb-2 transition-colors duration-200"
                          style={{ color: "inherit" }}
                        >
                          {feature.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div
                      className="mt-6 h-1 w-12 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      style={{
                        background:
                          "linear-gradient(to right, #1C4332, #245940)",
                      }}
                    ></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group"
              >
                View all services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50/30 via-white to-accent-beige/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                  How We Work
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto mt-2"></div>
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

      {/* Real Risks We Eliminate Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50/30 via-white to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                  Real Risks We Eliminate
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto mt-2"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                We Secure Your Operations, Not Just Find Suppliers
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                International sourcing comes with hidden dangers. We identify
                and eliminate these risks before they impact your business, so
                you can focus on growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "No Fake Factories",
                  description:
                    "We verify every manufacturer through on-site visits, background checks, and compliance audits. No shell companies, no middlemen posing as factories.",
                },
                {
                  title: "No Hidden MOQ Traps",
                  description:
                    "Transparent minimum order quantities from day one. No surprise requirements after you've invested time and money in samples.",
                },
                {
                  title: "No Quality Mismatches",
                  description:
                    "What you approve in samples is what you receive in production. Our multi-stage inspections ensure consistency at every batch.",
                },
                {
                  title: "No Customs Nightmares",
                  description:
                    "Expert handling of documentation, compliance, and logistics. We navigate regulations so your shipments arrive on time, every time.",
                },
              ].map((risk) => (
                <Card
                  key={risk.title}
                  className="group relative border-2 border-neutral-200 hover:border-green-500/30 hover:shadow-xl transition-all duration-300 overflow-hidden bg-white"
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-5">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #1C4332, #245940)",
                        }}
                      >
                        <Shield className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">
                          {risk.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {risk.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-accent-blue-gray/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <div className="mb-4">
                  <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                    Why Choose Us
                  </span>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mt-2"></div>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                  Your Trusted Partner in Global Trade
                </h2>
                <p className="text-xl text-neutral-700 mb-4 leading-relaxed font-medium">
                  We secure your operations at every step. The right partnership
                  eliminates risks and makes everything possible.
                </p>
                <div className="space-y-4 mb-8">
                  {[
                    "Verified Suppliers Only — audits, factory visits, background checks, full compliance",
                    "Transparent Communication — clear reporting at every stage",
                    "Quality First — systematic inspections, international standards",
                    "On-Time Delivery — efficient supply chain coverage across Asia, Europe, and the Middle East",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-neutral-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold group"
                >
                  Learn more about us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Visual Element */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-accent-beige rounded-3xl transform rotate-3 opacity-50"></div>
                <Card className="relative border-0 shadow-2xl overflow-hidden">
                  <CardContent className="p-8 md:p-10 bg-gradient-to-br from-brand-primary to-green-800">
                    <div className="text-center text-white">
                      <Globe2 className="w-16 h-16 mx-auto mb-6 opacity-90" />
                      <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
                        Global Network
                      </h3>
                      <p className="text-green-100 mb-6 leading-relaxed">
                        Operations in UAE & Israel with verified suppliers
                        across Asia, Middle East & Europe.
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {["China", "UAE", "Israel", "France"].map((country) => (
                          <span
                            key={country}
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-green-100"
                          >
                            {country}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="mb-4">
                <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                  Leadership
                </span>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent mx-auto mt-2"></div>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                Meet Our Co-Founders
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
                CoMiz Global was founded by Joseph Cohen and Elioth Mizrahi with
                a shared vision: to revolutionize international trade by
                connecting businesses with the world&apos;s best manufacturers.
              </p>
            </div>

            {/* Founders Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-12">
              {/* Joseph Cohen */}
              <div className="group">
                <div className="bg-white border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:shadow-xl">
                  <div className="aspect-square overflow-hidden bg-neutral-100">
                    <Image
                      src="/jospeh.jpeg"
                      alt="Joseph Cohen - Co-Founder"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="p-6 text-center border-t border-neutral-100">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      Joseph Cohen
                    </h3>
                    <p className="text-sm text-neutral-600 font-semibold uppercase tracking-wide mb-2">
                      Co-Founder
                    </p>
                    <div className="w-12 h-0.5 bg-green-600 mx-auto mb-3"></div>
                    <p className="text-sm text-neutral-600">France</p>
                  </div>
                </div>
              </div>

              {/* Elioth Mizrahi */}
              <div className="group">
                <div className="bg-white border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:shadow-xl">
                  <div className="aspect-square overflow-hidden bg-neutral-100">
                    <Image
                      src="/elioth.jpeg"
                      alt="Elioth Mizrahi - Co-Founder"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <div className="p-6 text-center border-t border-neutral-100">
                    <h3 className="text-xl font-bold text-neutral-900 mb-1">
                      Elioth Mizrahi
                    </h3>
                    <p className="text-sm text-neutral-600 font-semibold uppercase tracking-wide mb-2">
                      Co-Founder
                    </p>
                    <div className="w-12 h-0.5 bg-green-600 mx-auto mb-3"></div>
                    <p className="text-sm text-neutral-600">Israel</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Expertise Section */}
            <div className="text-center max-w-3xl mx-auto">
              <p className="text-base text-neutral-700 leading-relaxed mb-8">
                With expertise spanning global trade, negotiation, finance, and
                business strategy, our founders bring a unique blend of
                international experience and entrepreneurial drive to every
                partnership.
              </p>

              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-neutral-300 hover:border-brand-primary hover:bg-brand-primary hover:text-white text-neutral-700 font-semibold px-8 py-6 text-base transition-all duration-200 group"
                >
                  <span className="flex items-center gap-2">
                    Learn About Our Story
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-brand-primary via-green-800 to-brand-primary">
              <CardContent className="p-10 md:p-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Start Your Sourcing Project?
                </h2>
                <p className="text-green-100 text-lg mb-8 max-w-2xl mx-auto">
                  Get in touch with our team to discuss your requirements. We
                  respond within 24 hours.
                </p>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-white hover:bg-green-50 text-brand-primary font-semibold px-8 py-6 text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group"
                  >
                    <span className="flex items-center gap-2">
                      Contact Us Today
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
