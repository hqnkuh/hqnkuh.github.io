import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "hqnkuh",
  description: "",
  twitter: {
    card: "summary_large_image",
    creator: "ebina_sl",
    images: ["https://pbs.twimg.com/profile_banners/1723335778007470080/1712918595/600x200"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
