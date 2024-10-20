import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Huzaifa's Portfolio",
  description: "A good overview of my career so far",
  icons: [
    // standard
    { rel: "icon", url: "/assets/dark-logo.ico", type:"image/x-icon", sizes:"16x16"},
    // apple
    { rel: "apple-touch-icon", url: "/assets/dark-logo.ico", type:"image/x-icon", sizes:"180x180"},
    { rel: "apple-touch-icon", url: "/assets/dark-logo.ico", type:"image/x-icon", sizes:"167x167"},
    { rel: "apple-touch-icon", url: "/assets/dark-logo.ico", type:"image/x-icon", sizes:"152x152"},
    { rel: "apple-touch-icon", url: "/assets/dark-logo.ico", type:"image/x-icon", sizes:"120x120"},
    // android/chrome
    { rel: "icon", url: "/assets/dark-logo.ico", type:"image/x-icon", sizes:"192x192"},
    { rel: "icon", url: "/assets/dark-logo.ico", type:"image/x-icon", sizes:"144x144"},
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        {children}
      </body>
    </html>
  );
}
