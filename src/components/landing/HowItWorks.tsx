import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Explore com calma",
    description:
      "Navegue pelos produtos selecionados. Cada um tem informações detalhadas sobre origem, uso e benefícios.",
  },
  {
    number: "02",
    title: "Escolha com segurança",
    description:
      "Tire suas dúvidas pelo nosso atendimento. Estamos aqui para ajudar você a encontrar o que precisa.",
  },
  {
    number: "03",
    title: "Receba em casa",
    description:
      "Entrega cuidadosa e rastreável. Seu pedido chega protegido, pronto para fazer parte da sua rotina.",
  },
];

const HowItWorks = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="heading-section text-center mb-4">
            Como funciona
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="body-large text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Um processo simples, transparente e sem complicação.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={0.15 * (index + 1)}>
              <div className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
                
                <div className="text-center md:text-left">
                  <span className="inline-block text-4xl font-light text-primary/30 mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
