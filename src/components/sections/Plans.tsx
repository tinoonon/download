"use client";

import { Check, Info, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    period: "Semanal",
    price: "400",
    description: "Ideal para ajustes pontuais e manutenção básica.",
    highlights: ["8h por dia (Seg a Sáb)", "Até 10 serviços/dia"],
    capacity: 50,
    features: [
      "Instalação e configuração",
      "Bases VRPEX, VRP Old, Creative",
      "Correção de bugs simples",
      "Personalização de scripts",
      "Conversão de scripts",
      "Otimização básica",
      "Documentação",
    ],
    cta: "Contratar Starter",
    featured: false,
  },
  {
    name: "Pro",
    period: "Quinzenal",
    price: "780",
    description: "Para servidores em crescimento que precisam de fôlego.",
    highlights: ["8h por dia (Seg a Sáb)", "Até 10 serviços/dia"],
    capacity: 70,
    features: [
      "Tudo do Starter",
      "Criação de scripts do zero",
      "Recriação de sistemas complexos",
      "Suporte emergencial VIP",
      "Otimização de performance extrema",
      "Análise de logs dedicada",
    ],
    cta: "Contratar Pro",
    featured: true,
  },
  {
    name: "Full",
    period: "Mensal",
    price: "1500",
    description: "A solução definitiva para grandes projetos profissionais.",
    highlights: ["10h por dia (Seg a Dom)", "Até 20 serviços/dia"],
    capacity: 100,
    features: [
      "Tudo do Pro",
      "Direitos autorais exclusivos",
      "Desenvolvedor dedicado 10h/dia",
      "Recriação completa de UI/UX",
      "Segurança anti-dumping",
      "Prioridade máxima na fila",
    ],
    cta: "Contratar Full",
    featured: false,
  },
];

export function Plans() {
  return (
    <section id="plans" className="py-24 bg-black/50 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-4">
            Planos de <span className="text-primary">Desenvolvimento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Escolha o plano que melhor se adapta ao tamanho e às necessidades do seu servidor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-8 rounded-2xl glass-morphism flex flex-col transition-all duration-300 hover:-translate-y-2",
                plan.featured ? "border-primary/50 neon-glow ring-1 ring-primary/20 scale-105" : "border-white/10"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase px-4 py-1 rounded-full animate-pulse shadow-lg">
                  Mais Escolhido
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black tracking-tighter">R$ {plan.price}</span>
                  <span className="text-muted-foreground text-sm">/ {plan.period}</span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {plan.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm font-semibold text-primary">
                    <Star className="w-4 h-4 fill-primary" /> {h}
                  </div>
                ))}
                
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[10px] uppercase font-bold tracking-widest text-muted-foreground">
                    <span>Carga de trabalho</span>
                    <span>{plan.capacity}%</span>
                  </div>
                  <Progress value={plan.capacity} className="h-1.5" />
                </div>
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  "w-full h-12 font-bold transition-all",
                  plan.featured ? "bg-primary hover:bg-primary/90 neon-glow" : "bg-white/10 hover:bg-white/20 text-white"
                )}
                asChild
              >
                <a href="https://discord.gg/d7ajNWrc" target="_blank">
                  {plan.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
