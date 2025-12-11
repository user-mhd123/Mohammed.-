export type Language = 'en' | 'ar';

export interface ContentText {
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  nav: {
    brand: string;
    contact: string;
  };
  about: {
    title: string;
    description: string;
    missionTitle: string;
    missionText: string;
    visionTitle: string;
    visionText: string;
  };
  guidelines: {
    title: string;
    logoConstruction: string;
    typography: string;
    colorPalette: string;
  };
  mockups: {
    title: string;
  };
  digital: {
    title: string;
    description: string;
    stats: { label: string; value: string }[];
  };
  krishna: {
    title: string;
    subtitle: string;
    concept: string;
    colors: string;
    items: {
        feed: string;
        truck: string;
        tshirt: string;
    }
  };
  senna: {
    title: string;
    subtitle: string;
    items: {
      car: string;
      helmet: string;
      card: string;
    }
  };
  flowfit: {
    title: string;
    subtitle: string;
    items: {
      bottle: string;
      watch: string;
      bag: string;
    }
  };
  caleo: {
    title: string;
    subtitle: string;
    items: {
      app: string;
      card: string;
      brand: string;
    }
  };
  charge: {
    title: string;
    subtitle: string;
    items: {
      stationery: string;
      mobile: string;
      logo: string;
    }
  };
  amora: {
    title: string;
    subtitle: string;
    items: {
      app: string;
      wear: string;
      sign: string;
    }
  };
  contact: {
    title: string;
    nameLabel: string;
    phoneLabel: string;
    emailLabel: string;
    instaLabel: string;
    close: string;
  };
  ai: {
    trigger: string;
    tabs: {
      chat: string;
      generate: string;
      analyze: string;
    };
    chatPlaceholder: string;
    genPlaceholder: string;
    analyzePlaceholder: string;
    btnSend: string;
    btnGenerate: string;
    btnAnalyze: string;
  }
}