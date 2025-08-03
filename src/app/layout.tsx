import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Instrument_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Space_Grotesk({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "I am Sina!!!",
  description: "I'm Sina, a professional designer based in Nigeria. I've been designing for three years and I deliver great work. Check out my Portfolio!",
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
        {children}
      </body>
    </html>
  );
}
