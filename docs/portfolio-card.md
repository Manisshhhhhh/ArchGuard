# Portfolio Card Content

## Card

Title: ArchGuard

Subtitle: AI-powered PR architecture fitness checks

Description:

ArchGuard is a GitHub App that reviews pull requests against repository-specific architecture context. It receives GitHub webhooks, persists deliveries, runs a durable worker job, indexes code and ADRs, retrieves relevant architecture evidence, and posts a GitHub Check Run verdict such as `FIT`, `DRIFT_RISK`, or `INSUFFICIENT_EVIDENCE`.

## Links

- Hosted evidence URL (currently pre-change): [https://demo-web-delta-five.vercel.app](https://demo-web-delta-five.vercel.app)
- GitHub repository: [https://github.com/manishsoni-dev/ArchGuard](https://github.com/manishsoni-dev/ArchGuard)
- Historical proof pack: [docs/live-demo-proof.md](live-demo-proof.md)

## Proof Points

- PR #8 is retained historical `FIT` Check Run evidence from the former hosted demo.
- PR #1 is retained historical `DRIFT_RISK` evidence for a frontend-to-database boundary violation.
- The committed portfolio source is static: its proof cases are historical links and screenshots, not current runtime checks. The hosted URL currently serves a pre-change deployment and should not be presented as this revision until redeployed and reverified.

## Tags

TypeScript, Fastify, Prisma, Postgres, pgvector, Redis, BullMQ, GitHub Apps, Octokit, RAG, Vercel

## CTA Labels

- View portfolio evidence
- Read historical proof
- View GitHub proof
- View source
