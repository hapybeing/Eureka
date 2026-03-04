# Eureka

Enterprise-focused B2B SaaS starter using Next.js App Router, TypeScript, Tailwind,
Prisma, and Vitest.

## Included

- App Router pages (`/`, `/login`, `/dashboard`)
- Health API endpoint (`/api/health`)
- Prisma multi-tenant baseline schema (users, organizations, memberships)
- Shared validation and utility modules
- Unit tests for validators/utilities
- GitHub Actions workflow for lint/test/build

## Quick Start

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

## Scripts

- `pnpm dev` - start development server
- `pnpm build` - production build
- `pnpm lint` - lint checks
- `pnpm test` - run unit tests

## Notes

This is a production-minded scaffold. You can now iterate by adding authentication,
RBAC enforcement, billing, and tenant-specific feature modules.
