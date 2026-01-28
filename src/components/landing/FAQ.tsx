import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Os produtos são realmente naturais?",
    answer:
      "Sim. Trabalhamos apenas com fornecedores certificados e fazemos uma curadoria rigorosa de cada produto. Todos têm rastreabilidade completa, do campo até sua casa. Você pode verificar a origem e os certificados na página de cada produto.",
  },
  {
    question: "E se eu não gostar ou não me adaptar?",
    answer:
      "Oferecemos garantia de satisfação. Se você não se adaptar ao produto nos primeiros 30 dias, devolvemos seu dinheiro ou trocamos por outro item. Queremos que você escolha com tranquilidade, sem medo de errar.",
  },
  {
    question: "Como sei qual produto é certo para mim?",
    answer:
      "Cada produto tem informações detalhadas sobre indicações, modo de uso e para quem é mais indicado. Além disso, nosso atendimento está disponível para tirar dúvidas e ajudar você a escolher. Não temos pressa — preferimos que você decida com segurança.",
  },
  {
    question: "Quanto tempo demora a entrega?",
    answer:
      "Enviamos em até 2 dias úteis após a confirmação do pagamento. O prazo de entrega varia de 3 a 10 dias úteis, dependendo da região. Você receberá o código de rastreamento para acompanhar seu pedido em tempo real.",
  },
  {
    question: "O pagamento é seguro?",
    answer:
      "Totalmente seguro. Utilizamos criptografia de ponta e trabalhamos com as principais plataformas de pagamento do mercado. Aceitamos cartão de crédito, PIX e boleto bancário. Seus dados estão protegidos.",
  },
];

const FAQ = () => {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <ScrollReveal>
          <h2 className="heading-section text-center mb-4">
            Dúvidas frequentes
          </h2>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <p className="body-large text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Transparência é um dos nossos valores. Tire suas dúvidas aqui.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-elevated border-none px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default FAQ;
