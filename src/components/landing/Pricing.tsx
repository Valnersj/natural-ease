import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Essencial",
    subtitle: "Para conhecer",
    price: "89",
    description: "Experimente com tranquilidade",
    features: [
      "1 produto de sua escolha",
      "Guia de uso detalhado",
      "Frete grátis acima de R$ 150",
      "Suporte por e-mail",
    ],
    cta: "Começar com calma",
    featured: false,
  },
  {
    name: "Equilíbrio",
    subtitle: "Mais escolhido",
    price: "179",
    originalPrice: "267",
    description: "Investimento consciente",
    features: [
      "3 produtos selecionados",
      "Guia de uso + receitas naturais",
      "Frete grátis",
      "Suporte prioritário",
      "Desconto de 33%",
    ],
    cta: "Escolher com tranquilidade",
    featured: true,
  },
  {
    name: "Harmonia",
    subtitle: "Para continuidade",
    price: "299",
    originalPrice: "445",
    description: "Cuidado completo",
    features: [
      "5 produtos selecionados",
      "Consultoria personalizada",
      "Frete grátis + brinde",
      "Suporte VIP",
      "Desconto de 33%",
    ],
    cta: "Cuidar melhor hoje",
    featured: false,
  },
];

const Pricing = () => {
  return (
    <section id="planos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="heading-section text-center mb-4">
            Invista no seu cuidado
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="body-large text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Escolha a opção que melhor se adapta à sua rotina. 
            Sem surpresas, sem letras miúdas.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
          {plans.map((plan, index) => (
            <ScrollReveal key={plan.name} delay={0.1 * (index + 1)}>
              <div
                className={cn(
                  "relative rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-300",
                  plan.featured
                    ? "bg-primary text-primary-foreground scale-100 md:scale-105 shadow-xl"
                    : "bg-card border border-border"
                )}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-medium px-4 py-1 rounded-full">
                    Recomendado
                  </span>
                )}

                <div className="mb-6">
                  <p
                    className={cn(
                      "text-sm uppercase tracking-wider mb-1",
                      plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}
                  >
                    {plan.subtitle}
                  </p>
                  <h3
                    className={cn(
                      "text-2xl font-medium",
                      plan.featured ? "text-primary-foreground" : "text-foreground"
                    )}
                  >
                    {plan.name}
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={cn(
                        "text-4xl font-light",
                        plan.featured ? "text-primary-foreground" : "text-foreground"
                      )}
                    >
                      R$ {plan.price}
                    </span>
                    {plan.originalPrice && (
                      <span
                        className={cn(
                          "text-lg line-through",
                          plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"
                        )}
                      >
                        R$ {plan.originalPrice}
                      </span>
                    )}
                  </div>
                  <p
                    className={cn(
                      "text-sm mt-1",
                      plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                          plan.featured ? "bg-primary-foreground/20" : "bg-primary/10"
                        )}
                      >
                        <Check
                          className={cn(
                            "w-3 h-3",
                            plan.featured ? "text-primary-foreground" : "text-primary"
                          )}
                          strokeWidth={2.5}
                        />
                      </span>
                      <span
                        className={cn(
                          "text-sm",
                          plan.featured ? "text-primary-foreground" : "text-foreground"
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={cn(
                    "w-full py-4 rounded-full font-medium transition-all duration-300",
                    plan.featured
                      ? "bg-primary-foreground text-primary hover:opacity-90"
                      : "bg-primary text-primary-foreground hover:opacity-90"
                  )}
                >
                  {plan.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
