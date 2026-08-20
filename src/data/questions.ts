import builderImage from "../assets/builder.jpg";
import creativeImage from "../assets/creative.jpg";
import detectiveImage from "../assets/detective.jpg";
import guardianImage from "../assets/guardian.jpg";
import futuristImage from "../assets/futurist.jpg";

const images = {
  builder: builderImage,
  creative: creativeImage,
  detective: detectiveImage,
  guardian: guardianImage,
  futurist: futuristImage,
};

export type PersonalityType =
  | "builder"
  | "creative"
  | "detective"
  | "guardian"
  | "futurist";

export interface Answer {
  text: string;
  type: PersonalityType;
}

export interface Question {
  question: string;
  answers: Answer[];
}

export interface Result {
  emoji: string;
  title: string;
  profession: string;
  image: string;
  description: string;
  careers: string[];
}

export const questions: Question[] = [
  {
    question: "Quando você recebe um problema, você geralmente...",
    answers: [
      {
        text: "🔍 Quero entender como tudo funciona",
        type: "builder",
      },
      {
        text: "🎨 Já penso em uma solução criativa",
        type: "creative",
      },
      {
        text: "📊 Organizo tudo e procuro padrões",
        type: "detective",
      },
      {
        text: "🔐 Quero descobrir o que pode dar errado",
        type: "guardian",
      },
      {
        text: "🤖 Penso em como a IA poderia ajudar",
        type: "futurist",
      },
    ],
  },

  {
    question: "Qual dessas atividades parece mais divertida?",
    answers: [
      {
        text: "📱 Criar um aplicativo",
        type: "builder",
      },
      {
        text: "✨ Criar uma experiência visual incrível",
        type: "creative",
      },
      {
        text: "📊 Analisar dados e descobrir padrões",
        type: "detective",
      },
      {
        text: "🔐 Proteger sistemas contra hackers",
        type: "guardian",
      },
      {
        text: "🤖 Criar algo usando inteligência artificial",
        type: "futurist",
      },
    ],
  },

  {
    question: "No trabalho em grupo, você é...",
    answers: [
      {
        text: "🧱 A pessoa que constrói",
        type: "builder",
      },
      {
        text: "💡 A pessoa que tem as ideias",
        type: "creative",
      },
      {
        text: "📋 A pessoa que organiza",
        type: "detective",
      },
      {
        text: "🕵️ A pessoa que encontra os problemas",
        type: "guardian",
      },
      {
        text: "🚀 A pessoa que experimenta coisas novas",
        type: "futurist",
      },
    ],
  },

  {
    question: "Escolha seu superpoder:",
    answers: [
      {
        text: "🧠 Resolver problemas complexos",
        type: "builder",
      },
      {
        text: "🎨 Transformar ideias em experiências incríveis",
        type: "creative",
      },
      {
        text: "📊 Encontrar padrões que ninguém percebeu",
        type: "detective",
      },
      {
        text: "🛡️ Proteger pessoas e sistemas",
        type: "guardian",
      },
      {
        text: "🤖 Fazer máquinas aprenderem",
        type: "futurist",
      },
    ],
  },

  {
    question: "O que mais te dá satisfação?",
    answers: [
      {
        text: '😎 "Funcionou!"',
        type: "builder",
      },
      {
        text: '✨ "Nossa, ficou lindo!"',
        type: "creative",
      },
      {
        text: '🔎 "Eu descobri o motivo!"',
        type: "detective",
      },
      {
        text: '🛡️ "Consegui impedir o problema!"',
        type: "guardian",
      },
      {
        text: '🤯 "Olha o que a IA consegue fazer!"',
        type: "futurist",
      },
    ],
  },

  {
    question:
      "Se você pudesse aprender uma habilidade instantaneamente, escolheria...",
    answers: [
      {
        text: "💻 Programação",
        type: "builder",
      },
      {
        text: "🎨 Design",
        type: "creative",
      },
      {
        text: "📊 Análise de dados",
        type: "detective",
      },
      {
        text: "🔐 Cybersecurity",
        type: "guardian",
      },
      {
        text: "🤖 Inteligência Artificial",
        type: "futurist",
      },
    ],
  },
];

export const results: Record<PersonalityType, Result> = {
  builder: {
    emoji: "💻",
    title: "A BUILDER",
    profession: "Software Engineer",
    description: "Você gosta de construir, resolver problemas e entender como as coisas funcionam.",
    careers: [
      "Software Engineer",
      "Full Stack Developer",
      "Frontend Developer",
      "Backend Developer",
    ],
    image: images.builder
  },

  creative: {
    emoji: "🎨",
    title: "A CREATIVE",
    profession: "UX/UI Designer",
    description: "Você pensa visualmente e gosta de criar experiências bonitas, intuitivas e fáceis de usar.",
    careers: [
      "UX Designer",
      "UI Designer",
      "Product Designer",
      "UX Researcher",
    ],
    image: images.creative
  },

  detective: {
    emoji: "📊",
    title: "A DETECTIVE",
    profession: "Data Analyst / Data Scientist",
    description: "Você ama investigar, encontrar padrões e transformar dados em descobertas.",
    careers: [
      "Data Analyst",
      "Data Scientist",
      "Data Engineer",
      "Business Intelligence Analyst",
    ],
    image: images.detective
  },

  guardian: {
    emoji: "🔐",
    title: "A GUARDIÃ",
    profession: "Cybersecurity",
    description: "Você tem uma mente investigativa e gosta de antecipar problemas para proteger pessoas e sistemas.",
    careers: [
      "Cybersecurity Analyst",
      "Security Engineer",
      "SOC Analyst",
      "Information Security Analyst",
    ],
    image: images.guardian
  },

  futurist: {
    emoji: "🤖",
    title: "A FUTURISTA",
    profession: "AI Engineer",
    description: "Você é curiosa sobre o futuro e adora experimentar novas tecnologias para descobrir o que é possível.",
    careers: [
      "AI Engineer",
      "Machine Learning Engineer",
      "AI Developer",
      "Generative AI Specialist",
    ],
    image: images.futurist
  },
};