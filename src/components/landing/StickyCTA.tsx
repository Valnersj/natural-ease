import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero
      setIsVisible(window.scrollY > window.innerHeight * 0.5);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="sticky-cta"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                Cuide de você com tranquilidade
              </p>
              <p className="text-xs text-muted-foreground">
                Produtos naturais selecionados
              </p>
            </div>
            <a
              href="#planos"
              className="flex-shrink-0 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full"
            >
              Ver planos
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
