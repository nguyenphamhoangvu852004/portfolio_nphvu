import { cn } from "@/lib/utils";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/10">
      <main
        className={cn("max-w-3xl mx-auto px-6 py-12 md:space-y-5", className)}
      >
        {children}
      </main>

      <footer className="max-w-3xl mx-auto px-6 py-12 text-muted-foreground text-sm border-t border-border/40">
        <div className="flex justify-between items-center">
          <p>© {new Date().getFullYear()} — Nguyen Pham Hoang Vu</p>
          <p className="font-mono text-[0.7rem] uppercase tracking-widest opacity-50">
            v1.0.0-stable
          </p>
        </div>
      </footer>
    </div>
  );
}
