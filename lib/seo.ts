import type { Metadata } from "next"

interface SEOConfig {
  title: string
  description: string
  keywords?: string
  canonical?: string
  ogImage?: string
  ogType?: "website" | "article" | "profile"
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
}

const baseUrl = "https://azefox.com"
const defaultOGImage = "/logo.webp"

export function generateMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = defaultOGImage,
  ogType = "website",
  publishedTime,
  modifiedTime,
  authors,
  section,
}: SEOConfig): Metadata {
  const fullTitle = `${title} | Azefox Innovations`
  const url = canonical ? `${baseUrl}${canonical}` : baseUrl
  const imageUrl = `${baseUrl}${ogImage}`

  return {
    title: fullTitle,
    description,
    keywords,
    authors: authors?.map((name) => ({ name })) || [{ name: "Azefox Innovations" }],
    creator: "Azefox Innovations",
    publisher: "Azefox Innovations",
    robots: "index, follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: ogType,
      locale: "en_US",
      url,
      siteName: "Azefox Innovations",
      title: fullTitle,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(authors && { authors: authors.map((name) => ({ name })) }),
      ...(section && { section }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@azefoxinnovations",
      site: "@azefoxinnovations",
    },
    verification: {
      google: "your-google-verification-code",
    },
  }
}

export function generateStructuredData(type: "Organization" | "Course" | "Service" | "Article", data: any) {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": type,
  }

  switch (type) {
    case "Organization":
      return {
        ...baseStructuredData,
        name: "Azefox Innovations",
        url: baseUrl,
        logo: `${baseUrl}/logo.webp`,
        description:
          "Leading provider of cybersecurity training, IT security consulting, assessments, and managed services.",
        address: {
          "@type": "PostalAddress",
          addressCountry: "US",
        },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Customer Service",
          email: "info@azefox.com",
        },
        sameAs: ["https://linkedin.com/company/azefox-innovations", "https://twitter.com/azefoxinnovations"],
        ...data,
      }

    case "Course":
      return {
        ...baseStructuredData,
        name: data.name,
        description: data.description,
        provider: {
          "@type": "Organization",
          name: "Azefox Innovations",
          url: baseUrl,
        },
        courseMode: "online",
        educationalLevel: data.level || "Intermediate",
        ...data,
      }

    case "Service":
      return {
        ...baseStructuredData,
        name: data.name,
        description: data.description,
        provider: {
          "@type": "Organization",
          name: "Azefox Innovations",
          url: baseUrl,
        },
        serviceType: "Cybersecurity Consulting",
        ...data,
      }

    case "Article":
      return {
        ...baseStructuredData,
        headline: data.headline,
        description: data.description,
        author: {
          "@type": "Organization",
          name: "Azefox Innovations",
        },
        publisher: {
          "@type": "Organization",
          name: "Azefox Innovations",
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/logo.webp`,
          },
        },
        datePublished: data.datePublished,
        dateModified: data.dateModified || data.datePublished,
        ...data,
      }

    default:
      return baseStructuredData
  }
}
