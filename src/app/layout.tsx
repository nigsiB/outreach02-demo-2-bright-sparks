import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";

import "./globals.css";
const font = Inter({ subsets: ["latin"], variable: "--font-body" });
export const metadata: Metadata = {
  title: { default: "2 Bright Sparks | Cranleigh", template: "%s" },
  description: "Electrical contractor demo.",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={font.variable}>
      <body className="flex min-h-screen flex-col antialiased">
        <header className="bg-white border-b shadow-sm">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link href="/" className="font-bold">2 Bright Sparks</Link>
            <nav className="flex gap-5 text-sm"><Link href="/contact">Contact</Link></nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
