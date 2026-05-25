// "use client";
// import { WooCommerce } from "@src/components/lib/woocommerce";
// import NewArrivalCard from "../Cards/NewArrivalCard";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// export const NewArrivalsLoader = () => (
//   <div className="w-full bg-[#f8f8f8] py-12 px-4 sm:px-8">
//     <div className="max-w-[1200px] mx-auto">
//       {/* Header skeleton */}
//       <div className="flex items-end justify-between mb-8">
//         <div className="space-y-2">
//           <div className="h-4 bg-[#e0e0e0] animate-pulse rounded w-40" />
//           <div className="h-9 bg-[#e0e0e0] animate-pulse rounded w-56" />
//         </div>
//         <div className="h-10 w-28 bg-[#e0e0e0] animate-pulse rounded" />
//       </div>
//       {/* Grid skeleton */}
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//         {[1, 2, 3, 4].map((item) => (
//           <div
//             key={item}
//             className="bg-[#ececec] rounded-xl overflow-hidden animate-pulse"
//           >
//             <div className="aspect-square bg-[#e0e0e0]" />
//             <div className="p-4 space-y-3">
//               <div className="h-4 bg-[#e0e0e0] rounded w-3/4" />
//               <div className="h-4 bg-[#e0e0e0] rounded w-1/2" />
//               <div className="h-10 bg-[#e0e0e0] rounded w-full" />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

