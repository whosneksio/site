import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from 'next/head'; // Import Head component from next/head
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata & { url: URL } = {
  title: 'resonance.rest',
  description: 'Discover a range of innovative tools designed to enhance your experience with Wuthering Waves. Our projects are open-source, fostering collaboration and community-driven development.',
  keywords: 'resonance, rest, api, image, avatar, generation, simple, fast, reliable, ww, wuthering waves, wuwa, wuthering, wutheringwwaves, waves, wuwaapi, wwapi, icon, api, wuthering waves fps unlocker, fps unlocker, fps, fps unlock, wuthering waves rpc, wuthering waves discord rich presence, rpc, discord rich presence',
  themeColor: '#D86A59',
  url: new URL('https://resonance.rest/'), 
  openGraph: {
    title: 'resonance.rest',
    siteName: 'resonance.rest',
    description: 'Discover a range of innovative tools designed to enhance your experience with Wuthering Waves. Our projects are open-source, fostering collaboration and community-driven development.',
    url: 'https://resonance.rest/',
    images: [
      {
        url: 'https://cdn.resonance.rest/logo.png',
        width: 64,
        height: 64,
      },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
