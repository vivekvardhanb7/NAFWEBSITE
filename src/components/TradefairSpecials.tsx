import { useLanguage } from "@/contexts/LanguageContext";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Gift, Tag, Trophy } from "lucide-react";

const TradefairSpecials = () => {
  const { t } = useLanguage();
  const { addRef } = useScrollAnimation();

  const specials = [
    {
      icon: Tag,
      title: t.specials.earlyBird.title,
      description: t.specials.earlyBird.description,
      color: "text-primary",
    },
    {
      icon: Gift,
      title: t.specials.dehoga.title,
      description: t.specials.dehoga.description,
      color: "text-accent",
    },
    {
      icon: Trophy,
      title: t.specials.prize.title,
      description: t.specials.prize.description,
      color: "text-primary",
    },
  ];

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div ref={addRef} className="scroll-fade-up text-center mb-16">
          <h2 className="font-power font-bold text-4xl md:text-5xl text-foreground mb-6">
            {t.specials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {specials.map((special, index) => (
            <div
              key={index}
              ref={addRef}
              className="scroll-fade-up bg-card rounded-3xl p-8 hover-lift border border-border"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 ${special.color}`}>
                <special.icon className="w-8 h-8" />
              </div>
              <h3 className="font-power font-bold text-2xl text-foreground mb-4">
                {special.title}
              </h3>
              <p className="font-satoshi text-muted-foreground leading-relaxed">
                {special.description}
              </p>
            </div>
          ))}
        </div>

        <div ref={addRef} className="scroll-fade-up text-center">
          <p className="font-satoshi text-lg text-primary font-medium">
            {t.specials.validity}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TradefairSpecials;
