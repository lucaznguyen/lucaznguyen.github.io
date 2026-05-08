import type { Publication } from './types';

export const publications: Publication[] = [
  {
    title: 'HFedATM: Hierarchical Federated Domain Generalization via Optimal Transport and Regularized Mean Aggregation',
    authors: 'Thinh Nguyen, Trung Phan, Binh T. Nguyen, Khoa D Doan, Kok-Seng Wong',
    venue: 'CVPR 2026, Main Technical Track',
    year: '2026',
    status: 'Accepted',
    featured: true,
    summary: 'A hierarchical federated domain generalization framework for improving robustness under cross-client and cross-station domain shifts.',
    description:
      'This work introduces Hierarchical Federated Domain Generalization, a setting where domain shift occurs not only across clients but also across intermediate aggregation stations. It proposes Filter-wise Optimal Transport Alignment and Shrinkage-aware Regularized Mean Aggregation to align and merge station models without sharing raw data.',
    tags: ['Hierarchical Federated Learning', 'Federated Domain Generalization', 'Domain Shift', 'Optimal Transport', 'Model Aggregation', 'Trustworthy AI'],
    links: {
      Paper: 'https://arxiv.org/abs/2508.05135'
    }
  },
  {
    title: 'Onboarding Without Forgetting: Hypernetwork Personalization with Data-Free Replay for Personalized Federated Learning',
    authors: 'Thinh Nguyen, Le Huy Khiem, Van-Tuan Tran, Khoa D Doan, Nitesh V Chawla, Kok-Seng Wong',
    venue: 'CVPR 2026 Findings',
    year: '2026',
    status: 'Accepted',
    featured: true,
    summary: 'A personalized federated learning framework that enables new clients to join without degrading existing clients.',
    description:
      'This work studies dynamic client onboarding in personalized federated learning, where new clients are introduced over time while existing clients should retain their performance. It proposes a data-free sub-hypernetwork approach with batch-specific masks and data-free replay to support knowledge transfer without sharing raw data.',
    tags: ['Personalized Federated Learning', 'Hypernetwork', 'Data-Free Replay', 'Client Onboarding', 'Federated Continual Learning', 'Privacy-Preserving Learning'],
    links: {
      Paper: 'https://arxiv.org/abs/2508.05157'
    }
  },
  {
    title: 'Overcoming Catastrophic Forgetting in Federated Class-Incremental Learning via Federated Global Twin Generator',
    authors: 'Thinh Nguyen, Khoa D Doan, Binh T. Nguyen, Danh Le-Phuoc, Kok-Seng Wong',
    venue: 'arXiv preprint / OpenReview ICLR 2025 submission record',
    year: '2024',
    status: 'Preprint',
    featured: false,
    summary: 'A federated class-incremental learning framework that uses global twin generators to mitigate catastrophic forgetting.',
    description:
      'This work addresses catastrophic forgetting in federated class-incremental learning without requiring clients to share or store old data. It trains data and feature generators on the server side and sends synthetic information to clients, helping them balance old-class retention and new-task learning.',
    tags: ['Federated Continual Learning', 'Federated Class-Incremental Learning', 'Catastrophic Forgetting', 'Data-Free Replay', 'Generative Replay', 'Privacy-Preserving Learning'],
    links: {
      Paper: 'https://arxiv.org/abs/2407.11078',
      Code: 'https://github.com/lucaznguyen/FedGTG'
    }
  },
  {
    title: 'Sequence Transferability and Task Order Selection in Continual Learning',
    authors: 'Thinh Nguyen, Cuong N. Nguyen, Quang Pham, Binh T. Nguyen, Savitha Ramasamy, Xiaoli Li, Cuong V. Nguyen',
    venue: 'arXiv preprint',
    year: '2025',
    status: 'Preprint / Under review',
    featured: false,
    summary: 'A continual learning study on how task order affects transferability and final model performance.',
    description:
      'This work investigates how different task sequences influence continual learning performance. It introduces forward and backward sequence transferability measures and uses them to select task orders that can outperform random ordering.',
    tags: ['Continual Learning', 'Task Order Selection', 'Sequence Transferability', 'Transfer Learning', 'Catastrophic Forgetting', 'Adaptive AI'],
    links: {
      Paper: 'https://arxiv.org/abs/2502.06544'
    }
  },
  {
    title: 'Increased Query2Label (IQ) for Small Fine-grained Multi-label Classification',
    authors: 'Thinh Tran Huu Nguyen, Phuc Nguyen, Van Phuc Nguyen, Linh H. G. Tran, Manh Van Le, Binh T. Nguyen',
    venue: '2023 15th International Conference on Knowledge and Systems Engineering (KSE), IEEE',
    year: '2023',
    status: 'Published',
    featured: false,
    summary: 'A fine-grained multi-label classification method designed for small-data settings.',
    description:
      'This work extends the Query2Label-style multi-label classification direction for small fine-grained datasets. It focuses on improving label-aware prediction when training data is limited and classes require fine-grained visual discrimination.',
    tags: ['Multi-label Classification', 'Fine-grained Recognition', 'Computer Vision', 'Query2Label', 'Small Data', 'Deep Learning'],
    links: {
      Paper: 'https://dblp.org/rec/conf/kse/NguyenNNTLN23'
    }
  },
  {
    title: 'A Systematic Review on Federated Domain Generalization: Interactions and Trade-offs among Security, Communication Efficiency, and Architecture Design',
    authors: 'Thinh Nguyen, Trung Phan, Nhi Trinh, Anh Tran, Anh Hoang, Shih Yin Ooi, Kok-Seng Wong',
    venue: 'SSRN preprint',
    year: '2025',
    status: 'Preprint',
    featured: false,
    summary: 'A systematic review of Federated Domain Generalization through security, communication efficiency, and architecture design.',
    description:
      'This survey reviews Federated Domain Generalization literature from three interacting perspectives: security, communication efficiency, and architecture design. It discusses trade-offs among these dimensions and identifies gaps such as underexplored hierarchical, decentralized, and hybrid FedDG architectures.',
    tags: ['Federated Domain Generalization', 'Survey', 'Security', 'Communication Efficiency', 'Architecture Design', 'Trustworthy AI'],
    links: {
      Paper: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5467730'
    }
  },
  {
    title: 'FathomNet: Out-of-sample Detection in the Deep Ocean',
    authors: 'Team project; Nguyen Tran Huu Thinh listed as award/project contributor',
    venue: 'Kaggle Competition, FathomNet 2023',
    year: '2023',
    status: 'First Prize / Competition project',
    featured: false,
    summary: 'A computer vision competition project on out-of-sample detection for deep-ocean imagery.',
    description:
      'This project focused on recognizing marine organisms and detecting out-of-sample cases in deep-sea visual data. It is listed as a first-prize Kaggle award for FathomNet 2023.',
    tags: ['Computer Vision', 'Out-of-distribution Detection', 'Marine AI', 'Deep-sea Imagery', 'Kaggle', 'Fine-grained Recognition'],
    links: {
      Competition: 'https://www.kaggle.com/competitions/fathomnet-out-of-sample-detection'
    }
  }
];

export const featuredPublications = publications.filter((publication) => publication.featured);