// export default function NewArrivals() {
//   const [newProducts, setNewProducts] = useState<ProductType[]>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchNewArrivals = async () => {
//       try {
//         setIsLoading(true);
//         const response = await WooCommerce.get(
//           "products?orderby=date&order=desc&per_page=6",
//         );
//         setNewProducts(response?.data || []);
//       } catch (error) {
//         console.error("Error fetching new arrivals:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchNewArrivals();
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen pt-24">
//         <NewArrivalsLoader />
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen pt-24 bg-[#fff]">
//       <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12">
//         {/* ── Header ── */}
//         <div className="flex items-end justify-between mb-8">
//           <div>
//             <p className="text-sm text-[#999] mb-1 tracking-wide">
//               Check out latest products
//             </p>
//             <h1 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
//               New Arrivals
//             </h1>
//           </div>
//           <Link
//             href="/category"
//             className="
//               hidden sm:inline-flex items-center
//               border border-[#222] text-[#222] text-sm font-semibold
//               px-6 py-2.5 tracking-widest uppercase
//               hover:bg-[#222] hover:text-white
//               transition-all duration-200 no-underline
//             "
//           >
//             View All
//           </Link>
//         </div>

//         {/* ── Products Grid ── */}
//         {newProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  gap-4">
//             {newProducts.slice(0,4).map((product: ProductType) => (
//               <NewArrivalCard
//                 key={product.id}
//                 id={product.id}
//                 image={product.images[0]?.src}
//                 oldAmount={product.regular_price}
//                 newAmount={product.price}
//                 description={product.name}
//                 isNew={true}
//               />
//             ))}
//           </div>
//         ) : (
//           <div className="text-center py-16 text-[#999]">
//             <p className="text-lg">No new products available</p>
//           </div>
//         )}

//         {/* ── Mobile View All ── */}
//         <div className="sm:hidden mt-8 flex justify-center">
//           <Link
//             href="/category"
//             className="
//               border border-[#222] text-[#222] text-sm font-semibold
//               px-8 py-2.5 tracking-widest uppercase
//               hover:bg-[#222] hover:text-white
//               transition-all duration-200 no-underline
//             "
//           >
//             View All
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { WooCommerce } from "@src/components/lib/woocommerce";
import React, { useEffect, useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Link from "next/link";
import Picture from "@src/components/picture/Picture";
import { FormatMoney2 } from "@src/components/Reusables/FormatMoney";
import { convertToSlug } from "@constants";

// ── Inline dark card ────────────────────────────────────────────────────────
const FeaturedCard = ({
  id,
  image,
  oldAmount,
  newAmount,
  description,
}: {
  id: string | number;
  image: string;
  oldAmount?: string;
  newAmount: string;
  description: string;
}) => {
  const { addItem, removeItem, updateItem, getItem } = useCart();
  const ID = id.toString();
  const cartItem = getItem(ID);
  const quantity = cartItem?.quantity || 0;
  const price = parseInt(newAmount);
  const slugDesc = convertToSlug(description);

  const addToCart = () =>
    addItem({ id: ID, name: description, price, quantity: 1, image });
  const increase = () => updateItem(ID, { quantity: quantity + 1 });
  const decrease = () => {
    if (quantity <= 1) removeItem(ID);
    else updateItem(ID, { quantity: quantity - 1 });
  };

  // Pull a few fake specs from the product name — or hardcode universal ones
  const specs = [
    { icon: "▣", label: "14″ Liquid Retina" },
    { icon: "◈", label: "M3 Architecture" },
    { icon: "◎", label: "9ms Latency" },
    { icon: "⬡", label: "18hr Battery" },
  ];

  return (
    <div className="group flex flex-col bg-[#0f1623] rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-1">

      {/* ── Image ── */}
      <Link
        href={`/home-item/product/${slugDesc}-${id}`}
        className="relative block bg-[#111a2e] overflow-hidden"
      >
        <div className="aspect-[4/3] w-full overflow-hidden">
          <Picture
            src={image}
            alt={description}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* NEW RELEASE badge */}
        <span className="absolute bottom-3 left-3 z-10 bg-[#DBFCFF] text-[#00363A] text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest rounded-sm">
          New Release
        </span>
      </Link>

      {/* ── Body ── */}
      <div className="flex flex-col gap-3 px-5 py-4">

        {/* Product name */}
        <Link
          href={`/home-item/product/${slugDesc}-${id}`}
          className="text-white font-bold text-lg leading-snug line-clamp-1 hover:text-gray-300 transition-colors no-underline"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        {/* Specs grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {specs.map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className="text-[#4b6280] text-[10px]">{s.icon}</span>
              <span className="text-[#4b6280] text-[11px] truncate">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/[0.06]" />

        {/* Price + CTA */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-white font-extrabold text-2xl">
              {price ? <FormatMoney2 value={price} /> : "N/A"}
            </span>
            {oldAmount && parseInt(oldAmount) > price && (
              <span className="text-[#4b6280] text-sm line-through">
                <FormatMoney2 value={parseInt(oldAmount)} />
              </span>
            )}
          </div>

          {quantity === 0 ? (
            <button
              onClick={(e) => { e.preventDefault(); addToCart(); }}
              className="
                px-4 py-2 text-[11px] font-bold tracking-widest uppercase
                border border-[#2d4060] text-[#a0b4cc]
                hover:border-white hover:text-white
                transition-all duration-200 whitespace-nowrap
              "
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-2 border border-[#2d4060] px-3 py-1.5">
              <button
                onClick={(e) => { e.preventDefault(); decrease(); }}
                className="text-[#a0b4cc] hover:text-white transition-colors"
                aria-label="Decrease"
              >
                <AiOutlineMinus size={13} />
              </button>
              <span className="text-white text-sm font-bold min-w-[18px] text-center">
                {quantity}
              </span>
              <button
                onClick={(e) => { e.preventDefault(); increase(); }}
                className="text-[#a0b4cc] hover:text-white transition-colors"
                aria-label="Increase"
              >
                <AiOutlinePlus size={13} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Skeleton ────────────────────────────────────────────────────────────────
export const NewArrivalsLoader = () => (
  <div className="w-full bg-[#0a0f1a] py-12 px-4 sm:px-8">
    <div className="max-w-[1200px] mx-auto">
      <div className="h-8 bg-[#1a2540] animate-pulse rounded w-56 mx-auto mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-[#0f1623] rounded-xl overflow-hidden animate-pulse">
            <div className="aspect-[4/3] bg-[#1a2540]" />
            <div className="p-5 space-y-3">
              <div className="h-5 bg-[#1a2540] rounded w-3/4" />
              <div className="h-3 bg-[#1a2540] rounded w-full" />
              <div className="h-3 bg-[#1a2540] rounded w-2/3" />
              <div className="flex items-center justify-between pt-2">
                <div className="h-7 bg-[#1a2540] rounded w-1/3" />
                <div className="h-8 bg-[#1a2540] rounded w-28" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ── Main component ───────────────────────────────────────────────────────────
export default function NewArrivals() {
  const [newProducts, setNewProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        setIsLoading(true);
        const response = await WooCommerce.get(
          "products?orderby=date&order=desc&per_page=6",
        );
        setNewProducts(response?.data || []);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNewArrivals();
  }, []);

  if (isLoading) return <NewArrivalsLoader />;

  return (
    <div className="bg-[#1C1C1E] w-full py-14 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">

        {/* ── Header ── */}
        <h2 className="text-white text-3xl sm:text-4xl font-semibold text-center mb-10 tracking-tight">
          Featured Products
        </h2>

        {/* ── Grid ── */}
        {newProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {newProducts.map((product: ProductType) => (
                <FeaturedCard
                  key={product.id}
                  id={product.id}
                  image={product.images[0]?.src}
                  oldAmount={product.regular_price}
                  newAmount={product.price}
                  description={product.name}
                />
              ))}
            </div>

            {/* ── See More ── */}
            <div className="flex justify-center mt-10">
              <Link
                href="/category"
                className="
                  px-10 py-3 text-sm font-semibold tracking-widest uppercase
                  border border-[#2d4060] text-[#a0b4cc]
                  hover:border-white hover:text-white
                  transition-all duration-200 no-underline
                "
              >
                See More
              </Link>
            </div>
          </>
        ) : (
          <div className="text-center py-16 text-[#4b6280]">
            <p className="text-lg">No featured products available</p>
          </div>
        )}

      </div>
    </div>
  );
}