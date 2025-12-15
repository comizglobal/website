"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validators";
import { submitContactForm } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Loader2,
  CheckCircle2,
  XCircle,
  Send,
  Clock,
  MessageSquare,
} from "lucide-react";

type SubmissionState = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [submissionState, setSubmissionState] =
    useState<SubmissionState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      country: "",
      email: "",
      whatsapp: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmissionState("loading");
    setErrorMessage("");

    try {
      const result = await submitContactForm(data);

      if (!result.success) {
        setSubmissionState("error");
        setErrorMessage(result.message);

        setTimeout(() => {
          setSubmissionState("idle");
        }, 5000);
        return;
      }

      setSubmissionState("success");
      form.reset();

      setTimeout(() => {
        setSubmissionState("idle");
      }, 5000);
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmissionState("error");
      setErrorMessage(
        "Failed to send message. Please try again or contact us directly.",
      );

      setTimeout(() => {
        setSubmissionState("idle");
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@comizglobal.com",
      href: "mailto:comiz.global@gmail.com",
      isLink: true,
    },
    {
      icon: Phone,
      title: "Elioth (Israel)",
      content: "+972-559755959",
      href: "tel:+972559755959",
      isLink: true,
    },
    {
      icon: Phone,
      title: "Joseph (France)",
      content: "+33-756830342",
      href: "tel:+33756830342",
      isLink: true,
    },
  ];

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
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 mb-8 shadow-sm animate-fade-in-up">
              <MessageSquare className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-neutral-700">
                Let&apos;s Connect
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-neutral-900 mb-8 leading-tight animate-fade-in-up animation-delay-200">
              Get in{" "}
              <span className="relative inline-block">
                <span className="text-gradient">Touch</span>
                <div className="absolute -bottom-2 left-0 right-0 h-3 bg-green-200 opacity-30 -z-10 transform -skew-y-1"></div>
              </span>
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
              Ready to start your sourcing project? Fill out the form or contact
              us directly. We respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <div className="inline-block px-4 py-2 bg-green-50 rounded-full mb-4">
                <span className="text-sm font-semibold text-green-700">
                  Contact Information
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                We&apos;d Love to Hear From You
              </h2>
              <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                Reach out through any of the channels below and our team will
                get back to you promptly.
              </p>

              {/* Response Time Card */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-brand-primary to-green-800 mb-8 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        Fast Response
                      </h3>
                      <p className="text-green-100 text-sm">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <Card
                    key={item.title}
                    className="group border-0 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-white to-green-50/20 hover:-translate-y-1"
                  >
                    <CardContent className="p-5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 text-sm mb-0.5">
                            {item.title}
                          </h3>
                          {item.isLink ? (
                            <a
                              href={item.href!}
                              className="text-green-600 hover:text-green-700 transition-colors font-medium"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-neutral-700">{item.content}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-2xl overflow-hidden bg-white">
                <div className="h-2 bg-gradient-to-r from-green-500 via-green-600 to-green-500"></div>
                <CardContent className="p-8 md:p-10">
                  <div className="mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <Send className="w-5 h-5 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-neutral-900">
                        Send us a message
                      </h3>
                    </div>
                    <p className="text-neutral-600">
                      Fill out the form and we&apos;ll be in touch soon
                    </p>
                  </div>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-5"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neutral-700 font-medium">
                                Full Name *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="John Doe"
                                  {...field}
                                  className="h-12 bg-neutral-50 border-neutral-200 focus:bg-white focus:border-green-500 focus:ring-green-500/20 transition-all"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neutral-700 font-medium">
                                Country
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="United States"
                                  {...field}
                                  className="h-12 bg-neutral-50 border-neutral-200 focus:bg-white focus:border-green-500 focus:ring-green-500/20 transition-all"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neutral-700 font-medium">
                                Email *
                              </FormLabel>
                              <FormControl>
                                <Input
                                  type="email"
                                  placeholder="john@example.com"
                                  {...field}
                                  className="h-12 bg-neutral-50 border-neutral-200 focus:bg-white focus:border-green-500 focus:ring-green-500/20 transition-all"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="whatsapp"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-neutral-700 font-medium">
                                WhatsApp (Optional)
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+1 234 567 8900"
                                  {...field}
                                  className="h-12 bg-neutral-50 border-neutral-200 focus:bg-white focus:border-green-500 focus:ring-green-500/20 transition-all"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-neutral-700 font-medium">
                              Message *
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your project, product requirements, or any questions you have..."
                                rows={5}
                                {...field}
                                className="bg-neutral-50 border-neutral-200 focus:bg-white focus:border-green-500 focus:ring-green-500/20 transition-all resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        disabled={submissionState === "loading"}
                        className="w-full bg-brand-primary hover:bg-green-700 text-white font-semibold h-14 text-base rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl shimmer-hover group"
                      >
                        {submissionState === "loading" ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <span className="flex items-center gap-2">
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        )}
                      </Button>

                      {/* Success Message */}
                      {submissionState === "success" && (
                        <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl animate-fade-in-up">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center shrink-0">
                            <CheckCircle2 className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-800 mb-1">
                              Message Sent!
                            </h4>
                            <p className="text-green-700 text-sm">
                              Thank you for reaching out. We&apos;ll get back to
                              you within 24 hours.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Error Message */}
                      {submissionState === "error" && (
                        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl animate-fade-in-up">
                          <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                            <XCircle className="w-5 h-5 text-red-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-red-800 mb-1">
                              Something went wrong
                            </h4>
                            <p className="text-red-700 text-sm">
                              {errorMessage}
                            </p>
                          </div>
                        </div>
                      )}
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
