# Historical Demo Evidence

Status: historical record. The former hosted backend is offline and is not a current API endpoint.

This pack retains the June 6, 2026 capture of an earlier demo verification and the corresponding GitHub Check Run
evidence. It must not be read as current production, inference, or service-health proof.

## Retained Evidence

- Portfolio UI: [https://demo-web-delta-five.vercel.app](https://demo-web-delta-five.vercel.app)
- Repository: [https://github.com/manishsoni-dev/ArchGuard](https://github.com/manishsoni-dev/ArchGuard)
- Historical check capture: API health, readiness, version, demo status, demo proof, and the UI all returned `ok` on
  June 6, 2026.

![Historical hosted API root](screenshots/replit-api-root.png)

![Historical Vercel demo UI](screenshots/vercel-demo-ui.png)

## Historical PR #8 FIT Proof

- Pull request: [PR #8](https://github.com/manishsoni-dev/ArchGuard/pull/8)
- State: `MERGED`
- Head SHA: `b5188cbc9e0b004effcc46678474b2fd1cead8d1`
- Check: `ArchGuard Architecture Fitness`
- Check title: `ArchGuard verdict: FIT`
- Conclusion: `success`
- Completed at: `2026-06-05T11:04:05Z`
- Verdict: `FIT`
- Confidence: `78%`
- Analyzer provider: `rag`
- Model: `gpt-4o-mini`
- Fallback used: `no`

![PR #8 FIT proof](screenshots/pr-8-fit.png)

## Historical PR #1 DRIFT_RISK Proof

- Pull request: [PR #1](https://github.com/manishsoni-dev/ArchGuard/pull/1)
- State: `OPEN`
- Head SHA: `9a74593ed56ab63d5cc5a3443f8425271d8283fb`
- Check: `ArchGuard Architecture Fitness`
- Check title: `ArchGuard verdict: DRIFT_RISK`
- Conclusion: `action_required`
- Completed at: `2026-05-25T14:06:14Z`
- Verdict: `DRIFT_RISK`
- Confidence: `88%`
- Analyzer provider: `rag`
- Model: `gpt-4o-mini`
- Fallback used: `no`
- Finding: frontend imports database layer directly
- Location: `src/frontend/components/UserCard.tsx`

![PR #1 DRIFT_RISK proof](screenshots/pr-1-drift-risk.png)
