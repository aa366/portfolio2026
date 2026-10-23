import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
// @ts-expect-error CSS side-effect imports are handled by Next.js.
import "./globals.css";
import { cn } from "@/lib/utils";
import AiChatbot from "@/components/AiChatbot";
import Footer from "@/components/Footer";
import NavBar from "@/components/layouts/navbar/NavBar";
import { ThemeProvider as NextThemesProvider } from "@/components/Providers/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";
import TestComponent from "@/components/layouts/test";

// consts
import { ThemeNames } from "@/constants/colors";
import BG from "@/components/layouts/BG";
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdelwahab Anwr's Portfolio",
  description: "Abdelwahab Anwr's Portfolio is a showcase of my work, skills, and experience as a software developer. Explore my projects, read my blog posts, and get in touch to collaborate on exciting opportunities.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const locale = await getLocale();
  const dir = ["ar"].includes(locale) ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={cn("font-sans", inter.variable)}
      suppressHydrationWarning
    >
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <BG />
        <NextThemesProvider
          defaultTheme="system"
          enableSystem
          attribute="class"
          disableTransitionOnChange
          themes={ThemeNames}
        >
          <NextIntlClientProvider>
            <NavBar />


            {children}
            <Footer />
            <AiChatbot />
          </NextIntlClientProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
