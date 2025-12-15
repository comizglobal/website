import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  Globe2,
  Shield,
  TruckIcon,
  Search,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: Search,
      title: 'Sourcing & Procurement',
      description: 'Direct access to verified manufacturers across China and Asia with comprehensive supplier vetting.',
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'Multi-stage inspections and quality control to ensure products meet your exact specifications.',
    },
    {
      icon: TruckIcon,
      title: 'Logistics Management',
      description: 'End-to-end shipping coordination from factory to your destination across multiple continents.',
    },
    {
      icon: Globe2,
      title: 'Global Network',
      description: 'Operations spanning Middle East, Israel, and Europe with local expertise in each market.',
    },
  ];

  const stats = [
    { value: '3+', label: 'Continents Served' },
    { value: '100%', label: 'Transparency' },
    { value: '24h', label: 'Response Time' },
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 mb-8 shadow-sm animate-fade-in-up">
              <Sparkles className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-neutral-700">Global Sourcing Excellence</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight animate-fade-in-up animation-delay-200">
              International Trading
              <br />
              <span className="relative inline-block">
                <span className="text-gradient">& Sourcing</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200 opacity-30 -z-10 transform -skew-y-1"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 mb-6 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Global Sourcing. Reliable Partners. Smarter Trade.
            </p>

            {/* Region Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up animation-delay-400">
              {['China', 'Middle East', 'Israel', 'Europe'].map((region) => (
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
                    Get Started
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
                  <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
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
              <div className="inline-block px-4 py-2 bg-green-50 rounded-full mb-4">
                <span className="text-sm font-semibold text-green-700">What We Offer</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                Complete Trade Solutions
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
                From factory sourcing to final delivery, we manage every step of your international trade journey.
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
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shrink-0 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-green-700 transition-colors duration-200">
                          {feature.title}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 h-1 w-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
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

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-green-50 via-accent-blue-gray/30 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <div>
                <div className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full mb-4 border border-green-200">
                  <span className="text-sm font-semibold text-green-700">Why Choose Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">
                  Your Trusted Partner in Global Trade
                </h2>
                <p className="text-xl text-neutral-700 mb-4 leading-relaxed font-medium">
                  The right partnership makes everything possible.
                </p>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  CoMiz Global specializes in international trade between China, Middle East, Israel, and Europe. Since 2020, we&apos;ve been providing sourcing, quality control, and logistics services for businesses looking to import products from Asian manufacturers.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Direct manufacturer connections',
                    'Comprehensive quality control',
                    'Transparent pricing & reporting',
                    'End-to-end logistics support',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="text-neutral-700 font-medium">{item}</span>
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
                      <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Global Network
                      </h3>
                      <p className="text-green-100 mb-6 leading-relaxed">
                        Operations in UAE & Israel with verified suppliers across Asia, Middle East & Europe.
                      </p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {['China', 'UAE', 'Israel', 'France'].map((country) => (
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
                  Get in touch with our team to discuss your requirements. We respond within 24 hours.
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
