import { motion } from "framer-motion";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <header className="min-h-screen flex items-center section-padding">
      <div className="container-narrow w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Text content - 60% */}
          <div className="md:col-span-3 order-2 md:order-1">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground text-sm uppercase tracking-widest mb-4"
            >
              Paraíso das Ervas
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-display text-foreground mb-6 text-balance"
            >
              Cuidado natural sem insegurança.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="body-large text-muted-foreground mb-8 max-w-lg"
            >
              Produtos naturais para quem cuida conscientemente. 
              Curadoria responsável, origem confiável, entrega segura.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#planos" className="btn-primary">
                Escolher com tranquilidade
              </a>
            </motion.div>
          </div>
          
          {/* Image - 40% */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:col-span-2 order-1 md:order-2"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src={heroImage}
                alt="Ritual de chá com ervas naturais em ambiente acolhedor"
                className="w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
