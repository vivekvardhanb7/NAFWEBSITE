import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import AnimatedButton from "./AnimatedButton";
import heroDashboard from "@/assets/hero-dashboard.png";


const images = [heroDashboard];

const Hero = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-20 pb-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 items-center">
          {/* Left side - Text Content */}
          <div className="text-left animate-fade-in">
            <h1 className="font-power font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-foreground mb-3 md:mb-4 tracking-tight leading-tight">
              {t.hero.headline}
            </h1>
            <p className="font-satoshi text-base md:text-lg lg:text-xl text-muted-foreground mb-5 md:mb-6 leading-relaxed">
              {t.hero.subheadline}
            </p>
            <AnimatedButton onClick={scrollToContact} className="mx-0">
              {t.hero.cta}
            </AnimatedButton>
          </div>

          {/* Right side - Image with Gradient Background */}
          <div className="relative">
            <div
              className="absolute inset-0 -z-10 rounded-3xl"
              style={{
                background: "linear-gradient(180deg, hsl(90 100% 71% / 0.3) 0%, hsl(0 0% 5.5%) 100%)",
              }}
            />
            <div className="relative p-3 md:p-6">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={heroDashboard}
                  alt="NAF Vending Machine Dashboard"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
