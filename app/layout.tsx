import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prashant Kushwaha — Senior Software Engineer",
  description:
    "Senior Software Engineer at Atlassian. Ex-Blinkit, Razorpay. Building performant, scalable web products. Available for contract & full-time roles.",
  keywords: [
    "Prashant Kushwaha",
    "Software Engineer",
    "Frontend Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Atlassian",
    "Blinkit",
    "Razorpay",
    "Hire",
    "Contract",
  ],
  authors: [{ name: "Prashant Kushwaha" }],
  openGraph: {
    title: "Prashant Kushwaha — Senior Software Engineer",
    description:
      "SDE-2 @ Atlassian. Ex-Blinkit, Razorpay. Available for contract & full-time opportunities.",
    url: "https://kushwaha.dev",
    siteName: "Prashant Kushwaha",
    type: "website",
    images: [
      {
        url: "/portrait.jpg",
        width: 1080,
        height: 1350,
        alt: "Prashant Kushwaha",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Kushwaha — Senior Software Engineer",
    description:
      "SDE-2 @ Atlassian. Ex-Blinkit, Razorpay. Available for contract & full-time opportunities.",
    creator: "@Prashant__kush",
    images: ["/portrait.jpg"],
  },
  icons: {
    icon: [
      { url: "/portrait.jpg", type: "image/jpeg" },
    ],
    shortcut: "/portrait.jpg",
    apple: "/portrait.jpg",
  },
  alternates: {
    canonical: "https://kushwaha.dev",
  },
  metadataBase: new URL("https://kushwaha.dev"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${display.variable} ${mono.variable} font-sans antialiased bg-ink-950 text-white/90`}
      >
        {children}
      </body>
    </html>
  );
}
