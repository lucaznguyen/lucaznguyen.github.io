export const profile = {
  name: 'Nguyen Tran Huu Thinh',
  displayName: 'Thinh Nguyen (Lucaz)',
  shortName: 'Lucaz',
  role: 'Ph.D. Student in Computer Science',
  institution: 'VinUniversity',
  college: 'College of Engineering and Computer Science',
  lab: 'Security and Artificial Intelligence Lab (SAIL Lab)',
  labShort: 'SAIL Lab',
  center: 'VinUni-Illinois Smart Health Center',
  advisor: 'Kok-Seng Wong',
  location: 'Hanoi, Vietnam',
  email: 'thinh.nth@vinuni.edu.vn',
  site: 'https://lucaznguyen.github.io',
  headshot: '/assets/headshot-placeholder.svg',
  cvAvailable: false,
  cvPath: '/cv.pdf',
  tagline: 'I work on security and robustness in AI, with a focus on federated learning and continual learning systems.',
  heroTitle: 'Building trustworthy AI that learns across clients, domains, and time.',
  heroBody:
    'I am a Ph.D. student in Computer Science at VinUniversity, working on trustworthy AI with interests in federated learning, continual learning, and domain generalization. My research explores how learning systems can remain robust, private, and adaptive under real-world shifts.',
  shortBio:
    'Nguyen Tran Huu Thinh is a Ph.D. student in Computer Science at VinUniversity and a member of the VinUni-Illinois Smart Health Center. His research focuses on trustworthy AI, with broader interests in federated learning and continual learning. Before his doctoral studies, he earned an M.Sc. in Data Science and a B.Sc. in Mathematics and Computer Science from VNU-HCM University of Science. He also has industry experience as a data scientist and values innovative, data-driven research solutions.',
  longBio:
    'My work sits at the intersection of trustworthy AI, distributed learning, and adaptive learning systems. I am interested in how models behave when training data is decentralized, privacy-sensitive, heterogeneous, or changing over time. Before joining VinUniversity, I studied mathematics, computer science, and data science at VNU-HCM University of Science and worked in industry as a data scientist. I bring that background into research that aims to be both theoretically grounded and practically useful.',
  keywords: [
    'Trustworthy AI',
    'Federated Learning',
    'Continual Learning',
    'Domain Generalization',
    'AI Security',
    'Privacy',
    'Robustness',
    'Data-Driven Research'
  ],
  quickFacts: [
    ['Name', 'Nguyen Tran Huu Thinh'],
    ['Display name', 'Thinh Nguyen (Lucaz)'],
    ['Role', 'Ph.D. Student in Computer Science'],
    ['Institution', 'VinUniversity'],
    ['College', 'College of Engineering and Computer Science'],
    ['Lab', 'SAIL Lab'],
    ['Center', 'VinUni-Illinois Smart Health Center'],
    ['Advisor', 'Kok-Seng Wong'],
    ['Location', 'Hanoi, Vietnam'],
    ['Email', 'thinh.nth@vinuni.edu.vn']
  ],
  education: [
    {
      degree: 'Ph.D. Student in Computer Science',
      institution: 'VinUniversity, Vietnam',
      detail: 'Researching trustworthy AI, federated learning, continual learning, and domain generalization.'
    },
    {
      degree: 'M.Sc. in Data Science',
      institution: 'VNU-HCM University of Science, Vietnam',
      detail: 'Graduate training in data science, machine learning, and computational research.'
    },
    {
      degree: 'B.Sc. in Mathematics and Computer Science',
      institution: 'VNU-HCM University of Science, Vietnam',
      detail: 'Foundations in mathematical reasoning, algorithms, and computer science.'
    }
  ],
  links: {
    email: 'mailto:thinh.nth@vinuni.edu.vn',
    github: 'https://github.com/lucaznguyen',
    lab: 'http://sail-research.com/',
    googleScholar: '',
    linkedin: '',
    orcid: '',
    cv: '/cv.pdf'
  }
};

export const affiliations = [
  {
    name: 'VinUniversity',
    image: '/assets/logos/vinuni-placeholder.svg',
    url: 'https://vinuni.edu.vn/'
  },
  {
    name: 'SAIL Lab',
    image: '/assets/logos/sail-placeholder.svg',
    url: 'http://sail-research.com/'
  },
  {
    name: 'VISHC',
    image: '/assets/logos/vishc-placeholder.svg',
    url: '#'
  }
];

export const researchInterests = [
  {
    title: 'Trustworthy and Secure AI',
    description:
      'I study how to build AI systems that are reliable, robust, and secure under real-world risks. My interests include model robustness, privacy, adversarial threats, and trustworthy deployment in sensitive domains.',
    tags: ['Trustworthy AI', 'AI Security', 'Robustness', 'Privacy', 'Adversarial ML', 'Reliable AI']
  },
  {
    title: 'Distributed and Federated Learning',
    description:
      'I work on distributed learning systems where multiple clients collaboratively train models without centralizing their data. My research focuses on improving robustness, efficiency, and generalization under heterogeneous and privacy-sensitive settings.',
    tags: ['Federated Learning', 'Distributed Learning', 'Data Heterogeneity', 'Privacy-Preserving Learning', 'Communication Efficiency', 'Edge AI']
  },
  {
    title: 'Continual and Adaptive Learning',
    description:
      'I am interested in AI systems that can continuously learn from evolving data while retaining previously acquired knowledge. This includes continual learning, domain generalization, and adaptive learning under changing environments.',
    tags: ['Continual Learning', 'Lifelong Learning', 'Domain Generalization', 'Catastrophic Forgetting', 'Adaptive AI', 'Non-Stationary Data']
  }
];
