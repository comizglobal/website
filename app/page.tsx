"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Globe,
  CheckCircle2,
} from "lucide-react";

export default function HomePage() {
  const features = [
    {
      image: "/images/product-management.png",
      title: "Sourcing & Procurement",
      description:
        "Direct access to verified manufacturers with comprehensive risk assessment. We eliminate fake factories and middlemen before they impact your business.",
    },
    {
      image: "/images/quality.png",
      title: "Quality Assurance",
      description:
        "Multi-stage inspections and quality control to prevent product mismatches. What you approve is what you receive—no surprises.",
    },
    {
      image: "/images/truck.png",
      title: "Logistics Management",
      description:
        "End-to-end shipping coordination with expert customs handling. We navigate regulations so your shipments arrive on time, without delays.",
    },
    {
      image: "/images/global.png",
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

  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("animate-fade-in-up");
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
            observer.unobserve(target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el, index) => {
      const htmlEl = el as HTMLElement;
      const delay = htmlEl.dataset.delay || `${index * 80}ms`;
      htmlEl.style.opacity = "0";
      htmlEl.style.transform = "translateY(32px)";
      htmlEl.style.transition =
        "opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease, border-color 0.3s ease";
      htmlEl.style.transitionDelay = delay;
      observer.observe(htmlEl);
    });

    return () => observer.disconnect();
  }, []);

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
            <h1
              data-reveal
              data-delay="100ms"
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight"
            >
              International Trading
              <br />& Sourcing
            </h1>

            <p
              data-reveal
              data-delay="220ms"
              className="text-lg md:text-xl text-neutral-600 mb-6 max-w-3xl mx-auto leading-relaxed"
            >
              Global Sourcing. Reliable Partners. Smarter Trade.
            </p>

            {/* Region Pills */}
            <div
              data-reveal
              data-delay="320ms"
              className="flex flex-wrap justify-center gap-3 mb-10"
            >
              {["China", "Middle East", "Israel", "Europe"].map((region) => (
                <span
                  key={region}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm border border-green-200/50 rounded-full text-sm font-medium text-neutral-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                >
                  {region}
                </span>
              ))}
            </div>

            <div
              data-reveal
              data-delay="420ms"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-brand-primary hover:bg-green-700 text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-200 shadow-lg hover:shadow-xl shimmer-hover group hover:-translate-y-0.5"
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
                  className="group relative border-2 border-neutral-300 hover:border-green-600 text-neutral-700 hover:text-white font-semibold px-8 py-6 text-base rounded-full transition-all duration-300 bg-white/50 backdrop-blur-sm hover:shadow-xl hover:-translate-y-0.5 overflow-hidden"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></span>

                  <span className="relative flex items-center gap-2">
                    View Services
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
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
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  data-reveal
                  data-delay={`${index * 120}ms`}
                  className="text-center hover:-translate-y-1 transition-transform duration-300"
                >
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
            <div data-reveal className="text-center mb-16">
              <div className="mb-4">
                <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                  What We Offer
                </span>
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
              {features.map((feature, index) => (
                <Card
                  key={feature.title}
                  data-reveal
                  data-delay={`${index * 120}ms`}
                  className="group relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-white to-green-50/20 card-glow hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-start gap-5">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          width={28}
                          height={28}
                          className="object-contain brightness-0 saturate-100"
                        />
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

            <div data-reveal data-delay="120ms" className="text-center mt-12">
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
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-accent-blue-gray/30 to-white relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div data-reveal className="text-center mb-16">
            <div className="mb-4">
              <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                How We Work
              </span>
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
              {[
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
              ].map((item, index) => (
                <div
                  key={item.step}
                  data-reveal
                  data-delay={`${index * 120}ms`}
                  className="relative group"
                >
                  {index < 3 && (
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

      {/* Real Risks We Eliminate Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-red-50/30 via-white to-white relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div data-reveal className="text-center mb-10 md:mb-12">
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                  Real Risks We Eliminate
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
                We Secure Your Operations, Not Just Find Suppliers
              </h2>
              <p className="text-base sm:text-lg text-neutral-600 max-w-[300px] sm:max-w-3xl mx-auto leading-relaxed">
                International sourcing involves serious operational risks-scams,
                quality failures, compliance traps, logistical disasters. We
                don&apos;t just warn you about them; we eliminate them before
                they impact your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-6">
              <Card
                data-reveal
                data-delay="0ms"
                className="group border-0 bg-white shadow-none hover:-translate-y-1 transition-transform duration-300"
              >
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">
                      No Fake Factories
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-3 md:mb-4">
                      We verify every supplier through on-site factory visits,
                      production audits, and compliance checks before any
                      partnership begins.
                    </p>
                    <p className="text-sm sm:text-base text-neutral-500 italic leading-relaxed">
                      You work with real manufacturers, not middlemen or
                      trading companies posing as factories.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                data-reveal
                data-delay="120ms"
                className="group border-0 bg-white shadow-none hover:-translate-y-1 transition-transform duration-300"
              >
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">
                      No Hidden MOQ Traps
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-3 md:mb-4">
                      Minimum order quantities are transparent from day one. No
                      surprise requirements after you&apos;ve invested time and
                      resources.
                    </p>
                    <p className="text-sm sm:text-base text-neutral-500 italic leading-relaxed">
                      We negotiate realistic terms that align with your actual
                      business needs.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                data-reveal
                data-delay="240ms"
                className="group border-0 bg-white shadow-none hover:-translate-y-1 transition-transform duration-300"
              >
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">
                      No Quality Mismatches
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-3 md:mb-4">
                      Multi-stage inspections ensure the sample you approve
                      matches the final production batch—no substitutions, no
                      downgrades.
                    </p>
                    <p className="text-sm sm:text-base text-neutral-500 italic leading-relaxed">
                      What you see is what you get, with documented evidence at
                      every stage.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card
                data-reveal
                data-delay="360ms"
                className="group border-0 bg-white shadow-none hover:-translate-y-1 transition-transform duration-300"
              >
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="text-center md:text-left">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3 md:mb-4">
                      No Customs Nightmares
                    </h3>
                    <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-3 md:mb-4">
                      Expert handling of documentation, HS codes, and regulatory
                      compliance to prevent delays, fines, or shipment
                      rejections.
                    </p>
                    <p className="text-sm sm:text-base text-neutral-500 italic leading-relaxed">
                      We navigate complex international regulations so your
                      goods arrive on time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-accent-blue-gray/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">
              <div data-reveal className="text-center lg:text-left">
                <div className="mb-4">
                  <span className="text-xs sm:text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                    Why Choose Us
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-5 md:mb-6">
                  Your Trusted Partner in Global Trade
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-neutral-700 mb-4 leading-relaxed font-medium max-w-[300px] sm:max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  We secure your operations at every step. The right partnership
                  eliminates risks and makes everything possible.
                </p>
                <div className="space-y-3 md:space-y-4 mb-8 max-w-[320px] sm:max-w-2xl lg:max-w-none mx-auto lg:mx-0">
                  {[
                    "Verified Suppliers Only — audits, factory visits, background checks, full compliance",
                    "Transparent Communication — clear reporting at every stage",
                    "Quality First — systematic inspections, international standards",
                    "On-Time Delivery — efficient supply chain coverage across Asia, Europe, and the Middle East",
                  ].map((item, index) => (
                    <div
                      key={item}
                      data-reveal
                      data-delay={`${index * 100}ms`}
                      className="flex items-start lg:items-center gap-3 text-left"
                    >
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center shrink-0 mt-0.5 lg:mt-0">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-sm sm:text-base text-neutral-700 font-medium">
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

              <div data-reveal data-delay="180ms" className="relative">
                <Card className="relative shadow-2xl overflow-hidden p-0 hover:-translate-y-1 transition-transform duration-300">
                  <CardContent className="p-8 md:p-10 bg-gradient-to-br from-brand-primary to-green-800">
                    <div className="text-center text-white">
                      <Globe className="w-16 h-16 mx-auto mb-6 opacity-90" />
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
                            className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-green-100 hover:bg-white/15 transition-colors duration-300"
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
            <div data-reveal className="text-center mb-12">
              <div className="mb-4">
                <span className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">
                  Leadership
                </span>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-12">
              <div data-reveal data-delay="0ms" className="group">
                <div className="bg-white border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/Joseph.jpeg"
                      alt="Joseph Cohen - Co-Founder"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-[50%_20%] grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
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
                    <p className="text-sm text-neutral-600">Israel</p>
                  </div>
                </div>
              </div>

              <div data-reveal data-delay="140ms" className="group">
                <div className="bg-white border border-neutral-200 overflow-hidden transition-all duration-300 hover:border-neutral-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-square overflow-hidden bg-neutral-100">
                    <Image
                      src="/images/Elioth.png"
                      alt="Elioth Mizrahi - Co-Founder"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-500"
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

            <div data-reveal data-delay="120ms" className="text-center max-w-3xl mx-auto">
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
                  className="border-2 border-neutral-300 hover:border-brand-primary hover:bg-brand-primary hover:text-white text-neutral-700 font-semibold px-8 py-6 text-base transition-all duration-200 group hover:-translate-y-0.5"
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
            <Card
              data-reveal
              className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-brand-primary via-green-800 to-brand-primary hover:-translate-y-1 transition-transform duration-300"
            >
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
                    className="bg-white hover:bg-green-50 text-brand-primary font-semibold px-8 py-6 text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl group hover:-translate-y-0.5"
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