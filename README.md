# Cristian Florin Cozmincă - Agent Imobiliar

O aplicație modernă de imobiliare construită cu Next.js, TypeScript și PostgreSQL pentru agentul imobiliar Cristian Florin Cozmincă.

## Features

- 🏠 Listări proprietăți cu căutare și filtrare avansată
- 📱 Design responsive și modern
- 🔐 Autentificare admin securizată
- 📊 Import în masă CSV
- 🖼️ Galerii foto pentru proprietăți
- 🔍 Căutare avansată (locație, preț, tip)
- 📄 Pagini detaliate pentru fiecare proprietate
- ✨ Animații fluide cu Framer Motion
- 🌍 Suport multilingv complet (RO, EN, FR, DE)
- 🔄 Comutator de limbă în timp real
- 🎨 Sloganuri personalizate pentru agent
- 🔍 SEO optimizat cu sitemap și robots.txt

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, React
- **Animations**: Framer Motion pentru animații fluide
- **Internationalization**: Sistem i18n personalizat cu 4 limbi
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL (Neon)
- **Authentication**: NextAuth.js
- **SEO**: Sitemap dinamic și robots.txt
- **Styling**: Inline styles cu animații CSS
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ and pnpm
- PostgreSQL database (we use Neon)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your database URL and other settings.

4. Set up the database:
   ```bash
   pnpm dlx prisma generate
   pnpm dlx prisma migrate dev --name init
   ```

5. Create an admin user (optional):
   ```bash
   # You can create an admin user directly in the database
   # or use the provided hash in .env.example (password: "password")
   ```

6. Run the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
/app
  /api
    /auth/[...nextauth]/route.ts    # NextAuth configuration
    /properties/route.ts            # Properties API (GET, POST)
    /properties/[id]/route.ts       # Single property API
    /properties/bulk-import/route.ts # CSV import API
  /admin
    /login/page.tsx                 # Admin login
    /page.tsx                       # Admin dashboard
    /properties/page.tsx            # Properties management
    /import/page.tsx                # CSV import interface
  /properties
    /page.tsx                       # Properties listing
    /[slug]/page.tsx                # Property details
  /layout.tsx                       # Root layout
  /page.tsx                         # Homepage
/components
  FilterBar.tsx                     # Search filters
  SortSelect.tsx                    # Sort dropdown
  PropertyCard.tsx                  # Property card component
  Pagination.tsx                    # Pagination component
/lib
  db.ts                            # Prisma client
  auth.ts                          # NextAuth configuration
/prisma/schema.prisma              # Database schema
```

## API Endpoints

### Properties
- `GET /api/properties` - List properties with filtering
- `POST /api/properties` - Create new property
- `GET /api/properties/[id]` - Get single property
- `PUT /api/properties/[id]` - Update property
- `DELETE /api/properties/[id]` - Delete property
- `POST /api/properties/bulk-import` - Import CSV

### Authentication
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signout` - Sign out

## CSV Import Format

The bulk import feature accepts CSV files with the following headers:

```csv
externalId,title,description,type,status,price,currency,city,region,address,lat,lng,bedrooms,bathrooms,areaSqm,images
```

### Field Descriptions:
- `externalId`: Unique identifier for upsert operations
- `title`: Property title (required)
- `type`: SALE or RENT
- `status`: ACTIVE, INACTIVE, or DRAFT
- `images`: Multiple URLs separated by semicolons (;)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

The application is optimized for Vercel's serverless environment.

## Environment Variables

```env
DATABASE_URL=postgresql://user:pass@host:5432/db
NEXTAUTH_URL=https://your-domain.vercel.app
NEXTAUTH_SECRET=your-secret-key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD_HASH=$2b$10$hash_from_bcrypt
```

## Multilingual Support

The application supports 4 languages:

- 🇷🇴 **Romanian** (default) - `/`
- 🇬🇧 **English** - `/en`
- 🇫🇷 **French** - `/fr`
- 🇩🇪 **German** - `/de`

### Language Features

- **Automatic language detection** from URL path
- **Language switcher** in header for instant switching
- **Complete translations** for all UI elements
- **SEO-friendly URLs** with language prefixes
- **Dynamic slogans** translated for each language
- **Localized content** including property descriptions

### URL Structure

```
/ (Romanian - default)
/en (English)
/fr (French) 
/de (German)

/properties → /en/properties
/properties/property-slug → /fr/properties/property-slug
/admin → /de/admin
```

## SEO Features

- **Dynamic sitemap** (`/sitemap_index.xml`) with all languages
- **Robots.txt** (`/robots.txt`) allowing all crawlers
- **Multilingual meta tags** for each language
- **Structured URLs** for better search engine indexing

## License

MIT License
