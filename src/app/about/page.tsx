// import AppLayout from "@src/components/AppLayout";
// import Picture from "@src/components/picture/Picture";
// import { homeImage1 } from "@public/images";
// import Link from "next/link";

// const STATS = [
//   { value: "500+", label: "Products" },
//   { value: "40+", label: "Categories" },
//   { value: "10k+", label: "Happy Clients" },
//   { value: "5+", label: "Years Experience" },
// ];

// const VALUES = [
//   {
//     title: "Quality First",
//     description:
//       "Every product we stock is carefully selected for reliability, durability, and performance.",
//   },
//   {
//     title: "Customer Focused",
//     description:
//       "We provide seamless shopping experiences with fast support and trusted service.",
//   },
//   {
//     title: "Nationwide Reach",
//     description:
//       "Fast delivery and dependable after-sales support across Nigeria.",
//   },
//   {
//     title: "Modern Technology",
//     description:
//       "We continuously update our catalog with the latest gadgets and hardware.",
//   },
// ];

// const CATEGORIES = [
//   "Laptops & Desktop Computers",
//   "Gaming Accessories",
//   "Computer Components",
//   "Networking Devices",
//   "Office Tech Equipment",
//   "Monitors & Displays",
//   "Printers & Storage Devices",
//   "CCTV & Security Systems",
// ];

// const page = () => {
//   return (
//     <AppLayout>
//       <main className="bg-white text-[#2F2F2F] mt-20 md:mt-24 overflow-x-hidden">
//         {/* HERO */}
//         <section className="relative px-4 sm:px-6 lg:px-10 pt-6">
//           <div className="relative overflow-hidden rounded-[32px]">
//             <Picture
//               src={homeImage1}
//               alt="BrightAxis Limited"
//               className="w-full h-[500px] sm:h-[600px] object-cover"
//             />

//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/50" />

//             {/* Hero Content */}
//             <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//               <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white text-xs tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6">
//                 About Us
//               </span>

//               <h1 className="text-white font-black leading-[1] tracking-tight text-4xl sm:text-6xl lg:text-7xl max-w-5xl">
//                 Premium Hardware
//                 <br />
//                 Solutions For
//                 <br />
//                 Modern Technology
//               </h1>

//               <p className="mt-6 max-w-2xl text-sm sm:text-base text-gray-200 leading-relaxed">
//                 Trusted distributor of high-performance computer hardware,
//                 accessories, and digital technology solutions across Nigeria.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* STATS */}
//         <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
//             {STATS.map((item) => (
//               <div
//                 key={item.label}
//                 className="rounded-[28px] border border-gray-200 bg-[#fafafa] p-8 text-center"
//               >
//                 <h2 className="text-4xl sm:text-5xl font-black text-[#2F2F2F]">
//                   {item.value}
//                 </h2>

//                 <p className="mt-3 text-sm uppercase tracking-[0.2em] text-gray-500">
//                   {item.label}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-24">
//           <div className="grid lg:grid-cols-2 gap-16 items-start">
//             {/* LEFT */}
//             <div>
//               <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
//                 Who We Are
//               </span>

//               <h2 className="mt-4 text-4xl sm:text-5xl font-black leading-tight">
//                 Welcome to
//                 <br />
//                 BrightAxis
//                 <br />
//                 Innovations
//               </h2>

//               <p className="mt-6 text-base leading-[2] text-gray-600">
//                 BrightAxis Limited is a trusted distributor of premium computer
//                 hardware and digital technology solutions in Nigeria. We provide
//                 high-performance gadgets and IT equipment designed for
//                 businesses, creators, gamers, students, and professionals.
//               </p>

//               <p className="mt-5 text-base leading-[2] text-gray-600">
//                 From cutting-edge laptops and gaming accessories to networking
//                 systems and smart gadgets — our products are built for
//                 productivity, innovation, and performance.
//               </p>

//               <Link
//                 href="/category"
//                 className="inline-flex mt-8 items-center justify-center rounded-full bg-[#2F2F2F] text-white px-8 py-4 text-sm font-semibold hover:bg-black transition-all duration-300 no-underline"
//               >
//                 Explore Products
//               </Link>
//             </div>

