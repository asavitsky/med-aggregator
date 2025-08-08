import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Medical Services in Tbilisi",
  description: "Compare clinic prices, find doctors, and explore healthcare services in Tbilisi.",
  openGraph: {
    title: "Medical Services in Tbilisi",
    description: "Compare clinic prices, find doctors, and explore healthcare services in Tbilisi.",
    url: "https://med-aggregator.vercel.app/",
    siteName: "Med Aggregator",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Medical Services in Tbilisi",
    description: "Compare clinic prices, find doctors, and explore healthcare services in Tbilisi.",
  },
};

export default function RootLayout({ children }) {
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
