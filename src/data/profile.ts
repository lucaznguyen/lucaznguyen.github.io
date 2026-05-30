import { socials } from "@/data/socials";

export const profile = {
  name: "Thinh Nguyen",
  nickname: "Lucaz",
  fullLegalName: "Nguyen Tran Huu Thinh",
  formalName: "Nguyễn Trần Hữu Thịnh",
  title: "Ph.D. Student · VinUniversity · Trustworthy AI",
  primaryTitle: "Ph.D. Student, VinUniversity, Trustworthy AI",
  location: "Hanoi, Vietnam",
  advisor: "Prof. Kok-Seng Wong",
  email: "thinh.nth@vinuni.edu.vn",
  portrait: "/images/thinh-nguyen.jpg",
  portraitAlt: "Academic portrait of Thinh Nguyen in a black sweater against a dark studio background.",
  tagline: "Building trustworthy AI that learns across clients, domains, and time.",
  shortBio:
    "I study robust, private, and adaptive learning systems for real-world data shifts, with a focus on federated learning, continual learning, domain generalization, and trustworthy AI.",
  bio:
    "I am a Ph.D. student at VinUniversity, affiliated with the VinUni-Illinois Smart Health Center and SAIL Lab, advised by Prof. Kok-Seng Wong. My research focuses on trustworthy AI systems that remain robust, private, and adaptive under real-world shifts. I am particularly interested in federated learning, continual learning, domain generalization, and privacy-preserving machine learning.",
  extendedBio:
    "Before my Ph.D., I built experience as a data scientist and developed a foundation across data science, mathematics, and computer science. I like research that is rigorous enough to survive messy deployment conditions: distributed data, shifting domains, privacy constraints, and changing tasks. Outside the main academic track, I keep a light interest in design, visual systems, and strength training, which shape how I think about discipline and craft.",
  orcid: null,
  affiliations: [
    {
      name: "VinUniversity",
      href: "https://vinuni.edu.vn/",
    },
    {
      name: "VinUni-Illinois Smart Health Center (VISHC)",
      href: "https://smarthealth.vinuni.edu.vn/nguyen-tran-huu-thinh/",
    },
    {
      name: "Security and Artificial Intelligence Lab (SAIL Lab)",
      href: "https://sail-research.com/",
    },
  ],
  keywords: [
    "Trustworthy AI",
    "Federated Learning",
    "Continual Learning",
    "Domain Generalization",
    "Privacy",
    "Robustness",
    "AI Security",
    "Adaptive Learning Systems",
  ],
  heroLabels: [
    "Trustworthy AI",
    "Federated Learning",
    "Continual Learning",
    "Domain Generalization",
    "Privacy",
    "Robustness",
  ],
  stats: [
    {
      value: "2",
      suffix: "×",
      label: "CVPR 2026",
      detail: "Main Technical Track and Findings",
    },
    {
      value: "ICML",
      suffix: "2026",
      label: "Silver Reviewer",
      detail: "Outstanding reviewing service",
    },
    {
      value: "1st",
      suffix: "",
      label: "Kaggle FathomNet 2023",
      detail: "Out-of-sample detection in deep-ocean imagery",
    },
    {
      value: "Ph.D.",
      suffix: "",
      label: "VinUniversity",
      detail: "Trustworthy AI in Hanoi, Vietnam",
    },
  ],
  researchInterests: [
    {
      number: "01",
      title: "Trustworthy and Secure AI",
      description:
        "I study how to build AI systems that are reliable, robust, and secure under real-world risks, including model robustness, privacy, adversarial threats, and trustworthy deployment in sensitive domains.",
      tags: ["Trustworthy AI", "AI Security", "Robustness", "Privacy", "Adversarial ML"],
    },
    {
      number: "02",
      title: "Federated and Distributed Learning",
      description:
        "I work on distributed learning systems where multiple clients collaboratively train models without centralizing raw data. My research focuses on robustness, efficiency, personalization, and generalization under heterogeneous and privacy-sensitive settings.",
      tags: [
        "Federated Learning",
        "Distributed Learning",
        "Data Heterogeneity",
        "Privacy-Preserving Learning",
        "Communication Efficiency",
      ],
    },
    {
      number: "03",
      title: "Continual and Adaptive Learning",
      description:
        "I am interested in AI systems that can continuously learn from evolving data while retaining previously acquired knowledge.",
      tags: [
        "Continual Learning",
        "Lifelong Learning",
        "Catastrophic Forgetting",
        "Adaptive AI",
        "Non-Stationary Data",
      ],
    },
    {
      number: "04",
      title: "Domain Generalization",
      description:
        "I study learning systems that generalize across unseen domains, clients, stations, and environments, especially in federated and hierarchical settings.",
      tags: [
        "Domain Generalization",
        "Domain Shift",
        "Out-of-Distribution Generalization",
        "Federated Domain Generalization",
      ],
    },
  ],
  process: [
    {
      number: "01",
      title: "Frame the shift",
      description:
        "Understand where data changes: across clients, domains, tasks, time, or deployment settings.",
    },
    {
      number: "02",
      title: "Design trustworthy learning protocols",
      description:
        "Develop privacy-aware, robust, and efficient methods for federated or adaptive environments.",
    },
    {
      number: "03",
      title: "Stress-test under realistic settings",
      description:
        "Evaluate under heterogeneity, domain shift, catastrophic forgetting, privacy constraints, and communication limitations.",
    },
    {
      number: "04",
      title: "Translate ideas into systems",
      description:
        "Build research prototypes, benchmarks, reproducible code, and deployable tools when appropriate.",
    },
  ],
  socials,
} as const;
