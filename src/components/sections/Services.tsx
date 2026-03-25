"use client";

import { Code2, Bug, Zap, Share2, Layout, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Scripts Personalizados",
    desc: "Desenvolvimento de funcionalidades únicas do zero, pensadas para a identidade do seu servidor.",
    icon: <Code2 />,
  },
  {
    title: "Correção de Bugs",
    desc: "Diagnóstico profundo e correção de erros em scripts e bases que atrapalham a jogabilidade.",
    icon: <Bug />,
  },
  {
    title: "Otimização Extrema",
    desc: "Redução de MS e melhoria de performance geral do servidor para suportar mais players.",
    icon: <Zap />,
  },
  {
    title: "Integrações (APIs/Webhooks)",
    desc: "Conecte seu servidor ao Discord, bancos de dados externos e outras ferramentas via APIs.",
    icon: <Share2 />,
  },
  {
    title: "Sistemas Completos",
    desc: "Criação de ecossistemas complexos (Farming, Crafting, Facções) com interfaces modernas.",
    icon: <Layout />,
  },
  {
    title: "Segurança Avançada",
    desc: "Implementação de travas, logs de auditoria e proteções contra exploits comuns.",
    icon: <ShieldCheck />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dominamos as principais frameworks e linguagens para entregar o que há de melhor no ecossistema FiveM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <div
              key={i}
              className="p-8 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 neon-glow">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
