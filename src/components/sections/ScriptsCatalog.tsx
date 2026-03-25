"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Eye, Code2, Database, Layout, PackageSearch } from "lucide-react";
import Image from "next/image";

// Array de scripts agora vazio conforme solicitado
const scripts: any[] = [];

export function ScriptsCatalog() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-4">
            Catálogo de <span className="text-primary">Scripts</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore nossa coleção de scripts exclusivos, prontos para instalar e transformar seu servidor.
          </p>
        </div>

        {scripts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {scripts.map((script, i) => (
              <Card key={i} className="glass-morphism border-white/10 overflow-hidden group hover:border-primary/50 transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <Image 
                    src={script.image} 
                    alt={script.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="fivem script"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {script.tags.map(tag => (
                      <Badge key={tag} variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2">
                        {script.icon} {script.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2 line-clamp-2">
                        {script.description}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-black text-primary">{script.price}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 font-bold" asChild>
                    <a href="https://discord.gg/d7ajNWrc" target="_blank">
                      <ShoppingCart className="w-4 h-4 mr-2" /> Comprar Agora
                    </a>
                  </Button>
                  <Button variant="outline" className="border-white/10 hover:bg-white/5 font-bold">
                    <Eye className="w-4 h-4 mr-2" /> Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-white/5 rounded-3xl bg-white/2 max-w-4xl mx-auto">
            <PackageSearch className="w-16 h-16 text-muted-foreground mb-4 opacity-20" />
            <h3 className="text-xl font-bold text-white/50">Nenhum script disponível no momento</h3>
            <p className="text-muted-foreground text-sm mt-2">Estamos preparando novidades incríveis. Fique de olho!</p>
            <Button variant="link" className="text-primary mt-4 font-bold" asChild>
              <a href="https://discord.gg/d7ajNWrc" target="_blank">Sugerir um script no Discord</a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
