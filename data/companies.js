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
  },
  {
    id: "trase",
    name: "Trase",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Orchestration / governance OS for regulated industries",
    stage: "Seed",
    website: "https://www.trase.ai",
    socials: { twitter: null, linkedin: null },
    founding_team: "Grant Verstandig (CEO, ex-Senior Advisor to the CEO at UnitedHealth Group; founder of venture studio Red Cell Partners, which incubated Trase) and Joe Laws (Chief Architect, ex-principal engineer at Reddit/Dropbox/Google, former US Army infantry officer) — co-founders. Leadership also includes President Baskar Sridharan and CTO Srirama Koneru, both former AWS Bedrock/SageMaker GMs. Socials unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "Agentic 'operating system' (Trase Origin OS, Trase Arena SDK, Trase Leagues agents) providing orchestration, governance, and security for AI agents across cloud, on-prem, and edge environments in high-stakes regulated industries — live at Duke Health's Division of Cardiology (automating fax triage and prescription refills) and reportedly with the US Navy.",
    funding_history: [
      { date: "2025-11", event: "Company launched, incubated inside venture studio Red Cell Partners", valuation: null, lead: "Red Cell Partners" },
      { date: "2026-06-25", event: "$107M Seed (total raised to date: $117.5M)", valuation: null, lead: "ARCH Venture Partners" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "Duke Health cardiology deployment", value: "AI fax-triage routing 7.1x faster than manual processing, saving staff ~1,395 hours/month and unlocking $285,450 in annual staff capacity (company-disclosed)" },
      { date: "2026-06", metric: "use cases developed", value: "~200 AI use cases built to date (company-disclosed); early customers named as Duke Health and the US Navy" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "A $107M round labeled 'seed' is unusually large — signals investors treating regulated-industry agent infrastructure as a land-grab category. Emerged from a venture studio (Red Cell Partners) rather than an independent founding story, which is worth tracking for governance/incentive-alignment reasons as the company scales." }
    ],
    thesis_fit: "High — orchestration/governance/durable execution for agents is exactly the gap theses.md names as one of the three real agent-infra problems, and the Duke Health deployment provides real, dated, quantified production evidence rather than a demo.",
    verdict: "watch",
    verdict_rationale: "Rare combination at 'seed' stage: dated, quantified production traction (Duke Health) plus a technically credible leadership team (ex-AWS Bedrock/SageMaker GMs, ex-Google/Reddit engineer) and a top-tier lead investor (ARCH). Caveat: incubated inside a venture studio rather than built independently, and the outsized round size raises the question of whether narrative is ahead of proven traction — reassess at the next disclosed metric or round.",
    last_updated: "2026-09-02"
  },
  {
    id: "concentrate-ai",
    name: "Concentrate AI",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Gateway / proxy (LLM routing, spend & governance)",
    stage: "Pre-seed",
    website: "https://concentrate.ai",
    socials: { twitter: null, linkedin: null },
    founding_team: "Ari Jacoby (CEO) and Todd Lieberman — co-founders; this is their fifth company built together, following cybersecurity company Deduce (acquired by CHEQ), which was also backed by lead investor True Ventures. Founded 2025. Company socials unconfirmed — not guessing rather than listing an unverified handle (only personal founder profiles were found).",
    product_wedge: "Free LLM gateway giving unified API access, routing, and spend/governance across OpenAI, Anthropic, Google, xAI and others — SSO, RBAC, audit logging, sensitive-data guardrails, and zero data retention on by default at no cost; monetizes via at-cost token pass-through (no platform markup) plus a premium enterprise tier, explicitly targeting teams too small for a typical enterprise AI-governance sales cycle.",
    funding_history: [
      { date: "2026-06-10", event: "$5.1M Pre-seed", valuation: null, lead: "True Ventures, RRE Ventures (co-led)" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "customers / usage", value: "No customer count, usage volume, or revenue disclosed at public launch" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Repeat-founder pattern with a real prior exit (Deduce → CHEQ), same lead investor following them again — a credible signal even pre-revenue. Launching into an already-consolidating gateway sub-category: OpenRouter (raised $113M Series B, since reportedly being acquired by Stripe for $7B+) and LiteLLM are established incumbents." }
    ],
    thesis_fit: "Moderate-high — gateways/proxies is one of the three named agent-infra gaps in theses.md, but the free/at-cost pricing model is an unproven business and the sub-category is already crowded and consolidating around well-capitalized players.",
    verdict: "revisit",
    verdict_rationale: "Credible repeat founders and a clean thematic fit to the gateway sub-category, but pre-seed with zero disclosed usage and a monetization model (free product, at-cost tokens, no markup) that is unproven against far better-capitalized competitors (OpenRouter/Stripe, LiteLLM) — check back once the company discloses actual usage or revenue rather than scoring on thesis fit alone.",
    last_updated: "2026-09-02"
  },
  {
    id: "brickanta",
    name: "Brickanta",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Construction (pre-construction: bid analysis / cost estimation / procurement)",
    stage: "Seed",
    website: "https://brickanta.com",
    socials: { twitter: null, linkedin: "https://linkedin.com/company/brickanta" },
    founding_team: "Lucas Otterling (CEO) and Linus B. Fahlander — co-founders; both have built and applied AI in construction/industry since 2018 across roles at ABB, Fabege, Husqvarna, IKEA, and Konecranes. Stockholm-based, went through Y Combinator.",
    product_wedge: "AI-native operating system for construction's pre-build decisions — automates bid analysis, cost estimation, and procurement, the workflows that largely determine whether a project stays on budget or spirals into overruns; positioned as applying agentic AI to construction's 'messiest decisions.'",
    funding_history: [
      { date: "2026-01-27", event: "$8M Seed (€7.4M)", valuation: null, lead: "Northzone", other_investors: "Y Combinator; angels incl. founders of Lovable and Tandem Health, and individuals from OpenAI, Google, Meta, Airbnb, Klarna, Spotify, and Plangrid-Autodesk" }
    ],
    disclosed_traction: [
      { date: "2026-01", metric: "traction", value: "No ARR, customer count, or usage volume disclosed at raise" }
    ],
    qualitative_signal: [
      { date: "2026-01", note: "Round reported to have closed in under two weeks and was oversubscribed — fast investor conviction; some press coverage (Tech Funding News) flagged limited founding-team-diversity disclosure. Construction is explicitly named in theses.md as an 'open window' vertical worth extra sourcing attention." }
    ],
    thesis_fit: "Moderate — construction is one of the explicit 'open window' verticals theses.md flags, and the wedge (parallelizing bid analysis/cost estimation across proprietary project data) fits the workflow-ownership pattern the thesis rewards; but scope is narrower (pre-construction only, not the full build lifecycle) than the 'own the full workflow' ideal, and there is no disclosed revenue or usage yet.",
    verdict: "revisit",
    verdict_rationale: "Right vertical and a credible domain-operator founding team (both built AI/industry tooling inside large industrial companies since 2018), backed by a fast YC + Northzone seed — but zero disclosed revenue or customer traction this early. Same profile as Build (already tracked, also scored 'revisit') — worth comparing the two construction bets again once either discloses real usage.",
    last_updated: "2026-09-02"
  },
  {
    id: "alpaca",
    name: "Alpaca",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Agent-first brokerage / trading infrastructure",
    stage: "Series D (growth)",
    website: "https://alpaca.markets",
    socials: { twitter: "https://x.com/AlpacaHQ", linkedin: "https://linkedin.com/company/alpacamarkets" },
    founding_team: "Yoshi Yokokawa (co-founder, co-CEO) and Hitoshi Harada (co-founder); Rohit Mulani serves as co-CEO alongside Yokokawa. Company went through YC (W19); founded 2015.",
    product_wedge: "Developer-first, API-based brokerage and prime-brokerage infrastructure — 'AWS of Finance' positioning — now expanding into agent-first and API-first brokerage for tokenized markets, explicitly built so AI agents (not just human traders) can open accounts, place trades, and manage portfolios programmatically across traditional and on-chain markets.",
    funding_history: [
      { date: "2025-04", event: "$52M Series C", valuation: null, lead: "unconfirmed" },
      { date: "2026-01-14", event: "$150M Series D", valuation: 1150, lead: "unconfirmed" },
      { date: "2026-07-16", event: "$135M raised (equity) to scale agent-first brokerage infrastructure; $435M total financing package incl. debt", valuation: null, lead: "Peak XV Partners", other_investors: "Elefund, Opera Tech Ventures (BNP Paribas), Unbound; debt from Payward (Kraken) and BMO" }
    ],
    disclosed_traction: [
      { date: "2026-07", metric: "usage growth", value: "Monthly active API users grew nearly 4x in the six months preceding the July 2026 raise (company-disclosed)" },
      { date: "2026-07", metric: "total raised", value: "$433M+ in equity across 13 rounds since 2015, plus new debt facilities" }
    ],
    qualitative_signal: [
      { date: "2026-07", note: "theses.md explicitly names Alpaca's agent-first brokerage raise as the proof point for the newest, least-crowded AI-native-fintech sub-thread (agentic payments/agent-first execution) — this entry logs that named example directly." }
    ],
    thesis_fit: "High — AI/agents sit directly at execution (trading, brokerage), a regulated decision point, and the agent-first framing is the least-crowded fintech sub-thread theses.md calls out for disproportionate sourcing attention.",
    verdict: "watch",
    verdict_rationale: "Real, fast-growing API usage (~4x MAU growth in 6 months) and a credible strategic syndicate (Peak XV, BNP Paribas' venture arm, Kraken debt financing) validate the agent-first brokerage thesis — but at a $1.15B+ valuation and 13 rounds since 2015, this is a bellwether/comp for earlier-stage agentic-trading infra, not a ground-floor pick, the same caveat as Harvey/Sierra/HappyRobot.",
    last_updated: "2026-09-02"
  },
  {
    id: "ralio",
    name: "Ralio",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Agentic payments trust / guardrail infrastructure",
    stage: "Pre-seed",
    website: "https://www.ralio.co",
    socials: { twitter: null, linkedin: null },
    founding_team: "Ghali Bennani Laafiret (CEO, previously scaled revenue operations at fintech Alan and B2B software LumApps) and Leonardo Rosales (CTO, previously rebuilt payment infrastructure for Tier 1 banks at Form3) — co-founders; UK (London)-based, founded 2025.",
    product_wedge: "Rail-agnostic 'trust layer' sitting between AI agents and payment rails — verifies agent identity, enforces per-workflow spend rules and approvals, and produces a full audit trail tying every payment back to the agent, prompt, and policy that triggered it; connects to bank rails (FPS, BACS, SEPA), card networks (Visa, Mastercard, Amex), stablecoins (EURC, USDT, USDC), and its own Ralio Wallet for instant settlement.",
    funding_history: [
      { date: "2026-04-14", event: "$2.5M Pre-seed (oversubscribed 3x)", valuation: null, lead: "Sure Valley Ventures (SVV)", other_investors: "Seed X, Love Ventures, Plug and Play, rule30, Adeline Arts and Science, Endurance Ventures, Campus Fund, Antler (existing investor)" }
    ],
    disclosed_traction: [
      { date: "2026-04", metric: "traction", value: "No customer count, transaction volume, or revenue disclosed — raise reported roughly 3 months after founding" }
    ],
    qualitative_signal: [
      { date: "2026-04", note: "Press described this as Europe's largest agentic-payments raise to date at pre-seed — a thin superlative given how nascent the category is, but the founding-team pairing (fintech GTM operator + Tier-1-bank payments infra builder) is a credible combination for a regulated-rails product." }
    ],
    thesis_fit: "High on paper — agentic payments is the exact sub-thread theses.md flags as newest and least-crowded within AI-native fintech, and the wedge (guardrails/audit trail at the point of an agent initiating a payment) sits at a real compliance-relevant decision point rather than a chat layer — but this is thematic fit only, not yet proven by disclosed usage.",
    verdict: "revisit",
    verdict_rationale: "Strong thematic fit and a well-matched founding team, but three months old with no disclosed transaction volume or customers — too early to score 'watch' on narrative alone; track into the seed round for real usage evidence.",
    last_updated: "2026-09-02"
  },
  {
    id: "xbuild",
    name: "XBuild",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Construction (estimating / insurance restoration)",
    stage: "Series A",
    website: "https://x.build",
    socials: { twitter: "https://x.com/xbuildai", linkedin: null },
    founding_team: "Jahan Khanna and Rob Moran (both ex-Uber, ex-Postmates) and Sharuk Khanna (civil engineer) — co-founders.",
    product_wedge: "AI-native estimating platform for construction contractors — ingests measurement reports (EagleView, Hover, Roofr) and job-site photos to generate trade-specific, supplier-priced proposals (live pricing via ABC Supply integration) in under 15 minutes, with e-signature and embedded Stripe payments; launched 'Roofing Proposals' for residential roofing and insurance-restoration work, expanding next into concrete, landscaping, painting, windows/doors, glass/glazing, insulation, HVAC, and plumbing estimating.",
    funding_history: [
      { date: "2026-01-20", event: "$19M Series A", valuation: null, lead: "N47", other_investors: "Rackhouse Ventures, Andreessen Horowitz" }
    ],
    disclosed_traction: [
      { date: "2026-01", metric: "usage", value: "15,000+ projects run to completion representing ~$250M in construction project value in its first year; contractors saved 40,000+ hours on estimating (company-disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-01", note: "Positioned explicitly against legacy template-driven estimating software as the incumbent to replace, not a copilot layered on top of it; targets the insurance-restoration intersection of construction and insurance, a workflow that sits at the seam of two 'open window' verticals theses.md calls out." }
    ],
    thesis_fit: "High — construction is an explicit 'open window' vertical in theses.md, and the wedge (owning the estimating-to-proposal workflow with proprietary supplier-pricing integration, not a single-task copilot) fits the 'own an end-to-end workflow' pattern the thesis rewards; real, dated usage volume (not just a demo) strengthens the case.",
    verdict: "watch",
    verdict_rationale: "Real disclosed usage ($250M in project value, 15K+ completed projects) at Series A, a founding team with relevant operating pedigree (Uber/Postmates marketplace experience) plus domain expertise (civil engineer co-founder), and a credible investor syndicate (a16z, Rackhouse, N47) — best-balanced pick of this week's batch between thesis fit and evidence, similar in profile to Shepherd and FurtherAI already tracked.",
    last_updated: "2026-09-02"
  },
  {
    id: "bretton-ai",
    name: "Bretton AI",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "AML / KYC / fraud & compliance back-office",
    stage: "Series B",
    website: "https://www.bretton.com",
    socials: { twitter: null, linkedin: "https://www.linkedin.com/company/bretton-ai" },
    founding_team: "Will Lawrence (CEO) — previously led product for Facebook's anti-money-laundering platform and built compliance infrastructure at fintech Paxos; Alex Jin (CTO) — co-founders; founded 2023, San Francisco, as Greenlite AI, rebranded to Bretton AI in Feb 2026.",
    product_wedge: "AI-native operations platform for bank/fintech back offices — automates KYC/KYB reviews, AML and sanctions investigations, and ongoing transaction monitoring, plus 'Bretton AI Managed Services' pairing the software with human financial-crime expertise; used directly inside OCC/Fed/FDIC-regulated banks' compliance, risk, and fraud workflows rather than as an assistive chat layer.",
    funding_history: [
      { date: "2023 (approx.)", event: "Seed (as Greenlite AI)", valuation: null, lead: "unconfirmed", other_investors: "Y Combinator" },
      { date: "2025-05", event: "$15M Series A", valuation: null, lead: "unconfirmed" },
      { date: "2026-02-09", event: "$75M Series B; rebranded Greenlite AI → Bretton AI", valuation: null, lead: "Sapphire Ventures", other_investors: "Greylock, Thomson Reuters Ventures, Canvas Ventures, Y Combinator, TIAA Ventures (new)" }
    ],
    disclosed_traction: [
      { date: "2026-02", metric: "total raised", value: "$94.8M across all rounds (company/Tracxn-reported)" },
      { date: "2026-08-06", metric: "named customer", value: "MVB Bank selected Bretton AI to run its back-office operations as it scales its fintech business" },
      { date: "2026-02", metric: "customers", value: "Company-disclosed usage at Mercury, Ramp, and Betterment; no ARR figure disclosed" }
    ],
    qualitative_signal: [
      { date: "2026-07-08", note: "Launched AI-Native Managed Services and hired financial-crimes veteran Rick Shooman to lead the offering — signals a move from pure software toward a software-plus-expert-services model for compliance." }
    ],
    thesis_fit: "Very high — AI sits directly at a regulated decision point (AML/KYC/fraud/compliance investigations) inside actual FDIC/OCC/Fed-regulated banks, the exact wedge theses.md defines as winning; founding team has real, directly relevant fintech/regulatory operating experience (Meta AML product lead, Paxos compliance infra) rather than a generalist engineering background.",
    verdict: "watch",
    verdict_rationale: "Fast, credible funding trajectory (seed to $75M Series B in under 3 years) with a real named bank customer (MVB Bank) and a founding team whose prior operating experience maps directly onto the product — the clearest fintech thesis-fit sourced this week alongside Taktile and Casca, already tracked.",
    last_updated: "2026-09-02"
  },
  {
    id: "nava",
    name: "Nava",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Guardrails / verification & escrow for autonomous financial agents",
    stage: "Seed",
    website: "https://navalabs.ai",
    socials: { twitter: "https://x.com/navaai", linkedin: "https://www.linkedin.com/company/nava-ai-labs" },
    founding_team: "Co-founders include Krishnan and Brianna Montgomery, previously at EigenLayer; team includes research talent recruited from Carnegie Mellon. EigenLayer founder Sreeram Kannan is an investor/backer.",
    product_wedge: "'Arbiter' — an escrow-and-verification layer sitting between an AI agent and payment/execution rails: holds funds in escrow until a proposed transaction is verified against the user's stated intent (combining deterministic rules with semantic reasoning), then posts the reasoning on-chain as a public, agent-referenceable audit trail; the verification framework is peer-reviewed at NDSS 2026. Targets agents that trade, lend, stake, or manage treasury with real capital.",
    funding_history: [
      { date: "2026-04-14", event: "$8.3M Seed (emerged from stealth)", valuation: null, lead: "Polychain Capital, Archetype (co-led)", other_investors: "FalconX, Hack VC, Seed Club Ventures; angels incl. Sreeram Kannan (EigenLayer founder)" }
    ],
    disclosed_traction: [
      { date: "2026-04", metric: "traction", value: "No customer count, transaction volume, or revenue disclosed at seed emergence from stealth" }
    ],
    qualitative_signal: [
      { date: "2026-04", note: "Verification framework is peer-reviewed at NDSS 2026, a real academic security venue — a stronger technical-credibility signal than typical crypto-native launches; framing is explicitly crypto/on-chain (DeFi trading, staking, treasury) rather than traditional regulated banking rails." }
    ],
    thesis_fit: "Moderate — solves a named, concrete production failure mode (an agent's executed transaction diverging from stated intent) that theses.md rewards in agent infrastructure, with a credible EigenLayer-alumni founding team, but the wedge is crypto-native rather than the enterprise or traditional-regulated-finance surface most of this tracker's agent-infra and fintech picks assume, so it sits awkwardly between categories rather than squarely fitting either.",
    verdict: "revisit",
    verdict_rationale: "Real technical differentiation (peer-reviewed verification framework, credible team) and a clean 'named failure mode' wedge, but pre-revenue at $8.3M seed and built for crypto-native agents rather than the enterprise/regulated-finance surface most comparable picks target — track into the next round to see whether it expands toward traditional finance rails or stays crypto-only.",
    last_updated: "2026-09-02"
  },
  {
    id: "8090",
    name: "8090",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Horizontal agent-orchestrated software development (\"agent builder\")",
    stage: "Series A",
    website: "https://www.8090.ai",
    socials: { twitter: "https://x.com/8090_Factory", linkedin: "https://www.linkedin.com/company/8090solutions/" },
    founding_team: "Chamath Palihapitiya (CEO, ex-Facebook, founder of Social Capital) took the CEO seat around the Series A; company (8090 Solutions / 8090 Labs) has been operating roughly 18 months building 'Software Factory' per Palihapitiya's own public account.",
    product_wedge: "Software Factory: a governed control plane/SDLC platform where humans and AI agents jointly build and maintain enterprise software — business requirements captured in plain English, full audit trail and documentation-first knowledge graph, positioned as a controlled alternative to ungoverned 'vibe coding' agent tools; also powers 8090's own enterprise custom-software delivery business across healthcare, insurance, life sciences, manufacturing, and government.",
    funding_history: [
      { date: "2026-06-29", event: "$135M Series A", valuation: null, lead: "Salesforce Ventures", other_investors: "WNDR, Craft Ventures, TPB, LAUNCH; angels incl. Nikesh Arora, Adam D'Angelo, Thomas Laffont" }
    ],
    disclosed_traction: [
      { date: "2026", metric: "named work (company-disclosed)", value: "Analyzed 18M+ lines of legacy Medicare claims code; helped BISSELL automate parts-approval processing to a 99%+ automatic-approval rate. No ARR or customer-count figure disclosed." }
    ],
    qualitative_signal: [
      { date: "2025-07", note: "Palihapitiya publicly framed 2025 as a 'year of letdowns' for AI agents broadly, positioning Software Factory as a governed, no-hype alternative — but external commentary has called the pitch 'vague and quite ordinary' and noted the four-module platform may be more than most teams want to adopt at once." }
    ],
    thesis_fit: "Low — close to the exact pattern theses.md calls out as overhyped: a horizontal 'agents plus humans build software' platform competing on general capability and governance/audit-trail framing rather than solving one named, concrete production failure mode (durable execution, evaluation, cost/latency control) that the labs won't solve themselves; enterprise software development is also not one of the three tracked categories' core wedges.",
    verdict: "pass",
    verdict_rationale: "A large round and a well-known operator don't offset a weak thesis match: this reads as a generic 'build software with agents' platform — the pattern theses.md flags as overhyped and likely to get squeezed out as labs ship better agent SDKs directly — and even sympathetic coverage calls the pitch vague. Logged as a deliberate 'pass' rather than silently skipped, since it was a real, well-covered raise worth scoring honestly.",
    last_updated: "2026-09-02"
  },
  {
    id: "manifest-os",
    name: "Manifest OS",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Legal (AI-native law firm model)",
    stage: "Series A",
    website: "https://manifestos.com",
    socials: { twitter: null, linkedin: "https://www.linkedin.com/company/manifest-o-s" },
    founding_team: "Dan Mishin (Founder/CEO) — immigrant entrepreneur and prior venture-backed founder; his own experience navigating the U.S. immigration system (O-1 visa to citizenship) shaped the choice of business immigration as the first practice area.",
    product_wedge: "Rather than selling software to existing law firms, Manifest OS builds and operates AI-native law firms itself — operating under the 'Manifest Law' brand, starting with business immigration via Arizona's alternative business structure (ABS) program — with AI-assisted client communication, research, drafting, billing, and back office aimed at replacing the billable hour with fixed-fee/outcomes-based pricing.",
    funding_history: [
      { date: "2026-04-27", event: "$60M Series A", valuation: 750, lead: "Menlo Ventures", other_investors: "Kleiner Perkins, First Round Capital" }
    ],
    disclosed_traction: [
      { date: "2026-04", metric: "traction", value: "No client count, case volume, or revenue disclosed at raise; company describes itself as incubating its first law firm (immigration) at time of announcement" }
    ],
    qualitative_signal: [
      { date: "2026-04", note: "Structurally different wedge than typical 'legal AI' copilot tools: Manifest OS assumes the legal-liability and bar-admission complexity of actually operating law firms (via ABS structures) rather than selling software to existing ones — a differentiated but higher-risk model than a pure SaaS play." }
    ],
    thesis_fit: "Moderate — legal is explicitly flagged in theses.md as an already-crowded vertical (Harvey, already tracked, is a category leader) that needs a differentiated sub-niche or wedge to score well; Manifest OS's 'own-the-firm' structural model is a genuine differentiator from copilot-style legal AI, but is unproven at Series A with real added regulatory/liability complexity a pure software vendor wouldn't carry.",
    verdict: "revisit",
    verdict_rationale: "The business-model differentiation (operating AI-native law firms rather than selling to incumbents) is the kind of real structural wedge theses.md rewards, and the investor syndicate (Menlo, Kleiner, First Round) is credible — but crowded-vertical risk plus zero disclosed client/revenue traction and added regulatory complexity make this a name to revisit once Manifest Law reports real case volume, not a watch yet.",
    last_updated: "2026-09-02"
  }
];
