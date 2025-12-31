import type { Metadata } from "next";
import { Kiwi_Maru } from "next/font/google";
import "./globals.css";

const kiwiMaru = Kiwi_Maru({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "絶対スケール感覚",
  description: "直感で身の回りのモノのスケールを当てるミニゲームアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${kiwiMaru.className} antialiased w-full min-h-screen flex flex-col items-center justify-between bg-white text-black`}>
        <main className="max-w-3xl md:max-w-5xl mx-auto grow">
          {children}
        </main>
      </body>
    </html>
  );
}
