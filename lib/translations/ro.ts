export const ro = {
  // Common
  loading: 'Se încarcă...',
  error: 'Eroare',
  save: 'Salvează',
  cancel: 'Anulează',
  delete: 'Șterge',
  edit: 'Editează',
  back: 'Înapoi',
  next: 'Următor',
  previous: 'Anterior',
  page: 'Pagina',
  of: 'din',
  
  // Navigation
  nav: {
    home: 'Acasă',
    properties: 'Proprietăți',
    admin: 'Admin',
    login: 'Autentificare'
  },
  
  // Agent info
  agent: {
    name: 'Cristian Florin Cozmincă',
    title: 'Agent Imobiliar',
    description: 'Agentul tău de încredere pentru cumpărare, vânzare sau închiriere. Experiență, profesionalism și rezultate garantate.'
  },
  
  // Slogans
  slogans: [
    'Acasă începe aici.',
    'Cheia către casa ta.',
    'De la vizionare la chei.',
    'Mută-te fără griji.',
    'Unde visele prind chei.',
    'Casa potrivită, preț corect.',
    'Drumul tău spre acasă.',
    'Pasiune pentru proprietăți.',
    'Fără stres, doar chei.',
    'Locația perfectă te așteaptă.'
  ],
  
  // Home page
  home: {
    title: 'Găsește-ți Casa Perfectă',
    subtitle: 'Experiență, profesionalism și rezultate garantate',
    viewProperties: 'Vezi Proprietățile',
    forSale: 'De Vânzare',
    forRent: 'De Închiriat',
    stats: {
      title: 'Rezultate Care Vorbesc',
      subtitle: 'Experiența și dedicarea mea se reflectă în rezultatele obținute pentru clienți',
      propertiesSold: 'Proprietăți Vândute',
      avgSaleTime: 'Timp Mediu Vânzare',
      satisfiedClients: 'Clienți Mulțumiți',
      experience: 'Experiență',
      days: 'zile',
      years: 'ani'
    }
  },
  
  // Properties
  properties: {
    title: 'Proprietăți',
    forSale: 'de Vânzare',
    forRent: 'de Închiriat',
    showing: 'Se afișează',
    of: 'din',
    propertiesText: 'proprietăți',
    in: 'în',
    noProperties: 'Nu s-au găsit proprietăți',
    noPropertiesDesc: 'Încearcă să ajustezi filtrele de căutare pentru a găsi mai multe proprietăți.',
    backToProperties: 'Înapoi la proprietăți',
    contactAgent: 'Contactează Agentul',
    scheduleViewing: 'Programează Vizionare',
    description: 'Descriere',
    features: 'Caracteristici Proprietate',
    area: 'Suprafață',
    bedrooms: 'Dormitoare',
    bathrooms: 'Băi',
    type: 'Tip',
    priceOnRequest: 'Preț la cerere',
    dormitory: 'dormitor',
    dormitories: 'dormitoare',
    baths: 'băi'
  },
  
  // Filters
  filters: {
    location: 'Locație (oraș, județ)',
    minPrice: 'Preț min',
    maxPrice: 'Preț max',
    allTypes: 'Toate tipurile',
    sale: 'De vânzare',
    rent: 'De închiriat',
    filter: 'Filtrează',
    sort: {
      newest: 'Cele mai noi',
      priceAsc: 'Preț: crescător',
      priceDesc: 'Preț: descrescător'
    }
  },
  
  // Admin
  admin: {
    title: 'Panou Administrare',
    login: 'Autentificare Admin',
    email: 'Email',
    password: 'Parolă',
    signIn: 'Conectează-te',
    signingIn: 'Se conectează...',
    invalidCredentials: 'Date de autentificare invalide',
    dashboard: 'Tablou de Bord',
    manageProperties: 'Gestionează Proprietăți',
    managePropertiesDesc: 'Vezi, editează și gestionează toate proprietățile din sistem. Adaugă listări noi sau actualizează pe cele existente.',
    bulkImport: 'Import în Masă',
    bulkImportDesc: 'Importă mai multe proprietăți deodată folosind fișiere CSV. Perfect pentru adăugarea rapidă a unor seturi mari de date.',
    analytics: 'Analize',
    analyticsDesc: 'Vezi analize detaliate și rapoarte despre performanța proprietăților și implicarea utilizatorilor.',
    comingSoon: 'În curând',
    properties: {
      title: 'Gestionare Proprietăți',
      addNew: 'Adaugă Proprietate Nouă',
      property: 'Proprietate',
      location: 'Locație',
      price: 'Preț',
      type: 'Tip',
      status: 'Status',
      actions: 'Acțiuni',
      noProperties: 'Nu există proprietăți încă',
      noPropertiesDesc: 'Adaugă prima ta proprietate pentru a începe.'
    },
    import: {
      title: 'Import în Masă Proprietăți',
      uploadCsv: 'Încarcă Fișier CSV',
      description: 'Încarcă un fișier CSV conținând date despre proprietăți. Sistemul va crea automat proprietăți noi sau va actualiza pe cele existente pe baza câmpului externalId.',
      selectedFile: 'Fișier selectat',
      size: 'Dimensiune',
      upload: 'Încarcă CSV',
      uploading: 'Se încarcă...',
      success: 'Import Reușit!',
      created: 'Create',
      updated: 'Actualizate',
      error: 'Eroare',
      requirements: 'Cerințe Format CSV',
      requiredHeaders: 'Anteturi Obligatorii',
      notes: 'Note',
      notesList: [
        'type: SALE sau RENT',
        'status: ACTIVE, INACTIVE, sau DRAFT',
        'images: URL-uri multiple separate prin punct și virgulă (;)',
        'externalId: Folosit pentru operațiuni upsert (actualizează dacă există, creează dacă nu)',
        'Toate câmpurile cu excepția title sunt opționale'
      ]
    }
  },
  
  // Footer
  footer: {
    copyright: '© 2024 Cristian Florin Cozmincă - Agent Imobiliar. Toate drepturile rezervate.'
  },
  
  // Meta
  meta: {
    title: 'Cristian Florin Cozmincă - Agent Imobiliar',
    description: 'Găsește-ți casa perfectă cu ajutorul unui agent de încredere. Cumpărare, vânzare, închiriere - rezultate garantate.'
  }
}
