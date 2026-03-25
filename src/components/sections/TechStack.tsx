export function TechStack() {
  const techs = [
    { name: "VRP", color: "from-blue-500 to-cyan-500" },
    { name: "VRPEX", color: "from-cyan-500 to-blue-500" },
    { name: "Creative", color: "from-purple-500 to-pink-500" },
    { name: "Lua", color: "from-blue-600 to-blue-400" },
    { name: "MySQL", color: "from-orange-500 to-yellow-500" },
    { name: "APIs", color: "from-green-500 to-emerald-500" },
    { name: "QBCore", color: "from-red-500 to-orange-500" },
    { name: "Discord.js", color: "from-indigo-500 to-blue-500" },
  ];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <h3 className="text-center text-muted-foreground uppercase tracking-[0.3em] text-xs font-black mb-12">
          Tecnologias que Dominamos
        </h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {techs.map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 grayscale hover:grayscale-0 transition-all cursor-default"
            >
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${tech.color} neon-glow`}></div>
              <span className="text-lg font-bold tracking-tighter text-white/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
