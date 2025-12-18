
import { Language } from './types';

export const TRANSLATIONS = {
  en: {
    nav: {
      letsTalk: "Order Now",
      work: "Work",
      about: "The Chef",
      contact: "Contact"
    },
    common: {
      secretSauce: "The Secret Sauce",
      expertiseLabel: "Expertise",
      motionArt: "Motion Art",
      premiumVisuals: "Premium Visuals",
      est: "EST. 2024 • Gastronomic Branding",
      exploreMenu: "Explore the menu \nof projects",
      juiciness: "Juiciness",
      design: "Design",
      conversion: "Conversion",
      appetiteAppeal: "Appetite Appeal",
      branding: "Branding",
      digitalMenu: "Digital Menu"
    },
    hero: {
      titleLine1: "Designs",
      titleLine2: "that trigger",
      titleSpan: "craving.",
      description: "Specialist in Appetite Appeal posts and digital menus for food businesses. I transform pixels into juiciness to turn your followers into hungry customers.",
      viewProjects: "See the Menu",
      definitionTitle: "What is it?",
      definitionText: "Appetite Appeal is the science of transforming a simple photo into an immediate trigger for desire, converting visual attention into real profit."
    },
    floating: {
      titleLine1: "We don't just sell art,",
      titleLine2: "we sell hunger at first sight."
    },
    work: {
      sectionLabel: "Our Menu",
      title: "Fresh off the Grill",
      subtitle: "A selection of arts designed to cause immediate desire."
    },
    about: {
      titleLine1: "It's not just a post,",
      titleLine2: "it's a hunger trigger.",
      p1: "I turn images into flavor. Specialized exclusively in the gastronomic niche, my focus is to extract the maximum visual appeal of your products through advanced Appetite Appeal techniques.",
      p2: "From a juicy dish to a high-conversion digital menu, I create the bridge between the customer's eyes and the 'Order Now' button.",
      expertise: "Secret Sauce"
    },
    footer: {
      ctaLine1: "Hungry for sales?",
      ctaLine2: "Let's cook your brand.",
      copyright: "Made with extra cheese and React."
    }
  },
  pt: {
    nav: {
      letsTalk: "Fazer Pedido",
      work: "Trabalhos",
      about: "O Especialista",
      contact: "Falar com o Chef"
    },
    common: {
      secretSauce: "O Molho Secreto",
      expertiseLabel: "Expertise",
      motionArt: "Motion Art",
      premiumVisuals: "Premium Visuals",
      est: "EST. 2024 • Gastronomic Branding",
      exploreMenu: "Explore o menu \nde projetos",
      juiciness: "Suculência",
      design: "Design",
      conversion: "Conversão",
      appetiteAppeal: "Appetite Appeal",
      branding: "Branding",
      digitalMenu: "Cardápio Digital"
    },
    hero: {
      titleLine1: "Designs",
      titleLine2: "que dão",
      titleSpan: "fome.",
      description: "Especialista em posts de Appetite Appeal e cardápios digitais para estabelecimentos gastronômicos. Transformo pixels em suculência para converter seus seguidores em clientes famintos.",
      viewProjects: "Ver o Menu",
      definitionTitle: "O que é?",
      definitionText: "Appetite Appeal é a técnica de transformar uma simples foto em um gatilho de desejo imediato, convertendo o olhar do seguidor em faturamento real."
    },
    floating: {
      titleLine1: "Não vendemos apenas artes,",
      titleLine2: "vendemos fome à primeira vista."
    },
    work: {
      sectionLabel: "Nosso Menu",
      title: "Saindo da Chapa",
      subtitle: "Uma seleção de artes pensadas para causar desejo imediato."
    },
    about: {
      titleLine1: "Não é só um post,",
      titleLine2: "é gatilho de fome.",
      p1: "Eu transformo imagens em sabor. Especializado exclusivamente no nicho de alimentação e gastronomia, meu foco é extrair o máximo do apelo visual do seu produto através de técnicas avançadas de Appetite Appeal.",
      p2: "De um prato suculento a um cardápio digital de alta conversão, eu crio a ponte entre o olhar do cliente e o botão 'Pedir Agora'.",
      expertise: "Molho Secreto"
    },
    footer: {
      ctaLine1: "Fome de vender mais?",
      ctaLine2: "Vamos criar seu menu.",
      copyright: "Feito com queijo extra e React."
    }
  }
};

export type TranslationKeys = typeof TRANSLATIONS.en;
