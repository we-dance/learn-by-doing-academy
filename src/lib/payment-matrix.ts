interface PricePackage {
  name: string;
  amount: number;
  currency: string;
  interval: string;
  features: string[];
  paymentLink?: string;
  trial: boolean;
  trialDuration: string;
}

export const prices: Record<string, PricePackage> = {
  community: {
    name: 'Community',
    amount: 2900,
    currency: 'eur',
    interval: 'month',
    trial: true,
    trialDuration: '1 week',
    features: [
      'Session recordings library',
      'Telegram community group',
      'Async Q&A support',
    ],
    paymentLink: 'https://buy.stripe.com/14kg2zflWf4U2VGcMV', // TODO: update Stripe link
  },
  live: {
    name: 'Live',
    amount: 7900,
    currency: 'eur',
    interval: 'month',
    trial: true,
    trialDuration: '1 week',
    features: [
      'Everything in Community',
      'Weekly live sessions',
      'Live project building',
      'Direct feedback during sessions',
    ],
    paymentLink: 'https://buy.stripe.com/28ocQnddO3mcdAkdR0', // TODO: update Stripe link
  },
  mentorship: {
    name: 'Mentorship',
    amount: 19900,
    currency: 'eur',
    interval: 'month',
    trial: true,
    trialDuration: '1 week',
    features: [
      'Everything in Live',
      '1-on-1 monthly mentoring call',
      'Project code reviews',
      'Career guidance & job referrals',
    ],
    paymentLink: 'https://buy.stripe.com/9AQ2bJc9K7Cs3ZK9AL', // TODO: update Stripe link
  },
};

export const getPricePackage = (tierKey: string): PricePackage | undefined => {
  return prices[tierKey];
};
