// src/components/Layout.tsx
import type { ReactNode } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main>{children}</main>
      {/* Footer nanti di sini */}
    </div>
  );
}
