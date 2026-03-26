
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "/" },
    { name: "Scripts", href: "/scripts" },
    { name: "Planos Dev", href: "/planos" },
    { name: "Hospedagem", href: "/hospedagem" },
    { name: "Serviços", href: "/servicos" },
    { name: "Diferenciais", href: "/diferenciais" },
    { name: "Termos", href: "/termos" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12",
        isScrolled || pathname !== "/" ? "py-4 bg-background/80 backdrop-blur-md border-b border-white/10" : "py-6 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 group-hover:scale-110 transition-transform flex items-center justify-center">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center neon-glow">
               <Rocket className="text-white w-6 h-6" />
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter font-headline text-white group-hover:text-primary transition-colors">
              DEV<span className="text-primary">LAB</span>
            </span>
            <span className="text-[10px] font-bold text-muted-foreground tracking-[0.3em] uppercase">Studio</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-nowrap overflow-hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors whitespace-nowrap",
                pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="neon-glow font-bold bg-primary hover:bg-primary/90">
            <Link href="https://discord.gg/d7ajNWrc" target="_blank">
              Contratar Dev
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Trigger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-b border-white/10 p-6 flex flex-col gap-6 md:hidden animate-in slide-in-from-top duration-300 overflow-y-auto max-h-[80vh]">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "text-lg font-medium transition-colors",
                pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="w-full neon-glow font-bold bg-primary">
            <Link href="https://discord.gg/d7ajNWrc" target="_blank">
              Contratar Dev
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
