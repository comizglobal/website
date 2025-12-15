import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowRight, Globe2 } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const services = [
    'Sourcing & Procurement',
    'Quality Control',
    'Production Management',
    'Logistics & Delivery',
  ];

  return (
    <footer className="relative bg-brand-primary text-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-900/30 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-800/20 rounded-full filter blur-3xl translate-x-1/2 translate-y-1/2"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block group mb-6">
              <h3 className="text-2xl font-bold">
                <span className="text-white group-hover:text-green-300 transition-colors">CoMiz</span>
                {' '}
                <span className="text-green-400">Global</span>
              </h3>
            </Link>
            <p className="text-green-100 mb-6 leading-relaxed">
              Global Sourcing. Reliable Partners. Smarter Trade.
            </p>
            <div className="flex items-center gap-2 text-sm text-green-200">
              <Globe2 className="w-4 h-4 text-green-400" />
              <span>UAE & Israel Operations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-green-500 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-green-100 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-green-500 rounded-full"></span>
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-green-100 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-green-500 rounded-full"></span>
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:comiz.global@gmail.com"
                  className="flex items-start gap-3 text-green-100 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 bg-green-800/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-700/50 transition-colors">
                    <Mail className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <span className="text-xs text-green-400 block mb-0.5">Email</span>
                    <span className="text-sm">comiz.global@gmail.com</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+972559755959"
                  className="flex items-start gap-3 text-green-100 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 bg-green-800/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-700/50 transition-colors">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <span className="text-xs text-green-400 block mb-0.5">Elioth (Israel)</span>
                    <span className="text-sm">+972-559755959</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+33756830342"
                  className="flex items-start gap-3 text-green-100 hover:text-white transition-colors group"
                >
                  <div className="w-9 h-9 bg-green-800/50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-green-700/50 transition-colors">
                    <Phone className="w-4 h-4 text-green-400" />
                  </div>
                  <div>
                    <span className="text-xs text-green-400 block mb-0.5">Joseph (France)</span>
                    <span className="text-sm">+33-756830342</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-800/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-green-200 text-sm text-center md:text-left">
              © {currentYear} CoMiz Global. All rights reserved.
            </p>
            <p className="text-green-200 text-sm flex items-center gap-2">
              Made with care by{' '}
              <span className="text-green-400 font-semibold hover:text-green-300 transition-colors">
                Sitekept
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
