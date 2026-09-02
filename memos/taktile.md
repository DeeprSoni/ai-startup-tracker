# Investment Memo: Taktile

**Category:** AI-native Fintech — Underwriting / decisioning infrastructure &nbsp;·&nbsp; **Stage:** Series C &nbsp;·&nbsp; **Written:** 2026-09-02

---

## 1. Snapshot

Taktile builds a modular "Agentic Decision Platform" that lets banks and insurers combine AI agents, rules, and human oversight to automate regulated financial decisions — credit underwriting, fraud detection, claims, pricing. Raised a $110M Series C led by Goldman Sachs Alternatives in June 2026 ($184M total raised), serving 150+ bank and insurer customers processing ~30M decisions/week. This memo exists because Taktile is the closest match in the tracked batch to the exact wedge defined in `theses.md`'s AI-native fintech thesis: AI sitting directly at a regulated decision point, not a chat layer bolted onto existing rails.

## 2. Market / Problem

Credit underwriting, fraud detection, and claims decisioning are high-stakes, high-volume, and historically slow to modernize — banks and insurers run these on legacy rules engines (FICO Platform, Experian PowerCurve, CRIF Strategy One) that take 6-18 months to deploy a policy change. That's a real, urgent problem: financial institutions are under commercial pressure to underwrite faster without taking on more risk, at the exact moment AI models have become capable of handling decisions previously requiring a human underwriter. The timing argument is specific, not generic AI hype — this is a market where the deployment bottleneck (not model capability) has been the binding constraint, and that's what a no-code decisioning layer directly attacks.

## 3. Product & Tech

The platform's real technical claim is combining three things in one modular pipeline: AI agents (for judgment-requiring steps), deterministic rules (for compliance-mandated logic), and human-in-the-loop oversight (for regulatory sign-off) — across the full decision lifecycle: onboarding, underwriting, fraud/AML, claims, collections. This is architecturally harder than a pure-LLM decisioning tool because financial regulators require explainability and audit trails that a black-box model can't provide on its own — the rules + oversight layers exist specifically to satisfy that constraint, not as a hedge.

## 4. Team

Co-founded by Maik Taro Wehmeyer and Maximilian Eber, both machine-learning engineers. HQ New York, offices in London and Berlin — a footprint that matches the regulatory reality of this business (US, UK, and EU financial regulation all differ materially, and a decisioning platform selling into all three needs local grounding in each). I have not yet independently verified prior domain-specific fintech/banking operating experience beyond "ML engineers" — this is a real gap in my research, not a strength I'm overstating. Flagged for follow-up before treating "team" as a fully scored strength rather than an assumption.

## 5. Traction

- **2026-06:** $110M Series C, led by Goldman Sachs Alternatives, with Balderton Capital, Index Ventures, Tiger Global, Y Combinator, and Dig Ventures participating. Total raised to date: $184M.
- **2026-06:** 150+ bank and insurer customers.
- **2026 (undated in source):** ~30 million decisions processed weekly across the customer base.

No public ARR figure was found in my research — flagged explicitly rather than estimated. Customer count and decision volume are the strongest disclosed traction signals; revenue scale is not yet public.

## 6. Competitive Landscape / Moat

Three distinct competitor tiers, per market research:

- **Modern decisioning platforms** (direct competitors): Provenir (~$243M raised), Floowed, GDS Link, Lentra — all rebuilt decisioning around no-code policy editing and faster deployment, the same wedge Taktile is pursuing.
- **Scoring vendors extending into decisioning**: Zest AI (~$390M+ raised — more capital than Taktile) and Scienaptic — anchored to US bureau data and specific verticals, narrower than Taktile's cross-vertical, cross-geography ambition.
- **Legacy incumbents**: FICO Platform, Experian PowerCurve, CRIF Strategy One — deep enterprise mindshare and long (6-18 month) deployment cycles that create the switching-cost opening Taktile is exploiting, but also the entrenchment that makes displacing them slow.

**What defends the position:** deployment speed (no-code policy editing vs. incumbents' multi-quarter cycles), and the specific combination of agents + rules + human oversight built to survive live regulatory audit — a pure-LLM competitor would need to rebuild this compliance layer from scratch to compete credibly with banks.

**What doesn't defend it:** Zest AI has raised over 2x Taktile's total capital and could out-spend on the same modernization wedge; the "no-code decisioning" category itself (Provenir, Floowed, GDS Link, Lentra) is getting crowded, meaning the moat is more about execution speed than a structural, uncopiable advantage.

## 7. Thesis Fit

Per `theses.md`'s AI-native fintech thesis, high fit requires: AI at a regulated decision point (not a chat UI), founding team with real fintech/regulatory operating experience, and a proprietary data or workflow moat a bank can't easily buy. Taktile scores very high on the first criterion — this is the textbook case the thesis was written around. It scores unverified/incomplete on the second (team's regulatory-specific pedigree not yet confirmed). On the third, the moat is more "execution speed + compliance-native architecture" than "proprietary data" — a real but narrower moat than the thesis's ideal case.

## 8. Risks

- **Competitive risk:** Zest AI's larger war chest could fund an aggressive land-grab in the same modern-decisioning wedge; the category (Provenir, Floowed, GDS Link, Lentra, Zest AI, Taktile) is crowded enough that differentiation will need to sharpen, not just deployment speed.
- **Regulatory risk:** US federal regulators (Fed, FDIC, OCC) overhauled model-risk guidance in April 2026, extending scrutiny explicitly to agentic/LLM-based underwriting systems; the EU AI Act classifies lending as high-risk. This cuts both ways — it raises the moat for compliance-native platforms like Taktile, but also raises the cost and slows the sales cycle of every new customer deployment.
- **Team risk:** unverified whether the founding team has deep enough prior fintech/regulatory operating experience to navigate this regulatory environment at scale — flagged above, needs follow-up before being treated as resolved.
- **Revenue-disclosure risk:** no public ARR figure exists yet; customer count and decision volume are encouraging but don't substitute for revenue evidence of monetization efficiency.

## 9. Scored Recommendation

| Category | Weight | Score (1-5) | Weighted |
|---|---|---|---|
| Market timing | 20% | 4.5 | 0.90 |
| Team | 20% | 3.0 (unverified — see Risks) | 0.60 |
| Wedge defensibility | 25% | 3.5 | 0.88 |
| Traction | 20% | 3.5 | 0.70 |
| Thesis fit | 15% | 4.5 | 0.68 |
| **Total** | 100% | | **3.75** |

**Verdict: Watch.** A 3.75 lands solidly in "worth continued tracking" — the market timing and thesis fit are genuinely excellent, but the score is held back by two real unknowns (team's regulatory depth, actual revenue scale) rather than by anything disqualifying. This is not yet a high-conviction pick; it's the batch's best candidate for one.

**What would move the verdict:** (a) confirming the founders' or early hires' specific prior fintech/regulatory experience, (b) any disclosed ARR or revenue-growth figure, (c) evidence of net-new competitive displacement (a customer named as switching from FICO/Experian specifically, not just "150+ customers").
