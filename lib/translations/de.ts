export const de = {
  // Common
  loading: 'Lädt...',
  error: 'Fehler',
  save: 'Speichern',
  cancel: 'Abbrechen',
  delete: 'Löschen',
  edit: 'Bearbeiten',
  back: 'Zurück',
  next: 'Weiter',
  previous: 'Vorherige',
  page: 'Seite',
  of: 'von',
  
  // Navigation
  nav: {
    home: 'Startseite',
    properties: 'Immobilien',
    admin: 'Admin',
    login: 'Anmelden'
  },
  
  // Agent info
  agent: {
    name: 'Cristian Florin Cozmincă',
    title: 'Immobilienmakler',
    description: 'Ihr vertrauensvoller Makler für Kauf, Verkauf oder Vermietung. Erfahrung, Professionalität und garantierte Ergebnisse.'
  },
  
  // Slogans
  slogans: [
    'Zuhause beginnt hier.',
    'Der Schlüssel zu Ihrem Zuhause.',
    'Von der Besichtigung zu den Schlüsseln.',
    'Umziehen ohne Sorgen.',
    'Wo Träume Schlüssel bekommen.',
    'Richtiges Zuhause, richtiger Preis.',
    'Ihr Weg nach Hause.',
    'Leidenschaft für Immobilien.',
    'Kein Stress, nur Schlüssel.',
    'Der perfekte Standort wartet auf Sie.'
  ],
  
  // Home page
  home: {
    title: 'Finden Sie Ihr Perfektes Zuhause',
    subtitle: 'Erfahrung, Professionalität und garantierte Ergebnisse',
    viewProperties: 'Immobilien Ansehen',
    forSale: 'Zu Verkaufen',
    forRent: 'Zu Vermieten',
    stats: {
      title: 'Ergebnisse Die Sprechen',
      subtitle: 'Meine Erfahrung und Hingabe spiegeln sich in den für Kunden erzielten Ergebnissen wider',
      propertiesSold: 'Verkaufte Immobilien',
      avgSaleTime: 'Durchschnittliche Verkaufszeit',
      satisfiedClients: 'Zufriedene Kunden',
      experience: 'Erfahrung',
      days: 'Tage',
      years: 'Jahre'
    }
  },
  
  // Properties
  properties: {
    title: 'Immobilien',
    forSale: 'zu Verkaufen',
    forRent: 'zu Vermieten',
    showing: 'Zeige',
    of: 'von',
    propertiesText: 'Immobilien',
    in: 'in',
    noProperties: 'Keine Immobilien gefunden',
    noPropertiesDesc: 'Versuchen Sie, Ihre Suchfilter anzupassen, um mehr Immobilien zu finden.',
    backToProperties: 'Zurück zu Immobilien',
    contactAgent: 'Makler Kontaktieren',
    scheduleViewing: 'Besichtigung Planen',
    description: 'Beschreibung',
    features: 'Immobilien-Eigenschaften',
    area: 'Fläche',
    bedrooms: 'Schlafzimmer',
    bathrooms: 'Badezimmer',
    type: 'Typ',
    priceOnRequest: 'Preis auf Anfrage',
    dormitory: 'Schlafzimmer',
    dormitories: 'Schlafzimmer',
    baths: 'Bäder'
  },
  
  // Filters
  filters: {
    location: 'Standort (Stadt, Region)',
    minPrice: 'Min. Preis',
    maxPrice: 'Max. Preis',
    allTypes: 'Alle Typen',
    sale: 'Zu verkaufen',
    rent: 'Zu vermieten',
    filter: 'Filtern',
    sort: {
      newest: 'Neueste zuerst',
      priceAsc: 'Preis: aufsteigend',
      priceDesc: 'Preis: absteigend'
    }
  },
  
  // Admin
  admin: {
    title: 'Admin Dashboard',
    login: 'Admin Anmeldung',
    email: 'E-Mail',
    password: 'Passwort',
    signIn: 'Anmelden',
    signingIn: 'Anmeldung...',
    invalidCredentials: 'Ungültige Anmeldedaten',
    dashboard: 'Dashboard',
    manageProperties: 'Immobilien Verwalten',
    managePropertiesDesc: 'Alle Immobilien im System anzeigen, bearbeiten und verwalten. Neue Angebote hinzufügen oder bestehende aktualisieren.',
    bulkImport: 'Massenimport',
    bulkImportDesc: 'Mehrere Immobilien gleichzeitig mit CSV-Dateien importieren. Perfekt zum schnellen Hinzufügen großer Datensätze.',
    analytics: 'Analysen',
    analyticsDesc: 'Detaillierte Analysen und Berichte über Immobilien-Performance und Nutzerengagement anzeigen.',
    comingSoon: 'Demnächst verfügbar',
    properties: {
      title: 'Immobilien-Verwaltung',
      addNew: 'Neue Immobilie Hinzufügen',
      property: 'Immobilie',
      location: 'Standort',
      price: 'Preis',
      type: 'Typ',
      status: 'Status',
      actions: 'Aktionen',
      noProperties: 'Noch keine Immobilien',
      noPropertiesDesc: 'Fügen Sie Ihre erste Immobilie hinzu, um zu beginnen.'
    },
    import: {
      title: 'Massenimport Immobilien',
      uploadCsv: 'CSV-Datei Hochladen',
      description: 'Laden Sie eine CSV-Datei mit Immobiliendaten hoch. Das System erstellt automatisch neue Immobilien oder aktualisiert bestehende basierend auf dem externalId-Feld.',
      selectedFile: 'Ausgewählte Datei',
      size: 'Größe',
      upload: 'CSV Hochladen',
      uploading: 'Hochladen...',
      success: 'Import Erfolgreich!',
      created: 'Erstellt',
      updated: 'Aktualisiert',
      error: 'Fehler',
      requirements: 'CSV-Format Anforderungen',
      requiredHeaders: 'Erforderliche Kopfzeilen',
      notes: 'Hinweise',
      notesList: [
        'type: SALE oder RENT',
        'status: ACTIVE, INACTIVE, oder DRAFT',
        'images: Mehrere URLs getrennt durch Semikolons (;)',
        'externalId: Verwendet für Upsert-Operationen (aktualisiert wenn vorhanden, erstellt wenn nicht)',
        'Alle Felder außer title sind optional'
      ]
    }
  },
  
  // Footer
  footer: {
    copyright: '© 2024 Cristian Florin Cozmincă - Immobilienmakler. Alle Rechte vorbehalten.'
  },
  
  // Meta
  meta: {
    title: 'Cristian Florin Cozmincă - Immobilienmakler',
    description: 'Finden Sie Ihr perfektes Zuhause mit einem vertrauenswürdigen Makler. Kauf, Verkauf, Vermietung - garantierte Ergebnisse.'
  }
}
