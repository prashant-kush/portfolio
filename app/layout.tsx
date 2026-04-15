import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { personal } from "@/lib/data";

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

const SITE_URL = "https://kushwaha.dev";
const TITLE =
  "Prashant Kushwaha — Senior Software Engineer · React, Next.js, TypeScript";
const DESCRIPTION =
  "Prashant Kushwaha is a Senior Software Engineer (SDE-2) at Atlassian, ex-Blinkit, ex-Razorpay. Frontend-focused full-stack developer specializing in React, Next.js, TypeScript, scalable UI architecture and performance. Open to contract and full-time roles.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s · Prashant Kushwaha",
  },
  description: DESCRIPTION,
  applicationName: "Prashant Kushwaha",
  authors: [{ name: "Prashant Kushwaha", url: SITE_URL }],
  creator: "Prashant Kushwaha",
  publisher: "Prashant Kushwaha",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  category: "Technology",
  keywords: [
    "Prashant Kushwaha",
    "Prashant Kushwaha portfolio",
    "Prashant Kushwaha engineer",
    "Prashant Kushwaha Atlassian",
    "Prashant Kushwaha Razorpay",
    "Prashant Kushwaha Blinkit",
    "hire senior software engineer india",
    "senior frontend engineer bangalore",
    "react developer for hire",
    "nextjs developer for hire",
    "typescript engineer contract",
    "freelance frontend engineer india",
    "full stack developer bangalore",
    "SDE-2 Atlassian",
    "software engineer portfolio",
    "IIIT Gwalior alumni",
    "react performance engineer",
    "design systems engineer",
    "micro-frontends engineer",
    "kubernetes node.js engineer",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "profile",
    locale: "en_IN",
    alternateLocale: ["en_US", "en_GB"],
    url: SITE_URL,
    siteName: "Prashant Kushwaha",
    title: TITLE,
    description: DESCRIPTION,
    firstName: "Prashant",
    lastName: "Kushwaha",
    username: "prashant-kush",
    gender: "male",
    images: [
      {
        url: "/portrait.jpg",
        width: 1080,
        height: 1350,
        alt: "Prashant Kushwaha — Senior Software Engineer at Atlassian",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    site: "@Prashant__kush",
    creator: "@Prashant__kush",
    images: [
      {
        url: "/portrait.jpg",
        alt: "Prashant Kushwaha — Senior Software Engineer",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/portrait.jpg", type: "image/jpeg" },
    ],
    shortcut: "/portrait.jpg",
    apple: [{ url: "/portrait.jpg", type: "image/jpeg" }],
  },
  manifest: "/manifest.webmanifest",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#06070A" },
    { media: "(prefers-color-scheme: light)", color: "#06070A" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  givenName: "Prashant",
  familyName: "Kushwaha",
  url: SITE_URL,
  image: `${SITE_URL}/portrait.jpg`,
  jobTitle: "Senior Software Engineer",
  email: `mailto:${personal.email}`,
  telephone: personal.phone,
  gender: "Male",
  nationality: { "@type": "Country", name: "India" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  worksFor: {
    "@type": "Organization",
    name: "Atlassian",
    url: "https://www.atlassian.com",
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "ABV-Indian Institute of Information Technology and Management, Gwalior",
      url: "https://www.iiitm.ac.in",
    },
  ],
  sameAs: [personal.github, personal.linkedin, personal.twitter],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Kubernetes",
    "Design Systems",
    "Web Performance",
    "Micro Frontends",
    "Observability",
  ],
  description: DESCRIPTION,
  seeks: {
    "@type": "Demand",
    name: "Contract and full-time software engineering roles",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: SITE_URL,
  name: "Prashant Kushwaha",
  description: DESCRIPTION,
  inLanguage: "en",
  author: { "@type": "Person", name: personal.name, url: SITE_URL },
};

const professionalServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Prashant Kushwaha — Software Engineering",
  url: SITE_URL,
  image: `${SITE_URL}/portrait.jpg`,
  priceRange: "$$",
  areaServed: { "@type": "Place", name: "Worldwide (Remote)" },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  founder: { "@type": "Person", name: personal.name },
  serviceType: [
    "Frontend Engineering",
    "Full-Stack Development",
    "Web Performance Optimization",
    "Design Systems",
    "Technical Consulting",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(professionalServiceJsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${display.variable} ${mono.variable} font-sans antialiased bg-ink-950 text-white/90`}
      >
        {children}
      </body>
    </html>
  );
}
