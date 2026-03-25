"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const hostingFaqs = [
  {
    q: "O FiveM já vem instalado e configurado?",
    a: "Não, entregamos o servidor VPS com o sistema operacional limpo (Ubuntu ou CentOS). Você tem total liberdade e acesso root para realizar a sua própria instalação e configuração do FiveM conforme sua preferência.",
  },
  {
    q: "Quantos jogadores posso ter online simultaneamente?",
    a: "Isso depende da otimização dos seus scripts e do plano escolhido. Nossa infraestrutura suporta desde pequenos servidores até grandes comunidades com mais de 300 slots simultâneos.",
  },
  {
    q: "Posso instalar scripts e mods personalizados?",
    a: "Sim! Com o acesso root total, você pode instalar qualquer framework (VRP, QBCore, ESX), scripts, mods de mapas e carros sem nenhuma restrição técnica por nossa parte.",
  },
  {
    q: "Vocês fazem backup dos meus dados?",
    a: "Sim, realizamos snapshots periódicos da infraestrutura. No entanto, sempre recomendamos que o administrador mantenha rotinas de backups externos dos arquivos críticos e banco de dados.",
  },
  {
    q: "Como é a performance para roleplay intenso?",
    a: "A performance é excepcional. Graças aos processadores AMD Ryzen 9 e discos NVMe Gen4, garantimos que seu servidor processe milhares de linhas de código Lua sem quedas de FPS ou gargalos de sincronização.",
  },
];

export function HostingFAQ() {
  return (
    <section className="py-24 bg-background/50">
      <div className="container mx-auto px-6 max-4xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-black uppercase tracking-widest mb-6">
            <HelpCircle className="w-3 h-3" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter text-white">
            Dúvidas sobre <span className="text-primary">VPS para FiveM?</span>
          </h2>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {hostingFaqs.map((faq, i) => (
              <AccordionItem 
                key={i} 
                value={`item-${i}`} 
                className="border border-white/5 bg-white/5 rounded-2xl px-6 transition-all hover:border-primary/30 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-bold text-white hover:text-primary transition-colors py-6 hover:no-underline">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <HelpCircle className="w-4 h-4 text-primary" />
                    </div>
                    {faq.q}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6 pl-12">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
