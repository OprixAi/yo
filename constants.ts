import { SiteContent } from './types';

export const DEFAULT_CONTENT: SiteContent = {
  theme: {
    primaryColor: '#14b8a6', // Teal
    secondaryColor: '#64748b',
    fontHeading: 'Space Grotesk',
    fontBody: 'Inter',
  },
  home: {
    heroTitle: 'Intelligent ERP Optimization',
    heroSubtitle: 'Oprix AI transforms static SAP environments into dynamic, automated ecosystems using enterprise-grade artificial intelligence.',
    heroCta: 'Explore Solutions',
    valuePropTitle: 'Why Oprix AI?',
    valuePropDesc: 'We bridge the gap between legacy infrastructure and future-ready automation, delivering 40% efficiency gains in Q1.',
  },
  about: {
    missionTitle: 'Our Mission',
    missionDesc: 'To liberate enterprise workforce from repetitive tasks through deep-learning process automation.',
    visionTitle: 'Our Vision',
    visionDesc: 'A world where enterprise operations are self-optimizing, secure, and infinitely scalable.',
  },
  services: {
    title: 'Core Capabilities',
    items: [
      {
        id: '1',
        title: 'SAP Automation',
        desc: 'End-to-end workflow automation within SAP S/4HANA environments.',
        icon: 'Cpu',
        details: 'Our SAP Automation agents utilize RFC connections to perform complex transactions autonomously. From PO creation to invoice verification, our models mimic human keystrokes but at machine speed.',
        benefits: ['Reduces manual entry by 92%', 'Zero-error transaction processing', '24/7 autonomous operation']
      },
      {
        id: '2',
        title: 'Predictive Analytics',
        desc: 'Forecast supply chain disruptions before they impact the bottom line.',
        icon: 'BarChart',
        details: 'By ingesting historical data from your ERP and combining it with external market signals, Oprix predicts shortages, logistics delays, and cash flow anomalies weeks in advance.',
        benefits: ['95% forecast accuracy', 'Dynamic safety stock adjustment', 'Cash flow liquidity modeling']
      },
      {
        id: '3',
        title: 'Legacy Integration',
        desc: 'Seamlessly connect modern AI tools with legacy ERP stacks.',
        icon: 'Database',
        details: 'We build the bridge between green-screen mainframes and modern LLMs. Oprix middleware allows you to query 30-year-old databases using natural language.',
        benefits: ['No system migration required', 'API wrapper for legacy SQL', 'SOC2 Compliant Security']
      },
      {
        id: '4',
        title: 'Process Mining',
        desc: 'Identify bottlenecks in real-time using advanced computer vision.',
        icon: 'Zap',
        details: 'Our Process Mining engine visualizes the "Digital Footprint" of your organization, highlighting exactly where approval chains act as bottlenecks or where duplicate payments occur.',
        benefits: ['Real-time bottleneck alerts', 'Duplicate payment detection', 'Workflow optimization suggestions']
      }
    ],
  },
  contact: {
    email: 'solutions@oprix.ai',
    address: '100 Enterprise Way, Silicon Valley, CA',
    phone: '+1 (555) 012-3456',
  },
};