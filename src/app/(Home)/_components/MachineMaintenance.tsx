"use client";

import React from "react";
import Picture from "@src/components/picture/Picture";
import { heroImage3 } from "@public/images";
import Link from "next/link";

const OfferBanner = () => {
  return (
    <section className="w-full px-4 sm:px-8 py-10 bg-[#1C1C1E]">
      <div className="max-w-[1200px] mx-auto">
        <div
          className="relative w-full overflow-hidden rounded-2xl"
          style={{
            background:
              "linear-gradient(110deg, rgba(11,7,17,1) 0%, rgba(79,48,119,1) 100%)",
            minHeight: "280px",
          }}
        >
          {/* ── Single gadget image — left side ── */}
          <div className="absolute hidden left-0 top-0 bottom-0 w-[42%] pointer-events-none md:flex items-center">
            <div className="w-full h-full relative">
              <Picture
                src={heroImage3}
                alt="Hardware accessory"
                className="w-full h-full object-contain object-left"
              />
            </div>
          </div>

          {/* ── Blend overlay — fades image into purple bg ── */}
          <div
            className="absolute inset-y-0 left-0 w-[48%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(26,10,60,0.3) 0%, rgba(45,16,96,0.1) 70%, transparent 100%)",
            }}
            aria-hidden="true"
          />

          {/* ── Text content ── */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16 md:ml-[38%] mr-0 sm:mr-6">
            <p className="text-white/70 text-sm sm:text-base tracking-[0.3em] uppercase mb-2 font-light">
              Special
            </p>
            <h2
              className="text-[#FFFFFF]/60 font-black uppercase leading-none mb-4"
              style={{
                fontSize: "clamp(2.5rem, 7vw, 5rem)",
                letterSpacing: "-0.01em",
              }}
            >
              Offer Sale
            </h2>
            <p className="text-white/75 text-sm sm:text-base mb-8 max-w-sm leading-relaxed">
              Get upto 25% Discount when you buy more than 2 products
            </p>
            <Link
              href="/category"
              className="
                inline-flex items-center justify-center
                bg-[#7F5AF0] hover:bg-[#7F5AF0]/80
                text-white text-sm font-semibold
                px-6 py-2
                transition-colors duration-200
                no-underline
              "
            >
              Get access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
