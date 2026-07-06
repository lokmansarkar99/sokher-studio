import type { Metadata } from "next";
import { Tiro_Bangla, Hind_Siliguri, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const tiroBangla = Tiro_Bangla({
  weight: "400",
  subsets: ["bengali"],
  variable: "--font-display",
});

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "শখের স্টুডিও",
  description: "আপনার জীবনের সেরা মুহূর্তগুলো ফ্রেমবন্দী করতে আমরা আছি আপনার পাশে।",
  keywords: ["শখের স্টুডিও", "ফটোগ্রাফি", "ফটো ফ্রেম", "ওয়েডিং", "প্রি-ওয়েডিং", "জন্মদিন", "অ্যানিভার্সারি", "উপহার"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${tiroBangla.variable} ${hindSiliguri.variable} ${jetBrainsMono.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
