import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Akila Abeysinghe | Video Editor & Software Engineer",
  description: "Portfolio of Akila Abeysinghe, a professional Video Editor and Software Engineer specializing in premium content creation and enterprise management systems.",
};

import { Providers } from "@/components/providers/Providers";
import { Sidebar } from "@/components/layout/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} ${notoSansJP.variable} antialiased bg-slate-950 text-slate-100 selection:bg-tokyo-blue selection:text-white`}
      >
        <Providers>
          <Sidebar />
          <main className="lg:pl-80 min-h-screen">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
