# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CoMiz Global is a professional landing page for an international trading company, built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui components. The site features a contact form integrated with Resend API for email delivery.

## Development Commands

```bash
# Development
npm run dev              # Start development server on http://localhost:3000

# Production
npm run build           # Build for production (checks TypeScript and builds Next.js)
npm start               # Start production server (run build first)

# Code Quality
npm run lint            # Run ESLint (uses Next.js ESLint config)
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router (not Pages Router)
- **Language**: TypeScript with strict mode enabled
- **Styling**: Tailwind CSS v4 (using new @theme inline syntax in globals.css)
- **UI Components**: shadcn/ui (New York style with CSS variables)
- **Form Handling**: React Hook Form + Zod validation
- **Email Service**: Resend API
- **Icons**: Lucide React

### Project Structure

```
app/
├── about/page.tsx          # About Us page
├── api/contact/route.ts    # Contact form API endpoint (Route Handler)
├── contact/page.tsx        # Contact page with form
├── services/page.tsx       # Services page
├── globals.css             # Global styles with brand colors (Tailwind v4 @theme)
├── layout.tsx              # Root layout with Header/Footer
└── page.tsx                # Homepage

components/
├── ui/                     # shadcn/ui components (managed by shadcn CLI)
├── Header.tsx              # Navigation header with mobile menu
└── Footer.tsx              # Footer with Sitekept attribution

lib/
├── utils.ts                # Utility functions (cn helper)
└── validators.ts           # Zod schemas for form validation
```

### Key Architectural Patterns

**1. App Router Convention**
- All pages use the `page.tsx` convention
- API routes use Route Handlers in `app/api/*/route.ts`
- Root layout (app/layout.tsx) wraps all pages with Header and Footer
- All pages have `pt-16 md:pt-20` margin-top to account for fixed header

**2. Path Aliases**
- `@/*` maps to root directory (configured in tsconfig.json)
- Import components as `@/components/Header`
- Import utils as `@/lib/utils`

**3. Styling Approach**
- Tailwind CSS v4 uses new `@theme inline` syntax in globals.css
- Brand colors defined as CSS variables in globals.css:48-70
- Custom animations defined in globals.css utilities layer
- shadcn/ui components use CSS variables for theming
- Use `hover-lift` class for card hover animations
- Use `transition-smooth` class for smooth transitions

**4. Form Validation**
- Validation schemas defined in `lib/validators.ts` using Zod
- Client-side validation via React Hook Form
- Server-side validation in API route using same Zod schema
- Always use `safeParse()` for validation to handle errors gracefully

**5. Email Integration**
- Contact form sends emails via `app/api/contact/route.ts`
- Requires `RESEND_API_KEY` environment variable
- Email template uses inline HTML/CSS for compatibility
- Gracefully handles missing API key with user-friendly error

## Brand Colors & Design

The site uses a specific brand color palette defined in `app/globals.css`:

- **Primary**: `#1A281F` (dark green, --color-brand-primary)
- **Accent Green**: `#059669` (--color-green-600)
- **Neutral Text**: `#3F3F46` (--color-neutral-700)
- **Headings**: `#0F172A` (--color-neutral-900)
- **Beige Accent**: `#E7E2D8` (--color-accent-beige)
- **Blue-Gray Accent**: `#E5EFF0` (--color-accent-blue-gray)

**Typography**: Inter font family with weights 400, 500, 600, 700

**Animation Timing**: Keep animations between 0.15s - 0.25s for smooth feel

## Environment Variables

Required for production:
```env
RESEND_API_KEY=re_your_actual_api_key_here
```

The API route gracefully handles missing API key with a 503 error and user-friendly message.

## Important Implementation Notes

### When Working with Forms
- Always validate on both client (React Hook Form) and server (Zod schema in API route)
- Use the existing `contactFormSchema` from `lib/validators.ts`
- Email templates should use inline styles for email client compatibility
- Set `replyTo` field to user's email for easy responses

### When Modifying Styles
- Brand colors are in `app/globals.css` under the `@theme inline` block
- Custom utility classes are in the `@layer utilities` block
- Don't modify shadcn/ui components directly; override via Tailwind classes
- Maintain existing animation timing (0.15s - 0.25s)

### When Adding New Pages
- Create `app/[page-name]/page.tsx` following existing pattern
- Add metadata export for SEO
- Ensure responsive design (mobile-first approach)
- Add navigation link to `components/Header.tsx`

### When Working with shadcn/ui
- Components are in `components/ui/` directory
- Configuration is in `components.json`
- Use `npx shadcn@latest add [component-name]` to add new components
- Style variant: "new-york"
- Base color: "neutral"
- Icon library: lucide-react

### Email Configuration (app/api/contact/route.ts)
- **From**: `noreply@comizglobal.com` (update if using different domain)
- **To**: `comiz.global@gmail.com`
- Email template includes timestamp and formatted field display
- Uses HTML email with inline styles for client compatibility

## Contact Information

**CoMiz Global Contacts:**
- Email: comiz.global@gmail.com
- Elioth (Israel): +972-559755959
- Joseph (France): +33-756830342

**Attribution**: Footer includes "Made by Sitekept" as per project agreement
