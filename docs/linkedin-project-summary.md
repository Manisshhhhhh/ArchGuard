# LinkedIn Project Summary

## Post Copy

I built ArchGuard, an AI-powered GitHub App that checks pull requests for architecture fitness instead of only looking for syntax, lint, or test issues.

The core idea: a PR can compile and still violate the way a codebase is supposed to be built. ArchGuard listens to GitHub pull request webhooks, persists each delivery, runs analysis through a durable worker queue, indexes repository code and ADRs, retrieves architecture context, and posts a typed GitHub Check Run verdict.

The public portfolio evidence UI is available at:

- Vercel portfolio UI: https://demo-web-delta-five.vercel.app
- Repository: https://github.com/manishsoni-dev/ArchGuard

Current proof:

- PR #8 is retained historical `FIT` Check Run evidence from the former hosted demo.
- PR #1 is retained historical `DRIFT_RISK` evidence where a frontend component imports the database layer directly.
- The portfolio UI is static and does not claim that the historical backend is currently available.

Tech used: TypeScript, Fastify, Prisma, Postgres with pgvector, Redis, BullMQ, GitHub Apps, Octokit, and Vercel.

What I like most about this project is the implemented webhook-to-worker-to-check-run path and the retained evidence that
documents it. Mock LLMs and fake embeddings support deterministic fixtures; they do not demonstrate production inference.

## Short Version

ArchGuard is an AI-powered GitHub App for architecture fitness checks on pull requests. Its public Vercel page is a
static portfolio evidence UI; the historical hosted backend is offline.
