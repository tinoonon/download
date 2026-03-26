
import Link from "next/link";
import { Github, Twitter, Youtube, Rocket } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-white/5 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Rocket className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tighter font-headline text-white group-hover:text-primary transition-colors">
                DEV<span className="text-primary">LAB</span> STUDIO
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6">
              Excelência em desenvolvimento FiveM. Criamos sistemas que elevam o patamar do seu servidor, com foco em performance e experiência do jogador.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Youtube className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">Início</Link></li>
              <li><Link href="/scripts" className="text-muted-foreground hover:text-primary transition-colors text-sm">Scripts</Link></li>
              <li><Link href="/planos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Planos</Link></li>
              <li><Link href="/hospedagem" className="text-muted-foreground hover:text-primary transition-colors text-sm">Hospedagem</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Suporte</h4>
            <ul className="space-y-4">
              <li><a href="https://discord.gg/d7ajNWrc" className="text-muted-foreground hover:text-primary transition-colors text-sm">Discord Community</a></li>
              <li><Link href="/termos" className="text-muted-foreground hover:text-primary transition-colors text-sm">Termos e Reembolso</Link></li>
              <li><Link href="/diferenciais" className="text-muted-foreground hover:text-primary transition-colors text-sm">Diferenciais</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-muted-foreground text-xs font-medium">
            © {new Date().getFullYear()} DevLab FiveM Studio. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="/termos" className="text-muted-foreground hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Privacidade</Link>
            <Link href="/termos" className="text-muted-foreground hover:text-white transition-colors text-[10px] uppercase tracking-widest font-bold">Termos</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
