"use client";

import React, { useState } from "react";
import Picture from "@src/components/picture/Picture";
import { compImage } from "@public/images";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="w-full px-4 sm:px-8 py-10 bg-[#1C1C1E]">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{ minHeight: "340px" }}
        >
          {/* ── Background image ── */}
          <Picture
            src={compImage}
            alt="Newsletter background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* ── Dark overlay ── */}
          <div
            className="absolute inset-0"
            style={{ background: "rgba(5,5,15,0.72)" }}
            aria-hidden="true"
          />

          {/* ── Content ── */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 sm:py-20">
            {!submitted ? (
              <>
                <h2 className="text-white font-extrabold text-3xl sm:text-5xl leading-tight mb-4 max-w-2xl">
                  Subscribe to our Newsletter
                </h2>
                <p className="text-white/70 text-sm sm:text-base mb-8 max-w-lg leading-relaxed">
                  Get the latest deals, new arrivals, and exclusive offers
                  delivered straight to your inbox.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-lg flex flex-col items-center gap-4"
                  noValidate
                >
                  {/* Email input */}
                  <div className="w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="Enter your email"
                      className={`
                        w-full bg-transparent border text-white text-center
                        placeholder:text-white/50 text-sm sm:text-base
                        px-6 py-4 outline-none
                        transition-colors duration-200
                        ${
                          error
                            ? "border-red-400 focus:border-red-400"
                            : "border-white/40 focus:border-white"
                        }
                      `}
                    />
                    {error && (
                      <p className="text-red-400 text-xs mt-2 text-center">
                        {error}
                      </p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="
                      px-12 py-3.5 text-sm sm:text-base font-semibold text-white
                      bg-[#7c3aed] hover:bg-[#6d28d9]
                      disabled:opacity-70 disabled:cursor-not-allowed
                      transition-colors duration-200
                      min-w-[180px] flex items-center justify-center gap-2
                    "
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="white"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="white"
                            d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                          />
                        </svg>
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </button>
                </form>
              </>
            ) : (
              /* ── Success state ── */
              <div className="flex flex-col items-center gap-5 py-4">
                <div className="w-20 h-20 rounded-full bg-[#7c3aed]/20 border border-[#7c3aed]/40 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-[#a78bfa]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-white font-extrabold text-2xl sm:text-4xl">
                  You're subscribed!
                </h3>
                <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed">
                  Thanks for subscribing. We'll send the latest deals and new
                  arrivals to{" "}
                  <span className="text-[#a78bfa] font-semibold">{email}</span>.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setEmail("");
                  }}
                  className="mt-2 text-xs text-white/40 hover:text-white/70 underline transition-colors"
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
