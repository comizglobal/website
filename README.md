# CoMiz Global - Landing Page

A professional landing page for CoMiz Global, an international trading company specializing in sourcing, negotiation, and production management across Asia, the Middle East, and Europe.

## Features

- **Modern Design**: Beautiful, professional UI using shadcn/ui components and Tailwind CSS
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Contact Form**: Integrated with Resend API for email delivery
- **Form Validation**: Client-side and server-side validation using Zod
- **Smooth Animations**: Subtle micro-interactions and hover effects
- **Type-Safe**: Built with TypeScript for better development experience

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Form Handling**: React Hook Form + Zod
- **Email Service**: Resend
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- A Resend API key (get one at [resend.com](https://resend.com))

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd comiz-global
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Resend API key to `.env.local`:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

Build for production:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Project Structure

```
comiz-global/
├── app/
│   ├── about/          # About Us page
│   ├── api/
│   │   └── contact/    # Contact form API endpoint
│   ├── contact/        # Contact page with form
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Footer component
├── lib/
│   ├── utils.ts        # Utility functions
│   └── validators.ts   # Form validation schemas
└── public/             # Static assets
```

## Pages

- **Home** (`/`): Hero section, value propositions, process, industries, regions
- **About** (`/about`): Company mission, values, founders' bios
- **Services** (`/services`): Detailed service breakdown and process
- **Contact** (`/contact`): Contact form and information

## Contact Form Setup

The contact form uses **Resend** to send emails. To configure:

1. Create a Resend account at [resend.com](https://resend.com)
2. Verify your domain or use Resend's test domain
3. Generate an API key
4. Add the API key to your `.env.local` file
5. Update the `from` email in `app/api/contact/route.ts` if using a custom domain

### Email Configuration

- **From**: `noreply@comizglobal.com` (update this if using a custom domain)
- **To**: `comiz.global@gmail.com`
- **Reply-To**: Visitor's email address

## Customization

### Colors

The brand colors are defined in `app/globals.css`. Key colors:

- **Primary**: `#1A281F` (Dark green)
- **Green 600**: `#059669` (Accent green)
- **Neutral 700**: `#3F3F46` (Text)
- **Neutral 900**: `#0F172A` (Headings)

### Typography

The site uses **Inter** font with the following weights:
- Regular (400)
- Medium (500)
- Semi-Bold (600)
- Bold (700)

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project to Vercel
3. Add your `RESEND_API_KEY` environment variable in Vercel settings
4. Deploy

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- etc.

Make sure to set the `RESEND_API_KEY` environment variable on your hosting platform.

## Client Responsibilities

As per the requirements document, the client is responsible for:

1. **Domain**: Purchase and configure `comizglobal.com`
2. **Email Setup**:
   - Maintain access to `comiz.global@gmail.com`
   - Optionally set up custom domain email `contact@comizglobal.com` (€3/month via Hostinger)
3. **DNS Configuration**: Point domain to hosting provider

## License & Attribution

- Website developed by **Sitekept**
- Footer includes "Made by Sitekept" as per agreement
- Sitekept has the right to showcase this website as a portfolio piece

## Support

For issues or questions, please contact:
- Email: comiz.global@gmail.com
- Elioth (Israel): +972-559755959
- Joseph (France): +33-756830342

## Version

**v1.0** - Initial release with all features from requirements document
