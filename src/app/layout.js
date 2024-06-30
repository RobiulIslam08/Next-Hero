"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Component/Navbar/Navbar";





const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar></Navbar>
        {children}
        <footer className="bg-gray-600">footer</footer>
      </body>
    </html>
  );
}
