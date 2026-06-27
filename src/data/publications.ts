export type PublicationStatus = "Accepted" | "Preprint" | "Published";

export type Publication = {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  summary: string;
  tags: string[];
  status: PublicationStatus;
  featured?: boolean;
  links?: {
    label: string;
    href: string;
  }[];
};

export const publicationFilters = [
  "Featured",
  "Accepted",
  "Preprint",
  "Federated Learning",
  "Continual Learning",
  "Trustworthy AI",
  "Computer Vision",
  "Survey",
] as const;

export const publications: Publication[] = [
  {
    id: "hfedatm-cvpr-2026",
    title:
      "HFedATM: Hierarchical Federated Domain Generalization via Optimal Transport and Regularized Mean Aggregation",
    authors: ["Thinh Nguyen", "Trung Phan", "Binh T. Nguyen", "Khoa D Doan", "Kok-Seng Wong"],
    venue: "CVPR 2026, Main Technical Track",
    year: 2026,
    summary:
      "A hierarchical federated domain generalization framework for improving robustness under cross-client and cross-station domain shifts.",
    tags: [
      "Hierarchical Federated Learning",
      "Federated Domain Generalization",
      "Federated Learning",
      "Domain Shift",
      "Optimal Transport",
      "Trustworthy AI",
    ],
    status: "Accepted",
    featured: true,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2508.05135" }],
  },
  {
    id: "onboarding-without-forgetting-cvpr-2026",
    title:
      "Onboarding Without Forgetting: Hypernetwork Personalization with Data-Free Replay for Personalized Federated Learning",
    authors: [
      "Thinh Nguyen",
      "Le Huy Khiem",
      "Van-Tuan Tran",
      "Khoa D Doan",
      "Nitesh V Chawla",
      "Kok-Seng Wong",
    ],
    venue: "CVPR 2026 Findings",
    year: 2026,
    summary:
      "A personalized federated learning framework that enables new clients to join without degrading existing clients.",
    tags: [
      "Personalized Federated Learning",
      "Federated Learning",
      "Hypernetwork",
      "Data-Free Replay",
      "Client Onboarding",
      "Privacy-Preserving Learning",
    ],
    status: "Accepted",
    featured: true,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2508.05157" }],
  },
  {
    id: "projected-rehearsal-fcil-2026",
    title:
      "When Generator Replay Degrades: Projected Rehearsal Orchestration for Heterogeneous Federated Class-Incremental Learning",
    authors: [
      "Thinh T. H. Nguyen",
      "Khoa D. Doan",
      "Binh T. Nguyen",
      "Danh Le-Phuoc",
      "Kok-Seng Wong",
    ],
    venue: "arXiv preprint",
    year: 2026,
    summary:
      "Introduces PRO and PRO-MAX, projected rehearsal methods for heterogeneous federated class-incremental learning that replace input-space replay with compact projected memories.",
    tags: [
      "Federated Continual Learning",
      "Federated Learning",
      "Continual Learning",
      "Class-Incremental Learning",
      "Projected Rehearsal",
      "Trustworthy AI",
    ],
    status: "Preprint",
    featured: true,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.15695" }],
  },
  {
    id: "molecular-graph-backdoors-2026",
    title: "Rethinking Molecular Graph Backdoors under Chemistry-aware Admission",
    authors: [
      "Thinh T. H. Nguyen",
      "Sze Jue Yang",
      "Khoa D. Doan",
      "Chee Seng Chan",
      "Kok-Seng Wong",
    ],
    venue: "arXiv preprint",
    year: 2026,
    summary:
      "Studies molecular GNN backdoors under chemistry-aware admission, introducing ChemGuard for realistic admission checks and ChemBack for chemically feasible backdoor construction.",
    tags: [
      "Molecular Graph Learning",
      "Graph Neural Networks",
      "Backdoor Attacks",
      "AI Security",
      "Chemistry-Aware ML",
      "Trustworthy AI",
    ],
    status: "Preprint",
    featured: true,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2606.23361" }],
  },
  {
    id: "fedgtg-2024",
    title:
      "Overcoming Catastrophic Forgetting in Federated Class-Incremental Learning via Federated Global Twin Generator",
    authors: ["Thinh Nguyen", "Khoa D Doan", "Binh T. Nguyen", "Danh Le-Phuoc", "Kok-Seng Wong"],
    venue: "arXiv preprint / OpenReview record",
    year: 2024,
    summary:
      "Addresses catastrophic forgetting in federated class-incremental learning without requiring clients to share or store old data.",
    tags: [
      "Federated Continual Learning",
      "Federated Learning",
      "Continual Learning",
      "Catastrophic Forgetting",
      "Generative Replay",
      "Privacy-Preserving Learning",
    ],
    status: "Preprint",
    featured: true,
    links: [
      { label: "arXiv", href: "https://arxiv.org/abs/2407.11078" },
      { label: "OpenReview", href: "https://openreview.net/forum?id=o2arTYxsXd" },
    ],
  },
  {
    id: "sequence-transferability-2025",
    title: "Sequence Transferability and Task Order Selection in Continual Learning",
    authors: [
      "Thinh Nguyen",
      "Cuong N. Nguyen",
      "Quang Pham",
      "Binh T. Nguyen",
      "Savitha Ramasamy",
      "Xiaoli Li",
      "Cuong V. Nguyen",
    ],
    venue: "Preprint / Under review",
    year: 2025,
    summary:
      "Investigates how task ordering influences continual learning performance through forward and backward sequence transferability.",
    tags: ["Continual Learning", "Task Order Selection", "Sequence Transferability", "Adaptive AI"],
    status: "Preprint",
    featured: true,
    links: [{ label: "arXiv", href: "https://arxiv.org/abs/2502.06544" }],
  },
  {
    id: "increased-query2label-2023",
    title: "Increased Query2Label (IQ) for Small Fine-grained Multi-label Classification",
    authors: [
      "Thinh Tran Huu Nguyen",
      "Phuc Nguyen",
      "Van Phuc Nguyen",
      "Linh H. G. Tran",
      "Manh Van Le",
      "Binh T. Nguyen",
    ],
    venue: "2023 15th International Conference on Knowledge and Systems Engineering (KSE), IEEE",
    year: 2023,
    summary:
      "Extends Query2Label-style multi-label classification for small fine-grained datasets.",
    tags: ["Computer Vision", "Multi-label Classification", "Fine-grained Learning", "Query2Label"],
    status: "Published",
    featured: true,
    links: [
      { label: "IEEE", href: "https://ieeexplore.ieee.org/document/10299421" },
      { label: "DOI", href: "https://doi.org/10.1109/KSE59128.2023.10299421" },
    ],
  },
  {
    id: "federated-domain-generalization-survey-2025",
    title:
      "A Systematic Review on Federated Domain Generalization: Interactions and Trade-offs among Security, Communication Efficiency, and Architecture Design",
    authors: [
      "Thinh Nguyen",
      "Trung Phan",
      "Nhi Trinh",
      "Anh Tran",
      "Anh Hoang",
      "Shih Yin Ooi",
      "Kok-Seng Wong",
    ],
    venue: "Preprint",
    year: 2025,
    summary:
      "Reviews Federated Domain Generalization from the perspectives of security, communication efficiency, and architecture design.",
    tags: [
      "Survey",
      "Federated Domain Generalization",
      "Federated Learning",
      "Security",
      "Communication Efficiency",
      "Trustworthy AI",
    ],
    status: "Preprint",
    featured: true,
    links: [{ label: "SSRN", href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5467730" }],
  },
];

export const selectedPublications = publications.filter((publication) => publication.featured).slice(0, 6);
