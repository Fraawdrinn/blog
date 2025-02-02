import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wael Chatoui",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="overflow-x-hidden w-screen scroll-smooth"
      >
        {children}
      </body>
    </html>
  );
}
