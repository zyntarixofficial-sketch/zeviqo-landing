import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeviqo - AI Study, Smart Flashcards & Quiz Maker App",
  description:
    "Created by Mahabul Alam Molla. Turn lecture notes & PDFs into smart flashcards, automatic quizzes, and clear summaries. Prepare for exams faster with Zeviqo AI.",
  keywords: [
    "Zeviqo",
    "flash card",
    "quiz app",
    "quiz maker",
    "AI flashcards",
    "study app",
    "PDF to quiz",
    "Mahabul Alam Molla",
    "exam preparation",
  ],
  authors: [{ name: "Mahabul Alam Molla" }],
  creator: "Mahabul Alam Molla",
  publisher: "Zeviqo Education",
  metadataBase: new URL("https://zeviqo.in"),
  openGraph: {
    title: "Zeviqo - AI Flashcards & Quiz Generator",
    description: "Learn Smarter. Revise Faster. Ace Every Exam with Zeviqo.",
    url: "https://zeviqo.in",
    siteName: "Zeviqo",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Zeviqo",
    "operatingSystem": "Android",
    "applicationCategory": "EducationalApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "INR"
    },
    "author": {
      "@type": "Person",
      "name": "Mahabul Alam Molla",
      "jobTitle": "Founder & Creator"
    },
    "description": "AI-powered study tool for automatic flashcards, quizzes, and instant doubt clearance."
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
