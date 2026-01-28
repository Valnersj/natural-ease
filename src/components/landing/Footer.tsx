const Footer = () => {
  return (
    <footer className="section-padding py-8 md:py-12 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-medium text-foreground mb-1">
              Paraíso das Ervas
            </p>
            <p className="text-sm text-muted-foreground">
              Produtos Naturais
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2024 Paraíso das Ervas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
