import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const differentials = [
  "Curadoria feita por especialistas em fitoterapia",
  "Fornecedores certificados e auditados",
  "Rastreabilidade completa do campo à sua casa",
  "Atendimento humanizado e sem pressa",
  "Garantia de satisfação em todos os produtos",
  "Embalagens sustentáveis e protegidas",
];

const Differentials = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <h2 className="heading-section mb-4">
                O que nos torna diferentes
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="body-large text-muted-foreground mb-8">
                Não somos apenas uma loja. Somos um espaço de confiança para 
                quem busca cuidar da saúde de forma consciente e segura.
              </p>
            </ScrollReveal>

            <ul className="space-y-4">
              {differentials.map((item, index) => (
                <ScrollReveal key={item} delay={0.05 * (index + 2)}>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-primary" strokeWidth={2.5} />
                    </span>
                    <span className="text-foreground">{item}</span>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </div>

          <ScrollReveal delay={0.2} direction="left">
            <div className="card-elevated bg-primary/5 border border-primary/10">
              <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic mb-6">
                "Acreditamos que cuidar da saúde deveria ser simples. 
                Por isso, fazemos o trabalho difícil de selecionar — 
                para que você só precise escolher."
              </blockquote>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20" />
                <div>
                  <p className="font-medium text-foreground">Ana Beatriz Lima</p>
                  <p className="text-sm text-muted-foreground">
                    Fundadora, Paraíso das Ervas
                  </p>
                </div>
              </footer>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
