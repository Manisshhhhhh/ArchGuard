# Historical Vercel + Replit Demo

Status: retired. This document records the former hosted-demo topology only; it is not a deployment guide.

The prior setup used a Vercel UI with a separately hosted API and worker. That backend is offline. The Vercel source in
this repository is now a static portfolio evidence UI and must not be configured with an API URL or presented as a
live inference service.

Retained historical evidence:

- [Historical proof pack](live-demo-proof.md)
- [Historical hosted API screenshot](screenshots/replit-api-root.png)
- [Historical Vercel UI screenshot](screenshots/vercel-demo-ui.png)

For an actual future deployment, follow the generic deployment material in [deployment.md](deployment.md) and
[deploy/README.md](../deploy/README.md), provision new infrastructure, and complete fresh runtime verification before
making any public availability claim.
