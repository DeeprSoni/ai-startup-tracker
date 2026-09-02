# Company Tracker — 20 companies

Full structured records live in WorkNode (source of truth — each has a dated changelog you can extend over time). This file is a quick-reference mirror, last synced 2026-09-02.

| Company | Category | Stage | Last valuation | Latest disclosed ARR | Verdict |
|---|---|---|---|---|---|
| [Harvey](https://harvey.ai) | Vertical SaaS AI-native — legal | Growth | $11B (Mar 2026); in talks for $15.5B (Aug 2026) | $300M (Jun 2026) | Watch — bellwether, already richly valued |
| [Sierra](https://sierra.ai) | Vertical SaaS AI-native — customer support | Growth | $15.8B (May 2026) | ~$200M (May 2026, est.) | Watch — fastest ARR ramp, comp for earlier-stage CX agents |
| [Braintrust](https://braintrust.dev) | Agent infrastructure — observability/eval | Series B | $800M (Feb 2026) | n/a (named logos: Notion, Stripe, Vercel, OpenAI) | Watch — earlier stage, real logos, sub-category consolidating fast |
| [Arize AI](https://arize.com) | Agent infrastructure — observability/eval | Series C | unconfirmed | $131M total raised | Watch — oldest player, strategic backing from Datadog/PagerDuty |
| [Taktile](https://taktile.com) | AI-native fintech — underwriting/decisioning | Series C | unconfirmed | $184M total raised, 150+ bank/insurer customers | Watch — best thesis-fit of the batch |
| [Kestra](https://kestra.io) | Agent infrastructure — durable execution/orchestration | Series A | unconfirmed | n/a (2B+ workflows executed 2025, 25x enterprise revenue growth) | Watch — real production usage, earlier/cheaper than category anchor Temporal |
| [Natural](https://www.natural.com) | AI-native fintech — agentic payments | Series A | unconfirmed | n/a (no ARR/customers disclosed yet) | Watch — thematic fit on the least-crowded fintech sub-thread, unproven |
| [Shepherd](https://www.withshepherd.com) | Vertical SaaS AI-native — construction/infrastructure insurance | Series B | unconfirmed | 7x+ revenue growth (24mo); $400B+ insured | Watch — best-balanced pick of the batch, underhyped "open window" vertical |
| [Build](https://build.inc) | Vertical SaaS AI-native — construction/real-estate development | Seed | unconfirmed | n/a (100+ projects deployed, no ARR disclosed) | Revisit — right vertical, too early, no disclosed revenue |
| [LinqAlpha](https://linqalpha.com) | AI-native fintech — capital markets research | Series A | unconfirmed | n/a (70+ FI customers, no ARR disclosed) | Revisit — strong traction but assistive research, not a regulated-decision-point product |
| [Zenity](https://zenity.io) | Agent infrastructure — security/governance | Series C | unconfirmed | $185M total raised | Watch — guardrails wedge, strong strategic backing (SoftBank, Intel Capital) |
| [Sail Research](https://www.sailresearch.com) | Agent infrastructure — durable execution/long-horizon inference | Seed + Series A | $450M (Jun 2026) | n/a (pre-revenue; 90.72% BrowseComp-Plus benchmark) | Watch — elite team, top-tier syndicate, no disclosed customers yet |
| [HappyRobot](https://www.happyrobot.ai) | Vertical SaaS AI-native — logistics/freight voice agents | Series C | $1.2B (Aug 2026) | n/a (150+ enterprise customers incl. DHL, Uber) | Watch — unicorn in 20 months, best comp for operational voice agents |
| [FurtherAI](https://www.furtherai.com) | Vertical SaaS AI-native — insurance underwriting/claims | Series A | unconfirmed | n/a (named carriers: Accelerant, MSI, Leavitt Group) | Watch — real efficiency metrics, fast a16z-led Series A |
| [Casca](https://www.cascading.ai) | AI-native fintech — loan origination/underwriting | Series A | unconfirmed | $33M total raised; banks incl. Live Oak, Huntington Nat'l | Watch — closest fit to core fintech thesis after Taktile |
| [Trase](https://www.trase.ai) | Agent infrastructure — orchestration/governance OS | Seed | unconfirmed | $117.5M total raised; Duke Health fax-triage 7.1x faster, 1,395 hrs/mo saved | Watch — real dated production traction, but venture-studio-incubated and outsized seed round |
| [Concentrate AI](https://concentrate.ai) | Agent infrastructure — LLM gateway/spend governance | Pre-seed | unconfirmed | n/a (no usage disclosed; product just launched) | Revisit — credible repeat founders, but unproven free/at-cost model in a crowded, consolidating sub-category |
| [Brickanta](https://brickanta.com) | Vertical SaaS AI-native — construction (pre-build/bid/procurement) | Seed | unconfirmed | n/a (no ARR disclosed) | Revisit — right vertical, credible domain founders, too early like Build |
| [Alpaca](https://alpaca.markets) | AI-native fintech — agent-first brokerage/trading infra | Series D | $1.15B (Jan 2026) | ~4x MAU growth in 6mo (Jul 2026); $433M+ total raised | Watch — validates the agent-first-brokerage thesis, but a late-stage comp not a ground-floor pick |
| [Ralio](https://www.ralio.co) | AI-native fintech — agentic payments trust/guardrail infra | Pre-seed | unconfirmed | n/a (3 months old, no usage disclosed) | Revisit — strong thematic fit and founder pairing, too early to score watch |

**Note on the observability/eval sub-category:** 3 comparable companies (Langfuse, Helicone, Galileo) were acquired in 2026 (by ClickHouse, Mintlify, and Cisco respectively). Braintrust and Arize AI are being tracked as the two most likely independent survivors — worth flagging as a risk in any future memo on either.

## Per-company detail

Each company has a full WorkNode record with: category/subcategory, stage, website, socials (X/LinkedIn), founding team, product wedge, dated funding history, dated disclosed-traction log, dated qualitative-signal log (hiring/launches/press/social), thesis-fit assessment, and verdict + rationale.

To pull the latest full record for any company, query WorkNode by record id:
- Harvey — `rec:01M1H9XDQ7WV50Q2X02JVK6M3H`
- Sierra — `rec:01M1H9XNGBJ949R4BJQ7D9AC49`
- Braintrust — `rec:01M1H9XVZ0XZ5B1AG7NXA3JX3K`
- Arize AI — `rec:01M1H9Y31JSP62CTMP1529H2PQ`
- Taktile — `rec:01M1H9Y92K0SF75BS3JBFCYWGB`
- Kestra — `rec:01M1HJVTV8QPFPN9QAPDRPK2TJ`
- Natural — `rec:01M1HJW2BVVEDHMDHK1FCRTAMC`
- Shepherd — `rec:01M1HJW9RBTKASDPPZ59PRG5NQ`
- Build — `rec:01M1HJWHE1RJD6NCAEYF039KW5`
- LinqAlpha — `rec:01M1HJWSTP1TCYE2FNBGD0R70F`
- Zenity — `rec:01M1HK78C98VQZRVY0N7HT5VSJ`
- Sail Research — `rec:01M1HK7GT37YP4KS16ABS3HDX9`
- HappyRobot — `rec:01M1HK7S4PHV64242GERJMBP5B`
- FurtherAI — `rec:01M1HK82C6FMJY26Y6WSKH5N7F`
- Casca — `rec:01M1HK8A5WZKZCSN755G5VXRN2`
- Trase — `rec:01M1HKR04J7ZYWZV3CK9TVC5E6`
- Concentrate AI — `rec:01M1HKR80N3EQ4MXSJEFTFK4DF`
- Brickanta — `rec:01M1HKRH20V6QE8KJX0JJKB4JP`
- Alpaca — `rec:01M1HKRTJDWYY7NKM4GCQCKBD8`
- Ralio — `rec:01M1HKS2KV3AJ6QEV455QG7MYM`

## How to update a company over time

When new news breaks (funding round, ARR disclosure, hire, launch, social post worth noting), append a dated entry to that company's `funding_history`, `disclosed_traction`, or `qualitative_signal` array in WorkNode rather than overwriting — the point is a changelog, not a snapshot. Bump `last_updated`.
