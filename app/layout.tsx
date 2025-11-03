import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DesignArena.ai - Where AIs Compete, Creativity Wins",
  description: "AI vs AI design battles. Vote, compare, and discover the best AI-generated designs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
