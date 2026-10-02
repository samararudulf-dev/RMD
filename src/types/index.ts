export type ProductType = 'vps' | 'windows-vps' | 'dedicated';

export interface ProductPlan {
  id: string;
  type: ProductType;
  name: string;
  tagline: string;
  cpu: string;
  cores: number;
  ram: string;
  storage: string;
  storageType: 'NVMe Gen4' | 'Enterprise NVMe' | 'SATA SSD' | 'Hardware RAID';
  bandwidth: string;
  portSpeed: string;
  ipv4: string;
  ipv6: string;
  priceMonthly: number;
  priceAnnually: number;
  popular?: boolean;
  featuredFeature: string;
  availableLocations: string[];
  digitalBergCartUrl: string;
  specs: {
    label: string;
    value: string;
  }[];
  osSupported: string[];
}

export interface DataCenterLocation {
  id: string;
  code: string;
  city: string;
  country: string;
  region: 'Europe' | 'North America' | 'Asia-Pacific';
  facility: string;
  tier: string;
  testIp: string;
  pingMs: number;
  coordinates: { x: number; y: number }; // percentage on map
  productsAvailable: ProductType[];
  ddosCapacity: string;
  transitProviders: string[];
  powerRedundancy: string;
}

export interface FaqItem {
  id: string;
  category: 'General' | 'VPS' | 'Windows' | 'Dedicated' | 'Billing & Network';
  question: string;
  answer: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

export interface SiteSettings {
  siteName: string;
  siteUrl: string;
  supportEmail: string;
  salesEmail: string;
  bannerEnabled: boolean;
  bannerText: string;
  bannerCtaText: string;
  bannerCtaLink: string;
  metaTitle: string;
  metaDescription: string;
  defaultCurrency: 'USD' | 'EUR' | 'GBP';
  globalDiscountAnnualPercent: number;
  digitalBergBaseUrl: string;
}

export type PageId =
  | 'home'
  | 'vps'
  | 'windows-vps'
  | 'dedicated'
  | 'datacentres'
  | 'about'
  | 'support'
  | 'faq'
  | 'blog'
  | 'contact'
  | 'terms'
  | 'privacy'
  | 'aup'
  | 'sla'
  | 'admin';
