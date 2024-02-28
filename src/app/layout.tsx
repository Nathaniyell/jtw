import type { Metadata } from "next";
import "../styles/globals.css";
import NavBar from "@/components/Header/NavBar";
import Footer from "@/components/footer/Footer";
import { Providers } from "@/context";
import { Suspense } from "react";
import Loading from "./loading";
import Space from "@/components/Space";

export const metadata: Metadata = {
  title: "Journey to wealth",
  description:
    "At Journey to Wealth, we believe the journey to living a life of abundance starts with you! Our tailored coaching services are designed to provide you with the knowledge, tools, and support needed to take control of your mindset and finances",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body
          style={{ overflowX: "hidden", msOverflowX: "hidden" }}
          className="scroll-smooth w-full overflow-x-hidden bg-white text-black mt-10"
        >
          <NavBar />
          <Space />

          {children}

          <Space />
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
