import type { Metadata } from "next";
import "./globals.css";
import { Merriweather } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { ReactQueryClientProvider } from "@/components/component/QueryClientProvider";
import SEO from "@/components/component/SEO/SEO";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Himalayan Spices  ",
  description: "Authentic Himalayan Cuisine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SEO />
      <body className={merriweather.className}>
        <ReactQueryClientProvider>
          <Navbar />
          {children}
          <Footer />
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
