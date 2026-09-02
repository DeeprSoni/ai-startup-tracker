# Company Tracker — first batch (5 companies)

Full structured records live in WorkNode (source of truth — each has a dated changelog you can extend over time). This file is a quick-reference mirror, last synced 2026-09-02.

| Company | Category | Stage | Last valuation | Latest disclosed ARR | Verdict |
|---|---|---|---|---|---|
| [Harvey](https://harvey.ai) | Vertical SaaS AI-native — legal | Growth | $11B (Mar 2026); in talks for $15.5B (Aug 2026) | $300M (Jun 2026) | Watch — bellwether, already richly valued |
| [Sierra](https://sierra.ai) | Vertical SaaS AI-native — customer support | Growth | $15.8B (May 2026) | ~$200M (May 2026, est.) | Watch — fastest ARR ramp, comp for earlier-stage CX agents |
| [Braintrust](https://braintrust.dev) | Agent infrastructure — observability/eval | Series B | $800M (Feb 2026) | n/a (named logos: Notion, Stripe, Vercel, OpenAI) | Watch — earlier stage, real logos, sub-category consolidating fast |
| [Arize AI](https://arize.com) | Agent infrastructure — observability/eval | Series C | unconfirmed | $131M total raised | Watch — oldest player, strategic backing from Datadog/PagerDuty |
| [Taktile](https://taktile.com) | AI-native fintech — underwriting/decisioning | Series C | unconfirmed | $184M total raised, 150+ bank/insurer customers | Watch — best thesis-fit of the batch |

**Note on the observability/eval sub-category:** 3 comparable companies (Langfuse, Helicone, Galileo) were acquired in 2026 (by ClickHouse, Mintlify, and Cisco respectively). Braintrust and Arize AI are being tracked as the two most likely independent survivors — worth flagging as a risk in any future memo on either.

## Per-company detail

Each company has a full WorkNode record with: category/subcategory, stage, website, socials (X/LinkedIn), founding team, product wedge, dated funding history, dated disclosed-traction log, dated qualitative-signal log (hiring/launches/press/social), thesis-fit assessment, and verdict + rationale.

To pull the latest full record for any company, query WorkNode by record id:
- Harvey — `rec:01M1H9XDQ7WV50Q2X02JVK6M3H`
- Sierra — `rec:01M1H9XNGBJ949R4BJQ7D9AC49`
- Braintrust — `rec:01M1H9XVZ0XZ5B1AG7NXA3JX3K`
- Arize AI — `rec:01M1H9Y31JSP62CTMP1529H2PQ`
- Taktile — `rec:01M1H9Y92K0SF75BS3JBFCYWGB`

## How to update a company over time

When new news breaks (funding round, ARR disclosure, hire, launch, social post worth noting), append a dated entry to that company's `funding_history`, `disclosed_traction`, or `qualitative_signal` array in WorkNode rather than overwriting — the point is a changelog, not a snapshot. Bump `last_updated`.
