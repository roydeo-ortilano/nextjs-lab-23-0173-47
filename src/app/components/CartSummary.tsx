'use client';

import { useCart } from "@/lib/cart-context";

export default function CartSummary() {
  const { items, total } = useCart();

  return (
    <div className="flex items-center gap-1 text-white text-sm font-medium">
      <span>🛒</span>
      <span>{items.length} items</span>
        ₱{total.toLocaleString()}
    </div>
  );
}