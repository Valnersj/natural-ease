import ScrollReveal from "@/components/ScrollReveal";
import { Leaf, Shield, Heart } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Origem certificada",
    description:
      "Cada produto passa por curadoria rigorosa. Você sabe de onde vem e como foi produzido.",
  },
  {
    icon: Shield,
    title: "Segurança na escolha",
    description:
      "Informações claras e transparentes para você decidir com confiança, sem pressa.",
  },
  {
    icon: Heart,
    title: "Cuidado que funciona",
    description:
      "Produtos que se integram à sua rotina de forma simples e trazem resultados reais.",
  },
];

const Benefits = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="heading-section text-center mb-4">
            Por que escolher a Paraíso das Ervas
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="body-large text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Cuidamos da seleção para que você cuide de si com tranquilidade.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit.title} delay={0.1 * (index + 1)}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                  <benefit.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
