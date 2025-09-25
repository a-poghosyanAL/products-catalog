# Product Catalog Application

A modern, responsive product catalog application built with Next.js, TypeScript, Sanity CMS, and Tailwind CSS.

## Features

- **Product Listing Page**: Grid layout with search and filtering capabilities
- **Product Detail Page**: Full product information with related products
- **Search Functionality**: Search by product title and description
- **Category Filtering**: Filter products by category
- **Price Range Filtering**: Filter products by price range
- **Sorting Options**: Sort by price (high to low, low to high) and name (A-Z, Z-A)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Sanity CMS** - Headless content management
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## Prerequisites

- Node.js 18+ 
- npm or yarn
- Sanity account

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd product-catalog-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set up Sanity

1. Create a new project at [sanity.io](https://sanity.io)
2. Create a new dataset (e.g., "production")
3. Copy your project ID and dataset name

### 4. Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
```

### 5. Set up Sanity Schema

1. Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
```

2. Login to Sanity:
```bash
sanity login
```

3. Deploy the schema:
```bash
sanity deploy
```

### 6. Add Sample Data

1. Go to your Sanity Studio (usually at `https://your-project-id.sanity.studio`)
2. Create products with the following fields:
   - **Title** (string, required)
   - **Description** (text, required)
   - **Image** (image, required)
   - **Category** (string, required)
   - **Price** (number, required)
   - **Availability** (boolean, required)
   - **Slug** (slug, required)

### 7. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page (product listing)
│   ├── product/[slug]/    # Product detail pages
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ProductCard.tsx    # Product card component
│   └── FilterPanel.tsx    # Filter panel component
├── lib/                   # Utility functions
│   ├── sanity.ts         # Sanity client configuration
│   └── queries.ts        # Sanity queries
└── types/                 # TypeScript type definitions
    └── product.ts         # Product-related types
```

## Sanity Schema

The application uses a Product schema with the following fields:

- `title` (string, required) - Product name
- `description` (text, required) - Product description
- `image` (image, required) - Product image
- `category` (string, required) - Product category
- `price` (number, required) - Product price
- `availability` (boolean, required) - Stock availability
- `slug` (slug, required) - URL-friendly identifier

## Key Features Implementation

### Search and Filtering
- Real-time search across product titles and descriptions
- Category-based filtering
- Price range filtering with min/max inputs
- Sort by price (ascending/descending) and name (A-Z/Z-A)

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Responsive grid layouts
- Touch-friendly interface elements
- Optimized images with Next.js Image component

### Performance Optimizations
- Server-side rendering for product pages
- Image optimization with Sanity's image URL builder
- Efficient filtering and sorting with useMemo
- Lazy loading and code splitting

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.