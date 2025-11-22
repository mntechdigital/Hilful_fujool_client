import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "@/provider/Provider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Barishal Times | বরিশালটাইমস – নতুন চেতনায় প্রতিক্ষণে…",
  description:
    "© বরিশালটাইমস মিডিয়া লিমিটেডের একটি প্রতিষ্ঠান। ইসরাফিল ভিলা (তৃতীয় তলা), ফলপট্টি রোড, বরিশাল ৮২০০। ফোন: ০২৪৭৮৮৩০৫৪৫, ০১৬৭০-৬৮৭৯৫২ barishaltimes@gmail.com, bslhasib@gmail.com.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>{children}</Provider>
        <Toaster />
      </body>
    </html>
  );
}
