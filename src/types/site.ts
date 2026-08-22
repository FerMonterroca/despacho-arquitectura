export interface NavigationLink {
  label: string;
  href: string;
}

export interface HeroContent {
  headline: string;
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  microcopy: string;
  image: string;
  imageAlt: string;
}

export interface Project {
  name: string;
  location: string;
  service: string;
  size: string;
  image: string;
  imageAlt: string;
}

export interface CTAContent {
  headline: string;
  description: string;
  buttonLabel: string;
  href: string;
}

export interface Service {
  name: string;
  description: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface TestimonialContent {
  eyebrow: string;
  quote: string;
  note: string;
}

export interface FormOption {
  label: string;
  value: string;
}

export interface LeadFormContent {
  eyebrow: string;
  title: string;
  description: string;

  projectTypes: FormOption[];
  spaceTypes: FormOption[];
  sizes: FormOption[];
  budgets: FormOption[];
  timelines: FormOption[];

  submitLabel: string;
  successTitle: string;
  successMessage: string;
}

export interface WhatsAppConfig {
  phone: string;
  message: string;
  label: string;
}

export interface FooterContent {
  businessName: string;
  description: string;
  instagramLabel: string;
  instagramHref: string;
  whatsappLabel: string;
  whatsappHref: string;
  emailLabel: string;
  emailHref: string;
  disclaimer: string;
}

export interface SiteConfig {
  business: {
    name: string;
    description: string;
  };

  navigation: {
    links: NavigationLink[];
    cta: {
      label: string;
      href: string;
    };
  };

  hero: HeroContent;

  projects: {
    title: string;
    items: Project[];
  };

  services: {
    eyebrow: string;
    title: string;
    items: Service[];
  };
  
  process: {
    eyebrow: string;
    title: string;
    items: ProcessStep[];
  };

  testimonial: TestimonialContent;

  leadForm: LeadFormContent;

  whatsapp: WhatsAppConfig;

  footer: FooterContent;

  initialCta: CTAContent;
}