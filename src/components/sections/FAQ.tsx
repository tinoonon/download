"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto tempo demora para entregar um script?",
    a: "Depende da complexidade. Scripts simples levam de 1 a 3 dias, enquanto sistemas complexos podem levar até 15 dias. O prazo exato é dado após a análise técnica.",
  },
  {
    q: "Vocês trabalham com qual framework?",
    a: "Temos vasta experiência em VRP, VRPEX, QBCore e Creative (Base v3/v4).",
  },
  {
    q: "Oferecem suporte após a entrega?",
    a: "Sim! Todos os nossos planos incluem suporte. O nível de prioridade e tempo de resposta varia conforme o plano contratado.",
  },
  {
    q: "Os scripts são abertos ou fechados?",
    a: "Depende da negociação. Oferecemos opções de scripts obfuscados (com desconto) ou código aberto completo (plano Full ou venda avulsa).",
  },
  {
    q: "Fazem scripts do zero ou apenas editam?",
    a: "Desenvolvemos 100% do zero se necessário. Também fazemos recriações de sistemas de outros servidores para otimizar e melhorar funcionalidades.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-headline tracking-tighter mb-4">
            Dúvidas <span className="text-primary">Frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger className="text-left font-bold text-white hover:text-primary transition-colors">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
