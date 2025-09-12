import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Suspense } from "react"
import { EnrollmentProvider } from "@/components/enrollment/enrollment-provider"
import "./globals.css"

export const metadata: Metadata = {
  title: "Azefox Innovations - Cybersecurity Training & IT Consulting",
  description:
    "Leading provider of cybersecurity training, IT security consulting, assessments, and managed services. Empowering 10K+ learners and 500+ enterprises with cutting-edge security solutions.",
  keywords:
    "cybersecurity training, IT consulting, security assessments, managed services, VAPT, SOC operations, compliance training",
  authors: [{ name: "Azefox Innovations" }],
  creator: "Azefox Innovations",
  publisher: "Azefox Innovations",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://azefox.com",
    siteName: "Azefox Innovations",
    title: "Azefox Innovations - Cybersecurity Training & IT Consulting",
    description:
      "Leading provider of cybersecurity training, IT security consulting, assessments, and managed services.",
    images: [
      {
        url: "/logo.webp",
        width: 1200,
        height: 630,
        alt: "Azefox Innovations - Cybersecurity Training & IT Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Azefox Innovations - Cybersecurity Training & IT Consulting",
    description:
      "Leading provider of cybersecurity training, IT security consulting, assessments, and managed services.",
    images: ["/logo.webp"],
  },
  viewport: "width=device-width, initial-scale=1",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/logo.webp" type="image/webp" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <EnrollmentProvider>
          <Suspense fallback={<div>Loading..</div>}>
            <Navigation />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Analytics />
          </Suspense>
        </EnrollmentProvider>
      </body>
    </html>
  )
}
