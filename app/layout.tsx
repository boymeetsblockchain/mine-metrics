import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react";
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
      <body className={`${poppins.className}`}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
