import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Tiro_Bangla, Poppins } from "next/font/google";
import "./globals.css";

import Provider from "@/provider/Provider";
import { Toaster } from "sonner";
import ScrollToTop from "@/components/shared/ScrollToTop";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiroBangla = Tiro_Bangla({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin", "bengali"],
  variable: "--font-tiro-bangla",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BN HR MANAGEMENT SYSTEM",
  description:
    "© 2024 BN HR Management System. All rights reserved. Developed by BN IT Team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${tiroBangla.variable}
          ${poppins.variable}
          antialiased
        `}
      >
        <ScrollToTop />
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
