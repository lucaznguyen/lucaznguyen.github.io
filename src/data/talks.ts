import type { Talk } from './types';

export const invitedTalks: Talk[] = [];

export const conferencePresentations: Talk[] = [
  {
    title: 'Increased Query2Label (IQ) for Small Fine-grained Multi-label Classification',
    event: 'IEEE KSE 2023',
    date: '2023',
    location: 'Hanoi, Vietnam',
    type: 'Conference presentation',
    description: 'Presented work on fine-grained multi-label classification for small-data settings.',
    links: {}
  }
];

export const futureSpeakingTopics = [
  'Trustworthy AI under real-world distribution shifts',
  'Federated learning without centralizing data',
  'Continual learning and catastrophic forgetting',
  'Privacy-preserving learning for sensitive domains'
];
