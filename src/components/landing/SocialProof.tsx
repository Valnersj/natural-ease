import ScrollReveal from "@/components/ScrollReveal";
import { Star } from "lucide-react";

const stats = [
  { number: "12.400+", label: "clientes satisfeitos" },
  { number: "98%", label: "recomendam" },
  { number: "4.9", label: "avaliação média", icon: Star },
];

const testimonials = [
  {
    quote:
      "Finalmente encontrei uma loja que me dá segurança na hora de escolher. As informações são claras e os produtos chegam exatamente como prometido.",
    author: "Marina Costa",
    role: "Cliente desde 2022",
  },
  {
    quote:
      "A curadoria é impecável. Não preciso mais pesquisar horas — confio que o que está aqui foi bem selecionado.",
    author: "Roberto Almeida",
    role: "Cliente desde 2021",
  },
  {
    quote:
      "O atendimento é acolhedor e os produtos são de qualidade superior. Vale cada centavo investido no meu bem-estar.",
    author: "Claudia Ferreira",
    role: "Cliente desde 2023",
  },
];

const SocialProof = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={0.1 * index}>
              <div className="text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <span className="text-2xl md:text-4xl font-light text-foreground">
                    {stat.number}
                  </span>
                  {stat.icon && (
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-accent fill-accent" />
                  )}
                </div>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <ScrollReveal>
          <h2 className="heading-section text-center mb-12">
            O que nossos clientes dizem
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.author} delay={0.1 * (index + 1)}>
              <div className="card-elevated h-full flex flex-col">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-accent fill-accent"
                    />
                  ))}
                </div>
                <blockquote className="text-foreground leading-relaxed flex-grow mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <p className="font-medium text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </footer>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
