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
  title: "MunnatvIslamic | MunnaTvIslamic – ইসলামের আলোয় প্রতিদিন",
  description:
    "© MunnatvIslamic লিমিটেডের একটি প্রতিষ্ঠান। আমাদের লক্ষ্য ইসলামের আলোয় প্রতিদিনের জীবনে মানসম্পন্ন কন্টেন্ট প্রদান করা। আমরা ইসলামিক শিক্ষা, জীবনধারা, এবং সংস্কৃতি নিয়ে কাজ করি। আমাদের সাথে থাকুন এবং ইসলামের আলোয় প্রতিদিনের জীবনে মানসম্পন্ন কন্টেন্ট উপভোগ করুন।",
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
