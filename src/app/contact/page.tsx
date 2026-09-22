"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        </nav>
      </header>

      <div className="mx-auto max-w-[700px] px-4 py-6">
        {/* Breadcrumb */}
        <div className="mb-4 text-[13px] text-[#2c6da5]">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="text-gray-400 mx-1">/</span>
          <span className="text-gray-600">Contact</span>
        </div>

        {submitted ? (
          <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#00a65a] p-8 text-center">
            <div className="text-[40px]">✅</div>
            <h2 className="mt-3 text-[20px] font-bold text-[#333]">Message Sent!</h2>
            <p className="mt-2 text-[13px] text-gray-500">
              Thank you for contacting us. We will get back to you within 24–48 hours.
            </p>
            <Link href="/" className="mt-5 inline-block bg-[#3c8dbc] text-white px-6 py-2 text-sm font-semibold rounded-[3px] hover:bg-[#367fa9]">
              ← Back to Home
            </Link>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7] mb-4">
              <div className="border-b border-[#f4f4f4] px-4 py-2.5">
                <h1 className="text-[18px] font-semibold text-[#333] m-0">Contact Us</h1>
              </div>
              <div className="p-4 text-[13px] text-gray-600">
                Have a suggestion, custom symbol request, or business inquiry? Reach out to the team behind Nicknamegenerator.io.
              </div>
            </div>

            <div className="bg-white rounded-[3px] shadow-[0_1px_1px_rgba(0,0,0,0.1)] border border-[#d2d6de] border-t-[3px] border-t-[#6b93c7]">
              <div className="border-b border-[#f4f4f4] px-4 py-2.5">
                <h2 className="text-[16px] font-semibold text-[#333] m-0">Send a Message</h2>
              </div>
              <form onSubmit={handleSubmit} className="p-5 space-y-4">
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-500 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex"
                    className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#3c8dbc] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-500 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@example.com"
                    className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#3c8dbc] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold uppercase tracking-wider text-gray-500 mb-1">Your Message</label>
                  <textarea
                    required
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your feedback, bug report, or partnership inquiry..."
                    className="w-full border border-[#d2d6de] rounded-[2px] px-3 py-2 text-[14px] text-gray-800 focus:border-[#3c8dbc] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3c8dbc] text-white py-2.5 text-[14px] font-semibold rounded-[3px] hover:bg-[#367fa9] transition-colors cursor-pointer"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </>
        )}

        <div className="text-center text-[12px] text-gray-500 mt-6 space-x-3">
          <Link href="/" className="text-[#2c6da5] hover:underline">Home</Link>
          <span>|</span>
          <Link href="/about" className="text-[#2c6da5] hover:underline">About</Link>
          <span>|</span>
          <Link href="/terms" className="text-[#2c6da5] hover:underline">Terms of Use</Link>
          <span>|</span>
          <Link href="/privacy-policy" className="text-[#2c6da5] hover:underline">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
}
