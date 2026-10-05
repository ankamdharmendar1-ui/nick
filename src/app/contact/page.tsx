"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Copy, Check, Clock, ShieldCheck, MessageSquare } from "lucide-react";
import confetti from "canvas-confetti";
import { NickFooter } from "@/components/NickFooter";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const contactEmail = "contact@nicknamegenerator.io";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopiedEmail(true);
    confetti({
      particleCount: 20,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#3c8dbc", "#00c0ef"],
    });
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#ecf0f5] text-[#222]">
      {/* Header */}
      <header className="bg-[#354861] h-[44px] flex items-center px-4 shadow-md">
        <Link href="/" className="text-white font-light text-[26px] tracking-tight hover:opacity-80">
          Nicknamegenerator<span className="text-[#3c8dbc]">.io</span>
        </Link>
        <nav className="ml-auto flex items-center gap-4 text-[13px]">
          <Link href="/" className="text-white hover:text-[#00c0ef]">Home</Link>
          <Link href="/about" className="text-white hover:text-[#00c0ef]">About</Link>
          <Link href="/freefire" className="text-white hover:text-[#00c0ef]">Free Fire</Link>
        </nav>
      </header>

      <div className="mx-auto max-w-[760px] px-4 py-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 text-[13px] text-[#2c6da5] flex items-center gap-1.5">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-600 font-medium">Contact</span>
        </nav>

        {/* Hero Card */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#3c8dbc] mb-4">
          <div className="border-b border-[#f4f4f4] px-4 py-2.5">
            <h1 className="text-[18px] font-semibold text-[#333] m-0">Contact Nicknamegenerator.io</h1>
          </div>
          <div className="p-5 text-[14px] text-gray-700 leading-relaxed">
            <p className="m-0">
              Have a suggestion, custom gaming symbol request, bug report, or business inquiry? We would love to hear from you. Reach out directly using our official email address or send us a message via the form below.
            </p>
          </div>
        </div>

        {/* Direct Email Card */}
        <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] p-5 mb-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-emerald-600" />
              </div>
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Official Support &amp; Business Email
                </span>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-[17px] font-bold text-[#2c6da5] hover:underline font-mono"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              type="button"
              className={`px-4 py-2 rounded-[3px] text-xs font-bold flex items-center gap-1.5 transition-colors shadow-sm shrink-0 ${
                copiedEmail
                  ? "bg-emerald-600 text-white"
                  : "bg-[#354861] text-white hover:bg-[#3c8dbc]"
              }`}
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5" /> Copied Email!
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" /> Copy Email Address
                </>
              )}
            </button>
          </div>

          <div className="mt-4 pt-3 border-t border-[#f0f0f0] grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-500">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#3c8dbc]" /> Average response time: 24–48 hours
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> DMCA, feedback &amp; partnership inquiries welcome
            </div>
          </div>
        </div>

        {/* Form or Submitted State */}
        {submitted ? (
          <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] p-8 text-center">
            <div className="text-[40px]">✅</div>
            <h2 className="mt-3 text-[20px] font-bold text-[#333]">Message Sent Successfully!</h2>
            <p className="mt-2 text-[13px] text-gray-600 max-w-md mx-auto">
              Thank you for reaching out to Nicknamegenerator.io. Our team will review your message and respond to <strong>{email}</strong> within 24–48 hours.
            </p>
            <div className="mt-6 flex justify-center gap-3">
              <Link href="/" className="bg-[#3c8dbc] text-white px-6 py-2 text-xs font-bold uppercase rounded-[3px] hover:bg-[#367fa9] transition-colors">
                ← Back to Home
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                }}
                className="bg-white border border-[#d2d6de] text-gray-700 px-4 py-2 text-xs font-bold uppercase rounded-[3px] hover:bg-gray-50"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
            <div className="border-b border-[#f4f4f4] px-4 py-2.5 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#354861]" />
              <h2 className="text-[16px] font-semibold text-[#333] m-0">Send Us a Direct Message</h2>
            </div>
            <form onSubmit={handleSubmit} className="p-5 space-y-4">
              <div>
                <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Alex"
                  className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-600 mb-1">
                  Your Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share your feedback, bug report, new symbol suggestions, or partnership proposal..."
                  className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#3c8dbc] focus:ring-1 focus:ring-[#3c8dbc] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#354861] text-white py-2.5 text-[14px] font-bold rounded-[3px] hover:bg-[#3c8dbc] transition-colors cursor-pointer shadow-sm"
              >
                Send Message →
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Global Footer */}
      <NickFooter />
    </div>
  );
}
