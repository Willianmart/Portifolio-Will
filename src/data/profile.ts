/**
 * Central profile & contact data. Components must import from here —
 * do not hardcode contacts elsewhere.
 */

export const locale = "pt-BR" as const;

export const profile = {
  /** Person's full name — hero, about, SEO title, body copy */
  name: "Willian Martinez",
  /** Site mark / logo text — nav, footer, loader, favicon/identity, OG siteName */
  brand: "WillianMart.DEV",
  location: "Videira, Santa Catarina, Brasil",
  tagline: "TECNOLOGIA • DESENVOLVIMENTO • INOVAÇÃO",
  role:
    "Estudante de Ciência da Computação, desenvolvedor e empreendedor tecnológico",
  philosophy:
    "Não desenvolvo tecnologia apenas para fazer algo funcionar. Desenvolvo soluções para transformar a maneira como os problemas são resolvidos.",
  availability: "Aberto a conversas e colaborações",
  avatarSrc: "/images/avatar-willian.svg",
  aboutAccentSrc: "/images/about-accent.svg",
  ogImage: "/images/og-default.svg",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "https://willianmart.github.io/Portifolio-Will",
  locale,
} as const;

export const contacts = {
  email: "willexus.w97@gmail.com",
  github: {
    label: "GitHub",
    url: "https://github.com/Willianmart",
    handle: "@Willianmart",
    description: "Acessar meus projetos e repositórios",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/willian-martinez-31158a39a",
    description: "Conectar-se profissionalmente",
  },
  whatsapp: {
    label: "WhatsApp",
    display: "+55 49 99821-9362",
    e164: "+5549998219362",
    url: "https://wa.me/5549998219362",
    description: "Iniciar uma conversa",
  },
  mailto: "mailto:willexus.w97@gmail.com",
} as const;

export const seo = {
  title: "Willian Martinez | Desenvolvedor de Software, Tecnologia e Inovação",
  description:
    "Portfólio de Willian Martinez. Desenvolvimento de software, inteligência artificial, empreendedorismo tecnológico e soluções digitais.",
} as const;

export const navItems = [
  { href: "#inicio", label: "Início", id: "inicio" },
  { href: "#sobre", label: "Sobre", id: "sobre" },
  { href: "#habilidades", label: "Habilidades", id: "habilidades" },
  { href: "#projetos", label: "Projetos", id: "projetos" },
  { href: "#experiencia", label: "Experiência", id: "experiencia" },
  { href: "#contato", label: "Contato", id: "contato" },
] as const;

export const copy = {
  hero: {
    title: "Transformando ideias em soluções tecnológicas.",
    subtitle:
      "Sou Willian Martinez, estudante de Ciência da Computação, desenvolvedor e empreendedor. Trabalho na construção de soluções digitais, aplicações inteligentes e tecnologias que conectam inovação a problemas reais.",
    ctaProjects: "Conheça meus projetos",
    ctaContact: "Entre em contato",
  },
  about: {
    title: "Mais do que código. Construção de soluções.",
    body: [
      "Minha trajetória na tecnologia é movida pela curiosidade, pela busca constante de conhecimento e pelo interesse em transformar ideias em produtos reais.",
      "Atualmente curso Ciência da Computação e atuo no universo da tecnologia da informação, desenvolvendo conhecimentos em programação, sistemas, infraestrutura e resolução de problemas técnicos.",
      "Além da experiência técnica, também participo da construção de uma empresa de tecnologia, trabalhando no desenvolvimento de produtos baseados em inteligência artificial e análise de dados.",
      "Acredito que o verdadeiro potencial da tecnologia está na sua capacidade de gerar impacto, melhorar processos e criar novas possibilidades.",
    ],
    pillars: [
      {
        id: "dev",
        title: "Desenvolvimento",
        description:
          "Construção de aplicações, sistemas e soluções digitais",
      },
      {
        id: "ai",
        title: "Inteligência Artificial",
        description:
          "IA aplicada, análise de dados e automação inteligente",
      },
      {
        id: "infra",
        title: "Infraestrutura",
        description:
          "Suporte técnico, sistemas, configuração e resolução de problemas de TI",
      },
      {
        id: "entrepreneur",
        title: "Empreendedorismo",
        description:
          "Transformação de ideias em produtos, negócios e oportunidades tecnológicas",
      },
    ],
  },
  skills: {
    title: "Meu universo tecnológico.",
  },
  projects: {
    title: "Projetos que transformam ideias em realidade.",
    futureTitle: "Projetos futuros / em desenvolvimento e experimentações",
    futureEmpty:
      "Nenhuma experimentação pública listada no momento. Novos trabalhos aparecerão aqui quando estiverem prontos para compartilhar.",
  },
  experience: {
    title: "Minha trajetória.",
  },
  education: {
    title: "Conhecimento em constante evolução.",
    highlights: [
      "Ciência da Computação",
      "Lógica de programação",
      "Estruturas de dados",
      "Desenvolvimento de aplicações",
      "Inteligência artificial",
      "Engenharia de software",
      "Infraestrutura de TI",
    ],
    interests:
      "Interesse em segurança da informação, computação aplicada e tecnologia para problemas complexos.",
  },
  vision: {
    title: "A tecnologia não é o destino. É o meio.",
    body: [
      "Minha visão sobre tecnologia vai além do desenvolvimento de sistemas.",
      "Acredito que boas soluções começam com a compreensão de um problema. O código, a inteligência artificial e a infraestrutura são ferramentas para transformar essa compreensão em algo funcional, eficiente e escalável.",
      "Meu objetivo é continuar evoluindo como profissional, construir produtos relevantes e participar do desenvolvimento de tecnologias que realmente façam diferença.",
    ],
  },
  contact: {
    title: "Vamos construir algo interessante?",
    lead: "Estou sempre interessado em conhecer novas ideias, trocar experiências e explorar oportunidades de colaboração em tecnologia, desenvolvimento de software e inovação.",
    cta: "Tem uma ideia ou projeto em mente? Vamos conversar.",
    form: {
      name: "Nome",
      email: "E-mail",
      subject: "Assunto",
      message: "Mensagem",
      submit: "Enviar mensagem",
      sending: "Enviando…",
      success: "Mensagem enviada. Obrigado pelo contato!",
      error: "Não foi possível enviar agora. Tente novamente ou use e-mail/WhatsApp.",
      fallbackTitle: "Envio pelo formulário indisponível",
      fallbackBody:
        "O serviço de formulário ainda não está configurado neste ambiente. Use e-mail ou WhatsApp — ambos funcionam agora.",
      openEmail: "Abrir e-mail",
      openWhatsApp: "Abrir WhatsApp",
    },
  },
  footer: {
    tagline: "Desenvolvido com tecnologia, criatividade e propósito.",
    backToTop: "Voltar ao topo",
  },
} as const;
