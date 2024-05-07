import type { Metadata } from "next";
import Head from 'next/head';

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
          <Head>
        <meta property="fb:app_id" content="87741124305" />
        <meta property="og:url" content="http://www.youtube.com/watch?v=CFLGRidfF04" />
        <meta property="og:title" content="Vanilla Ice Ninja Rap - Go Ninja, Go Ninja Go!" />
        <meta property="og:description" content="Ninja Rap music video by Vanilla Ice from Teenage Mutant Ninja Turtles 2 movie back in '91. Classic." />
        <meta property="og:type" content="video" />
        <meta property="og:image" content="http:///14.ytimg.com/vi/GFLGRidF04/default.jpg" />
        <meta property="og:video" content="http://www.youtube.com/v/GFLGRidF04?version=3&autohide=1" />
        <meta property="og:video:type" content="application/x-shockwave-flash" />
        <meta property="og:video:width" content="398" />
        <meta property="og:video:height" content="264" />
        <meta property="og:site_name" content="YouTube" />
      </Head>

      <body className={inter.className}>{children}</body>
      
    </html>
  );
}
