import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const AboutNAF = () => {
  const { t } = useLanguage();
  const { addRef } = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-7xl">
        <div ref={addRef} className="scroll-fade-up text-center mb-12">
          <h2 className="font-power font-bold text-4xl md:text-5xl text-foreground mb-6">
            {t.about.title}
          </h2>
        </div>

        <div ref={addRef} className="scroll-fade-up max-w-4xl mx-auto">
          <p className="font-satoshi text-lg text-muted-foreground mb-8 leading-relaxed">
            {t.about.description}
          </p>

          <ul className="space-y-4 mb-8">
            {t.about.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="font-satoshi text-lg text-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <p className="font-satoshi text-lg text-muted-foreground leading-relaxed">
            {t.about.footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutNAF;
