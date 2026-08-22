import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProjectGrid from "./components/ProjectGrid/ProjectGrid";
import CTASection from "./components/CTASection/CTASection";
import Services from "./components/Services/Services";
import Process from "./components/Process/Process";
import TestimonialPlaceholder from "./components/TestimonialPlaceholder/TestimonialPlaceholder";
import LeadForm from "./components/LeadForm/LeadForm";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import Footer from "./components/Footer/Footer";

import { siteConfig } from "./data/siteConfig";

function App() {
  return (
    <>
      <Navbar
        businessName={siteConfig.business.name}
        links={siteConfig.navigation.links}
        cta={siteConfig.navigation.cta}
      />

      <main>
        <Hero content={siteConfig.hero} />

        <ProjectGrid
          title={siteConfig.projects.title}
          projects={siteConfig.projects.items}
        />

        <CTASection content={siteConfig.initialCta} />

        <Services
          eyebrow={siteConfig.services.eyebrow}
          title={siteConfig.services.title}
          services={siteConfig.services.items}
        />

        <Process
          eyebrow={siteConfig.process.eyebrow}
          title={siteConfig.process.title}
          steps={siteConfig.process.items}
        />

        <TestimonialPlaceholder content={siteConfig.testimonial} />

        <LeadForm content={siteConfig.leadForm} />

      </main>

      <Footer content={siteConfig.footer} />

      <WhatsAppButton
        config={siteConfig.whatsapp}
      />

    </>
  );
}

export default App;