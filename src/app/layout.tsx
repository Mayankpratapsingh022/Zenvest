import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenvest",
  description: "Level up your finance game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
      <meta property="og:title" content="Zenvest Finance" />
      <meta property="og:type" content="/zenvestVideo.mp4"></meta>
   
      </head>
      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
