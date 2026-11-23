export type ProjectStatus =
  | "validation"
  | "research"
  | "academic"
  | "active";

export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  description: string;
  status: ProjectStatus;
  statusLabel: string;
  technologies: string[];
  features?: string[];
  differentials?: string[];
  participation?: string;
  company?: string;
  links?: { label: string; href: string; external?: boolean }[];
  brand?: {
    primary: string;
    secondary: string;
    accent: string;
  };
  visual?: "alysense" | "vila" | "ai" | "csharp";
  detailPath: string;
};

export const projects: Project[] = [
  {
    slug: "alysense",
    number: "01",
    title: "Alysense",
    category: "Startup de tecnologia / Inteligência Artificial / GovTech",
    summary:
      "Empresa de tecnologia voltada a soluções inteligentes para decisões e operações — IA, dados e gestão.",
    description:
      "A Alysense é uma empresa de tecnologia voltada à criação de soluções inteligentes para transformar a maneira como organizações tomam decisões e gerenciam operações. A empresa nasce com o propósito de aproximar inteligência artificial, análise de dados e tecnologia de problemas reais, inicialmente explorando oportunidades na gestão pública.",
    status: "active",
    statusLabel: "Empresa em construção de produtos",
    technologies: [
      "Inteligência Artificial",
      "SaaS",
      "Análise de dados",
      "Automação",
      "GovTech",
    ],
    differentials: [
      "IA aplicada",
      "Soluções SaaS",
      "Tecnologia voltada à gestão",
      "Automação de processos",
      "Tomada de decisão orientada por dados",
    ],
    participation:
      "Cofundador e CEO/CTO; visão tecnológica e participação estratégica no desenvolvimento dos produtos. Fundada com o irmão Victor (CPO, Chief Product Officer), 50% de participação societária cada.",
    company: "Alysense",
    links: [
      {
        label: "Conhecer a Alysense",
        href: "https://www.alysense.com.br",
        external: true,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/alysense/",
        external: true,
      },
    ],
    brand: {
      primary: "#0B1020",
      secondary: "#1A2450",
      accent: "#5B8CFF",
    },
    visual: "alysense",
    detailPath: "/projetos/alysense",
  },
  {
    slug: "vila",
    number: "02",
    title: "VILA",
    category: "IA / HealthTech / GovTech",
    summary:
      "Visão Integrada à Logística Assistida — plataforma para gestão da saúde pública com dados e IA.",
    description:
      "O VILA é uma plataforma inteligente desenvolvida para apoiar a gestão da saúde pública, utilizando tecnologia, dados e inteligência artificial para melhorar a eficiência operacional dos serviços de saúde. A solução busca auxiliar gestores na administração de agendas, organização de atendimentos, redução do absenteísmo e aproveitamento de vagas disponíveis.",
    status: "validation",
    statusLabel:
      "Em fase de validação e preparação para piloto — não é solução comercial amplamente implantada",
    technologies: [
      "Aplicação web",
      "Backend",
      "Banco de dados",
      "IA",
      "Automação",
      "Análise de dados",
      "Segurança da informação",
      "Arquitetura SaaS",
    ],
    features: [
      "Dashboard de gestão",
      "Indicadores de absenteísmo",
      "Monitoramento de atendimentos",
      "Visualização de dados por unidade de saúde",
      "Identificação de oportunidades de redistribuição de vagas",
      "Confirmação de consultas",
      "Solicitação de reagendamento",
      "Comunicação por WhatsApp e SMS",
      "Identificação de pacientes com maior risco de ausência",
      "Apoio à tomada de decisão",
      "Possibilidade de integração com sistemas de regulação",
    ],
    participation:
      "Cofundador da empresa responsável e participante direto da concepção, desenvolvimento tecnológico, estruturação e evolução do produto.",
    company: "Alysense",
    links: [
      {
        label: "Explorar o projeto",
        href: "/projetos/vila",
        external: false,
      },
    ],
    brand: {
      primary: "#06141A",
      secondary: "#0C2E38",
      accent: "#2EC4B6",
    },
    visual: "vila",
    detailPath: "/projetos/vila",
  },
  {
    slug: "ia-empresas",
    number: "03",
    title: "Projeto de IA para empresas",
    category: "IA / Automação / Desenvolvimento de soluções",
    summary:
      "Exploração de IA para conhecimento empresarial, documentação técnica e automação interna.",
    description:
      "Exploração de soluções de inteligência artificial voltadas à utilização de conhecimento empresarial, documentação técnica e automação de processos internos.",
    status: "research",
    statusLabel:
      "Iniciativa de pesquisa / prova de conceito — não é produto concluído",
    technologies: [
      "IA",
      "RAG (possível arquitetura)",
      "Automação",
      "Documentação técnica",
      "Suporte técnico",
    ],
    features: [
      "Facilitar acesso à documentação",
      "Reduzir tempo de busca",
      "Apoiar equipes de suporte",
      "Automatizar consultas recorrentes",
      "Transformar conhecimento interno em base inteligente",
    ],
    participation:
      "Contexto: prova de conceito de IA para suporte técnico e consulta inteligente a documentações autorizadas.",
    visual: "ai",
    detailPath: "/projetos/ia-empresas",
    brand: {
      primary: "#12081F",
      secondary: "#2A1450",
      accent: "#A78BFA",
    },
  },
  {
    slug: "gerenciador-tarefas-csharp",
    number: "04",
    title: "Gerenciador de tarefas em C#",
    category: "Desenvolvimento de Software / Projeto Acadêmico",
    summary:
      "Aplicação em C# para praticar estruturas de dados em um sistema de gerenciamento de tarefas.",
    description:
      "Aplicação desenvolvida em C# com o objetivo de implementar conceitos fundamentais de estrutura de dados por meio de um sistema de gerenciamento de tarefas.",
    status: "academic",
    statusLabel: "Projeto acadêmico",
    technologies: ["C#", "Estruturas de dados", "Console", "Listas e pilhas"],
    features: [
      "Cadastro de tarefas",
      "Identificadores únicos",
      "Descrição",
      "Controle de situação",
      "Marcação de concluídas",
      "Organização com listas e pilhas",
      "Menu interativo em console",
    ],
    participation:
      "Objetivo: aplicar programação, lógica e estruturas de dados.",
    visual: "csharp",
    detailPath: "/projetos/gerenciador-tarefas-csharp",
    brand: {
      primary: "#0E1218",
      secondary: "#1C2738",
      accent: "#68A0FF",
    },
  },
];

/** Reserved for future/experimental work — empty by design until real items exist. */
export const futureProjects: Project[] = [];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
