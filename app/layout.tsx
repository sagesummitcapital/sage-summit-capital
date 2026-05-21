import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sagesummitcapital.com"),
  title:
    "Sage Summit Capital — Building the next generation of AI-native businesses",
  description:
    "Sage Summit Capital is an AI-native investment and operating platform focused on acquiring, building, and transforming middle-market companies through intelligent systems and operational modernization.",
  openGraph: {
    title: "Sage Summit Capital — Capital for the AI-native era",
    description:
      "An AI-native investment and operating platform building, acquiring, and transforming middle-market companies.",
    type: "website",
    images: ["/assets/sage-summit-logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sage Summit Capital",
    description: "Capital for the AI-native era.",
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
