import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle } from "lucide-react";
import AnimatedButton from "@/components/AnimatedButton";

const ThankYou = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isDehogaMember = location.state?.isDehogaMember;

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <CheckCircle className="w-24 h-24 text-primary" />
        </div>

        <h1 className="font-power font-bold text-4xl md:text-5xl text-foreground mb-6">
          {t.thankyou.title}
        </h1>

        <p className="font-satoshi text-lg text-muted-foreground mb-6 leading-relaxed">
          {t.thankyou.message}
        </p>

        {isDehogaMember && (
          <p className="font-satoshi text-lg text-primary mb-8 leading-relaxed">
            {t.thankyou.dehogaInfo}
          </p>
        )}

        <div className="flex justify-center mt-12">
          <AnimatedButton onClick={() => navigate("/")}>
            Back to Home
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
