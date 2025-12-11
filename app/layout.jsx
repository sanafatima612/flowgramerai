import CursorDot from "./components/CursorDot";
import DashboardLayout from "./components/layout/DashboardLayout";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import CursorDotProvider from "./hooks/CursorContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FlowGramer AI | Intelligent Automation & AI Solutions",
  description: "FlowGramer AI delivers cutting-edge artificial intelligence solutions, workflow automation, and custom software development to transform your business operations.",
  keywords: "AI solutions, machine learning, automation, custom software, FlowGramer AI, artificial intelligence, business automation",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "FlowGramer AI | Intelligent Automation & AI Solutions",
    description: "Transform your business with intelligent AI automation and custom software solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CursorDotProvider>
        <CursorDot />
        <DashboardLayout>
          {children}
        </DashboardLayout>
        </CursorDotProvider>
        
      </body>
    </html>
  );
}
