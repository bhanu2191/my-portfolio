import type { Metadata } from "next";
import { Inter, Noto_Sans_JP } from "next/font/google"; // Import Japanese font
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Akila Abeysinghe | Senior Full-Stack Engineer",
  description: "Portfolio of Akila Abeysinghe, a Software Engineering graduate targeting senior roles in the Japanese tech market. Expert in Next.js, Go, and Distributed Systems.",
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
        className={`${inter.variable} ${notoSansJP.variable} antialiased bg-slate-950 text-slate-100 selection:bg-tokyo-blue selection:text-white`}
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