//             {/* RIGHT */}
//             <div className="grid gap-4">
//               {CATEGORIES.map((item) => (
//                 <div
//                   key={item}
//                   className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-[#fafafa] px-6 py-5"
//                 >
//                   <div className="h-3 w-3 rounded-full bg-[#2F2F2F]" />

//                   <p className="text-sm sm:text-base font-medium text-[#2F2F2F]">
//                     {item}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* VALUES */}
//         <section className="bg-[#f8f8f8] py-24 px-4 sm:px-6 lg:px-10">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-16">
//               <span className="text-sm font-semibold tracking-[0.2em] uppercase text-gray-400">
//                 Why Choose Us
//               </span>

//               <h2 className="mt-4 text-4xl sm:text-5xl font-black text-[#2F2F2F]">
//                 Our Core Values
//               </h2>
//             </div>

//             <div className="grid md:grid-cols-2 gap-6">
//               {VALUES.map((value, index) => (
//                 <div
//                   key={value.title}
//                   className="rounded-[28px] bg-white border border-gray-200 p-8"
//                 >
//                   <div className="flex items-center gap-4 mb-5">
//                     <span className="text-3xl font-black text-gray-300">
//                       0{index + 1}
//                     </span>

//                     <div className="h-[1px] flex-1 bg-gray-200" />
//                   </div>

//                   <h3 className="text-2xl font-bold text-[#2F2F2F] mb-4">
//                     {value.title}
//                   </h3>

//                   <p className="text-gray-600 leading-[1.9]">
//                     {value.description}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="px-4 sm:px-6 lg:px-10 py-24">
//           <div className="max-w-5xl mx-auto rounded-[40px] bg-[#2F2F2F] overflow-hidden relative">
//             <div className="absolute inset-0 opacity-10">
//               <Picture
//                 src={homeImage1}
//                 alt="CTA Background"
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             <div className="relative z-10 px-8 py-20 text-center">
//               <span className="text-sm tracking-[0.2em] uppercase text-gray-300">
//                 Ready To Shop?
//               </span>

//               <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white leading-tight">
//                 Explore Our Full
//                 <br />
//                 Product Collection
//               </h2>

//               <p className="mt-6 max-w-2xl mx-auto text-gray-300 leading-relaxed">
//                 Discover premium hardware, smart gadgets, accessories, and
//                 digital technology solutions tailored for your lifestyle and
//                 business needs.
//               </p>

//               <Link
//                 href="/category"
//                 className="inline-flex mt-10 items-center justify-center rounded-full bg-white text-[#2F2F2F] px-8 py-4 text-sm font-bold hover:bg-gray-200 transition-all duration-300 no-underline"
//               >
//                 Shop Now
//               </Link>
//             </div>
//           </div>
//         </section>
//       </main>
//     </AppLayout>
//   );
// };

// export default page;

import AppLayout from "@src/components/AppLayout";
import Picture from "@src/components/picture/Picture";
import { homeImage1 } from "@public/images";
import Link from "next/link";

