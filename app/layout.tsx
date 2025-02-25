import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

// Import the layout components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollUpButton from "./components/ScrollUpButton";
import ClientScripts from "./components/ClientScripts";

// Font configuration
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arbaz Ajaz - Portfolio",
  description:
    "Arbaz Ajaz's Portfolio Website built with Next.js and Tailwind CSS for showcasing his work and skills. Hire him for your next project. Contact him now! 🚀",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Add the Header */}
        <Header />

        {/* Main content of the page */}
        <main className="layout-content">{children}</main>

        {/* Add the Footer */}
        <Footer />

        {/* Add ScrollUpButton */}
        <ScrollUpButton />

        <ClientScripts />
      </body>
    </html>
  );
}
