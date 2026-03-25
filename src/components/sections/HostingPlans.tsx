"use client";

import { Cpu, Database, MemoryStick, Zap, Check, Star, Shield, Globe, Clock, Users, Wifi, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const hostingPlans = [
  {
    name: "CORE",
    price: "125,00",
    specs: ["4GB RAM DDR4/DDR5", "3 vCores Ryzen 9", "50GB SSD NVMe Gen4", "Link 1Gbps Redundante"],
    icon: <Database className="w-6 h-6" />,
    featured: false,
  },
  {
    name: "TURBO",
    price: "160,00",
    specs: ["6GB RAM DDR4/DDR5", "4 vCores Ryzen 9", "60GB SSD NVMe Gen4", "Link 1Gbps Redundante"],
    icon: <Zap className="w-6 h-6" />,
    featured: false,
  },
  {
    name: "OVERDRIVE",
    price: "225,00",
    specs: ["8GB RAM DDR4/DDR5", "5 vCores Ryzen 9", "70GB SSD NVMe Gen4", "Link 1Gbps Redundante"],
    icon: <Cpu className="w-6 h-6" />,
    featured: true,
  },
  {
    name: "LAB",
    price: "260,00",
    specs: ["10GB RAM DDR4/DDR5", "5 vCores Ryzen 9", "80GB SSD NVMe Gen4", "Link 1Gbps Redundante"],
    icon: <MemoryStick className="w-6 h-6" />,
    featured: false,
  },
  {
    name: "TITAN",
    price: "295,00",
    specs: ["12GB RAM DDR4/DDR5", "6 vCores Ryzen 9", "90GB SSD NVMe Gen4", "Link 1Gbps Redundante"],
    icon: <Star className="w-6 h-6" />,
    featured: false,
  },
];

const stats = [
  { label: "300+", sub: "Slots Suportados", icon: <Users className="w-5 h-5" /> },
  { label: "<15ms", sub: "Latência Brasil", icon: <Wifi className="w-5 h-5" /> },
  { label: "99.9%", sub: "Uptime", icon: <Shield className="w-5 h-5" /> },
  { label: "24/7", sub: "Suporte", icon: <Clock className="w-5 h-5" /> },
];

export function HostingPlans() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Hero Header Section */}
      <div className="container mx-auto px-6 text-center mb-24">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-xs font-bold mb-8 uppercase tracking-widest">
          <Database className="w-4 h-4" />
          <span>VPS PARA FIVEM</span>
          <Star className="w-3 h-3 fill-primary" />
        </div>
        
        <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-4 leading-none">
          Servidores <span className="text-primary">VPS para FiveM</span>
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Infraestrutura Profissional
        </h3>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-16">
          Servidores VPS com <span className="text-primary font-bold">máxima performance</span> e <span className="text-primary font-bold">total liberdade</span> para configurar seu FiveM
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <div key={i} className="glass-morphism p-6 rounded-2xl border border-white/5 flex flex-col items-center gap-3 transition-transform hover:-translate-y-1">
              <div className="text-primary">{s.icon}</div>
              <div className="text-2xl font-black text-white">{s.label}</div>
              <div className="text-[10px] uppercase font-bold text-muted-foreground tracking-widest">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Infrastructure Section */}
      <div className="container mx-auto px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold mb-4 uppercase tracking-widest">
              <Shield className="w-3 h-3" />
              <span>O QUE OFERECEMOS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-white">
              Infraestrutura <span className="text-primary">para você configurar</span>
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Fornecemos apenas a infraestrutura de alta qualidade. Você tem total liberdade para instalar e configurar o FiveM da maneira que preferir.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <p className="text-muted-foreground leading-relaxed">
                <span className="text-white font-bold">Nossos servidores VPS</span> são entregues completamente limpos com sistema operacional básico (Ubuntu ou CentOS). Você recebe acesso root total para instalar o FiveM, configurar scripts, mods e personalizar tudo conforme suas necessidades.
              </p>
              
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Servidor Limpo:</h4>
                    <p className="text-sm text-muted-foreground">Ubuntu ou CentOS, você instala o que precisar</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Acesso Root Total:</h4>
                    <p className="text-sm text-muted-foreground">Controle completo para suas configurações</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Suporte de Infraestrutura:</h4>
                    <p className="text-sm text-muted-foreground">Ajudamos com questões do servidor, não com FiveM</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="glass-morphism p-10 rounded-[40px] border border-white/10 relative group">
              <div className="absolute inset-0 bg-primary/5 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="text-primary w-5 h-5" />
                  <h4 className="text-xl font-bold text-white">Recursos de Infraestrutura</h4>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5 text-center flex flex-col items-center gap-4">
                    <Cpu className="w-10 h-10 text-primary" />
                    <div>
                      <div className="text-white font-bold">AMD Ryzen</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-medium">Alta performance</div>
                    </div>
                  </div>
                  <div className="p-6 rounded-3xl bg-white/5 border border-white/5 text-center flex flex-col items-center gap-4">
                    <HardDrive className="w-10 h-10 text-primary" />
                    <div>
                      <div className="text-white font-bold">SSD NVMe</div>
                      <div className="text-[10px] text-muted-foreground uppercase font-medium">Velocidade máxima</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-headline tracking-tighter text-white">
            Nossos <span className="text-primary">Planos</span>
          </h2>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-[1400px] mx-auto">
          {hostingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative p-8 rounded-3xl glass-morphism border flex flex-col transition-all duration-500 hover:-translate-y-4 group",
                plan.featured ? "border-primary/50 neon-glow ring-2 ring-primary/10 bg-primary/5 scale-105" : "border-white/10"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full z-20">
                  Mais Vendido
                </div>
              )}

              <div className="mb-8">
                <div className={cn(
                  "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all",
                  plan.featured ? "bg-primary text-white" : "bg-primary/10 text-primary"
                )}>
                  {plan.icon}
                </div>
                <h3 className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.4em] mb-2">
                  PLANO {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">R${plan.price}</span>
                  <span className="text-muted-foreground text-[10px] uppercase font-bold">/mês</span>
                </div>
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.specs.map((spec, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/90 font-medium">
                    <Check className="w-3 h-3 text-primary shrink-0" />
                    {spec}
                  </div>
                ))}
              </div>

              <Button
                className={cn(
                  "w-full h-14 rounded-2xl font-black text-lg",
                  plan.featured ? "bg-primary hover:bg-primary/90 neon-glow" : "bg-white/5 hover:bg-white/15 text-white border border-white/10"
                )}
                asChild
              >
                <a href="https://discord.gg/d7ajNWrc" target="_blank">
                  CONTRATAR
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
