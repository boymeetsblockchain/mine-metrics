import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import "./globals.css";
import { Prata, Great_Vibes, Poppins } from "next/font/google";

// Load the Prata font
export const prata = Prata({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

const poppins = localFont({ src: "./fonts/Poppins-Regular.ttf" });

export const metadata: Metadata = {
  title: "Minie Metrics",
  description: "This is a certified company for crypto investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>{children}</body>
    </html>
  );
}
