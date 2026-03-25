"use client";

import { Button } from "@/components/ui/button";
import { Briefcase, MessageSquare } from "lucide-react";
import Link from "next/link";
import { CodeTerminal } from "@/components/ui/CodeTerminal";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center animate-fade-in">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold mb-8 uppercase tracking-widest">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          FiveM Development Studio
        </div>
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-headline tracking-tighter mb-8 leading-tight max-w-5xl">
          Seu servidor no <span className="text-gradient">nível máximo</span> com a <span className="relative inline-block text-primary">DevLab<span className="absolute bottom-2 left-0 w-full h-4 bg-primary/20 -z-10"></span></span>
        </h1>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mb-12 leading-relaxed font-light">
          Scripts exclusivos, otimizações avançadas e sistemas completos. 
          Deixe o código pesado com quem entende e foque na experiência dos seus jogadores.
        </p>

        {/* Central Terminal Area - Perfect Centering */}
        <div className="w-full max-w-5xl mb-16 px-0 animate-float">
          <div className="relative">
            <div className="absolute -inset-10 bg-primary/20 blur-[100px] -z-10 rounded-full opacity-50" />
            <CodeTerminal />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <Button size="lg" className="h-16 px-12 text-xl font-bold bg-primary hover:bg-primary/90 neon-glow transition-all group w-full sm:w-auto" asChild>
            <Link href="/planos">
              Ver Planos de Desenvolvimento <Briefcase className="ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-16 px-12 text-xl font-bold border-white/20 hover:bg-white/5 transition-all group w-full sm:w-auto" asChild>
            <Link href="https://discord.gg/d7ajNWrc" target="_blank">
              Entrar no Discord <MessageSquare className="ml-3 group-hover:scale-110 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/5 w-full max-w-4xl flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Desenvolvedores Certificados</div>
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Suporte 24/7</div>
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white">Código Otimizado</div>
        </div>
      </div>
    </section>
  );
}
