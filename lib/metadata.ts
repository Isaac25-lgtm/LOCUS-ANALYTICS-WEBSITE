import type { Metadata } from "next";
import { SITE } from "./constants";

export function createMetadata({
  title,
  description,
  path = "",
  ogImage,
}: {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
}): Metadata {
  const pageTitle = title
    ? `${title} | ${SITE.name}`
    : `${SITE.name} — ${SITE.tagline}`;
  const pageDescription = description || SITE.description;
  const url = `${SITE.url}${path}`;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630 }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: ogImage ? [ogImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
