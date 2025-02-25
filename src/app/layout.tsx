import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const monserrat = Montserrat({
  variable: "--font-monserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bulldog Developments & Consultancy Ltd",
  description: "Family-run property developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} max-w-screen`}>
        <GlobalStateProvider>
          <Navbar />
          {children}
          <Footer />
        </GlobalStateProvider>
      </body>
    </html>
  );
}
