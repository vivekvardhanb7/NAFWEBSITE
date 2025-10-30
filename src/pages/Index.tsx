import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutNAF from "@/components/AboutNAF";
import TradefairSpecials from "@/components/TradefairSpecials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutNAF />
        <TradefairSpecials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
