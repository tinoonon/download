import { CheckCircle2 } from "lucide-react";

export function WhyChooseUs() {
  const points = [
    { title: "Alta Performance", desc: "Códigos limpos e otimizados que garantem fluidez máxima." },
    { title: "Atendimento Rápido", desc: "Suporte ágil via Discord para que seu servidor nunca pare." },
    { title: "Multi-Framework", desc: "Experiência avançada com VRP, VRPEX, Creative e QBCore." },
    { title: "Soluções Sob Medida", desc: "Não usamos 'copia e cola'. Desenvolvemos o que você precisa." },
  ];

  return (
    <section id="why" className="py-24 bg-black/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-6">
              Por que escolher a <span className="text-primary">DevLab</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              No mar de desenvolvedores amadores, nos destacamos pelo profissionalismo, entrega no prazo e suporte real. Nosso objetivo é ver seu servidor no topo.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p, i) => (
                <div key={i} className="flex gap-3">
                  <CheckCircle2 className="text-primary shrink-0 w-6 h-6" />
                  <div>
                    <h4 className="font-bold text-white">{p.title}</h4>
                    <p className="text-sm text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-card rounded-2xl p-8 border border-white/10 overflow-hidden">
               <div className="aspect-video bg-black/50 rounded-lg flex items-center justify-center border border-white/5">
                  <div className="text-center">
                    <div className="text-6xl font-black text-primary mb-2">99%</div>
                    <div className="text-muted-foreground uppercase tracking-widest text-xs font-bold">Uptime Médio do código</div>
                  </div>
               </div>
               <div className="mt-6 flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">Frameworks:</span>
                  <div className="flex gap-2">
                    <span className="bg-white/5 px-3 py-1 rounded-full text-xs">VRPEX</span>
                    <span className="bg-white/5 px-3 py-1 rounded-full text-xs">QBCore</span>
                    <span className="bg-white/5 px-3 py-1 rounded-full text-xs">Creative</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
