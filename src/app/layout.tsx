import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,

} from "next/font/google";
import "./globals.css";
import Header from "./_components/base/header";
import Footer from "./_components/base/footer";
import { grotesque } from "./utils/font";

// import localFont from 'next/font/local'

// // Font files can be colocated inside of `app`
// const myFont = localFont({
//   src: '../../public/fonts/heroFont3.ttf',
//   display: 'swap',
// })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata: Metadata = {
  title: "DanXPrecious",
  description: "The simple developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${grotesque.className} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
