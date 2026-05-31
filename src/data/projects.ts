export type Project = {
  id: string;
  title: string;
  context: string;
  role: string;
  summary: string;
  tags: string[];
  status: "Featured" | "Tool" | "Coming Soon";
  href?: string;
};

export const projects: Project[] = [
  {
    id: "fathomnet-2023",
    title: "FathomNet: Out-of-sample Detection in the Deep Ocean",
    context: "Kaggle Competition, 2023",
    role: "First Prize / Competition project",
    summary:
      "Computer vision project on recognizing marine organisms and detecting out-of-sample cases in deep-sea imagery.",
    tags: [
      "Computer Vision",
      "Out-of-Distribution Detection",
      "Marine AI",
      "Deep-Sea Imagery",
      "Kaggle",
    ],
    status: "Featured",
    href: "https://www.kaggle.com/competitions/fathomnet-out-of-sample-detection",
  },
  {
    id: "cv-generator",
    title: "CV Generator",
    context: "GitHub tool",
    role: "Academic profile tooling",
    summary:
      "A lightweight tool for maintaining academic CV content and generating clean CV outputs from structured profile data.",
    tags: ["Academic Tool", "CV Automation", "Structured Content", "GitHub"],
    status: "Tool",
    href: "http://lucaznguyen.github.io/cv-generator",
  },
  {
    id: "fedatlas",
    title: "FedAtlas",
    context: "Federated learning mapping",
    role: "Coming soon / dashboard project",
    summary:
      "A planned visual analytics dashboard for mapping federated learning papers, countries, topics, citations, and GitHub implementations to reveal communities and research-to-code gaps.",
    tags: [
      "Federated Learning",
      "Research-to-Code Mapping",
      "Network Visualization",
      "OpenAlex",
      "GitHub",
      "Shiny Dashboard",
    ],
    status: "Coming Soon",
  },
];
