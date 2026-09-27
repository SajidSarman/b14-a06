import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import ExerciseProvider from "@/context/ExerciseContext";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FITLOG - B14-A06",
  description: "A dark, no-nonsense gym companion to log your daily lifts.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#0d1117]">

        <ExerciseProvider>

          <NavBar></NavBar>
          {children}
          <Footer></Footer>
          
          <ToastContainer />
        </ExerciseProvider>

      </body>
    </html>
  );
}
