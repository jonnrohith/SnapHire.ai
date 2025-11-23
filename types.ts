import React from 'react';

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface DemoProfile {
  id: number;
  name: string;
  role: string;
  salary: string;
  type: 'Full-time' | 'Gig/Project';
  isAnonymous: boolean;
  videoColor: string;
}