import type { Metadata } from "next";
import "./globals.css";
import { SITE_DESCRIPTION } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://sagesummitcapital.com"),
  title: "Sage Summit Capital — The platform behind AI-native finance",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sage Summit Capital — The platform behind Vantage Rock Financial",
    description: SITE_DESCRIPTION,
    type: "website",
    images: ["/assets/sage-summit-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage Summit Capital",
    description: "The holding and operating platform behind Vantage Rock Financial.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
