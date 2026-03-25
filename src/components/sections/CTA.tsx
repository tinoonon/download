import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/10 -z-10"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-primary/20 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto p-12 rounded-3xl border border-primary/30 glass-morphism neon-glow relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform">
             <Rocket size={120} />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black font-headline tracking-tighter mb-6 text-white">
            Pronto para elevar seu <span className="text-primary">servidor</span> ao próximo nível?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Junte-se a dezenas de administradores que confiam na DevLab para transformar seus projetos FiveM em realidades de sucesso.
          </p>
          
          <Button size="lg" className="h-16 px-12 text-xl font-black bg-primary hover:bg-primary/90 neon-glow transition-all" asChild>
            <Link href="https://discord.gg/d7ajNWrc" target="_blank">
              Falar no Discord agora!
            </Link>
          </Button>
          
          <p className="mt-8 text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">
            Vagas limitadas por semana • Suporte Prioritário
          </p>
        </div>
      </div>
    </section>
  );
}
