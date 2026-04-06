import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";
import ElevenLabsAgent from "@/components/shared/ElevenLabsAgent";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Norte Sistemas | Software Development",
  description: "Elite software engineering for SMEs and Startups.",
};

interface RootLayoutProps {
  params: Promise<{ locale: string }>;
  children: React.ReactNode;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  if (!['en', 'es'].includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#131313] text-[#e5e2e1] selection:bg-[#00f0ff]/30 selection:text-[#00f0ff]">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
          <ElevenLabsAgent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
