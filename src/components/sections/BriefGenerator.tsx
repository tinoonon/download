"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { generateProjectBrief, type ProjectBriefOutput } from "@/ai/flows/project-brief-generator";
import { Sparkles, Send, Copy, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function BriefGenerator() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [brief, setBrief] = useState<ProjectBriefOutput | null>(null);

  const handleSubmit = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const result = await generateProjectBrief({ rawRequirements: input });
      setBrief(result);
    } catch (error: any) {
      console.error("Erro no Gerador de Briefing:", error);
      toast({
        title: "Erro ao gerar brief",
        description: error.message || "Ocorreu um problema ao processar seu pedido. Verifique as chaves de API.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!brief) return;
    const text = `
PROJETO: ${brief.projectName}
DESCRIÇÃO: ${brief.projectDescription}
FEATURES: ${brief.keyFeatures.join(", ")}
TECNOLOGIAS: ${brief.technologiesNeeded.join(", ")}
URGÊNCIA: ${brief.urgency}
    `;
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado!",
      description: "Brief copiado para sua área de transferência.",
    });
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary font-bold mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <Sparkles className="relative inline-flex w-3 h-3" />
            </span>
            <span>Inteligência Artificial</span>
          </div>
          <h2 className="text-4xl font-black font-headline tracking-tighter mb-4">
            Gerador de <span className="text-primary">Briefing</span>
          </h2>
          <p className="text-muted-foreground">
            Descreva suas ideias de forma bruta e nossa IA organizará um brief profissional para você enviar no nosso Discord.
          </p>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <Textarea
              placeholder="Ex: Quero um sistema de roubo a banco onde o player precisa hackear um painel usando um minigame, e depois fugir com o dinheiro sujo. Preciso que seja para VRPEX..."
              className="min-h-[150px] bg-white/5 border-white/10 focus:border-primary/50 text-white p-6 rounded-xl transition-all"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button
              className="w-full h-12 bg-primary font-bold neon-glow transition-all"
              onClick={handleSubmit}
              disabled={loading || !input.trim()}
            >
              {loading ? "Processando com IA..." : "Gerar Briefing Profissional"}
              {!loading && <Send className="ml-2 w-4 h-4" />}
            </Button>
          </div>

          {brief && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <Card className="glass-morphism border-primary/30 overflow-hidden">
                <div className="h-1 bg-gradient-to-r from-primary to-accent"></div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl font-black text-primary">{brief.projectName}</CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">{brief.projectDescription}</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" onClick={copyToClipboard} className="hover:bg-primary/20 hover:text-primary">
                      <Copy className="w-4 h-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Principais Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {brief.keyFeatures.map((f, i) => (
                        <span key={i} className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary font-medium">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Stack Recomendada</h4>
                      <div className="text-sm text-white font-medium">{brief.technologiesNeeded.join(" • ")}</div>
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-white/50 mb-3">Estimativa de Urgência</h4>
                      <div className="text-sm text-white font-medium">{brief.urgency}</div>
                    </div>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <Button className="w-full bg-white text-black font-black hover:bg-white/90 group" asChild>
                      <a href="https://discord.gg/d7ajNWrc" target="_blank">
                        Enviar para o Desenvolvedor
                        <CheckCircle className="ml-2 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
