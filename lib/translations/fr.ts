export const fr = {
  // Common
  loading: 'Chargement...',
  error: 'Erreur',
  save: 'Enregistrer',
  cancel: 'Annuler',
  delete: 'Supprimer',
  edit: 'Modifier',
  back: 'Retour',
  next: 'Suivant',
  previous: 'Précédent',
  page: 'Page',
  of: 'de',
  
  // Navigation
  nav: {
    home: 'Accueil',
    properties: 'Propriétés',
    admin: 'Admin',
    login: 'Connexion'
  },
  
  // Agent info
  agent: {
    name: 'Cristian Florin Cozmincă',
    title: 'Agent Immobilier',
    description: 'Votre agent de confiance pour acheter, vendre ou louer. Expérience, professionnalisme et résultats garantis.'
  },
  
  // Slogans
  slogans: [
    'La maison commence ici.',
    'La clé de votre maison.',
    'De la visite aux clés.',
    'Déménagez sans soucis.',
    'Où les rêves obtiennent des clés.',
    'Bonne maison, bon prix.',
    'Votre chemin vers la maison.',
    'Passion pour les propriétés.',
    'Pas de stress, juste des clés.',
    'L\'emplacement parfait vous attend.'
  ],
  
  // Home page
  home: {
    title: 'Trouvez Votre Maison Parfaite',
    subtitle: 'Expérience, professionnalisme et résultats garantis',
    viewProperties: 'Voir les Propriétés',
    forSale: 'À Vendre',
    forRent: 'À Louer',
    stats: {
      title: 'Des Résultats Qui Parlent',
      subtitle: 'Mon expérience et mon dévouement se reflètent dans les résultats obtenus pour les clients',
      propertiesSold: 'Propriétés Vendues',
      avgSaleTime: 'Temps de Vente Moyen',
      satisfiedClients: 'Clients Satisfaits',
      experience: 'Expérience',
      days: 'jours',
      years: 'ans'
    }
  },
  
  // Properties
  properties: {
    title: 'Propriétés',
    forSale: 'à Vendre',
    forRent: 'à Louer',
    showing: 'Affichage',
    of: 'de',
    propertiesText: 'propriétés',
    in: 'à',
    noProperties: 'Aucune propriété trouvée',
    noPropertiesDesc: 'Essayez d\'ajuster vos filtres de recherche pour trouver plus de propriétés.',
    backToProperties: 'Retour aux Propriétés',
    contactAgent: 'Contacter l\'Agent',
    scheduleViewing: 'Programmer une Visite',
    description: 'Description',
    features: 'Caractéristiques de la Propriété',
    area: 'Surface',
    bedrooms: 'Chambres',
    bathrooms: 'Salles de bain',
    type: 'Type',
    priceOnRequest: 'Prix sur demande',
    dormitory: 'chambre',
    dormitories: 'chambres',
    baths: 'salles de bain'
  },
  
  // Filters
  filters: {
    location: 'Localisation (ville, région)',
    minPrice: 'Prix min',
    maxPrice: 'Prix max',
    allTypes: 'Tous les types',
    sale: 'À vendre',
    rent: 'À louer',
    filter: 'Filtrer',
    sort: {
      newest: 'Plus récents',
      priceAsc: 'Prix: croissant',
      priceDesc: 'Prix: décroissant'
    }
  },
  
  // Admin
  admin: {
    title: 'Tableau de Bord Admin',
    login: 'Connexion Admin',
    email: 'Email',
    password: 'Mot de passe',
    signIn: 'Se connecter',
    signingIn: 'Connexion...',
    invalidCredentials: 'Identifiants invalides',
    dashboard: 'Tableau de bord',
    manageProperties: 'Gérer les Propriétés',
    managePropertiesDesc: 'Voir, modifier et gérer toutes les propriétés du système. Ajouter de nouvelles annonces ou mettre à jour les existantes.',
    bulkImport: 'Import en Masse',
    bulkImportDesc: 'Importer plusieurs propriétés à la fois en utilisant des fichiers CSV. Parfait pour ajouter rapidement de gros volumes de données.',
    analytics: 'Analyses',
    analyticsDesc: 'Voir des analyses détaillées et des rapports sur les performances des propriétés et l\'engagement des utilisateurs.',
    comingSoon: 'Bientôt disponible',
    properties: {
      title: 'Gestion des Propriétés',
      addNew: 'Ajouter une Nouvelle Propriété',
      property: 'Propriété',
      location: 'Localisation',
      price: 'Prix',
      type: 'Type',
      status: 'Statut',
      actions: 'Actions',
      noProperties: 'Aucune propriété encore',
      noPropertiesDesc: 'Ajoutez votre première propriété pour commencer.'
    },
    import: {
      title: 'Import en Masse des Propriétés',
      uploadCsv: 'Télécharger un Fichier CSV',
      description: 'Téléchargez un fichier CSV contenant les données des propriétés. Le système créera automatiquement de nouvelles propriétés ou mettra à jour les existantes basé sur le champ externalId.',
      selectedFile: 'Fichier sélectionné',
      size: 'Taille',
      upload: 'Télécharger CSV',
      uploading: 'Téléchargement...',
      success: 'Import Réussi!',
      created: 'Créées',
      updated: 'Mises à jour',
      error: 'Erreur',
      requirements: 'Exigences du Format CSV',
      requiredHeaders: 'En-têtes Requis',
      notes: 'Notes',
      notesList: [
        'type: SALE ou RENT',
        'status: ACTIVE, INACTIVE, ou DRAFT',
        'images: URLs multiples séparées par des points-virgules (;)',
        'externalId: Utilisé pour les opérations upsert (met à jour si existe, crée sinon)',
        'Tous les champs sauf title sont optionnels'
      ]
    }
  },
  
  // Footer
  footer: {
    copyright: '© 2024 Cristian Florin Cozmincă - Agent Immobilier. Tous droits réservés.'
  },
  
  // Meta
  meta: {
    title: 'Cristian Florin Cozmincă - Agent Immobilier',
    description: 'Trouvez votre maison parfaite avec un agent de confiance. Achat, vente, location - résultats garantis.'
  }
}
