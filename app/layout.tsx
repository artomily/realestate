import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavResponsive from "@/components/Home/Navbar/NavResponsive";
import Footer from "@/components/Home/Footer/Footer";

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate Project | Next JS",
  description: "Real Estate Website using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={font.className}>
        <NavResponsive />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
