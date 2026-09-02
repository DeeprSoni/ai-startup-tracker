// AI Startup Intelligence & Investment Memo Pipeline — company data
// Source of truth: WorkNode (rec:01M1H63S3P8Z2TZ18P83T6W1HX and children).
// Update by appending dated entries to funding_history / disclosed_traction / qualitative_signal — never overwrite history.

window.COMPANIES = [
  {
    id: "harvey",
    name: "Harvey",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Legal",
    stage: "Growth (pre-IPO)",
    website: "https://harvey.ai",
    socials: { twitter: "https://x.com/harvey", linkedin: "https://linkedin.com/company/harvey-ai" },
    founding_team: "Winston Weinberg (co-founder/CEO); ex-lawyer background.",
    product_wedge: "Deep integration into legal workflow — contract analysis, compliance, due diligence, litigation support — serving 1,500+ customers incl. 50% of the Am Law 100 across 60+ countries.",
    funding_history: [
      { date: "2025-12", event: "Growth round", valuation: 8000, lead: "a16z" },
      { date: "2026-03", event: "$200M raised", valuation: 11000, lead: "GIC, Sequoia (co-led)" },
      { date: "2026-08", event: "In talks (not closed): ~$500M raise", valuation: 15500, lead: "unconfirmed" }
    ],
    disclosed_traction: [
      { date: "2025-08", metric: "ARR", value: "$100M" },
      { date: "2026-01", metric: "ARR", value: "$190M" },
      { date: "2026-06", metric: "ARR", value: "$300M" }
    ],
    qualitative_signal: [
      { date: "2026-08", note: "In talks for $500M round at $15.5B — 3rd valuation step-up in under a year." }
    ],
    thesis_fit: "High — regulated vertical, proprietary workflow data, autonomous execution not just copilot.",
    verdict: "watch",
    verdict_rationale: "Real, fast ARR growth (3x in under a year) proves product-market fit, but valuation is already very rich — better as a category bellwether to track than a ground-floor pick.",
    last_updated: "2026-09-02"
  },
  {
    id: "sierra",
    name: "Sierra",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Customer support / CX agents",
    stage: "Growth (pre-IPO)",
    website: "https://sierra.ai",
    socials: { twitter: null, linkedin: "https://linkedin.com/company/sierra" },
    founding_team: "Bret Taylor (ex-Salesforce co-CEO, OpenAI board chair) and Clay Bavor (ex-Google Labs lead) — co-founders.",
    product_wedge: "AI agents that take real action in customer experience (support, retail), not just chat — recently launched 'Ghostwriter,' an agent for building agents. 40%+ of Fortune 50 as customers.",
    funding_history: [
      { date: "2024-Q4", event: "$175M raised", valuation: 4500, lead: "unconfirmed" },
      { date: "2025-09", event: "$350M raised", valuation: null, lead: "unconfirmed" },
      { date: "2026-05", event: "$950M raised", valuation: 15800, lead: "Tiger Global, GV" }
    ],
    disclosed_traction: [
      { date: "2024-Q4", metric: "ARR milestone", value: "$100M ARR in 7 quarters — among fastest in enterprise software history" },
      { date: "2026-02", metric: "ARR", value: ">$150M" },
      { date: "2026-05", metric: "ARR", value: "~$200M (est.)" }
    ],
    qualitative_signal: [
      { date: "2026-05", note: "Launched Ghostwriter (agent-builds-agent) — signals platform ambitions beyond point CX tool." }
    ],
    thesis_fit: "High — owns full CX workflow end to end, autonomous action not assistive copilot, elite founding team.",
    verdict: "watch",
    verdict_rationale: "Fastest ARR ramp in the batch, but already a $15.8B company — track as a comp for earlier-stage CX-agent startups.",
    last_updated: "2026-09-02"
  },
  {
    id: "braintrust",
    name: "Braintrust",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Observability / evaluation",
    stage: "Series B",
    website: "https://braintrust.dev",
    socials: { twitter: "https://x.com/braintrust", linkedin: "https://linkedin.com/company/braintrust-data" },
    founding_team: "Not yet researched in depth — flag for next update.",
    product_wedge: "Eval-first observability: exhaustive tracing of every agent reasoning step, automated evaluation via built-in scorers + LLM-as-judge, built specifically for production quality monitoring.",
    funding_history: [
      { date: "2026-02-17", event: "$80M Series B", valuation: 800, lead: "ICONIQ", other_investors: "a16z, Greylock, Basecase Capital, Elad Gil" }
    ],
    disclosed_traction: [
      { date: "2026-02", metric: "named customers", value: "Notion, Stripe, Vercel, Dropbox, Replit, Coursera, Box, OpenAI, Cloudflare" }
    ],
    qualitative_signal: [
      { date: "2026", note: "Sub-category consolidating fast — 3 comps (Langfuse, Helicone, Galileo) acquired by ClickHouse/Mintlify/Cisco in 2026. Braintrust + Arize are the largest independent survivors." }
    ],
    thesis_fit: "High — solves a named production problem (eval/observability), strong logo list proving the problem is real.",
    verdict: "watch",
    verdict_rationale: "Earlier stage than Harvey/Sierra with real enterprise logos — more room to compound, but sub-category consolidation risk is real.",
    last_updated: "2026-09-02"
  },
  {
    id: "arize",
    name: "Arize AI",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Observability / evaluation",
    stage: "Series C",
    website: "https://arize.com",
    socials: { twitter: "https://x.com/arizeai", linkedin: "https://linkedin.com/company/arizeai" },
    founding_team: "Jason Lopatecki, founder; company founded 2020, Berkeley — predates the current agent wave.",
    product_wedge: "Longer-running ML observability company (since 2020) that expanded into agent-era evaluation — 'Ship Agents that Work' positioning.",
    funding_history: [
      { date: "2026", event: "$70M Series C", valuation: null, lead: "Adams Street Partners", other_investors: "M12 (Microsoft), Sinewave Ventures, OMERS Ventures, Datadog, PagerDuty, Industry Ventures, Archerman Capital" }
    ],
    disclosed_traction: [
      { date: "2026", metric: "total raised", value: "$131M across all rounds" }
    ],
    qualitative_signal: [
      { date: "2026", note: "Strategic investment FROM Datadog and PagerDuty — incumbents hedging rather than building competing product in-house." }
    ],
    thesis_fit: "High — longest operating history of the infra picks, strategic incumbent backing is a distinct positive signal.",
    verdict: "watch",
    verdict_rationale: "Oldest, most-funded independent player in agent observability with incumbent strategic backing.",
    last_updated: "2026-09-02"
  },
  {
    id: "taktile",
    name: "Taktile",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Underwriting / decisioning infrastructure",
    stage: "Series C",
    website: "https://taktile.com",
    socials: { twitter: "https://x.com/taktile_org", linkedin: "https://linkedin.com/company/taktile1" },
    founding_team: "Maik Taro Wehmeyer and Maximilian Eber — both machine-learning engineers, co-founders. HQ New York, offices London and Berlin.",
    product_wedge: "Modular 'Agentic Decision Platform' combining AI agents, rules, context and human oversight for regulated financial decisions — approving customers, reimbursing claims, stopping fraud, underwriting business loans.",
    funding_history: [
      { date: "2026-06", event: "$110M Series C", valuation: null, lead: "Goldman Sachs Alternatives", other_investors: "Balderton Capital, Index Ventures, Tiger Global, Y Combinator, Dig Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "total raised", value: "$184M" },
      { date: "2026-06", metric: "customers", value: "150+ banks and insurers" }
    ],
    qualitative_signal: [
      { date: "2025-2026", note: "Demand accelerating since 2025 as AI models became capable of automating high-stakes decisions previously reserved for human experts (company framing — verify independently over time)." }
    ],
    thesis_fit: "Very high — textbook fit: AI sits directly at the regulated decision point, not a chat layer bolted onto existing rails.",
    verdict: "watch",
    verdict_rationale: "Best thesis-fit of the batch on paper — closest to the exact wedge in theses.md. Deepest follow-up candidate for a first scored memo.",
    last_updated: "2026-09-02"
  },
  {
    id: "kestra",
    name: "Kestra",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Durable execution / orchestration",
    stage: "Series A",
    website: "https://kestra.io",
    socials: { twitter: "https://x.com/kestra_io", linkedin: "https://linkedin.com/company/kestra" },
    founding_team: "Emmanuel Darras (CEO) and Ludovic Dehon (CTO) — co-founders; founded 2021 in Paris, open-source-first.",
    product_wedge: "Open-source declarative orchestration control plane unifying data pipelines, AI/agentic workflows, and infrastructure automation on a distributed, event-driven execution engine — shipping native agentic orchestration in Kestra 2.0.",
    funding_history: [
      { date: "2026-03-31", event: "$25M Series A (€21M)", valuation: null, lead: "RTP Global", other_investors: "Alven, ISAI, Axeleo" }
    ],
    disclosed_traction: [
      { date: "2025", metric: "workflows executed", value: "2B+ workflows executed in 2025, up 20x YoY" },
      { date: "2026-03", metric: "enterprise revenue growth", value: "25x since seed round (~18 months prior)" },
      { date: "2026-03", metric: "named customers", value: "Apple, JPMorgan, Toyota, Crédit Agricole, BHP, Xiaomi, Bloomberg, SoftBank (company-disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-03", note: "Kestra 2.0 adds a new distributed execution engine plus native agentic orchestration — squarely the durable-execution sub-category theses.md flags as most likely to matter in 3 years." }
    ],
    thesis_fit: "High — durable execution/orchestration is the exact wedge theses.md names as the highest-funded, most durable agent-infra sub-category; open-source-core/paid-cloud distribution matches the stated winning motion pre-Series B.",
    verdict: "watch",
    verdict_rationale: "Real production usage (2B+ workflows, 25x enterprise revenue growth) at Series A — earlier and more accessible than category anchor Temporal ($5B valuation) with the same durable-execution wedge.",
    last_updated: "2026-09-02"
  },
  {
    id: "natural",
    name: "Natural",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Agentic payments infrastructure",
    stage: "Series A",
    website: "https://www.natural.com",
    socials: { twitter: "https://x.com/naturalpay", linkedin: null },
    founding_team: "Kahlil Lalji (CEO), Eric Wang, and Walt Leung — co-founders; company launched August 2025.",
    product_wedge: "Full-stack payments infrastructure purpose-built for AI agents — agent wallets, FDIC-insured account vaults, card issuing, billing, and funds transfer behind one API with MCP access, explicitly positioned as a 'Stripe for AI agents.'",
    funding_history: [
      { date: "2025", event: "$9.8M Seed", valuation: null, lead: "unconfirmed" },
      { date: "2026-07-20", event: "$30M Series A", valuation: null, lead: "Forerunner Ventures (Kirsten Green)", other_investors: "Human Capital, Abstract, Bridge, Brex, Mercury, Privy, Vercel, Notion, Increase, Unit, Figure" }
    ],
    disclosed_traction: [
      { date: "2026-07", metric: "product surface", value: "13 products planned, 6 live (agent wallets, account vaults, payments to/from agents, funds transfers, marketplace tools) — no ARR or customer count disclosed" }
    ],
    qualitative_signal: [
      { date: "2026-07", note: "TechCrunch framed the raise as a direct challenge to Stripe in agentic payments; investor base stacked with fintech infra incumbents (Brex, Mercury, Unit) signals credibility with the rails it depends on." }
    ],
    thesis_fit: "High on paper — agentic payments is the specific sub-thread theses.md flags as newest and least crowded within AI-native fintech — but fit is thematic, not yet proven by disclosed usage.",
    verdict: "watch",
    verdict_rationale: "Textbook thematic fit and a strong investor syndicate, but zero disclosed revenue or usage metrics this early (company is ~1 year old) — a name to track into the next raise rather than a proven pick yet.",
    last_updated: "2026-09-02"
  },
  {
    id: "shepherd",
    name: "Shepherd",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance (commercial construction / infrastructure)",
    stage: "Series B",
    website: "https://www.withshepherd.com",
    socials: { twitter: null, linkedin: "https://linkedin.com/company/withshepherd" },
    founding_team: "Founded 2021 as a tech-enabled managing general underwriter (MGU) for commercial construction casualty lines; individual founder names not yet independently confirmed — flag for follow-up.",
    product_wedge: "AI-native MGU for commercial construction/infrastructure casualty insurance (General Liability, Commercial Auto, Workers' Comp, Excess) — 24-hour submission-to-indication turnaround plus 'Shepherd Compliance,' AI-assisted vendor compliance review; roadmap targets 'supervised autonomy' where underwriters become portfolio orchestrators.",
    funding_history: [
      { date: "2023 (approx.)", event: "$13.5M Series A", valuation: null, lead: "unconfirmed" },
      { date: "2026-03-24", event: "$42M Series B", valuation: null, lead: "Intact Private Capital", other_investors: "Spark Capital, Costanoa Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-03", metric: "revenue growth", value: "7x+ over trailing 24 months" },
      { date: "2026-03", metric: "scale", value: "$400B+ in project value insured across 1,500+ policies for 600+ customers" }
    ],
    qualitative_signal: [
      { date: "2026-03", note: "Explicitly underwriting the physical AI-infrastructure buildout (data centers, semiconductor facilities, energy assets) — a direct beneficiary of the AI capex cycle rather than just an AI-tooling vendor to it." }
    ],
    thesis_fit: "High — construction/infrastructure insurance is one of the 'open window' verticals theses.md flags for extra sourcing attention; owns the full underwriting workflow on proprietary construction-project data, not a copilot bolted onto legacy MGU software.",
    verdict: "watch",
    verdict_rationale: "Strong disclosed revenue growth (7x/24mo) and real scale ($400B insured) in an underhyped vertical theses.md specifically calls out — best-balanced pick of this week's batch between thesis fit and evidence.",
    last_updated: "2026-09-02"
  },
  {
    id: "build-inc",
    name: "Build",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Construction / real-estate development",
    stage: "Seed",
    website: "https://build.inc",
    socials: { twitter: null, linkedin: null },
    founding_team: "James Stirrat-Ellis (CEO, architect — ex-Changi Airport T5) and Ben McClusky (AI researcher) — co-founders; founded 2024, offices in New York and London.",
    product_wedge: "Multi-agent 'agentic real estate' platform automating early-stage infrastructure/real-estate development workflow — site sourcing, technical due diligence, power assessment, and initial structural design — drawing on 1,600+ data sources to evaluate planning, environmental, power, and political constraints in parallel; claims >95% reduction in due-diligence timelines.",
    funding_history: [
      { date: "2026-06-30", event: "$8.5M Seed (€7.4M)", valuation: null, lead: "Index Ventures", other_investors: "Pebblebed, Puzzle Ventures, Tiny.vc; angels incl. OpenAI CFO Sarah Friar, Blackstone CTO John Stecher" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "deployments", value: "100+ projects across 15 countries for governments, Fortune 500 companies, and institutional real estate groups (company-disclosed; no ARR figure given)" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Positioned directly against the AI-data-center/infrastructure buildout — automating the same site-selection/due-diligence bottleneck slowing data-center and energy-asset development." }
    ],
    thesis_fit: "Moderate-high — construction/infrastructure development is an explicit 'open window' vertical and the wedge (parallelized technical due diligence) is workflow-and-data-driven rather than a copilot bolt-on; but very early (single seed round, no disclosed revenue) and 'automate the whole development lifecycle' is a broad long-term claim relative to current product scope (due diligence only).",
    verdict: "revisit",
    verdict_rationale: "Right vertical and a real wedge, but seed-stage with no disclosed revenue, unconfirmed socials, and a founding story that's architect-turned-technologist rather than the domain-plus-AI-operator pattern theses.md flags as higher-fit — check back after a Series A with real usage data.",
    last_updated: "2026-09-02"
  },
  {
    id: "linqalpha",
    name: "LinqAlpha",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Capital markets / investment research",
    stage: "Series A",
    website: "https://linqalpha.com",
    socials: { twitter: "https://x.com/LinqAlpha", linkedin: "https://linkedin.com/company/linqalpha" },
    founding_team: "Jacob Choi, Subeen Pang, Jin Kim, and Hojun Choi (Forbes 30 Under 30) — co-founders; team combines ex-Goldman Sachs analysts and MIT computer science PhDs. Founded 2022.",
    product_wedge: "Multi-agent AI platform ('Alpha Intelligence Layer') for institutional investment research — configurable agents for equities, macro, credit, and multi-asset research that extract and synthesize insight from unstructured filings/earnings-call data, tuned to each user's own investment framework.",
    funding_history: [
      { date: "2024", event: "~$6.6M Seed", valuation: null, lead: "unconfirmed" },
      { date: "2026-07-02", event: "$22M Series A", valuation: null, lead: "AVP", other_investors: "Atinum Investment, GFT Ventures; SBI, Samsung Securities, Mirae Asset, Shinhan, Hana" }
    ],
    disclosed_traction: [
      { date: "2026-07", metric: "customers", value: "70+ financial institutions incl. buy-side clients managing $5T+ in assets (Causeway Capital, Schonfeld Strategic Advisors named)" }
    ],
    qualitative_signal: [
      { date: "2026-07", note: "Investor syndicate leans heavily Asia (SBI, Samsung Securities, Mirae Asset, Shinhan, Hana) — expansion targets Singapore/Hong Kong next, a different growth path than the US-enterprise-led comps in this batch." }
    ],
    thesis_fit: "Low-moderate — real institutional traction (70+ FIs, $5T+ AUM among buy-side clients) but the product is assistive research/analysis, not execution at a regulated decision point (underwriting, risk, trade execution) that theses.md defines as the winning fintech wedge.",
    verdict: "revisit",
    verdict_rationale: "Good traction and pedigree, but doesn't cleanly fit either category as scored: assistive capital-markets analytics, not a regulated-decision-point product nor an autonomous-execution workflow owner — track it, but it's the weakest thesis match of this week's batch despite the strongest customer proof points.",
    last_updated: "2026-09-02"
  },
  {
    id: "zenity",
    name: "Zenity",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Security / governance (guardrails)",
    stage: "Series C",
    website: "https://zenity.io",
    socials: { twitter: "https://x.com/zenitysec", linkedin: "https://linkedin.com/company/zenitysec" },
    founding_team: "Ben Kliger (CEO) and Michael Bargury (CTO) — co-founders, both ex-Microsoft (Bargury was a senior architect in Microsoft's Cloud Security CTO office); founded 2020, Tel Aviv.",
    product_wedge: "Security/governance layer that inspects the intent behind an AI agent's action before it executes (not just prompt inspection or post-incident log analysis) — lets security teams approve, modify, or block agent actions dynamically across Copilot, ChatGPT Enterprise, Gemini, Claude, and Cursor.",
    funding_history: [
      { date: "2026-08-03", event: "$125M Series C", valuation: null, lead: "Norwest", other_investors: "SoftBank Vision Fund 2, Qumra Capital, Hitachi Ventures, LG Technology Ventures, Vertex Ventures, DTCP, Intel Capital" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "total raised", value: "$185M across all rounds" }
    ],
    qualitative_signal: [
      { date: "2026-08", note: "Framed explicitly around securing 'the era of 1 billion AI agents' — positioning is that enterprises are moving agents from pilot to production and need a runtime guardrail layer, not just a compliance checkbox." }
    ],
    thesis_fit: "High — sits squarely in the gateways/guardrails sub-category theses.md names as one of the three real agent-infra gaps; strategic capital from SoftBank and Intel Capital signals the production-security problem is being taken seriously by incumbents, not just startups.",
    verdict: "watch",
    verdict_rationale: "Real enterprise urgency (agents moving from pilots to production) backed by a strong strategic syndicate and $185M total raised — the security/governance angle is a distinct wedge from the observability/eval names already tracked (Braintrust, Arize), worth following as a separate infra sub-category.",
    last_updated: "2026-09-02"
  },
  {
    id: "sail-research",
    name: "Sail Research",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Durable execution / long-horizon inference infrastructure",
    stage: "Seed + Series A (combined round)",
    website: "https://www.sailresearch.com",
    socials: { twitter: "https://x.com/sailresearchco", linkedin: "https://linkedin.com/company/sailresearch" },
    founding_team: "Neil Movva (CEO, ex-NVIDIA, Apple, Together AI) and Samir Menon (CTO, ex-Apple systems engineering) — co-founders.",
    product_wedge: "Infrastructure purpose-built for long-horizon agents that run for hours or days rather than single prompts: an inference stack optimized for throughput/cost on open models, plus 'Sailboxes' — sandbox environments built to run for days or weeks that only charge for time an agent is actively working, not idle time.",
    funding_history: [
      { date: "2026-06", event: "$80M combined Seed + Series A", valuation: 450, lead: "Sequoia (Seed), Kleiner Perkins (Series A)", other_investors: "Redpoint Ventures, Theory Ventures, Vine Ventures, CRV, A*, Abstract Ventures; angels John Hennessy (Alphabet chair), Lip-Bu Tan (Intel CEO), Tri Dao (Together AI Chief Scientist)" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "benchmark", value: "90.72% accuracy on BrowseComp-Plus at up to 10x lower cost than leading alternatives (company-disclosed benchmark, not independently verified)" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Explicit thesis that existing inference infra was built for short prompt-based interactions, not agents spending billions of tokens on a single long-running task — same durable-execution gap theses.md flags as the most likely agent-infra sub-category to matter in 3 years." }
    ],
    thesis_fit: "Very high — textbook 'systems software for a new runtime' framing theses.md calls the winning wedge, attacking durable execution/cost-control at the inference layer rather than the orchestration layer (different angle from Kestra, already tracked).",
    verdict: "watch",
    verdict_rationale: "Elite technical founding team and top-tier syndicate (Sequoia + Kleiner Perkins co-leading, notable technical angels) with a real benchmark claim, but pre-revenue/no disclosed customers yet — a name to track for proof of commercial traction at the next round rather than a proven pick today.",
    last_updated: "2026-09-02"
  },
  {
    id: "happyrobot",
    name: "HappyRobot",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Logistics / freight (voice agents)",
    stage: "Series C",
    website: "https://www.happyrobot.ai",
    socials: { twitter: "https://x.com/happyrobot_ai", linkedin: "https://linkedin.com/company/happyrobot" },
    founding_team: "Pablo Palafox (CEO), Javi Palafox, and Luis Paarup — co-founders; founded 2023 (YC S23), San Francisco.",
    product_wedge: "Voice-first AI agents that autonomously run freight-brokerage operations end to end — check calls, load updates, appointment scheduling, payment inquiries, and rate negotiation — live in production at 8 of the 10 largest US freight brokers, now expanding the same wedge into insurance, energy, telecom, and airlines.",
    funding_history: [
      { date: "2024-12", event: "$15.6M Series A", valuation: null, lead: "a16z", other_investors: "Y Combinator, Ryder Ventures" },
      { date: "2025-09", event: "$44M Series B", valuation: null, lead: "Base10", other_investors: "a16z, Y Combinator, Tokio Marine, WaVe-X, World Innovation Lab" },
      { date: "2026-08", event: "$150M Series C", valuation: 1200, lead: "Prysm Capital, Eurazeo (co-led)" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "customers", value: "150+ enterprise customers incl. DHL, Uber, Kuehne+Nagel, Repsol; live at 8 of the 10 largest US freight brokers" }
    ],
    qualitative_signal: [
      { date: "2026-08", note: "$1.2B valuation reached ~20 months after Series A — unicorn status achieved faster than most of the batch already tracked; company framing is explicit about expanding beyond logistics into adjacent operational verticals." }
    ],
    thesis_fit: "High — genuine autonomous execution (agents negotiating rates and running dispatch calls, not assisting a human), owns a full operational workflow with real enterprise logos; logistics/freight isn't one of the vertical names theses.md calls out explicitly, but the call-heavy, document-heavy, high-volume operational profile matches the same pattern as the named 'open window' verticals.",
    verdict: "watch",
    verdict_rationale: "Strongest growth-velocity proof point sourced this week (unicorn in 20 months, real Fortune-500-scale logos) with genuine autonomous execution — but already priced at $1.2B, so best used as a comp/bellwether for earlier-stage operational-voice-agent startups rather than a ground-floor pick, same caveat as Harvey/Sierra.",
    last_updated: "2026-09-02"
  },
  {
    id: "further-ai",
    name: "FurtherAI",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance (underwriting / claims / compliance)",
    stage: "Series A",
    website: "https://www.furtherai.com",
    socials: { twitter: "https://x.com/furtheraicom", linkedin: "https://linkedin.com/company/further-ai" },
    founding_team: "Aman Gour (CEO, ex-TurboHire co-founder, ex-Microsoft, IIT Bombay) and Sashank Gondala (CTO) — co-founders; founded 2023, San Francisco.",
    product_wedge: "AI workspace for insurance carriers/MGAs that automates submissions processing, underwriting audits, claims handling, and policy comparison across the workflow — not a single point tool — processing billions of dollars in premiums annually for named carrier customers.",
    funding_history: [
      { date: "2025-04", event: "$5M Seed", valuation: null, lead: "unconfirmed" },
      { date: "2025-10", event: "$25M Series A", valuation: null, lead: "a16z", other_investors: "Nexus Venture Partners, Y Combinator, Pioneer AI Fund, South Park Commons, ConvergeVC, Xceedance" }
    ],
    disclosed_traction: [
      { date: "2025-10", metric: "customers", value: "Accelerant, MSI, Leavitt Group named; processes billions of dollars in premiums annually across its customer base" },
      { date: "2025-10", metric: "efficiency", value: "Teams report roughly double productivity, a 15% improvement in submission-to-quote ratio, and proposals generated ~10x faster (company-disclosed)" }
    ],
    qualitative_signal: [
      { date: "2025-10", note: "Called one of the largest Series A rounds in insurance AI to date, closing just 6 months after seed — fast investor conviction from a16z on a $7T target market." }
    ],
    thesis_fit: "High — insurance is one of the vertical categories theses.md flags as having an 'open window'; product spans the full underwriting-to-claims workflow with named carrier customers and disclosed efficiency metrics, not a single-task copilot bolt-on.",
    verdict: "watch",
    verdict_rationale: "Real, dated efficiency metrics tied to named insurance-carrier customers plus a fast, large Series A from a16z — good balance of stage and evidence; insurance underwriting/claims automation is getting more crowded (Shepherd, already tracked, is adjacent on the MGU side), so worth distinguishing from Shepherd by carrier-workflow breadth rather than a single insurance line.",
    last_updated: "2026-09-02"
  },
  {
    id: "casca",
    name: "Casca",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Lending / loan origination underwriting",
    stage: "Series A",
    website: "https://www.cascading.ai",
    socials: { twitter: "https://x.com/cascadingai", linkedin: "https://linkedin.com/company/cascading-ai" },
    founding_team: "Lukas Haffer (CEO) and Isaiah Williams — co-founders, Stanford-trained banking-IT/AI researchers; founded 2023 (YC S23), San Francisco.",
    product_wedge: "AI-native loan origination system used directly by FDIC-insured banks and fintech lenders to process business loan applications — an AI loan assistant communicates with applicants via email/SMS, reactivating churned leads and cutting manual underwriting-support effort, positioned as a replacement for legacy loan-origination software rather than a copilot layered on top of it.",
    funding_history: [
      { date: "2025-08", event: "$29M Series A", valuation: null, lead: "Canapi Ventures", other_investors: "Peterson Ventures" }
    ],
    disclosed_traction: [
      { date: "2025-08", metric: "total raised", value: "$33M across all rounds" },
      { date: "2025-08", metric: "customers", value: "FDIC-insured banks/fintechs incl. Bankwell Bank, Live Oak Bank, Huntington National Bank, Celtic Bank" },
      { date: "2025-08", metric: "efficiency", value: "Company-disclosed: 90% less manual effort and 300% higher conversion on business loan applications; reactivates up to 50% of churned leads" }
    ],
    qualitative_signal: [
      { date: "2025-08", note: "Lead investor Canapi Ventures is backed by 70+ financial institutions — a meaningful distribution/credibility signal for selling directly into regulated banks, similar in spirit to the strategic backing pattern seen with Arize (Datadog/PagerDuty)." }
    ],
    thesis_fit: "Very high — AI sits directly at a regulated decision point (business loan underwriting/origination) inside real FDIC-insured banks, the exact wedge theses.md defines as winning; founding team leans engineering/research rather than deep ex-banking-operator experience, a modest gap against the 'real fintech/regulatory operating experience' scoring cue.",
    verdict: "watch",
    verdict_rationale: "Closest fit in this week's batch to the core fintech thesis after Taktile — real bank customers at a regulated decision point, bank-affiliated lead investor — the founding team's engineering-over-banking background is the one soft spot worth watching into the next round.",
    last_updated: "2026-09-02"
  }
];
