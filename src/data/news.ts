export type NewsItem = {
  date: string;
  title: string;
  description: string;
  category: "Publication" | "Service" | "Profile" | "Preprint" | "Milestone" | "Award" | "Mentorship";
  href?: string;
};

export const news: NewsItem[] = [
  {
    date: "2026-06",
    title: "HERO released on arXiv as a heterogeneity-aware benchmark library for federated continual learning.",
    description:
      "The preprint introduces reproducible benchmark streams and reporting protocols for evaluating federated continual learning under heterogeneous settings and domain shift.",
    category: "Preprint",
    href: "https://arxiv.org/abs/2607.08784",
  },
  {
    date: "2026-05",
    title: "ICML 2026 Silver Reviewer for outstanding reviewing service.",
    description: "Recognized for reviewing service at ICML 2026.",
    category: "Service",
  },
  {
    date: "2026-02",
    title: "HFedATM accepted to CVPR 2026 Main Technical Track.",
    description:
      "Hierarchical Federated Domain Generalization via Optimal Transport and Regularized Mean Aggregation was accepted to the main technical track.",
    category: "Publication",
    href: "https://arxiv.org/abs/2508.05135",
  },
  {
    date: "2026-02",
    title: "Onboarding Without Forgetting accepted to CVPR 2026 Findings.",
    description:
      "The work studies dynamic onboarding in personalized federated learning without degrading existing clients.",
    category: "Publication",
    href: "https://arxiv.org/abs/2508.05157",
  },
  {
    date: "2025-11",
    title: "Featured in Humans of VISHC: Discipline, Detours, and the Pursuit of Trustworthy AI.",
    description:
      "A profile feature on research direction, discipline, and the path into trustworthy AI.",
    category: "Profile",
  },
  {
    date: "2025-08",
    title: "HFedATM and Onboarding Without Forgetting released on arXiv.",
    description: "Two federated learning research works were made publicly available as preprints.",
    category: "Preprint",
  },
  {
    date: "2024-08",
    title: "FedGTG released on arXiv.",
    description:
      "Overcoming Catastrophic Forgetting in Federated Class-Incremental Learning via Federated Global Twin Generator.",
    category: "Preprint",
    href: "https://arxiv.org/abs/2407.11078",
  },
  {
    date: "2024",
    title: "Started Ph.D. studies in Computer Science at VinUniversity.",
    description: "Beginning doctoral research on trustworthy AI systems.",
    category: "Milestone",
  },
  {
    date: "2024",
    title: "Coach / Mentor, SCUDEM IX 2024 Team 1046, Meritorious Award solution.",
    description: "Mentored an applied differential-equation modeling team recognized with a meritorious award.",
    category: "Mentorship",
  },
  {
    date: "2023",
    title: "Presented Increased Query2Label at IEEE KSE 2023 in Hanoi.",
    description: "Conference publication on small fine-grained multi-label classification.",
    category: "Publication",
    href: "https://doi.org/10.1109/KSE59128.2023.10299421",
  },
  {
    date: "2023",
    title: "First Prize, Kaggle Competition: FathomNet.",
    description: "Out-of-sample detection in deep-ocean imagery.",
    category: "Award",
    href: "https://www.kaggle.com/competitions/fathomnet-out-of-sample-detection",
  },
  {
    date: "2023",
    title: "Meritorious Award, International SIMIODE Challenge Using Differential Equations Modeling.",
    description: "Recognition in international mathematical modeling.",
    category: "Award",
  },
  {
    date: "2022",
    title: "Meritorious Award, International SIMIODE Challenge Using Differential Equations Modeling.",
    description: "Recognition in international mathematical modeling.",
    category: "Award",
  },
  {
    date: "2019",
    title: "Gold Medal, Linear Algebra, Vietnam Mathematical Olympiad for Undergraduate Students.",
    description: "Mathematical foundation in linear algebra.",
    category: "Award",
  },
  {
    date: "2018",
    title: "Silver Medal, Calculus, Vietnam Mathematical Olympiad for Undergraduate Students.",
    description: "Mathematical foundation in calculus.",
    category: "Award",
  },
];
