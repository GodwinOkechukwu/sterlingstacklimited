// "use client";

// import React, { useEffect, useState, useCallback } from "react";
// import { WooCommerce } from "@src/components/lib/woocommerce";
// import NewArrivalCard from "../Cards/NewArrivalCard";
// import Link from "next/link";

// const PAGE_SIZE = 8;

// /* ── Skeleton ─────────────────────────────────────────────────────────────── */
// export const PopularProductsLoader = () => (
//   <div className="w-full bg-[#f8f8f8] py-12 px-4 sm:px-8">
//     <div className="max-w-[1200px] mx-auto">
//       <div className="flex items-end justify-between mb-8">
//         <div className="space-y-2">
//           <div className="h-4 bg-[#e0e0e0] animate-pulse rounded w-36" />
//           <div className="h-9 bg-[#e0e0e0] animate-pulse rounded w-48" />
//         </div>
//         <div className="h-10 w-28 bg-[#e0e0e0] animate-pulse rounded" />
//       </div>
//       <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
//         {Array.from({ length: 4 }).map((_, i) => (
//           <div
//             key={i}
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

// /* ── Empty State ──────────────────────────────────────────────────────────── */
// const EmptyState = () => (
//   <div className="text-center py-16 text-[#999]">
//     <p className="text-lg">No products available</p>
//   </div>
// );

// /* ── Main Component ───────────────────────────────────────────────────────── */
// export default function PopularProducts() {
//   const [products, setProducts] = useState<ProductType[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [hasError, setHasError] = useState(false);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);
//   const [isFetchingMore, setIsFetchingMore] = useState(false);

//   const buildQuery = (orderby: "popularity" | "rating", pageNum: number) =>
//     `products?orderby=${orderby}&order=desc&per_page=${PAGE_SIZE}&page=${pageNum}&status=publish`;

//   const fetchPage = async (
//     orderby: "popularity" | "rating",
//     pageNum: number,
//   ): Promise<ProductType[]> => {
//     const res = await WooCommerce.get(buildQuery(orderby, pageNum));
//     return res?.data || [];
//   };

//   useEffect(() => {
//     const loadInitial = async () => {
//       try {
//         setIsLoading(true);
//         setHasError(false);
//         let data = await fetchPage("popularity", 1);
//         if (!data.length) data = await fetchPage("rating", 1);
//         setProducts(data);
//         setHasMore(data.length === PAGE_SIZE);
//       } catch (err) {
//         console.error("[PopularProducts] fetch failed:", err);
//         setHasError(true);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadInitial();
//   }, []);

//   const loadMore = useCallback(async () => {
//     if (isFetchingMore || !hasMore) return;
//     try {
//       setIsFetchingMore(true);
//       const nextPage = page + 1;
//       const data = await fetchPage("popularity", nextPage);
//       setProducts((prev) => [...prev, ...data]);
//       setPage(nextPage);
//       setHasMore(data.length === PAGE_SIZE);
//     } catch (err) {
//       console.error("[PopularProducts] load-more failed:", err);
//     } finally {
//       setIsFetchingMore(false);
//     }
//   }, [page, isFetchingMore, hasMore]);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen pt-24">
//         <PopularProductsLoader />
//       </div>
//     );
//   }

//   if (hasError) {
//     return (
//       <div className="min-h-screen pt-24 flex items-center justify-center">
//         <div className="text-center space-y-3">
//           <p className="text-[#333] font-semibold text-lg">
//             Something went wrong
//           </p>
//           <p className="text-[#999] text-sm">
//             Could not load products. Please try again.
//           </p>
//           <button
//             onClick={() => window.location.reload()}
//             className="mt-2 px-5 py-2 bg-[#1a6fd4] text-white text-sm rounded-full hover:bg-[#1558b0] transition-colors"
//           >
//             Retry
//           </button>
//         </div>
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
//               Check out products
//             </p>
//             <h1 className="text-3xl sm:text-4xl font-bold text-[#111] tracking-tight">
//               Products
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

//         {/* ── Grid ── */}
//         {products.length > 0 ? (
//           <>
//             <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
//               {products.map((product: ProductType) => (
//                 <NewArrivalCard
//                   key={product.id}
//                   id={product.id}
//                   image={product.images?.[0]?.src ?? ""}
//                   oldAmount={product.regular_price}
//                   newAmount={product.price}
//                   description={product.name}
//                   isNew={true}
//                 />
//               ))}
//             </div>

//             {/* ── Load More ── */}
//             {hasMore && (
//               <div className="flex justify-center mt-10">
//                 <button
//                   onClick={loadMore}
//                   disabled={isFetchingMore}
//                   className="
//                     px-10 py-3 rounded-full border border-[#222]
//                     text-sm font-semibold text-[#222]
//                     hover:bg-[#222] hover:text-white
//                     disabled:opacity-50 disabled:cursor-not-allowed
//                     transition-all duration-200
//                   "
//                 >
//                   {isFetchingMore ? "Loading..." : "Load More"}
//                 </button>
//               </div>
//             )}
//           </>
//         ) : (
//           <EmptyState />
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

import React, { useEffect, useState, useCallback } from "react";
import { WooCommerce } from "@src/components/lib/woocommerce";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useCart } from "react-use-cart";
import Picture from "@src/components/picture/Picture";
import { FormatMoney2 } from "@src/components/Reusables/FormatMoney";
import { convertToSlug } from "@constants";

