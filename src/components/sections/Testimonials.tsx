import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Ricardo Mendes",
      server: "Elite RP",
      text: "Melhor investimento que fiz no servidor. O sistema de crafting que a DevLab criou é simplesmente perfeito e não pesa nada no servidor.",
      rating: 5,
    },
    {
      name: "Luizinho Gamer",
      server: "Velozes RP",
      text: "Entrega extremamente rápida. Estava com um bug crítico na base e o suporte resolveu em menos de 1 hora. Recomendo demais!",
      rating: 5,
    },
    {
      name: "Ana Clara",
      server: "Life City",
      text: "O atendimento via Discord é nota 10. Eles realmente entendem o que a gente pede e dão sugestões que melhoram ainda mais a ideia inicial.",
      rating: 5,
    }
  ];

  return (
    <section className="py-24 bg-black/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black font-headline tracking-tighter mb-4">
            O que dizem nossos <span className="text-primary">Clientes</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 rounded-2xl glass-morphism border border-white/5 relative group transition-all duration-300 hover:border-primary/30">
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm italic mb-8 leading-relaxed">"{t.text}"</p>
              <div className="border-t border-white/5 pt-6">
                <h4 className="font-bold text-white text-sm">{t.name}</h4>
                <p className="text-xs text-primary font-black uppercase tracking-widest">{t.server}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
