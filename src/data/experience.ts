export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  kind: "work" | "venture" | "education";
  summary: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "lux",
    title: "Tecnologia da Informação",
    org: "Lux Sistemas",
    kind: "work",
    summary:
      "Suporte técnico e atividades de implantação e uso de sistemas.",
    points: [
      "Atendimento e suporte",
      "Instalação e configuração de sistemas",
      "Acesso remoto com AnyDesk",
      "Auxílio na resolução de problemas",
      "Configuração de ambientes Windows",
      "Compartilhamento de arquivos e recursos em rede",
      "Apoio a usuários e clientes",
    ],
  },
  {
    id: "alysense",
    title: "Cofundador e CEO/CTO",
    org: "Alysense",
    kind: "venture",
    summary:
      "Construção da empresa, visão tecnológica, desenvolvimento de produtos e estruturação de soluções de IA.",
    points: [
      "Construção da empresa",
      "Visão tecnológica",
      "Desenvolvimento de produtos",
      "Estruturação de soluções de IA",
    ],
  },
  {
    id: "cs",
    title: "Ciência da Computação",
    org: "Formação em andamento",
    kind: "education",
    summary: "Formação acadêmica em Ciência da Computação, em andamento.",
    points: [
      "Estudos em programação, sistemas e resolução de problemas técnicos",
    ],
  },
];
