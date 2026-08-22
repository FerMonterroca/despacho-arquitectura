import type { SiteConfig } from "../types/site";

export const siteConfig: SiteConfig = {
  business: {
    name: "Estudio Lumbre",
    description: "Interiorismo residencial — CDMX",
  },

  navigation: {
    links: [
      {
        label: "Proyectos",
        href: "#proyectos",
      },
      {
        label: "Servicios",
        href: "#servicios",
      },
      {
        label: "Proceso",
        href: "#proceso",
      },
      {
        label: "Contacto",
        href: "#contacto",
      },
    ],

    cta: {
      label: "Cuéntanos tu proyecto",
      href: "#contacto",
    },
  },

  hero: {
    headline: "Espacios que se sienten como tuyos.",

    description:
      "Diseñamos interiores residenciales cálidos, funcionales y profundamente personales en Ciudad de México.",

    primaryCta: {
      label: "Cuéntanos sobre tu proyecto",
      href: "#contacto",
    },

    secondaryCta: {
      label: "Ver proyectos",
      href: "#proyectos",
    },

    microcopy: "Interiorismo · Remodelación · Diseño residencial",

    image: "/images/hero.png",

    imageAlt:
      "Interior residencial contemporáneo con materiales naturales y luz cálida",
  },

  projects: {
    title: "Espacios imaginados para distintas formas de vivir",

    items: [
      {
        name: "Casa Fresno",
        location: "Condesa",
        service: "Remodelación integral",
        size: "145 m²",
        image: "/images/Casa Fresno.png",
        imageAlt:
          "Concepto visual de una sala residencial contemporánea en tonos cálidos",
      },
      {
        name: "Departamento Ámbar",
        location: "Polanco",
        service: "Interiorismo residencial",
        size: "110 m²",
        image: "/images/Polanco.png",
        imageAlt:
          "Concepto visual de un departamento contemporáneo con madera y piedra",
      },
      {
        name: "Casa Jacaranda",
        location: "Coyoacán",
        service: "Remodelación + interiorismo",
        size: "180 m²",
        image: "/images/Jacaranda-Coyoacan.png",
        imageAlt:
          "Concepto visual de una casa mexicana contemporánea con abundante luz natural",
      },
    ],
  },

  services: {
    eyebrow: "Servicios",

    title:
      "Podemos ayudarte desde la primera idea hasta el último detalle.",

    items: [
      {
        name: "Interiorismo",
        description:
          "Diseñamos distribución, materiales, iluminación, mobiliario y detalles para construir un espacio coherente contigo.",
      },
      {
        name: "Remodelación",
        description:
          "Transformamos espacios existentes cuidando funcionalidad, estética y ejecución.",
      },
      {
        name: "Proyecto integral",
        description:
          "Acompañamiento desde el concepto inicial hasta la definición completa del espacio.",
      },
    ],
  },

  process: {
    eyebrow: "Proceso",

    title: "Así empieza un proyecto",

    items: [
      {
        title: "Cuéntanos tu idea",
        description:
          "Nos compartes qué espacio quieres transformar, ubicación, dimensiones aproximadas y presupuesto.",
      },
      {
        title: "Nos conocemos",
        description:
          "Revisamos tu proyecto y coordinamos una primera conversación.",
      },
      {
        title: "Propuesta",
        description:
          "Definimos alcance, tiempos y una propuesta adaptada al espacio.",
      },
      {
        title: "Creamos",
        description:
          "Comienza el desarrollo del proyecto.",
      },
    ],
  },

  testimonial: {
    eyebrow: "Testimoniales",

    quote:
      "Aquí mostraríamos la experiencia de un cliente real: qué quería transformar, cómo vivió el proceso y qué cambió después del proyecto.",

    note:
      "Ejemplo de espacio para testimonial de cliente — Estudio Lumbre es un concepto demostrativo.",
  },

  leadForm: {
    eyebrow: "Tu proyecto",

    title: "Cuéntanos sobre tu proyecto",

    description:
      "Compártenos algunos datos para entender mejor lo que tienes en mente antes de nuestra primera conversación.",

    projectTypes: [
      {
        label: "Interiorismo",
        value: "interiorismo",
      },
      {
        label: "Remodelación",
        value: "remodelacion",
      },
      {
        label: "Proyecto integral",
        value: "proyecto-integral",
      },
      {
        label: "Aún no estoy segura/o",
        value: "no-se",
      },
    ],

    spaceTypes: [
      {
        label: "Departamento",
        value: "departamento",
      },
      {
        label: "Casa",
        value: "casa",
      },
      {
        label: "Oficina",
        value: "oficina",
      },
      {
        label: "Local",
        value: "local",
      },
      {
        label: "Otro",
        value: "otro",
      },
    ],

    sizes: [
      {
        label: "Menos de 50 m²",
        value: "menos-50",
      },
      {
        label: "50–100 m²",
        value: "50-100",
      },
      {
        label: "100–200 m²",
        value: "100-200",
      },
      {
        label: "+200 m²",
        value: "mas-200",
      },
      {
        label: "No lo sé",
        value: "no-se",
      },
    ],

    budgets: [
      {
        label: "Menos de $100,000 MXN",
        value: "menos-100",
      },
      {
        label: "$100,000–$250,000",
        value: "100-250",
      },
      {
        label: "$250,000–$500,000",
        value: "250-500",
      },
      {
        label: "+$500,000",
        value: "mas-500",
      },
      {
        label: "Aún no lo he definido",
        value: "sin-definir",
      },
    ],

    timelines: [
      {
        label: "Lo antes posible",
        value: "inmediato",
      },
      {
        label: "1–3 meses",
        value: "1-3",
      },
      {
        label: "3–6 meses",
        value: "3-6",
      },
      {
        label: "Más adelante",
        value: "mas-adelante",
      },
    ],

    submitLabel: "Enviar mi proyecto",

    successTitle: "Gracias por contarnos sobre tu proyecto.",

    successMessage:
      "En un sitio real, esta solicitud llegaría al estudio para revisión antes de ponerse en contacto contigo.",
  },

  whatsapp: {
    phone: "525516435156",

    message:
      "Hola, vi su portafolio y quisiera platicarles sobre un proyecto de interiorismo/remodelación.",

    label: "WhatsApp",
  },

footer: {
  businessName: "Estudio Lumbre",

  description: "Interiorismo residencial — CDMX",

  instagramLabel: "Instagram",
  instagramHref: "#",

  whatsappLabel: "WhatsApp",
  whatsappHref: "#",

  emailLabel: "Correo",
  emailHref: "mailto:hola@estudiolumbre.mx",

  disclaimer:
    "Sitio conceptual desarrollado como demostración. Estudio Lumbre es un estudio ficticio y los proyectos mostrados son conceptos visuales.",
},

  initialCta: {
    headline: "¿Tienes un espacio en mente?",

    description:
      "Cuéntanos qué quieres transformar. Con algunos datos podemos entender mejor tu proyecto antes de nuestra primera conversación.",

    buttonLabel: "Solicitar una valoración",

    href: "#contacto",
  },
};