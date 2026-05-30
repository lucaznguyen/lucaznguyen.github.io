import type { Metadata } from "next";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { absoluteUrl } from "@/lib/utils";

export const siteConfig = {
  title: "Thinh Nguyen (Lucaz) - Ph.D. Student in Trustworthy AI",
  description:
    "Academic homepage of Thinh Nguyen (Lucaz), a Ph.D. student at VinUniversity working on Trustworthy AI, Federated Learning, Continual Learning, and Domain Generalization.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://lucaznguyen.github.io",
  ogImage: "/og-image.png",
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s | Thinh Nguyen (Lucaz)",
  },
  description: siteConfig.description,
  applicationName: "Thinh Nguyen (Lucaz)",
  authors: [{ name: "Thinh Nguyen", url: siteConfig.url }],
  creator: "Thinh Nguyen",
  publisher: "Thinh Nguyen",
  icons: {
    icon: "/favicon.svg",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: "Thinh Nguyen (Lucaz)",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Thinh Nguyen academic homepage preview.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      title,
      description,
      url: absoluteUrl(path),
      images: [siteConfig.ogImage],
    },
    twitter: {
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.nickname,
  givenName: "Thinh",
  familyName: "Nguyen",
  jobTitle: "Ph.D. Student",
  email: profile.email,
  url: siteConfig.url,
  image: absoluteUrl(profile.portrait),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hanoi",
    addressCountry: "Vietnam",
  },
  affiliation: profile.affiliations.map((affiliation) => ({
    "@type": affiliation.name.includes("University") ? "CollegeOrUniversity" : "Organization",
    name: affiliation.name,
    url: affiliation.href,
  })),
  knowsAbout: [
    "Trustworthy AI",
    "Federated Learning",
    "Continual Learning",
    "Domain Generalization",
    "Privacy-Preserving Machine Learning",
    "AI Security",
    "Robustness",
  ],
  sameAs: socials
    .filter((social) => social.label !== "Email")
    .map((social) => social.href),
};
