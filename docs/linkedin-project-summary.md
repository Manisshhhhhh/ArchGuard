# LinkedIn Project Summary

## Post Copy

I built ArchGuard, an AI-powered GitHub App that checks pull requests for architecture fitness instead of only looking for syntax, lint, or test issues.

The core idea: a PR can compile and still violate the way a codebase is supposed to be built. ArchGuard listens to GitHub pull request webhooks, persists each delivery, runs analysis through a durable worker queue, indexes repository code and ADRs, retrieves architecture context, and posts a typed GitHub Check Run verdict.

The committed portfolio evidence source is ready for deployment. Until a fresh deployment is verified, do not present
the hosted URL as this revision:

- Hosted evidence URL (currently pre-change): https://demo-web-delta-five.vercel.app
- Repository: https://github.com/manishsoni-dev/ArchGuard

Current proof:

- PR #8 is retained historical `FIT` Check Run evidence from the former hosted demo.
- PR #1 is retained historical `DRIFT_RISK` evidence where a frontend component imports the database layer directly.
- The committed portfolio UI is static and does not claim that the historical backend is currently available. The hosted URL currently serves a pre-change deployment.

Tech used: TypeScript, Fastify, Prisma, Postgres with pgvector, Redis, BullMQ, GitHub Apps, Octokit, and Vercel.

What I like most about this project is the implemented webhook-to-worker-to-check-run path and the retained evidence that
documents it. Mock LLMs and fake embeddings support deterministic fixtures; they do not demonstrate production inference.

## Short Version

ArchGuard is an AI-powered GitHub App for architecture fitness checks on pull requests. Its committed Vercel source is
a static portfolio evidence UI; the historical hosted backend is offline. The currently hosted page must be reverified
after deployment before it is presented as this revision.
