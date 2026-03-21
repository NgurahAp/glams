// src/components/Layout.tsx
import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
}