const STATS = [
  { value: "500+", label: "Products" },
  { value: "40+", label: "Categories" },
  { value: "10k+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
];

const VALUES = [
  {
    title: "Quality First",
    description:
      "Every product we stock is carefully selected for reliability, durability, and performance.",
  },
  {
    title: "Customer Focused",
    description:
      "We provide seamless shopping experiences with fast support and trusted service.",
  },
  {
    title: "Nationwide Reach",
    description:
      "Fast delivery and dependable after-sales support across Nigeria.",
  },
  {
    title: "Modern Technology",
    description:
      "We continuously update our catalog with the latest gadgets and hardware.",
  },
];

const CATEGORIES = [
  "Laptops & Desktop Computers",
  "Gaming Accessories",
  "Computer Components",
  "Networking Devices",
  "Office Tech Equipment",
  "Monitors & Displays",
  "Printers & Storage Devices",
  "CCTV & Security Systems",
];

const page = () => {
  return (
    <AppLayout>
      <main className="bg-[#1C1C1E] text-white mt-20 md:mt-24 overflow-x-hidden">
        {/* ── HERO ── */}
        <section className="relative px-4 sm:px-6 lg:px-10 pt-6">
          <div className="relative overflow-hidden rounded-[32px]">
            <Picture
              src={homeImage1}
              alt="BrightAxis Limited"
              className="w-full h-[500px] sm:h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, #1C1C1E 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <span className="bg-white/10 backdrop-blur-xl border border-white/20 text-white/80 text-xs tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6">
                About Us
              </span>
              <h1 className="text-white font-black leading-[1.05] tracking-tight text-4xl sm:text-6xl lg:text-7xl max-w-5xl">
                Premium Hardware
                <br />
                Solutions For
                <br />
                Modern Technology
              </h1>
              <p className="mt-6 max-w-2xl text-sm sm:text-base text-white/60 leading-relaxed">
                Trusted distributor of high-performance computer hardware,
                accessories, and digital technology solutions across Nigeria.
              </p>
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((item) => (
              <div
                key={item.label}
                className="rounded-[24px] border border-white/[0.08] bg-white/[0.04] p-8 text-center"
              >
                <h2 className="text-4xl sm:text-5xl font-black text-white">
                  {item.value}
                </h2>
                <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/40">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── ABOUT ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 pb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT */}
            <div>
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40">
                Who We Are
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-black leading-tight text-white">
                Welcome to
                <br />
                BrightAxis
                <br />
                Limited
              </h2>
              <p className="mt-6 text-base leading-[2] text-white/55">
                BrightAxis Limited is a trusted distributor of premium computer
                hardware and digital technology solutions in Nigeria. We provide
                high-performance gadgets and IT equipment designed for
                businesses, creators, gamers, students, and professionals.
              </p>
              <p className="mt-5 text-base leading-[2] text-white/55">
                From cutting-edge laptops and gaming accessories to networking
                systems and smart gadgets — our products are built for
                productivity, innovation, and performance.
              </p>
              <Link
                href="/category"
                className="inline-flex mt-8 items-center justify-center rounded-full bg-white text-[#1C1C1E] px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all duration-300 no-underline"
              >
                Explore Products
              </Link>
            </div>

            {/* RIGHT — category list */}
            <div className="grid gap-3">
              {CATEGORIES.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] px-6 py-4 hover:bg-white/[0.06] transition-colors duration-200"
                >
                  <div className="h-2 w-2 rounded-full bg-white/40 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-medium text-white/80">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── VALUES ── */}
        <section
          className="py-24 px-4 sm:px-6 lg:px-10"
          style={{ background: "rgba(255,255,255,0.02)" }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40">
                Why Choose Us
              </span>
              <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {VALUES.map((value, index) => (
                <div
                  key={value.title}
                  className="rounded-[28px] border border-white/[0.08] bg-white/[0.04] p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-3xl font-black text-white/10">
                      0{index + 1}
                    </span>
                    <div className="h-px flex-1 bg-white/[0.08]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/50 leading-[1.9] text-sm">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM ── */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-24">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-white/40">
              The People
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-white">
              Meet the Team
            </h2>
          </div>

          <p className="text-center text-white/20 text-xs mt-6">
            Update team names and roles to match your actual team.
          </p>
        </section>

        {/* ── CTA ── */}
        <section className="px-4 sm:px-6 lg:px-10 pb-24">
          <div className="max-w-5xl mx-auto rounded-[40px] border border-white/[0.08] bg-white/[0.04] overflow-hidden relative">
            <div className="absolute inset-0 opacity-[0.06]">
              <Picture
                src={homeImage1}
                alt="CTA Background"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative z-10 px-8 py-20 text-center">
              <span className="text-xs tracking-[0.25em] uppercase text-white/40">
                Ready To Shop?
              </span>
              <h2 className="mt-5 text-4xl sm:text-5xl font-black text-white leading-tight">
                Explore Our Full
                <br />
                Product Collection
              </h2>
              <p className="mt-6 max-w-2xl mx-auto text-white/50 leading-relaxed text-sm">
                Discover premium hardware, smart gadgets, accessories, and
                digital technology solutions tailored for your lifestyle and
                business needs.
              </p>
              <Link
                href="/category"
                className="inline-flex mt-10 items-center justify-center rounded-full bg-white text-[#1C1C1E] px-8 py-4 text-sm font-bold hover:bg-white/90 transition-all duration-300 no-underline"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </main>
    </AppLayout>
  );
};

export default page;
