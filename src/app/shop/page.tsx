'use client';

import { useCart } from "@/lib/cart-context";
import type { CartItem } from "@/lib/cart-context";

const products: CartItem[] = [
  { id: 1, name: "Samsung Galaxy S25 Ultra", price: 74995 },
  { id: 2, name: "Samsung Galaxy S25+", price: 59995 },
  { id: 3, name: "Samsung Galaxy S25", price: 49995 },
  { id: 4, name: "Samsung Galaxy Tab S10 FE", price: 35995 },
  { id: 5, name: "Apple iPhone 16e", price: 56990 },
  { id: 6, name: "Apple iPhone 16 Pro Max", price: 89990 },
  { id: 7, name: "Apple iPhone 16 Pro", price: 79990 },
  { id: 8, name: "Apple MacBook Air M4", price: 99990 },
];

export default function ShopPage() {
  const { items, addItem, removeItem } = useCart();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h1
        className="text-4xl mb-2"
        style={{ color: "#203864", fontWeight: 900, fontFamily: "'Roboto', sans-serif" }}
      >
        Shop
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        {products.filter(p => p.name.startsWith("Samsung")).map((product) => {
          const cartCount = items.filter((i: CartItem) => i.id === product.id).length;
          return (
            <div
              key={product.id}
              className="rounded-2xl p-6 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.4)] border border-blue-200"
              style={{ backgroundColor: "#DAE3F3", backdropFilter: "blur(4px)" }}
            >
              <h2 className="text-base font-bold" style={{ color: "#203864" }}>
                {product.name}
              </h2>
              <p className="font-semibold text-sm" style={{ color: "#203864", opacity: 0.7 }}>
                ₱{product.price.toLocaleString()}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => addItem(product)}
                  className="flex-1 py-2 rounded-lg text-white text-sm font-bold transition hover:opacity-90"
                  style={{ backgroundColor: "#203864" }}
                >
                  Add to Cart
                </button>
                {cartCount > 0 && (
                  <button
                    onClick={() => removeItem(product.id)}
                    className="px-3 py-2 rounded-lg text-sm font-bold transition hover:opacity-80"
                    style={{ backgroundColor: "#b0bfd8", color: "#203864" }}
                  >
                    Remove
                  </button>
                )}
              </div>
              {cartCount > 0 && (
                <p className="text-xs text-green-600 font-medium">{cartCount} in cart</p>
              )}
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.filter(p => p.name.startsWith("Apple")).map((product) => {
          const cartCount = items.filter((i: CartItem) => i.id === product.id).length;
          return (
            <div
              key={product.id}
              className="rounded-2xl p-6 flex flex-col gap-3 transition-shadow duration-200 hover:shadow-[3px_3px_4px_rgba(0,0,0,0.4)] border border-blue-200"
              style={{ backgroundColor: "#DAE3F3", backdropFilter: "blur(4px)" }}
            >
              <h2 className="text-base font-bold" style={{ color: "#203864" }}>
                {product.name}
              </h2>
              <p className="font-semibold text-sm" style={{ color: "#203864", opacity: 0.7 }}>
                ₱{product.price.toLocaleString()}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <button
                  onClick={() => addItem(product)}
                  className="flex-1 py-2 rounded-lg text-white text-sm font-bold transition hover:opacity-90"
                  style={{ backgroundColor: "#203864" }}
                >
                  Add to Cart
                </button>
                {cartCount > 0 && (
                  <button
                    onClick={() => removeItem(product.id)}
                    className="px-3 py-2 rounded-lg text-sm font-bold transition hover:opacity-80"
                    style={{ backgroundColor: "#b0bfd8", color: "#203864" }}
                  >
                    Remove
                  </button>
                )}
              </div>
              {cartCount > 0 && (
                <p className="text-xs text-green-600 font-medium">{cartCount} in cart</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}