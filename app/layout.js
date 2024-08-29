import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "$Tony",
  description: "Meet $TONY, the ultimate high-roller memecoin that brings a touch of danger and a whole lot of swagger to the crypto world.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
