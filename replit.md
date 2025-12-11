# FlowGramer AI Website

## Overview
A professional Next.js website for FlowGramer AI, showcasing AI solutions, workflow automation, and custom software development services. Built with a modern design inspired by enterprise tech company layouts.

## Recent Changes (December 2025)
- Complete rebranding from "B2C Incorporation" to "FlowGramer AI"
- Created comprehensive page structure: Services, About, Contact, Case Studies
- Updated all components with professional AI-focused content
- Simplified navigation and removed conflicting "design" section
- Fixed component imports and directory naming (componants -> components)

## Project Architecture

### Tech Stack
- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Mix of .tsx and .jsx files

### Directory Structure
```
app/
├── components/          # Reusable UI components
│   ├── navbar/         # Navigation components
│   ├── layout/         # Layout wrappers
│   └── ...             # Core components (Hero, Services, Footer, etc.)
├── services/           # Services page
├── about/              # About page
├── contact/            # Contact page
├── case-studies/       # Case Studies page
├── hooks/              # Custom React hooks
├── layout.jsx          # Root layout with metadata
├── page.tsx            # Homepage
└── globals.css         # Global styles
```

### Key Pages
- `/` - Homepage with Hero, Services overview, Testimonials
- `/services` - Detailed service offerings
- `/about` - Company mission, vision, and stats
- `/contact` - Contact form and company info
- `/case-studies` - Client success stories

## Development Notes

### Running Locally
The development server runs on port 5000 with host 0.0.0.0 to work with Replit's proxy:
```bash
npm run dev -- -p 5000 -H 0.0.0.0
```

### Known Behavior
- WebSocket HMR warnings in browser console are expected in Replit's proxy environment
- These don't affect functionality; page rendering works correctly

### Branding
- **Primary Color**: Blue (#2563eb)
- **Company Name**: FlowGramer AI
- **Email**: hello@flowgramerai.com
- **Focus Areas**: AI Solutions, Workflow Automation, Custom Software Development

## User Preferences
- Modern, professional design matching enterprise tech companies
- Mobile-responsive layouts
- Clean navigation with dropdown for services
- No emoji in content unless requested