const PAGE_SIZE = 6;

// ── Inline dark card ─────────────────────────────────────────────────────────
const PopularCard = ({
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
        {/* <span className="absolute bottom-3 left-3 z-10 bg-[#0d9488] text-white text-[9px] font-bold px-2.5 py-1 uppercase tracking-widest rounded-sm">
          New Release
        </span> */}
      </Link>

      {/* ── Body ── */}
      <div className="flex flex-col gap-3 px-5 py-4">
        <Link
          href={`/home-item/product/${slugDesc}-${id}`}
          className="text-white font-bold text-lg leading-snug line-clamp-1 hover:text-gray-300 transition-colors no-underline"
          dangerouslySetInnerHTML={{ __html: description }}
        />

        <div className="grid grid-cols-2 gap-x-4 gap-y-1">
          {specs.map((s) => (
            <div key={s.label} className="flex items-center gap-1.5">
              <span className="text-[#4b6280] text-[10px]">{s.icon}</span>
              <span className="text-[#4b6280] text-[11px] truncate">
                {s.label}
              </span>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06]" />

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
              onClick={(e) => {
                e.preventDefault();
                addToCart();
              }}
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
                onClick={(e) => {
                  e.preventDefault();
                  decrease();
                }}
                className="text-[#a0b4cc] hover:text-white transition-colors"
                aria-label="Decrease"
              >
                <AiOutlineMinus size={13} />
              </button>
              <span className="text-white text-sm font-bold min-w-[18px] text-center">
                {quantity}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  increase();
                }}
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

// ── Skeleton ─────────────────────────────────────────────────────────────────
export const PopularProductsLoader = () => (
  <div className="w-full bg-[#131B2E] py-12 px-4 sm:px-8">
    <div className="max-w-[1200px] mx-auto">
      <div className="h-8 bg-[#1a2540] animate-pulse rounded w-48 mx-auto mb-10" />
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="bg-[#0f1623] rounded-xl overflow-hidden animate-pulse"
          >
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

// ── Empty State ───────────────────────────────────────────────────────────────
const EmptyState = () => (
  <div className="text-center py-16 text-[#4b6280]">
    <p className="text-lg">No products available</p>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
export default function PopularProducts() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const buildQuery = (orderby: "popularity" | "rating", pageNum: number) =>
    `products?orderby=${orderby}&order=desc&per_page=${PAGE_SIZE}&page=${pageNum}&status=publish`;

  const fetchPage = async (
    orderby: "popularity" | "rating",
    pageNum: number,
  ): Promise<ProductType[]> => {
    const res = await WooCommerce.get(buildQuery(orderby, pageNum));
    return res?.data || [];
  };

  useEffect(() => {
    const loadInitial = async () => {
      try {
        setIsLoading(true);
        setHasError(false);
        let data = await fetchPage("popularity", 1);
        if (!data.length) data = await fetchPage("rating", 1);
        setProducts(data);
        setHasMore(data.length === PAGE_SIZE);
      } catch (err) {
        console.error("[PopularProducts] fetch failed:", err);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    loadInitial();
  }, []);

  const loadMore = useCallback(async () => {
    if (isFetchingMore || !hasMore) return;
    try {
      setIsFetchingMore(true);
      const nextPage = page + 1;
      const data = await fetchPage("popularity", nextPage);
      setProducts((prev) => [...prev, ...data]);
      setPage(nextPage);
      setHasMore(data.length === PAGE_SIZE);
    } catch (err) {
      console.error("[PopularProducts] load-more failed:", err);
    } finally {
      setIsFetchingMore(false);
    }
  }, [page, isFetchingMore, hasMore]);

  if (isLoading) return <PopularProductsLoader />;

  if (hasError) {
    return (
      <div className="bg-[#1C1C1E] min-h-[400px] flex items-center justify-center">
        <div className="text-center space-y-3">
          <p className="text-white font-semibold text-lg">
            Something went wrong
          </p>
          <p className="text-[#4b6280] text-sm">
            Could not load products. Please try again.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-5 py-2 border border-[#2d4060] text-[#a0b4cc] text-sm hover:border-white hover:text-white transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1C1C1E] w-full py-14 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        {/* ── Header ── */}
        <h2 className="text-white text-3xl sm:text-4xl font-semibold text-center mb-10 tracking-tight">
          Latest Products
        </h2>

        {/* ── Grid ── */}
        {products.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {products.map((product: ProductType) => (
                <PopularCard
                  key={product.id}
                  id={product.id}
                  image={product.images?.[0]?.src ?? ""}
                  oldAmount={product.regular_price}
                  newAmount={product.price}
                  description={product.name}
                />
              ))}
            </div>

            {/* ── See More / Load More ── */}
            {hasMore && (
              <div className="flex justify-center mt-10">
                <button
                  onClick={loadMore}
                  disabled={isFetchingMore}
                  className="
                    px-10 py-3 text-sm font-semibold tracking-widest uppercase
                    border border-[#2d4060] text-[#a0b4cc]
                    hover:border-white hover:text-white
                    disabled:opacity-50 disabled:cursor-not-allowed
                    transition-all duration-200
                  "
                >
                  {isFetchingMore ? "Loading..." : "See More"}
                </button>
              </div>
            )}
          </>
        ) : (
          <EmptyState />
        )}
      </div>
    </div>
  );
}
