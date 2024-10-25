import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavResponsive from "@/components/Home/Navbar/NavResponsive";

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
      <body className={font.className}>
        <NavResponsive />
        {children}
      </body>
    </html>
  );
}
