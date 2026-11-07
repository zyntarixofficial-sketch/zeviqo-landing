import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zeviqo - AI Study, Smart Flashcards & Quiz Maker App",
  description:
    "Founded by Mahabul Alam Molla. Turn lecture notes & PDFs into smart flashcards, automatic quizzes, and clear summaries. Prepare for exams faster with Zeviqo AI.",
  keywords: [
    "Mahabul Alam Molla",
    "Mahabul Alam Molla Zeviqo",
    "Zeviqo",
    "flash card",
    "quiz app",
    "quiz maker",
    "AI flashcards",
    "study app",
    "PDF to quiz",
    "exam preparation",
  ],
  authors: [{ name: "Mahabul Alam Molla", url: "https://zeviqo.in" }],
  creator: "Mahabul Alam Molla",
  publisher: "Mahabul Alam Molla",
  metadataBase: new URL("https://zeviqo.in"),
  openGraph: {
    title: "Zeviqo - Founded by Mahabul Alam Molla",
    description: "Learn Smarter. Revise Faster. Ace Every Exam with Zeviqo AI.",
    url: "https://zeviqo.in",
    siteName: "Zeviqo",
    images: [
      {
        url: "https://zeviqo.in/founder.jpg",
        width: 800,
        height: 800,
        alt: "Mahabul Alam Molla - Founder & Creator of Zeviqo",
      },
    ],
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
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://zeviqo.in/#founder",
        "name": "Mahabul Alam Molla",
        "jobTitle": "Founder & Creator",
        "image": "https://zeviqo.in/founder.jpg",
        "nationality": {
          "@type": "Country",
          "name": "India"
        },
        "homeLocation": {
          "@type": "Place",
          "name": "West Bengal, India"
        },
        "description": "Mahabul Alam Molla is an Indian technology innovator, author, and software creator from West Bengal. He is the founder and creator of Zeviqo, an AI-powered smart study and flashcards application.",
        "worksFor": {
          "@id": "https://zeviqo.in/#organization"
        },
        "sameAs": [
          "https://play.google.com/store/apps/details?id=in.zeviqo.app"
        ]
      },
      {
        "@type": "Organization",
        "@id": "https://zeviqo.in/#organization",
        "name": "Zeviqo",
        "url": "https://zeviqo.in",
        "logo": "https://zeviqo.in/founder.jpg",
        "founder": {
          "@id": "https://zeviqo.in/#founder"
        },
        "description": "Educational technology platform providing AI study companions, flashcard automation, and interactive exam revision."
      },
      {
        "@type": "SoftwareApplication",
        "name": "Zeviqo",
        "operatingSystem": "Android",
        "applicationCategory": "EducationalApplication",
        "url": "https://zeviqo.in",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "INR"
        },
        "author": {
          "@id": "https://zeviqo.in/#founder"
        },
        "publisher": {
          "@id": "https://zeviqo.in/#organization"
        },
        "description": "AI-powered study tool for automatic flashcards, quizzes, and instant doubt clearance."
      }
    ]
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
