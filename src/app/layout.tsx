import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restauran 🍴",
  description: "Restaurant management App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning className="dark:bg-white bg-white">
    <body className={`${inter.className} min-h-screen`}>
      <div>
        {children}
      </div>
    </body>
  </html>
  );
}
