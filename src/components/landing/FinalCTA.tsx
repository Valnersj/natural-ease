import ScrollReveal from "@/components/ScrollReveal";

const FinalCTA = () => {
  return (
    <section className="section-padding bg-primary">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-normal text-primary-foreground mb-3">
                Cuidado natural sem insegurança.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-primary-foreground/80 text-lg">
                Produtos selecionados para quem cuida conscientemente.
              </p>
            </ScrollReveal>
          </div>
          
          <ScrollReveal delay={0.2}>
            <a
              href="#planos"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary rounded-full font-medium transition-all duration-300 hover:opacity-90 hover:scale-[1.02] whitespace-nowrap"
            >
              Escolher com tranquilidade
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
