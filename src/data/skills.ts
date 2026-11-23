export type SkillCategory = {
  id: string;
  title: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "development",
    title: "Desenvolvimento",
    items: [
      "C#",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "React",
      "Desenvolvimento Web",
    ],
  },
  {
    id: "infrastructure",
    title: "Infraestrutura e TI",
    items: [
      "Windows",
      "Configuração de sistemas",
      "Compartilhamento de arquivos e pastas em rede",
      "Suporte técnico",
      "Diagnóstico e resolução de problemas",
      "Acesso remoto e assistência técnica",
    ],
  },
  {
    id: "ai",
    title: "Inteligência Artificial",
    items: [
      "Aplicações de IA",
      "Automação inteligente",
      "Integração de sistemas",
      "Análise de dados",
      "Soluções orientadas por dados",
      "Desenvolvimento de produtos SaaS",
    ],
  },
  {
    id: "tools",
    title: "Ferramentas e ambientes",
    items: [
      "Git",
      "GitHub",
      "Visual Studio",
      "Visual Studio Code",
      "Cursor",
      "Vercel",
    ],
  },
];
