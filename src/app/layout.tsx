import type { Metadata } from "next";
import { Noto_Sans_Gujarati, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoGujarati = Noto_Sans_Gujarati({
  variable: "--font-noto-sans-gujarati",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HDS-Bhajan",
  description: "Bhajan app for HDS"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoGujarati.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
