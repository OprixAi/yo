export interface SiteContent {
  theme: {
    primaryColor: string;
    secondaryColor: string;
    fontHeading: string;
    fontBody: string;
  };
  home: {
    heroTitle: string;
    heroSubtitle: string;
    heroCta: string;
    valuePropTitle: string;
    valuePropDesc: string;
  };
  about: {
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
  };
  services: {
    title: string;
    items: Array<{
      id: string;
      title: string;
      desc: string;
      icon: string;
      details: string; // New field for modal text
      benefits: string[]; // New field for bullet points
    }>;
  };
  contact: {
    email: string;
    address: string;
    phone: string;
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: 'Zap' | 'Database' | 'Cpu' | 'BarChart' | 'Globe' | 'Shield';
  details?: string;
  benefits?: string[];
}

export type PageName = 'home' | 'about' | 'services' | 'resources' | 'contact' | 'admin';