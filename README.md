# BrandKernel Website

A high-performance Next.js website for BrandKernel with Contentful blog integration and waitlist functionality.

## Features

- ⚡ **Super Fast Loading** - Optimized for 90+ Lighthouse scores
- 🎨 **Pixel-Perfect Design** - 1:1 replication of the provided design
- 📝 **Contentful Blog** - Full blog integration with GraphQL API
- 📧 **Waitlist Integration** - Connect with users through waitlist signup
- 🔍 **SEO Optimized** - Comprehensive on-page SEO implementation
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎭 **Smooth Animations** - Modern animations with Framer Motion

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/Airmax1986/brandkernel-nextjs-site.git
   cd brandkernel-nextjs-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Fill in your Contentful credentials in `.env.local`

4. **Set up Contentful content model (optional)**
   ```bash
   npm run setup-contentful
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Contentful Configuration
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_access_token_here
CONTENTFUL_PREVIEW_ACCESS_TOKEN=your_preview_token_here
CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here

# Waitlist Configuration
NEXT_PUBLIC_WAITLIST_API_URL=your_waitlist_api_url

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js.

## Project Structure

```
src/
├── components/          # Reusable React components
├── pages/              # Next.js pages
├── lib/                # Utility libraries
├── utils/              # Helper functions
├── styles/             # Global styles
└── types/              # TypeScript definitions

scripts/                # Setup and utility scripts
public/                 # Static assets
```

## Performance

This website is optimized for performance with:

- Next.js Image optimization
- Code splitting and lazy loading
- Critical CSS inlining
- Optimized fonts and assets
- Static generation where possible

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
