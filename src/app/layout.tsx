import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import CartSummary from "@/app/components/CartSummary";

export const metadata: Metadata = {
  title: "Next.js Lab — 23-0173-47",
  description: "A mini-application demonstrating 10 Next.js component patterns using the App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CartProvider>
          <nav
            style={{ backgroundColor: "#222A35" }}
            className="w-full px-10 py-4 flex items-center justify-between sticky top-0 z-50"
          >
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
  <div
    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg"
    style={{ backgroundColor: "#203864" }}
  >
    R
  </div>
  <div className="flex flex-col leading-tight">
    <span className="text-white font-bold text-sm">Roy Deo Ortilano</span>
    <span className="text-gray-400 text-xs">23-0173-47</span>
  </div>
</Link>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/" className="text-white hover:text-blue-300 font-medium transition text-sm">
                Home
              </Link>
              <Link href="/posts" className="text-white hover:text-blue-300 font-medium transition text-sm">
                Posts
              </Link>
              <Link href="/contact" className="text-white hover:text-blue-300 font-medium transition text-sm">
                Contact
              </Link>
              <Link href="/shop" className="text-white hover:text-blue-300 font-medium transition text-sm">
                Shop
              </Link>
              <CartSummary />
            </div>
          </nav>
          <main>{children}</main>
          <footer className="w-full mt-10 py-6 text-center text-gray-500 text-sm border-t border-gray-200">
            © {new Date().getFullYear()} NextJS Lab — Student No. 23-0173-47. All rights reserved.
          </footer>

        </CartProvider>
      </body>
    </html>
  );
}