import { CTA } from "@/components/sections/CTA";

export default function TermosPage() {
  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-black font-headline tracking-tighter mb-4 text-white">
          TERMOS DE USO, REGRAS E <span className="text-primary">POLÍTICA DE REEMBOLSO</span>
        </h1>
        <p className="text-muted-foreground mb-12 font-medium uppercase tracking-widest text-xs">
          Última atualização: 26/03/2026
        </p>

        <div className="prose prose-invert max-w-none space-y-12 text-muted-foreground leading-relaxed">
          <section>
            <p className="text-white text-lg">
              O presente instrumento estabelece os termos e condições aplicáveis à aquisição, acesso e utilização dos produtos e serviços disponibilizados pela DevLab.
            </p>
            <p className="mt-4">
              Ao realizar qualquer compra, contratação ou utilização dos serviços, o usuário declara, para todos os fins de direito, que leu, compreendeu e concorda integralmente com as disposições aqui previstas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary">1.</span> DISPOSIÇÕES GERAIS
            </h2>
            <div className="space-y-4">
              <h3 className="text-white font-bold">1.1 Objeto</h3>
              <p>A DevLab atua na prestação de serviços e fornecimento de produtos digitais, incluindo, mas não se limitando a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Desenvolvimento, manutenção e correção de scripts</li>
                <li>Suporte técnico e contratos recorrentes</li>
                <li>Consultoria técnica especializada</li>
                <li>Comercialização de arquivos digitais (scripts, mapas, roupas e similares)</li>
                <li>Serviços de hospedagem, infraestrutura e VPS</li>
                <li>Integrações e licenças (ex.: Tebex/Keymaster)</li>
              </ul>

              <h3 className="text-white font-bold mt-8">1.2 Definições</h3>
              <p>Para fins deste instrumento:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cliente/Titular:</strong> pessoa física ou jurídica que adquire o produto ou serviço</li>
                <li><strong>Licença:</strong> direito de uso não exclusivo, intransferível (salvo exceções) e limitado</li>
                <li><strong>Produto digital:</strong> qualquer bem intangível disponibilizado</li>
                <li><strong>Serviço:</strong> atividade técnica prestada mediante contratação</li>
                <li><strong>Ticket:</strong> canal oficial e exclusivo de suporte</li>
              </ul>

              <h3 className="text-white font-bold mt-8">1.3 Alterações Contratuais</h3>
              <p>A DevLab reserva-se o direito de modificar, a qualquer tempo, os presentes termos, sendo responsabilidade do usuário consultá-los periodicamente. A versão vigente será aquela publicada nos canais oficiais.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary">2.</span> REGRAS DE CONDUTA E USO
            </h2>
            <div className="space-y-4">
              <h3 className="text-white font-bold">2.1 Conduta do Usuário</h3>
              <p>O usuário obriga-se a manter conduta respeitosa e ética, abster-se de qualquer prática discriminatória, ofensiva ou ilícita e respeitar a equipe, colaboradores e demais usuários.</p>
              
              <h3 className="text-white font-bold mt-8">2.2 Condutas Vedadas</h3>
              <p>É expressamente proibido:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prática de spam, flood ou divulgação não autorizada</li>
                <li>Compartilhamento de conteúdo ilegal, pirateado ou vazado</li>
                <li>Envio de arquivos maliciosos ou tentativa de fraude</li>
                <li>Utilização indevida da comunidade como ambiente comercial não autorizado</li>
              </ul>

              <h3 className="text-white font-bold mt-8">2.3 Penalidades</h3>
              <p>O descumprimento poderá acarretar advertência, suspensão de acesso, banimento permanente, revogação de licenças e adoção de medidas judiciais cabíveis.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary">3.</span> SUPORTE TÉCNICO
            </h2>
            <div className="space-y-4">
              <p>Todo suporte será prestado exclusivamente por meio de <strong>ticket</strong>, não sendo reconhecidos outros canais como oficiais. O suporte será prestado apenas ao titular da licença.</p>
              <p>O cliente compromete-se a fornecer informações completas, colaborar com a equipe e respeitar prazos. O suporte compreende exclusivamente instalação/configuração padrão e correção de falhas atribuíveis ao produto.</p>
              <p>Não estão incluídos: desenvolvimento personalizado, correções de terceiros ou problemas de infraestrutura do cliente.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary">4.</span> LICENCIAMENTO E USO
            </h2>
            <div className="space-y-4">
              <p>A licença concedida é não exclusiva, intransferível e limitada ao uso contratado. É vedado ao usuário revender, redistribuir, vazar arquivos, realizar engenharia reversa ou burlar autenticações.</p>
              <p>Os produtos poderão conter mecanismos de proteção (obfuscation, autenticação, etc.), sendo proibida qualquer tentativa de violação.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary">5.</span> RESPONSABILIDADES
            </h2>
            <div className="space-y-4">
              <p>O cliente é integralmente responsável pela segurança de suas contas, realização de backups e integridade de sua infraestrutura.</p>
              <p>A DevLab não se responsabiliza por danos decorrentes de uso indevido, falhas na infraestrutura do cliente, perda de dados ou ações de terceiros.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-primary">6.</span> POLÍTICA DE REEMBOLSO
            </h2>
            <div className="space-y-4">
              <h3 className="text-white font-bold">6.1 Direito de Arrependimento</h3>
              <p>Nos termos do Art. 49 do Código de Defesa do Consumidor, o cliente poderá solicitar reembolso no prazo de até <strong>7 (sete) dias</strong>.</p>
              
              <h3 className="text-white font-bold mt-8">6.2 Condições</h3>
              <p>O reembolso poderá ser concedido em caso de defeito técnico não solucionado ou incompatibilidade comprovada.</p>

              <h3 className="text-white font-bold mt-8">6.3 Exclusões</h3>
              <p>Não serão passíveis de reembolso: serviços já prestados, consultorias realizadas, produtos utilizados de forma indevida ou assinaturas iniciadas.</p>
            </div>
          </section>

          <section className="pt-12 border-t border-white/5">
            <p className="text-white font-bold text-center italic">
              Ao utilizar os serviços, o usuário declara ciência e concordância integral com este instrumento, reconhecendo sua validade jurídica.
            </p>
          </section>
        </div>
      </div>
      <CTA />
    </div>
  );
}
