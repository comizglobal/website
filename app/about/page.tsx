import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Target,
  Users,
  Shield,
  Globe2,
  Sparkles,
  ArrowRight,
  Award,
  TrendingUp,
  Heart,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "About Us - CoMiz Global",
  description:
    "Learn about CoMiz Global, our mission, values, and the team behind our international trading success.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Premium Design */}
      <section className="relative bg-gradient-to-br from-green-50 via-white to-accent-beige py-24 md:py-40 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-accent-beige rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 mb-8 shadow-sm animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-neutral-700">
                Our Story & Vision
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-neutral-900 mb-8 leading-tight animate-fade-in-up animation-delay-200">
              About CoMiz
              <br />
              <span className="relative inline-block">
                <span className="text-green-600">Global</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200 opacity-30 -z-10 transform -skew-y-1"></div>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Building bridges between businesses and the world&apos;s best
              manufacturers. Excellence through transparency, quality, and
              partnership.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section - Premium Design */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Subtle Background Decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full filter blur-3xl opacity-30 -z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-green-50 rounded-full mb-4">
                <span className="text-sm font-semibold text-green-700">
                  What Drives Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
                Our Mission
              </h2>
            </div>

            {/* Mission Statement Card */}
            <Card className="group relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white via-green-50/30 to-white mb-12">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 md:p-12 relative z-10">
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shrink-0 shadow-lg">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed mb-6">
                      CoMiz is an international trading company specializing in
                      sourcing, negotiation, and production management across
                      Asia, the Middle East, and Europe. Our mission is to help
                      businesses access the best manufacturers worldwide while
                      securing quality, cost control, and a reliable supply
                      chain.
                    </p>
                    <div className="relative p-6 bg-gradient-to-br from-green-50 to-accent-beige/30 rounded-2xl border-l-4 border-green-500">
                      <div className="flex items-start gap-4">
                        <Award className="w-6 h-6 text-green-600 shrink-0 mt-1" />
                        <p className="text-lg md:text-xl text-neutral-900 font-semibold leading-relaxed">
                          Quality is never an accident - it&apos;s a process.
                        </p>
                      </div>
                      <p className="text-base text-neutral-700 mt-4 ml-10">
                        Every partnership we forge, every supplier we verify,
                        and every shipment we manage reflects our commitment to
                        excellence and transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="group relative border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-green-50/20 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                    <Globe2 className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Global Network
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Verified suppliers across three continents
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-green-50/20 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Full Transparency
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Clear reporting at every stage
                  </p>
                </CardContent>
              </Card>

              <Card className="group relative border-0 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-green-50/20 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">
                    Proven Results
                  </h3>
                  <p className="text-sm text-neutral-600">
                    Track record of successful partnerships
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Premium Cards */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-green-50 via-accent-blue-gray/30 to-white relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full filter blur-3xl opacity-20"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-green-200">
              <span className="text-sm font-semibold text-green-700">
                What We Stand For
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do, every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
            {/* Excellence */}
            <Card className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-green-50/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  Excellence
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  We pursue the highest standards in every aspect of our
                  service, from supplier verification to final delivery.
                </p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* Integrity */}
            <Card className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-green-50/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  Integrity
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Full transparency from first quotation to final delivery. Our
                  word is our bond, and honesty is non-negotiable.
                </p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* Partnership */}
            <Card className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-green-50/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  Partnership
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  We build long-term relationships based on mutual success,
                  trust, and continuous improvement.
                </p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>

            {/* Global Vision */}
            <Card className="group relative border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white to-green-50/30 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4 group-hover:text-green-700 transition-colors duration-300">
                  Global Vision
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  We leverage our international network to bring you the best
                  opportunities from around the world.
                </p>
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founders Section - Premium Design */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-100 to-accent-beige rounded-full filter blur-3xl opacity-10"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-50 rounded-full mb-4">
              <span className="text-sm font-semibold text-green-700">
                Leadership Team
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              Meet Our Founders
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              The visionaries driving global trade excellence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Joseph Cohen */}
            <Card className="group relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white via-green-50/20 to-white hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 md:p-12 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-36 h-36 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                      <Image
                        src="/jospeh.jpeg"
                        alt="Joseph Cohen - Co-Founder"
                        width={144}
                        height={144}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-neutral-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Joseph Cohen
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-8">
                    <span className="text-green-700 font-semibold text-sm">
                      Co-Founder
                    </span>
                  </div>

                  <div className="text-left space-y-4">
                    <p className="text-neutral-700 leading-relaxed">
                      Joseph Cohen co-founded CoMiz with the ambition of helping
                      entrepreneurs achieve their goals in the import-export
                      industry by connecting them with reliable, high-quality
                      suppliers across Asia, Europe, and the Middle East.
                    </p>
                    <p className="text-neutral-700 leading-relaxed">
                      He brings a strong interest in global trade, buy-sell
                      strategy, and negotiation, strengthened by an
                      international background, as well as several experiences
                      in finance.
                    </p>
                    <div className="relative p-5 bg-gradient-to-br from-green-50 to-accent-beige/30 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <p className="text-neutral-700 leading-relaxed text-sm">
                          Developing expertise in entrepreneurship, automation,
                          AI, and no-code solutions to optimize clients&apos;
                          operations and accelerate their growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Elioth Mizrahi */}
            <Card className="group relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden bg-gradient-to-br from-white via-green-50/20 to-white hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/5 to-green-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-10 md:p-12 relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-8">
                    <div className="w-36 h-36 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 group-hover:rotate-3 transition-all duration-500">
                      <Image
                        src="/elioth.jpeg"
                        alt="Elioth Mizrahi - Co-Founder"
                        width={144}
                        height={144}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-neutral-900 mb-2 group-hover:text-green-700 transition-colors duration-300">
                    Elioth Mizrahi
                  </h3>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full mb-8">
                    <span className="text-green-700 font-semibold text-sm">
                      Co-Founder
                    </span>
                  </div>

                  <div className="text-left space-y-4">
                    <p className="text-neutral-700 leading-relaxed">
                      Elioth Mizrahi is the Co-Founder of CoMiz Global, bringing
                      a strong interest in global trade, negotiation, and
                      international sourcing.
                    </p>
                    <p className="text-neutral-700 leading-relaxed">
                      He co-created the company with the ambition to connect
                      businesses worldwide with reliable, high-quality
                      manufacturers across Asia, Europe, and the Middle East.
                    </p>
                    <div className="relative p-5 bg-gradient-to-br from-green-50 to-accent-beige/30 rounded-xl border-l-4 border-green-500">
                      <div className="flex items-start gap-3">
                        <Award className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                        <p className="text-neutral-700 leading-relaxed text-sm">
                          Expertise strengthened by studies at Reichman
                          University, developing knowledge in entrepreneurship,
                          business strategy, and innovation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Transparency Statement - Refined */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-green-50 via-white to-accent-beige overflow-hidden">
        {/* Subtle Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>

        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-neutral-900">
              Built on Trust & Transparency
            </h2>

            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              All legal documents and company registration papers are available
              upon request. We believe in complete transparency and building
              relationships based on trust.
            </p>

            <div className="pt-4">
              <Link
                href="/contact"
                className="text-green-600 hover:text-green-700 font-semibold inline-flex items-center gap-2 text-lg"
              >
                Get in touch
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
