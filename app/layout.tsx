import type { Metadata } from "next";
import { Wix_Madefor_Display, Wix_Madefor_Text } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "./components/animations/AnimatedCursor";

const wixMadeforDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-wix-madefor-display",
});

const wixMadeforText = Wix_Madefor_Text({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  variable: "--font-wix-madefor-text",
});

export const metadata: Metadata = {
  title: "Wix Clone | Website Builder",
  description: "Create a website without limits - Wix Clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${wixMadeforDisplay.variable} ${wixMadeforText.variable} antialiased`}
      >
        <AnimatedCursor />
        {children}
      </body>
    </html>
  );
}
