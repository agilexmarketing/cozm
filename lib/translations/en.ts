export const en = {
  // Common
  loading: 'Loading...',
  error: 'Error',
  save: 'Save',
  cancel: 'Cancel',
  delete: 'Delete',
  edit: 'Edit',
  back: 'Back',
  next: 'Next',
  previous: 'Previous',
  page: 'Page',
  of: 'of',
  
  // Navigation
  nav: {
    home: 'Home',
    properties: 'Properties',
    admin: 'Admin',
    login: 'Login'
  },
  
  // Agent info
  agent: {
    name: 'Cristian Florin Cozmincă',
    title: 'Real Estate Agent',
    description: 'Your trusted agent for buying, selling or renting. Experience, professionalism and guaranteed results.'
  },
  
  // Slogans
  slogans: [
    'Home starts here.',
    'The key to your home.',
    'From viewing to keys.',
    'Move without worries.',
    'Where dreams get keys.',
    'Right home, right price.',
    'Your path home.',
    'Passion for properties.',
    'No stress, just keys.',
    'The perfect location awaits you.'
  ],
  
  // Home page
  home: {
    title: 'Find Your Perfect Home',
    subtitle: 'Experience, professionalism and guaranteed results',
    viewProperties: 'View Properties',
    forSale: 'For Sale',
    forRent: 'For Rent',
    stats: {
      title: 'Results That Speak',
      subtitle: 'My experience and dedication are reflected in the results achieved for clients',
      propertiesSold: 'Properties Sold',
      avgSaleTime: 'Average Sale Time',
      satisfiedClients: 'Satisfied Clients',
      experience: 'Experience',
      days: 'days',
      years: 'years'
    }
  },
  
  // Properties
  properties: {
    title: 'Properties',
    forSale: 'for Sale',
    forRent: 'for Rent',
    showing: 'Showing',
    of: 'of',
    propertiesText: 'properties',
    in: 'in',
    noProperties: 'No properties found',
    noPropertiesDesc: 'Try adjusting your search filters to find more properties.',
    backToProperties: 'Back to Properties',
    contactAgent: 'Contact Agent',
    scheduleViewing: 'Schedule Viewing',
    description: 'Description',
    features: 'Property Features',
    area: 'Area',
    bedrooms: 'Bedrooms',
    bathrooms: 'Bathrooms',
    type: 'Type',
    priceOnRequest: 'Price on request',
    dormitory: 'bedroom',
    dormitories: 'bedrooms',
    baths: 'baths'
  },
  
  // Filters
  filters: {
    location: 'Location (city, region)',
    minPrice: 'Min price',
    maxPrice: 'Max price',
    allTypes: 'All types',
    sale: 'For sale',
    rent: 'For rent',
    filter: 'Filter',
    sort: {
      newest: 'Newest first',
      priceAsc: 'Price: low to high',
      priceDesc: 'Price: high to low'
    }
  },
  
  // Admin
  admin: {
    title: 'Admin Dashboard',
    login: 'Admin Login',
    email: 'Email',
    password: 'Password',
    signIn: 'Sign In',
    signingIn: 'Signing in...',
    invalidCredentials: 'Invalid credentials',
    dashboard: 'Dashboard',
    manageProperties: 'Manage Properties',
    managePropertiesDesc: 'View, edit, and manage all properties in the system. Add new listings or update existing ones.',
    bulkImport: 'Bulk Import',
    bulkImportDesc: 'Import multiple properties at once using CSV files. Perfect for adding large datasets quickly.',
    analytics: 'Analytics',
    analyticsDesc: 'View detailed analytics and reports about property performance and user engagement.',
    comingSoon: 'Coming soon',
    properties: {
      title: 'Properties Management',
      addNew: 'Add New Property',
      property: 'Property',
      location: 'Location',
      price: 'Price',
      type: 'Type',
      status: 'Status',
      actions: 'Actions',
      noProperties: 'No properties yet',
      noPropertiesDesc: 'Add your first property to get started.'
    },
    import: {
      title: 'Bulk Import Properties',
      uploadCsv: 'Upload CSV File',
      description: 'Upload a CSV file containing property data. The system will automatically create new properties or update existing ones based on the externalId field.',
      selectedFile: 'Selected file',
      size: 'Size',
      upload: 'Upload CSV',
      uploading: 'Uploading...',
      success: 'Import Successful!',
      created: 'Created',
      updated: 'Updated',
      error: 'Error',
      requirements: 'CSV Format Requirements',
      requiredHeaders: 'Required Headers',
      notes: 'Notes',
      notesList: [
        'type: SALE or RENT',
        'status: ACTIVE, INACTIVE, or DRAFT',
        'images: Multiple URLs separated by semicolons (;)',
        'externalId: Used for upsert operations (update if exists, create if not)',
        'All fields except title are optional'
      ]
    }
  },
  
  // Footer
  footer: {
    copyright: '© 2024 Cristian Florin Cozmincă - Real Estate Agent. All rights reserved.'
  },
  
  // Meta
  meta: {
    title: 'Cristian Florin Cozmincă - Real Estate Agent',
    description: 'Find your perfect home with a trusted agent. Buying, selling, renting - guaranteed results.'
  }
}
