'use client';

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="flex items-center justify-between px-8 py-6 w-full">
      <h2 className="font-bold text-xl" style={{ color: "#203864" }}>
        Counter
      </h2>

      {/* Count Display */}
      <span
        className="text-6xl font-bold"
        style={{ color: "#203864", opacity: 0.6 }}
      >
        {String(count).padStart(2, "0")}
      </span>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={decrement}
          className="w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white font-bold text-xl transition flex items-center justify-center"
        >
          −
        </button>
        <button
          onClick={reset}
          className="w-12 h-12 rounded-full text-white font-bold text-sm transition flex items-center justify-center"
          style={{ backgroundColor: "#203864" }}
        >
          ↺
        </button>
        <button
          onClick={increment}
          className="w-12 h-12 rounded-full bg-green-500 hover:bg-green-600 text-white font-bold text-xl transition flex items-center justify-center"
        >
          +
        </button>
      </div>
    </div>
  );
}