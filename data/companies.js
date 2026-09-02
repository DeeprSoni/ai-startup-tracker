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
  },
  {
    id: "inrisk-labs",
    name: "InRisk Labs",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance (parametric climate insurance / reinsurance underwriting)",
    stage: "Series A",
    website: "https://inrisklabs.com",
    socials: { twitter: null, linkedin: null },
    founding_team: "Aavrit Singhal, Siddesh Ramasubramanian (CEO), Shivakhumar R S, and Malay Kumar Poddar (CEO of subsidiary EarthRe) — co-founders; founded 2024, Ahmedabad, India. Company socials unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "AI-led parametric climate insurance and reinsurance platform — builds underwriting, actuarial, and catastrophe-modeling AI to design and price parametric products, then runs the backend (data, monitoring, claims triggering) for insurers and intermediaries; subsidiary EarthRe Insurance IFSC is the first incorporated reinsurer licensed at India's GIFT City IFSC.",
    funding_history: [
      { date: "2026-08-05", event: "$27M Series A", valuation: null, lead: "Bessemer Venture Partners, Northpoint Capital (co-led)" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "regulatory milestone", value: "Subsidiary EarthRe Insurance IFSC Limited became the first incorporated reinsurer licensed by India's IFSCA at GIFT City — no ARR or policy-count figure disclosed" }
    ],
    qualitative_signal: [
      { date: "2026-08", note: "Funds earmarked to expand into natural catastrophe/climate risk plus marine cargo and motor insurance, and to meet regulatory capital requirements for scaling EarthRe — a genuine regulated-carrier build-out, not just a software layer." }
    ],
    thesis_fit: "High — insurance is one of the vertical SaaS 'open window' categories theses.md flags, and the wedge (proprietary underwriting/actuarial/cat-modeling AI feeding a licensed reinsurer, not a copilot sold to existing insurers) fits the 'own the workflow, own the data' pattern the thesis rewards; regulatory moat (first licensed reinsurer at GIFT City) is a real, hard-to-replicate barrier.",
    verdict: "watch",
    verdict_rationale: "Real regulatory moat (first licensed reinsurer at GIFT City) plus a credible top-tier lead investor (Bessemer) distinguish this from a typical insurtech SaaS pitch — climate/parametric insurance is a genuinely underserved, technically hard niche; no disclosed ARR or policy volume yet is the one gap to watch closing at the next round.",
    last_updated: "2026-09-02"
  },
  {
    id: "rezolv",
    name: "Rezolv",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Lending / debt-collection infrastructure",
    stage: "Series A",
    website: "https://www.rezolv.com",
    socials: { twitter: null, linkedin: null },
    founding_team: "Karan Mehta and Sonali Jindal — co-founders; both previously founded Indian digital-lending platform Kissht together. Founded 2024, Mumbai, India. Company socials unconfirmed — not guessing rather than listing an unverified handle (only a personal founder LinkedIn profile was found).",
    product_wedge: "AI-native lending suite for banks and NBFCs spanning sales, risk, underwriting, and collections — AI voice agents call borrowers in 11 Indian languages, digital channels follow up, field-collection teams are auto-allocated, and supervisors see every interaction on one dashboard; positioned as embedded AI infrastructure for regulated lenders rather than a chat layer on top of existing loan-management software.",
    funding_history: [
      { date: "2025-01 (approx.)", event: "$3.5M Seed", valuation: null, lead: "3one4 Capital" },
      { date: "2026-08-18", event: "$12.5M Series A", valuation: null, lead: "Norwest", other_investors: "Vertex Ventures Southeast Asia and India, 3one4 Capital" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "total raised", value: "$16M across all rounds" },
      { date: "2026-08", metric: "customers", value: "22+ banks/NBFCs incl. AU Small Finance Bank, ICICI Bank, Poonawalla Fincorp, Bajaj Auto Credit, Five-Star Business Finance" },
      { date: "2026-08", metric: "scale", value: "6.5M minutes of borrower conversations per month; pan-India collections across 12M+ loan accounts; company-disclosed 35% improvement in bounce/resolution rates" }
    ],
    qualitative_signal: [
      { date: "2026-08", note: "Repeat-founder pattern (both built Kissht together before Rezolv) selling directly into name-brand regulated lenders (ICICI Bank) — a credible distribution signal for a regulated-decision-point product." }
    ],
    thesis_fit: "High — AI sits directly inside the regulated lending workflow (risk, underwriting, collections) at real banks/NBFCs, the exact wedge theses.md defines as winning; disclosed usage (12M+ loan accounts, 22+ institutional customers) is real production scale, not a pilot.",
    verdict: "watch",
    verdict_rationale: "Credible repeat founders, real named bank customers, and disclosed production-scale usage (12M+ loan accounts) at Series A make this one of the stronger fintech thesis-fits sourced this year — collections/underwriting automation for regulated lenders is a genuine regulated-decision-point wedge, not a thin chat layer.",
    last_updated: "2026-09-02"
  },
  {
    id: "apate-ai",
    name: "Apate.AI",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Fraud counter-intelligence / scam disruption",
    stage: "Seed",
    website: "https://www.apate.ai",
    socials: { twitter: null, linkedin: null },
    founding_team: "Prof. Dali Kaafar (CEO) and Peter Eckermann (Co-founder, Chief Product Officer) — co-founders; Sydney, Australia-based, reincorporated as a Delaware corporation effective 2026-08-25 ahead of US expansion. Company socials unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "Autonomous fraud counter-intelligence platform — deploys AI voice and text personas (~200,000 to date) that impersonate potential victims to infiltrate live scam operations, engaging fraudsters in conversations up to two hours long to extract impersonation methods, phishing links, and mule-account intelligence, which is fed back into customers' fraud-disruption processes in near real time rather than after losses occur.",
    funding_history: [
      { date: "2026-09-01", event: "$8.15M Seed (oversubscribed)", valuation: null, lead: "Lobby Capital", other_investors: "OIF Ventures, Investible, Concept Ventures, Baobab Ventures" }
    ],
    disclosed_traction: [
      { date: "2025 (six-week campaign, ending late 2025)", metric: "deployment with Australian telco TPG", value: "600,000 scam calls engaged in six weeks — equivalent to 500+ days of scammer time consumed and an estimated $13M in prevented losses (company-disclosed)" },
      { date: "2026-09", metric: "cumulative scale", value: "2.5M+ autonomous conversations with threat actors; 250,000+ pieces of intelligence generated; live with institutional clients including Commonwealth Bank of Australia" }
    ],
    qualitative_signal: [
      { date: "2026-08/09", note: "Reincorporated in Delaware and opening a London office next quarter, with a co-founder relocating to lead North American expansion — real signal of moving from an Australia-first pilot company toward global bank/telco distribution." }
    ],
    thesis_fit: "High — AI sits at a regulated, high-stakes decision point (active fraud disruption) inside a real bank (Commonwealth Bank of Australia) and a major telco, with disclosed, dated, quantified production usage rather than a demo; distinct wedge (active deception/counter-intelligence) from the passive AML/KYC monitoring pattern of Bretton AI, already tracked.",
    verdict: "watch",
    verdict_rationale: "Rare combination for a seed-stage fintech-adjacent company: real named regulated-institution customers (CBA), a large disclosed usage number (2.5M+ conversations) from actual production deployments, and a genuinely differentiated wedge (offensive counter-intelligence vs. passive monitoring) — the freshest, best-evidenced signal sourced this week.",
    last_updated: "2026-09-02"
  },
  {
    id: "arcade",
    name: "Arcade",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Authorization / identity & action governance",
    stage: "Series A",
    website: "https://www.arcade.dev",
    socials: { twitter: null, linkedin: null },
    founding_team: "Alex Salazar (CEO, ex-Okta VP, co-founder of Stormpath) and Sam Partee (CTO, ex-Principal AI Engineer at Redis) — co-founders; founded February 2024, San Francisco. Company socials unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "'Secure action layer' for production AI agents — authorization infrastructure that ensures an agent only gets the access its user has, only for the specific action being taken, plus hundreds of pre-built authenticated tools (Gmail, Slack, GitHub, Salesforce, etc.) and a full governance audit trail; authored the MCP authorization spec and runs agent actions in production across the Fortune 500.",
    funding_history: [
      { date: "2025-03", event: "$12M Seed", valuation: null, lead: "Laude Ventures", other_investors: "Flybridge Ventures, Hanabi Capital, Neotribe, Andy Rachleff" },
      { date: "2026-06-15", event: "$60M Series A", valuation: null, lead: "SYN Ventures", other_investors: "Morgan Stanley (strategic), Wipro (strategic)" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "total raised", value: "$72M across all rounds; company states it runs agent actions in production across the Fortune 500 — no customer count or revenue figure disclosed" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Authored the MCP authorization spec, positioning the company as setting a technical standard rather than just shipping a product — combined with strategic capital from Morgan Stanley and Wipro (both enterprise distribution/credibility signals), this looks like the identity/auth-layer counterpart to Zenity's intent-inspection guardrails, already tracked." }
    ],
    thesis_fit: "High — authorization/identity for agent actions is a concrete, named production failure mode theses.md rewards (agents need permissioned, auditable access to act, not just chat), attacking a different point in the guardrails stack than Zenity (real-time intent inspection) or Nava (escrow/verification) — genuine 'systems software for a new runtime' framing with a founding team that built infra standards before (Okta, Redis).",
    verdict: "watch",
    verdict_rationale: "Strong technical credibility (MCP auth spec authorship, ex-Okta/Redis founders) and a fast, large Series A with strategic enterprise backers (Morgan Stanley, Wipro) — differentiated enough from Zenity and Nava to track as a separate agent-infra guardrails sub-niche (authorization specifically) rather than a redundant pick; no disclosed revenue or customer count is the gap to watch.",
    last_updated: "2026-09-02"
  },
  {
    id: "patronus-ai",
    name: "Patronus AI",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Observability / evaluation (agent simulation & stress-testing)",
    stage: "Series B",
    website: "https://www.patronus.ai",
    socials: { twitter: null, linkedin: null },
    founding_team: "Anand Kannappan (CEO) and Rebecca Qian (CTO) — co-founders; met studying computer science together at the University of Chicago, later worked on responsible AI at Meta (Qian led responsible NLP research at Meta AI; Kannappan built explainable-ML frameworks at Meta Reality Labs). Founded September 2023, San Francisco. Company socials unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "AI evaluation and agent-simulation platform — moved from LLM-output scoring into 'Digital World Models,' simulated environments used to stress-test AI agents before production deployment, catching failure modes that static evals miss; works directly with a majority of frontier AI labs and hyperscalers, not just downstream enterprise app builders.",
    funding_history: [
      { date: "2023-09", event: "Launched out of stealth", valuation: null, lead: "unconfirmed" },
      { date: "2024 (approx.)", event: "$17M Series A", valuation: null, lead: "unconfirmed" },
      { date: "2026-06-25", event: "$50M Series B", valuation: null, lead: "Greenfield Partners", other_investors: "Notable Capital, Lightspeed Venture Partners, Datadog, Samsung, Factorial Capital, Gokul Rajaram" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "total raised", value: "$70M across all rounds" },
      { date: "2026-06", metric: "revenue growth", value: "15x+ revenue growth over the trailing year (company-disclosed)" },
      { date: "2026-06", metric: "customers", value: "Works with the majority of leading frontier AI labs and hyperscalers (no specific names or ARR disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Strategic investment from Datadog again appears in this tracker's agent-infra observability names (also backed Arize) — a repeated signal that incumbent observability players are hedging via strategic checks rather than building competing agent-eval product in-house." }
    ],
    thesis_fit: "High — evaluation is one of the two sub-categories theses.md names as most likely to matter in three years; the simulation/'digital world' angle is a distinct technical wedge from trace-and-score tools like Braintrust and Arize, already tracked, and selling directly to frontier labs is a strong technical-credibility signal.",
    verdict: "watch",
    verdict_rationale: "Fastest disclosed growth metric of this week's batch (15x+ revenue in a year) plus direct relationships with frontier labs differentiate this from the trace/log-based eval tools already tracked (Braintrust, Arize) — the sub-category is real and theses.md flags it as durable, though this is now the third eval-adjacent name in this tracker, worth watching for consolidation risk same as the Braintrust/Arize pair.",
    last_updated: "2026-09-02"
  },
  {
    id: "portkey",
    name: "Portkey",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "LLM gateway / control plane",
    stage: "Acquired (was Series A)",
    website: "https://portkey.ai",
    socials: { twitter: "https://x.com/PortkeyAI", linkedin: "https://www.linkedin.com/company/portkey-ai" },
    founding_team: "Rohit Agarwal and Ayush Garg — co-founders, former colleagues at Pepper Content. Founded January 2023.",
    product_wedge: "Unified AI gateway and control plane — routing across 1,600+ LLMs, observability, guardrails, governance, and prompt management for production AI systems; developer-led, open-source-adjacent distribution.",
    funding_history: [
      { date: "2023-08", event: "$3M Seed", valuation: null, lead: "Lightspeed" },
      { date: "2026-02", event: "$15M Series A", valuation: null, lead: "Elevation Capital", other_investors: "Lightspeed" },
      { date: "2026-04-30", event: "Acquisition announced — terms undisclosed", valuation: null, lead: "Palo Alto Networks" }
    ],
    disclosed_traction: [
      { date: "2026-02", metric: "platform scale", value: "500B+ LLM tokens routed/day, 125M requests/day, $500K+ in daily AI spend managed, 24,000+ organizations on platform" },
      { date: "2026-02", metric: "named customers", value: "Postman, Snorkel AI" }
    ],
    qualitative_signal: [
      { date: "2026-04-30", note: "Acquired by Palo Alto Networks to become the AI Gateway for Prisma AIRS, its AI security control plane — a live example of theses.md's predicted consolidation wave (infra players absorbed by platform/security vendors)." }
    ],
    thesis_fit: "High (at the time) — squarely the 'gateways/proxies' wedge theses.md names as one of the three real agent-infra problems, with real usage scale and developer-led distribution.",
    verdict: "pass",
    verdict_rationale: "Strong wedge and real usage at the point of its Series A, but the company was acquired by Palo Alto Networks in April 2026 and is no longer an independent investable target. Logged for what the acquisition itself signals — direct evidence of the consolidation theses.md flags as an 18-month risk for fragmented agent-infra sub-categories — not as an active pick.",
    last_updated: "2026-09-02"
  },
  {
    id: "tsuga",
    name: "Tsuga",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Observability / evaluation (bring-your-own-cloud)",
    stage: "Series A",
    website: "https://www.tsuga.com",
    socials: { twitter: null, linkedin: null },
    founding_team: "Gabriel-James Safar and Sébastien Deprez — co-founders, both ex-Datadog engineers whose prior startup was acquired by Datadog. Founded 2024, Paris. Company socials unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "'Bring-your-own-cloud' AI-native observability — deploys inside the customer's own cloud account (AWS, in under 2 hours via infrastructure-as-code) so logs, APM, infra monitoring, and AI agent traces never leave the customer's perimeter under customer-managed keys, addressing the data-residency/compliance concerns that block SaaS-hosted observability for sensitive agent traces.",
    funding_history: [
      { date: "2025-12", event: "$10M Seed", valuation: null, lead: "General Catalyst", other_investors: "Singular" },
      { date: "2026-06", event: "$35M Series A (total raised: $45M)", valuation: null, lead: "Singular", other_investors: "General Catalyst, DST Global Partners, Quantumlight, Picus Capital, Databricks Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "named customers", value: "Black Forest Labs, Camunda, Le Monde, Buk" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Founding team's prior company was acquired by Datadog — direct competitive-alumni signal in a sub-category (observability/eval) theses.md flags as already consolidating around Braintrust and Arize; BYOC deployment is the clearest technical differentiator from both." }
    ],
    thesis_fit: "Medium-high — solves a named, real problem (agent-trace observability) with a concrete architectural differentiator (BYOC/data residency), but the sub-category is already crowded in this tracker (Braintrust, Arize, Patronus AI all overlap partially) and named customers skew smaller than Braintrust's enterprise logo list.",
    verdict: "watch",
    verdict_rationale: "Credible ex-Datadog founding team, a fast follow-on Series A (six months after seed), and a real architectural differentiator (BYOC) rather than competing purely on UI polish — but this is now the fourth-plus observability/eval company in the tracker, so the bar for a first scored memo here is a disclosed customer count or revenue metric, not just a funding round.",
    last_updated: "2026-09-02"
  },
  {
    id: "corgi-insurance",
    name: "Corgi Insurance",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance (full-stack AI-native carrier)",
    stage: "Series B1",
    website: "https://www.corgi.com",
    socials: { twitter: "https://x.com/corgi_insurance", linkedin: "https://www.linkedin.com/company/usecorgi" },
    founding_team: "Emily Yuan (CEO, ex-OpenAI product manager, Stanford dropout) and Nico Laqua — co-founders. Founded 2024, San Francisco; YC S24; ~250 employees.",
    product_wedge: "First AI-native, full-stack insurance carrier for startups — underwrites and issues policies directly (not a broker) across D&O, cyber, commercial general liability, and AI liability, coordinating underwriting, policy design, servicing, and claims in one AI-driven system. Received full regulatory approval to operate as a carrier in July 2025.",
    funding_history: [
      { date: "2024", event: "$500K Seed", valuation: null, lead: "unconfirmed" },
      { date: "2026-01", event: "$108M combined Seed + Series A", valuation: 630, lead: "unconfirmed (early backers include Y Combinator, Kindred Ventures, Contrary)" },
      { date: "2026-05-06", event: "$160M Series B", valuation: 1300, lead: "TCV" },
      { date: "2026-05-28", event: "$106M Series B1", valuation: 2600, lead: "TCV" },
      { date: "2026-07", event: "Series B extension — amount and investors undisclosed", valuation: 4000, lead: "unconfirmed" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "premium / revenue", value: "~$40M since receiving full carrier license in July 2025 (reported by different outlets as both gross written premium and as ARR — precise basis not independently confirmed, flagged rather than picking one)" }
    ],
    qualitative_signal: [
      { date: "2026-05 to 2026-07", note: "Valuation went $630M to $1.3B to $2.6B to $4.0B in roughly six months — one of the fastest markups in this tracker, faster even than Harvey/Sierra, which is as much a signal of hot-market froth as of fundamentals." }
    ],
    thesis_fit: "Medium — owning the full regulated workflow as a licensed carrier (not software layered on someone else's risk capital) is a real moat and matches the theses.md wedge, but 'full-stack carrier' means Corgi is taking on insurance risk itself, not just selling AI software — a fundamentally different (and riskier) business model than the theses.md examples (Harvey, Sierra, Abridge) that sell AI software into an existing regulated workflow.",
    verdict: "revisit",
    verdict_rationale: "Genuinely novel wedge (AI-native carrier, not just AI-native underwriting software) and the fastest revenue-per-dollar-raised story of the batch, but taking on insurance risk directly is a materially different risk profile than the software-and-data-moat companies theses.md is built around, and the roughly six-month 6x valuation run makes entry price a real concern — revisit once loss-ratio/reserve data becomes available, which for an insurance carrier is the metric that actually matters.",
    last_updated: "2026-09-02"
  },
  {
    id: "sixfold",
    name: "Sixfold",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance (underwriting automation for P&C carriers)",
    stage: "Series B",
    website: "https://www.sixfold.ai",
    socials: { twitter: "https://x.com/sixfoldai", linkedin: "https://www.linkedin.com/company/sixfold-ai" },
    founding_team: "Alex Schmelkin, Jane Tran, and Brian Moseley — co-founders. Schmelkin and Tran previously co-founded no-code platform Unqork together; Moseley brings 25+ years of technical/product leadership. Founded 2023.",
    product_wedge: "Autonomous AI underwriting agents that sit inside existing P&C and life & health insurers' workflows — processing submissions, extracting risk data, and generating underwriting recommendations against each insurer's own guidelines, with straight-through quote-and-bind capability launched June 2026 — sells AI software into the existing regulated workflow rather than taking on risk itself.",
    funding_history: [
      { date: "2024", event: "$15M Series A", valuation: null, lead: "Salesforce Ventures", other_investors: "Scale Venture Partners, Bessemer Venture Partners, Crystal Venture Partners" },
      { date: "2026-01", event: "$30M Series B (total raised: $51.5M)", valuation: null, lead: "Brewer Lane", other_investors: "Guidewire (strategic), Bessemer Venture Partners, Salesforce Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-01", metric: "customers", value: "Insurers representing ~$265-270B in gross written premium, incl. Skyward Specialty, Zurich Insurance, Generali Global Corporate & Commercial, Guardian, Axis, New York Life" },
      { date: "2026-01", metric: "usage", value: "1M+ submissions processed across 40+ lines of business" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Launched straight-through quote-and-bind underwriting agent — moving from assistive (augmenting an underwriter's review) to autonomous execution (agent completes the transaction), the exact frontier shift theses.md's 18-month view calls out." },
      { date: "2026-01", note: "Strategic investment from Guidewire (the dominant P&C core-systems vendor) alongside the Series B — an incumbent hedging/partnering rather than building competing product in-house, the same pattern as Datadog/PagerDuty backing Arize in this tracker." }
    ],
    thesis_fit: "High — proprietary access to real underwriting workflow and outcome data across a large, blue-chip carrier base is a moat a horizontal platform can't easily replicate, and the June 2026 quote-and-bind launch is concrete evidence of a shift from copilot to autonomous execution.",
    verdict: "watch",
    verdict_rationale: "Best-evidenced insurance-vertical pick sourced this week: a blue-chip carrier customer base representing real premium volume, a credible repeat-founder team (Unqork pedigree), and a strategic backer (Guidewire) that is the incumbent most threatened by this exact wedge — the kind of validation theses.md flags as a strong positive signal.",
    last_updated: "2026-09-02"
  },
  {
    id: "variance",
    name: "Variance",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Fraud / risk / compliance investigation agents",
    stage: "Series A",
    website: "https://www.variance.com",
    socials: { twitter: "https://x.com/trustvariance", linkedin: null },
    founding_team: "Karine Mellata (CEO) and Michael Lin (CTO) — co-founders, both former Apple engineers. Founded 2022/2023, San Francisco; YC W23; ~12 employees as of March 2026. Company LinkedIn unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "Purpose-built AI agents that autonomously execute fraud, risk, and compliance investigations — KYC, KYB, AML, transaction monitoring, customer due diligence — for financial institutions and platforms, handling L1-L3 review tiers end to end with cited evidence and audit trails, rather than just flagging alerts for a human to close out.",
    funding_history: [
      { date: "2023 (approx.)", event: "Seed / pre-seed", valuation: null, lead: "Y Combinator" },
      { date: "2026-03-31", event: "$21.5M Series A (total raised: $26M)", valuation: null, lead: "Ten Eleven Ventures", other_investors: "645 Ventures, Okta Ventures, Urban Innovation Fund, Y Combinator" }
    ],
    disclosed_traction: [
      { date: "2026-03", metric: "processing scale", value: "70M+ context signals processed/day; ~300,000 automated enforcement actions executed across customer ecosystems (company-disclosed)" },
      { date: "2026-03", metric: "efficiency", value: "Agents collect ~90% of evidence per case; ~10x reduction in investigative cycle time (company-disclosed)" },
      { date: "2026-03", metric: "named customers", value: "GoFundMe; additional Fortune 500 customers referenced but not individually named" }
    ],
    qualitative_signal: [
      { date: "2026-03", note: "Came out of stealth alongside the Series A announcement (YC Founder Firesides interview) rather than building public presence pre-launch — limits independently verifiable history before the round." }
    ],
    thesis_fit: "High — AI sits directly at the regulated decision point (KYC/AML/fraud enforcement actions), not a chat layer over existing rails, and the ~300K automated-enforcement-actions figure is real usage evidence rather than a demo metric.",
    verdict: "watch",
    verdict_rationale: "Cleanest AI-native-fintech thesis fit sourced this week after Taktile — regulated decision point, disclosed automation-scale metrics, and a founding team YC backed for a second, larger round. Caveat: came out of stealth with the raise itself, so there's limited independent history to check the disclosed numbers against — revisit at the next disclosed metric.",
    last_updated: "2026-09-02"
  },
  {
    id: "rillet",
    name: "Rillet",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Finance / accounting back-office (AI-native ERP)",
    stage: "Series C",
    website: "https://www.rillet.com",
    socials: { twitter: null, linkedin: "https://www.linkedin.com/company/team-rillet" },
    founding_team: "Nicolas Kopp (CEO, former US CEO of N26) and Stelios Modes (CTO, formerly the technical architect behind N26's payment infrastructure) — co-founders. Founded 2021; product built with 50+ CPAs from the Big Four and operators from legacy ERP vendors.",
    product_wedge: "AI-native ERP where AI agents perform real accounting work directly inside a live general ledger alongside finance teams ('Accounting Superintelligence') — close, reconciliation, and reporting handled by agents operating on the same data, policies, controls, and audit trail as human accountants, built first for SaaS/subscription businesses.",
    funding_history: [
      { date: "2024-07-29", event: "$13.5M Seed", valuation: null, lead: "unconfirmed" },
      { date: "2025-05-28", event: "$25M Series A", valuation: null, lead: "Sequoia Capital" },
      { date: "2025-08-06", event: "$70M Series B", valuation: null, lead: "Andreessen Horowitz, ICONIQ (co-led)" },
      { date: "2026-08-19", event: "$100M Series C (total raised: $200M+)", valuation: 1000, lead: "ICONIQ", other_investors: "Sequoia, Andreessen Horowitz, Sequoia Global Equities, Bain Capital Ventures, Oak HC/FT, Battery Ventures, FirstMark, Scale Venture Partners, Creandum" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "customers", value: "600+ customers, including publicly listed enterprises (company-disclosed; no named-logo list published)" },
      { date: "2026-08", metric: "ARR growth", value: "New ARR doubled in the trailing 3 months (company-disclosed rate, no absolute ARR figure given)" }
    ],
    qualitative_signal: [
      { date: "2026-08", note: "Reached $1B (unicorn) valuation roughly 2 years after emerging from stealth, and this was the company's 3rd fundraising round in ~14 months — fast, repeated investor conviction rather than a single outsized markup." }
    ],
    thesis_fit: "Medium-high — AI agents doing real, audited GL work (not a chat copilot) is genuine autonomous execution, and growth/fundraising pace is real evidence of product-market fit, but an AI-native ERP is closer to horizontal finance software than a single regulated vertical with proprietary outside-workflow data — a different flavor of moat than theses.md's core examples (Harvey, Sierra, Abridge).",
    verdict: "watch",
    verdict_rationale: "Best-evidenced pick this week on pure momentum — 3 rounds and a 3x-plus valuation step-up in about 14 months, 600+ paying customers, and a credible fintech-operator founding team (ex-N26). Thesis fit is real but not textbook: the moat is workflow ownership and trust/audit infrastructure rather than access to proprietary regulated data a horizontal player can't get, so watch as a strong operator rather than a lock on theses.md's tightest wedge.",
    last_updated: "2026-09-02"
  },
  {
    id: "exaforce",
    name: "Exaforce",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Security operations (agentic SOC — autonomous detection, triage, investigation, response)",
    stage: "Series B",
    website: "https://www.exaforce.com",
    socials: { twitter: "https://x.com/exaforceAI", linkedin: "https://www.linkedin.com/company/exaforce" },
    founding_team: "Ankur Singla (CEO) — founder of 3 prior companies including Volterra (acquired by F5), where he also ran security at scale protecting major banks and social networks; Jakub Pavlik and Devesh Mittal (Head of Engineering) — co-founders. Founded 2023, San Jose.",
    product_wedge: "Agentic SOC platform built around autonomous AI agents ('Exabots') that run the full security-operations lifecycle — detection, triage, investigation, and response — for cloud and SaaS environments, positioned around real-time reasoning fast enough to counter AI-powered attacks rather than just flagging alerts for a human analyst.",
    funding_history: [
      { date: "2025-04-17", event: "$75M Series A", valuation: null, lead: "Khosla Ventures, Mayfield, Thomvest Ventures, Touring Capital (co-led)" },
      { date: "2026-05-12", event: "$125M Series B (total raised: $200M)", valuation: 725, lead: "HarbourVest", other_investors: "Peak XV, Mayfield, Khosla Ventures, Seligman Ventures, AICONIC" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "traction", value: "No customer count or ARR publicly disclosed — flagged explicitly rather than inferred from funding size" }
    ],
    qualitative_signal: [
      { date: "2026-05", note: "Series B closed almost exactly 1 year after Series A, at a valuation roughly 5x the round size before it — fast follow-on financing pace that implies real usage momentum even without disclosed ARR. Funds earmarked partly for go-to-market expansion into Japan and Europe." }
    ],
    thesis_fit: "High — solves a specific, named production failure mode (SOC alert fatigue and slow triage/response), founder has directly relevant operating history (ran security at scale at F5, founded and sold Volterra), matching theses.md's cue that high-fit teams 'have operated agents in production before.'",
    verdict: "watch",
    verdict_rationale: "Textbook agent-infrastructure thesis fit on paper — concrete failure mode, credible repeat security founder, and a fast, large Series B less than a year after Series A — but the one real gap is that no customer count, named logos, or ARR are publicly disclosed, so the traction case currently rests on funding pace and founder pedigree rather than independently verifiable usage; revisit once a customer number or revenue metric surfaces.",
    last_updated: "2026-09-02"
  },
  {
    id: "basis-theory",
    name: "Basis Theory",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Agentic commerce — payments & identity infrastructure",
    stage: "Series B",
    website: "https://basistheory.com",
    socials: { twitter: "https://x.com/basistheory", linkedin: "https://www.linkedin.com/company/basis-theory" },
    founding_team: "Colin Luce, Brian Billingsley, and Ben Milne — fintech veterans; Milne previously founded payments company Dwolla. Founded 2020, Mill Valley, CA.",
    product_wedge: "Cloud-native, PCI-compliant payments vault and tokenization infrastructure, processor-agnostic by design, extended in 2026 into 'Agentic Payments' — an API that gives AI agents bounded, scoped authority to pay on a user's or business's behalf. Co-founded the Agentic Commerce Consortium (with Skyfire, Rye, Crossmint, Lithic, Channel3) to publish shared fraud and bot-detection standards for agent transactions.",
    funding_history: [
      { date: "2021-11-15", event: "$17M Series A", valuation: null, lead: "Bessemer Venture Partners, Kindred Capital, Conversion Capital, BoxGroup, Offline Ventures" },
      { date: "2025-10-16", event: "$33M Series B (total raised: ~$50M)", valuation: null, lead: "Costanoa Ventures", other_investors: "Stage 2 Capital, Moneta VC, Bessemer Venture Partners, Kindred Ventures, Box Group, Offline Ventures" }
    ],
    disclosed_traction: [
      { date: "2026 (summer)", metric: "processing scale", value: "Hundreds of millions of transactions processed cumulatively (company-disclosed, no precise date or figure given)" },
      { date: "2026 (summer)", metric: "named customers", value: "Pinterest, Melio, MoneyGram" },
      { date: "2026 (summer)", metric: "benchmark", value: "Web Elements v3 reported by the company to load/tokenize faster than Stripe, Adyen, VGS, and Braintree in its own benchmarks — not independently verified" }
    ],
    qualitative_signal: [
      { date: "2026 (summer)", note: "Launched 'Agentic Payments' API (successor to its earlier Agentic Commerce API) and co-founded the Agentic Commerce Consortium to set fraud/bot-detection standards across the agent-payments ecosystem — positions Basis Theory as an infrastructure standard-setter in agentic payments rather than just one vendor among many." }
    ],
    thesis_fit: "Medium-high — sits in the agentic-payments/agent-first-execution sub-thread theses.md flags as the newest and least-crowded in AI-native fintech, with real pre-existing enterprise customers and processing scale that de-risks the business versus a stealth pivot; softer fit on the 'AI at a regulated decision point' cue since Basis Theory is payments/identity infrastructure and tokenization rather than an AI system making underwriting, risk, or compliance decisions itself.",
    verdict: "watch",
    verdict_rationale: "An established, revenue-generating infrastructure company (not a stealth relaunch) with real blue-chip logos, credibly building the rails and standards for the agentic-payments sub-thread theses.md calls out for disproportionate attention. Caveat: the funding itself is ~11 months old, so what's actually new this week is the 2026 Agentic Payments API and consortium formation, not a fresh round — worth checking back at the next disclosed funding or transaction-volume figure.",
    last_updated: "2026-09-02"
  },
  {
    id: "optura",
    name: "Optura",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Healthcare (AI initiative deployment & ROI operating system)",
    stage: "Series A",
    website: "https://optura.ai",
    socials: { twitter: "https://x.com/OpturaAI", linkedin: "https://www.linkedin.com/company/optura-ai" },
    founding_team: "Andy Fanning (Co-founder/CEO) — formerly VP of AI & Automation at Cigna (credited by Cigna's CFO with over $500M in realized value) and previously led Gen AI globally at Evernorth. Other co-founder(s) not independently named in sources checked — flagged rather than guessed. Founded 2024, Nashville/Franklin, TN.",
    product_wedge: "'ROAI' (Return on AI Investment) platform for healthcare organizations: maps an org's fragmented data into a unified knowledge layer, scores and prioritizes candidate AI use cases, builds healthcare-specific AI agents from existing workflows/SOPs, simulates expected value before deployment, then deploys agents and tracks outcomes in real time — positioned as a healthcare 'AI operating system' rather than a single point-solution agent.",
    funding_history: [
      { date: "2026-05-14", event: "$17.5M Series A (total raised: $25M+)", valuation: null, lead: "Salesforce Ventures", other_investors: "Echo Health Ventures, Susa Ventures, Matrix Partners, HC9 Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "platform scale", value: "$120M in tracked value across in-flight AI initiatives; 700% ROAI on in-flight projects; 250+ use cases identified; $2B in AI initiatives loaded on the platform (all company-disclosed and self-reported — no independent verification found)" },
      { date: "2026-05", metric: "named customers", value: "Independence Blue Cross, Prime Therapeutics, Ardent Health" }
    ],
    qualitative_signal: [
      { date: "2026-03", note: "Featured on the HLTH industry podcast discussing healthcare AI transformation — sustained press/analyst attention around and after the Series A." }
    ],
    thesis_fit: "Medium — healthcare is a regulated, data-rich vertical matching theses.md's core examples, and named payer/provider logos are a real signal, but the product reads closer to a horizontal 'identify AI use cases + build agents + track ROI' platform scoped to one vertical than a company that owns one specific end-to-end workflow the way Abridge owns ambient clinical notes — closer to the 'no-code agent builder' pattern theses.md flags as lower fit.",
    verdict: "revisit",
    verdict_rationale: "Real payer/provider customers and a credible operator-founder (ex-Cigna VP with a large realized-value track record) are genuine positives, but the headline traction metrics ($120M tracked value, 700% ROAI) are entirely self-reported with no independent corroboration, and the platform's breadth (use-case scoring + agent builder + ROI dashboard) is architecturally closer to tooling than to owning a single defensible workflow — revisit once a customer discloses outcome data independently or Optura narrows to one wedge.",
    last_updated: "2026-09-02"
  },
  {
    id: "vapi",
    name: "Vapi",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Voice agent infrastructure (telephony runtime for production voice agents)",
    stage: "Series B",
    website: "https://vapi.ai",
    socials: { twitter: "https://x.com/Vapi_AI", linkedin: "https://www.linkedin.com/company/vapi-ai" },
    founding_team: "Jordan Dearsley (CEO) and Nikhil Gupta (CTO) — met at the University of Waterloo, previously built a profitable YC-backed productivity app (Superpowered) together before pivoting from an AI-therapist side project into voice infrastructure. San Francisco; sources vary on exact founding year (2020 per some listings, YC W21 batch per others) — flagged rather than picking one.",
    product_wedge: "Low-latency runtime/infrastructure for building and running production voice AI agents at scale — telephony integration, orchestration, and reliability handled as infrastructure rather than a chat-wrapper product — distributed developer-first (1M+ developers, 2.7M+ agents built on the platform) with enterprise logos won via head-to-head competitive bake-offs.",
    funding_history: [
      { date: "2024-12-12", event: "$20M Series A", valuation: null, lead: "Bessemer Venture Partners", other_investors: "Abstract Ventures, AI Grant, Y Combinator, Saga Ventures, Michael Ovitz" },
      { date: "2026-05-12", event: "$50M Series B (total raised: $72M)", valuation: 500, lead: "Peak XV", other_investors: "M12 (Microsoft), Kleiner Perkins, Bessemer Venture Partners" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "usage", value: "1B+ cumulative calls handled on the platform" },
      { date: "2026-05", metric: "ARR growth", value: "Enterprise ARR grew 10x since the prior round (company-disclosed rate, no absolute ARR figure given)" },
      { date: "2026-05", metric: "named customers", value: "Amazon Ring (selected over 40 competing platforms), Kavak, Instawork, New York Life, Cherry, Intuit" }
    ],
    qualitative_signal: [
      { date: "2026-05", note: "Amazon Ring selected Vapi's platform over 40 competing vendors in a head-to-head evaluation — a strong competitive-bake-off signal in an increasingly crowded voice-AI infrastructure field." }
    ],
    thesis_fit: "High — solves a concrete production-reliability problem (low-latency, high-uptime voice infrastructure at scale) that foundation model labs don't productize themselves, developer-first distribution matches theses.md's preferred pre-Series-B go-to-market for this layer, and 1B+ calls plus a documented win over 40 rivals is real, hard-to-fake usage evidence rather than a demo metric.",
    verdict: "watch",
    verdict_rationale: "Clearest 'boring systems software for a new runtime' pick this week — real usage at scale (1B+ calls), a competitive win against 40 rivals for a marquee logo (Amazon Ring), and the developer-led distribution model theses.md explicitly favors at this stage. Main open question is durability of the lead: the Ring bake-off implies at least 40 funded competitors in voice-agent infra, so this is a crowded field even if Vapi is currently winning it.",
    last_updated: "2026-09-02"
  },
  {
    id: "model-ml",
    name: "Model ML",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Financial services back-office (dealmaking workflow / document automation)",
    stage: "Series A",
    website: "https://modelml.com",
    socials: { twitter: null, linkedin: "https://linkedin.com/company/model-ml" },
    founding_team: "Chaz Englander (CEO) and Arnie Englander (CTO) — brothers, both two-time Y Combinator alumni; Chaz previously founded Fat Llama (acquired by Hygglo), Arnie founded Fancy (acquired by GoPuff). Founded 2023, London/New York.",
    product_wedge: "Model-agnostic 'agentic operating system' — AI Modules that automate client-ready Word/PowerPoint/Excel outputs for investment banking, private equity, credit, consulting, and asset management — routing tasks to the best underlying model while enforcing enterprise governance, data privacy, and auditability; targets the document-production grind underpinning dealmaking rather than bolting a chat layer onto existing tools.",
    funding_history: [
      { date: "2025-05", event: "Seed round", valuation: null, lead: "LocalGlobe" },
      { date: "2025-11", event: "$75M Series A", valuation: null, lead: "FT Partners", other_investors: "Y Combinator, QED Investors, 13Books, Latitude, LocalGlobe" },
      { date: "2026-08-11", event: "Strategic investment (undisclosed amount) via HSBC Asset Management's flagship venture strategy", valuation: null, lead: "HSBC Asset Management" }
    ],
    disclosed_traction: [
      { date: "2026-07-09", metric: "ARR/usage growth", value: "ARR doubled and 47,000+ seats added across major clients (banks, consulting firms, asset managers); 3x increase in daily per-user activity over the trailing 12 weeks (company-disclosed, no absolute ARR figure given)" },
      { date: "2026-08", metric: "customers", value: "Deloitte and PwC named as clients; total raised to date reported at $100M+ across seed, Series A, and the HSBC AM strategic investment" }
    ],
    qualitative_signal: [
      { date: "2026-08-11", note: "HSBC Asset Management took an equity stake via its flagship venture strategy — a strategic financial-institution investor validating the product from inside the target customer base, a similar pattern to Arize (Datadog/PagerDuty) and Casca (Canapi Ventures) already tracked." }
    ],
    thesis_fit: "Moderate-high — owns a real financial-services back-office workflow (document production for dealmaking/advisory) with named blue-chip clients and a credible repeat-founder team, matching the 'financial services back-office' vertical theses.md names; but the wedge (formatted document generation) is closer to workflow automation/document assembly than autonomous execution of the underlying financial decision itself, a modest gap against the 'software that does, not assists' scoring cue.",
    verdict: "watch",
    verdict_rationale: "Real, fast-growing usage (ARR doubled, 47K+ seats added) at named top-tier clients, a credible repeat-founder team, and a strategic HSBC AM investment validating the product from within a target customer base — best-evidenced vertical SaaS pick of this week's batch, though the wedge is closer to document-workflow automation than full autonomous decision execution.",
    last_updated: "2026-09-02"
  },
  {
    id: "neno",
    name: "Neno",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "SME accounting / tax / financial back-office (Europe)",
    stage: "Seed",
    website: "https://www.neno.co",
    socials: { twitter: null, linkedin: null },
    founding_team: "Nick Knuppe (founder); team includes former founders, fintech operators, and chartered accountants from Mollie, Adyen, Remote, Plaid, Deloitte, BDO, and EY. Founded 2026, Amsterdam. Company socials unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "AI-native back-office workspace for European SMEs built around a real-time agentic general ledger — pulls data from business bank accounts, corporate cards, bill payments, and receivables to automate reconciliation and VAT preparation, folding accounting, tax, payroll, and business banking into one platform rather than bolting AI onto legacy accounting software.",
    funding_history: [
      { date: "2026-08-25", event: "€6.6M Seed", valuation: null, lead: "AlleyCorp", other_investors: "Motive Partners, Firstminute Capital; angels from Mollie, Coinbase, PayPal, Hugging Face" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "customers", value: "Almost 200 customers in the Netherlands since launching in Q1 2026 (company-disclosed; no ARR figure given)" }
    ],
    qualitative_signal: [
      { date: "2026-08-25", note: "Launched only in Q1 2026 and already raising to expand across Europe off a single seed round — founding team's fintech-operator pedigree (Mollie, Adyen, Deloitte, EY alumni) is a strong domain-expertise signal for a compliance-heavy back-office product." }
    ],
    thesis_fit: "Moderate — fits the 'financial services back-office' vertical pattern already validated by Rillet (tracked), and VAT/tax compliance automation touches a genuine regulatory decision point; but the product is closer to bookkeeping/workflow automation for SMEs than the 'own an end-to-end regulated workflow' pattern in larger enterprises that theses.md rewards most highly, and the company is barely six months past launch.",
    verdict: "revisit",
    verdict_rationale: "Credible fintech-operator founding team and real early customer traction (~200 customers in under a year) for a genuine back-office pain point, but pre-seed-adjacent stage with no disclosed revenue and a still-unproven multi-country expansion thesis — track into the next funding round for evidence expansion beyond the Netherlands is working.",
    last_updated: "2026-09-02"
  },
  {
    id: "arga-labs",
    name: "Arga Labs",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Agent training / testing sandboxes (digital twins)",
    stage: "Seed",
    website: "https://www.argalabs.com",
    socials: { twitter: null, linkedin: "https://linkedin.com/company/arga-labs" },
    founding_team: "Phillip Li (ex-Amazon engineer) and Akira Tong (ex-Goldman Sachs and Stripe engineer) — co-founders; Y Combinator alum, San Francisco.",
    product_wedge: "High-fidelity 'digital twin' sandbox environments that let enterprises train and test AI agents against realistic clones of the third-party services they depend on (e.g., Stripe, Slack) — full program clones with permission systems and webhooks intact, not stateless mock API endpoints — so agents can fail safely in a sandbox instead of in production.",
    funding_history: [
      { date: "2026-08-26", event: "$10M Seed", valuation: null, lead: "General Catalyst", other_investors: "Box Group, Emergence, Gradient, SV Angel; earlier backers Y Combinator, Comma Capital, Scribble Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "customers / usage", value: "No customer count, usage volume, or revenue disclosed at seed announcement" }
    ],
    qualitative_signal: [
      { date: "2026-08-26", note: "TechCrunch coverage frames the wedge as solving a concrete production-reliability gap — agents trained/tested against realistic full-fidelity clones of dependencies rather than thin API mocks — targeting mid-to-large engineering teams building coding agents or deploying autonomous workflows." }
    ],
    thesis_fit: "High — training/testing infrastructure for agents is a genuine, named production gap (agents failing against unrealistic mocks) that foundation model labs won't solve themselves, matching theses.md's 'systems software for a new runtime' framing; founding team has real production engineering pedigree (Amazon, Goldman Sachs, Stripe) rather than a pure research background.",
    verdict: "watch",
    verdict_rationale: "Clear, differentiated wedge not yet covered by any agent-infra company already tracked (observability, gateway, and durable-execution names are logged, but nothing addressing pre-production training/testing) plus a credible engineering-pedigree founding team and a strong lead investor — but zero disclosed customers or usage this early, so track for proof of production adoption at the next round.",
    last_updated: "2026-09-02"
  },
  {
    id: "aisa",
    name: "AIsa",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Agentic payments / machine-to-machine billing infrastructure",
    stage: "Seed",
    website: "https://aisa.one",
    socials: { twitter: "https://x.com/AIsaOneHQ", linkedin: null },
    founding_team: "Founded by a builder publicly referred to only as \"Jordan\" — track record includes building a payments company and co-founding UXUY, a multi-chain wallet serving 5M+ users. Founded 2025, San Francisco. Full founder name/title unconfirmed — flag for follow-up rather than guessing.",
    product_wedge: "Transaction network purpose-built for AI agents to autonomously discover, access, and pay for models, APIs, real-time data, SaaS tools, and compute through a single programmable interface with usage-based billing — a machine-to-machine payments/billing layer for agent-to-infrastructure spend, distinct from the agent-to-merchant payment plays (Natural, Ralio, already tracked).",
    funding_history: [
      { date: "2026-07-02", event: "$6.5M Seed", valuation: null, lead: "Alibaba Group, Tribe Capital (co-led)", other_investors: "Draper Associates, Sumitomo Corporation, Saison Capital" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "registered agents", value: "50,000+ agents registered without paid marketing; registered-agent growth of 150x between February and June 2026 (company-disclosed; no revenue or paying-customer count given)" }
    ],
    qualitative_signal: [
      { date: "2026-07-02", note: "Strategic backing from Alibaba Group is a notable non-US distribution signal; company frames itself as building the machine-to-machine equivalent of a card network for agent commerce, a distinct sub-niche from the agent-to-merchant payments plays already tracked." }
    ],
    thesis_fit: "Moderate — agentic payments is the exact newest, least-crowded fintech sub-thread theses.md flags for extra attention, but AIsa's actual product (agents paying for models/APIs/compute) reads closer to an agent-infrastructure billing/metering layer than a fintech product sitting at a regulated decision point (underwriting/risk/execution/compliance) — real growth in registered agents, but zero disclosed revenue and a thin public record on the founding team.",
    verdict: "revisit",
    verdict_rationale: "Fast registered-agent growth and notable strategic backing (Alibaba) are real signals, but the company sits awkwardly between categories (more agent-infra billing than fintech decisioning), has no disclosed revenue, and the founding team's public track record is thin — track into the next round once revenue or paying-customer figures are disclosed and the category fit is clearer.",
    last_updated: "2026-09-02"
  },
  {
    id: "respan",
    name: "Respan",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Observability / evaluation / gateway (converged control plane)",
    stage: "Seed",
    website: "https://www.respan.ai",
    socials: { twitter: "https://x.com/RespanAI", linkedin: null },
    founding_team: "Raymond Huang, Andy Li, and Hendrix Liu — co-founders; Y Combinator W24 batch; company rebranded from Keywords AI to Respan in 2026.",
    product_wedge: "Unified 'self-driving' control plane converging three previously separate agent-infra wedges — production observability/tracing, automated plus human-in-the-loop evaluation, and an adaptive AI gateway — into one product, aiming to automatically surface and help fix agent failures rather than just log them.",
    funding_history: [
      { date: "2026-03-18", event: "$5M Seed", valuation: null, lead: "Gradient", other_investors: "Y Combinator, Hat-Trick Capital, XIAOXIAO FUND, Antigravity Capital, Alpen Capital" }
    ],
    disclosed_traction: [
      { date: "2026-03", metric: "usage", value: "Trusted by 100+ AI startups and enterprise teams; processes 1B+ logs and 2T+ tokens/month; supports 6.5M+ end users (company-disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-03-18", note: "Rebrand from Keywords AI to Respan coincided with repositioning from a pure LLM gateway/DevOps tool to a converged observability+eval+gateway 'self-driving' platform — a direct response to the sub-category consolidation theses.md flags (3 comparable eval tools already acquired in 2026)." }
    ],
    thesis_fit: "Moderate — solves named production problems (observability, eval, gateway) with real usage volume for a seed-stage company, but the sub-category is the most crowded and fastest-consolidating in agent infra (Braintrust, Arize, Patronus AI, Tsuga already tracked on eval; Portkey, Concentrate AI on gateway) and the $5M round is tiny relative to well-capitalized incumbents.",
    verdict: "revisit",
    verdict_rationale: "Genuine usage scale (1B+ logs/month, 6.5M+ end users) is impressive for a $5M seed, and the converged obs+eval+gateway wedge is a real differentiation attempt, but it's entering an already-crowded, consolidating sub-category against far better-capitalized names already tracked — worth checking back once it either raises a larger round or discloses enterprise logo wins that distinguish it from Braintrust/Arize/Portkey.",
    last_updated: "2026-09-02"
  },
  {
    id: "poetic",
    name: "Poetic",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Financial services & insurance back-office (regulated process automation)",
    stage: "Series A",
    website: "https://poetic.com",
    socials: { twitter: "https://x.com/PoeticHQ", linkedin: "https://www.linkedin.com/company/poetic-systems-llc" },
    founding_team: "Markie Wagner (founder/CEO) — Thiel Foundation fellow, ex-Waymo/Google machine-learning researcher, CS degrees from USC and Stanford; previously founded AI consultancy Delphi Labs. Company originally launched under the name Forge before rebranding to Poetic. San Francisco.",
    product_wedge: "Deterministic-plus-AI hybrid automation for complex, multi-hour enterprise processes (fraud investigations, KYC, insurance underwriting, financial compliance) — a proprietary programming language runs fixed deterministic code when the business environment is unchanged and falls back to AI only when conditions shift, claiming 99%+ accuracy at roughly one-tenth the token cost of typical agent frameworks.",
    funding_history: [
      { date: "2026-06-10", event: "$50M Series A (emerged from stealth)", valuation: 500, lead: "Kleiner Perkins", other_investors: "Founders Fund, OpenAI, First Harmonic, Genius Ventures" }
    ],
    disclosed_traction: [
      { date: "2025", metric: "run rate", value: "Reached an eight-figure run rate and became profitable in 2025 with a team of four, per Kleiner Perkins' investment memo (exact figure and month not disclosed)" },
      { date: "2026-06", metric: "named customers", value: "AIG, SoFi, Chime, and an unnamed top-tier bank; Chime deployment handling 500,000+ disputes, SoFi fraud auto-decisioning at 99% quality, 100% KYC process adherence cited for the unnamed bank (all company-disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-06-10", note: "OpenAI took a strategic stake alongside Kleiner Perkins and Founders Fund — a foundation-model lab investing in a company whose core pitch is using far fewer tokens than typical agent frameworks, an unusual alignment worth watching." }
    ],
    thesis_fit: "High — sits directly inside regulated financial/insurance back-office processes (fraud, KYC, underwriting, compliance) with named blue-chip customers and disclosed profitability at a tiny headcount, matching theses.md's 'software that does, not assists' and proprietary-outcome-data scoring cues; the deterministic/AI hybrid architecture is also a genuine technical differentiator rather than a thin LLM wrapper.",
    verdict: "watch",
    verdict_rationale: "Rare combination for this stage: real named enterprise customers in regulated finance/insurance (AIG, SoFi, Chime), disclosed profitability at just four people pre-raise, and a technically differentiated architecture credible enough that OpenAI itself took a stake. Main open question is durability of the token-efficiency moat as foundation models get cheaper.",
    last_updated: "2026-09-02"
  },
  {
    id: "owner",
    name: "Owner",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Local business / restaurant operations (AI-native SMB software)",
    stage: "Series D",
    website: "https://www.owner.com",
    socials: { twitter: "https://x.com/owner", linkedin: "https://www.linkedin.com/company/owner-com" },
    founding_team: "Adam Guild (CEO) and Dean Bloembergen (CTO) — co-founders; Guild started the company in 2018 as Placepull before rebranding to Owner in 2021 (Forbes 30 Under 30, 2021). Palo Alto, California.",
    product_wedge: "AI-native, all-in-one operating platform for independent restaurants — website/app creation, commission-free online ordering, CRM, loyalty, and AI-driven marketing automation — replacing a fragmented stack of legacy point solutions with AI agents that run marketing and guest engagement autonomously rather than just assisting an owner.",
    funding_history: [
      { date: "2025-05", event: "$120M Series C", valuation: 1000, lead: "Meritech Capital, Headline (co-led)" },
      { date: "2026-08-28", event: "$240M Series D", valuation: 2300, lead: "Goldman Sachs Alternatives", other_investors: "Meritech, Redpoint, Benchmark (Jack Altman)" }
    ],
    disclosed_traction: [
      { date: "2025", metric: "revenue (third-party estimate)", value: "~$81M ARR per a Getlatka estimate — not a company-confirmed figure; company's own previously disclosed revenue history was $3M (2021) → $6M (2022) → $16M (2023) → $20M (2024)" },
      { date: "2026-08", metric: "footprint", value: "Company states its AI now powers more U.S. restaurant locations than Domino's or Taco Bell (company-disclosed claim; no absolute location count given)" }
    ],
    qualitative_signal: [
      { date: "2026-08-28", note: "Valuation more than doubled (from $1B to $2.3B) in about 15 months, and the company is explicitly expanding its positioning from restaurants toward an 'AI-native platform for every local business.'" }
    ],
    thesis_fit: "Moderate-high — owns a full workflow (marketing, ordering, guest engagement) for a genuinely underserved SMB vertical and is pushing toward broader 'every local business' ambitions, but the wedge is closer to marketing/ops automation than a regulated high-stakes decision point, and precise ARR is not company-confirmed (only a third-party estimate).",
    verdict: "watch",
    verdict_rationale: "Real scale and a rare valuation double-up in ~15 months are hard to ignore, but this is already a $2.3B company — track as a bellwether for AI-native SMB vertical software the way Harvey/Sierra are tracked for their categories, not a ground-floor pick.",
    last_updated: "2026-09-02"
  },
  {
    id: "pace",
    name: "Pace",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance back-office operations (agentic process outsourcing)",
    stage: "Series B",
    website: "https://withpace.com",
    socials: { twitter: "https://x.com/pacecom", linkedin: "https://www.linkedin.com/company/pace-com" },
    founding_team: "Jamie Cuffe (CEO/co-founder) — grew up around Lloyd's of London through his father's career before returning to insurance after time in tech; team of insurers, technologists, and AI researchers. Founded 2024, New York City; ~28 people as of the Series B.",
    product_wedge: "'Agentic process outsourcer' for insurance carriers, brokers, and MGAs — AI agents navigate carriers' own internal applications, reason across documents, and place phone calls to execute submission intake, policy servicing, claims handling, and data entry end-to-end, positioned as an AI replacement for traditional insurance BPO rather than a copilot layered on existing systems.",
    funding_history: [
      { date: "2026-01-28", event: "$10M Series A", valuation: null, lead: "Sequoia Capital" },
      { date: "2026-05-27", event: "$46M Series B", valuation: 375, lead: "Thrive Capital, Sequoia Capital (co-led)", other_investors: "Emergence Capital, Pruven Capital" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "workflows completed", value: "250,000+ insurance workflows completed autonomously since launch (company-disclosed)" },
      { date: "2026-05", metric: "named customers", value: "Prudential Financial, WTW, The Mutual Group, Newfront, Ryze Claim Solutions" },
      { date: "2026-05", metric: "efficiency", value: "Cut claim cycle times ~30% at Ryze Claim Solutions (company-disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-05-28", note: "CEO Jamie Cuffe told The Insurer that AI agents are 'unlocking products and markets carriers couldn't previously serve' — framing the pitch as market expansion rather than pure cost-cutting, though this is founder framing rather than independently verified." }
    ],
    thesis_fit: "High — squarely in the insurance-back-office 'open window' theses.md flags for extra sourcing attention, with blue-chip named customers (Prudential, WTW) and a quantified efficiency result (30% faster claims cycles) rather than a demo metric; a distinct sub-niche (back-office BPO replacement) from the underwriting-risk-selection companies already tracked (Sixfold, InRisk Labs, Corgi Insurance).",
    verdict: "watch",
    verdict_rationale: "Best-evidenced insurance pick sourced this week — named Fortune-500-adjacent customers, a real quantified efficiency number, and two funding rounds in under six months signaling strong investor conviction (Sequoia doubling down alongside Thrive). Worth flagging that this is now the fifth insurance-adjacent company tracked, so any future memo should differentiate carefully by sub-niche (back-office ops, not underwriting).",
    last_updated: "2026-09-02"
  },
  {
    id: "aiuc",
    name: "AIUC",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "AI-agent risk underwriting / liability insurance-as-a-service",
    stage: "Seed",
    website: "https://aiuc.com",
    socials: { twitter: "https://x.com/aiunderwriting", linkedin: null },
    founding_team: "Rune Kvist (CEO/co-founder) — first product/go-to-market hire at Anthropic, sits on the board of the Center for AI Safety; Rajiv Dattani (co-founder) — former McKinsey insurance partner; Brandon Wang (co-founder) — former Thiel Fellow. San Francisco; founded 2025.",
    product_wedge: "Underwrites the regulated decision point of AI-agent deployment risk itself: a proprietary audit standard (AIUC-1) scores an enterprise's AI-agent security/reliability posture, and liability-insurance pricing is tied directly to the audit outcome — safer, better-audited AI deployments get better terms — functioning as an insurance/certification layer for the AI-agent economy rather than an AI product built for an existing industry.",
    funding_history: [
      { date: "2025-07-24", event: "$15M Seed (described by the company as the largest seed round in insurance-industry history)", valuation: null, lead: "NFDG (Nat Friedman)", other_investors: "Emergence Capital, Terrain; angels incl. Ben Mann (Anthropic co-founder)" }
    ],
    disclosed_traction: [
      { date: "2026-05-15", metric: "underwriting capacity", value: "Secured Beazley as its first insurance-paper (risk capacity) partner for an AI-agent liability product" },
      { date: "2026", metric: "named customer", value: "ElevenLabs became the first company to secure AI-agent liability insurance under the AIUC-1 standard (joint company/ElevenLabs announcement; no premium or coverage amount disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-05-15", note: "Landing Beazley — a top-tier Lloyd's-market specialty insurer — as risk-capacity partner is a meaningful regulatory/industry-credibility signal for a category (AI-agent liability) that barely existed a year earlier." }
    ],
    thesis_fit: "Moderate — genuinely sits at a regulated decision point (underwriting AI-agent liability risk) with real compliance sophistication as the moat, matching theses.md's fintech scoring cues on paper; but it is a novel meta-category (insurance for AI risk, not AI used to run an existing regulated fintech workflow) that sits awkwardly across theses.md's three categories rather than cleanly inside any one of them, and scale (premium volume, policy count) is not yet disclosed.",
    verdict: "revisit",
    verdict_rationale: "Credible team (ex-Anthropic, ex-McKinsey insurance) and a real regulatory-market signal (Beazley capacity, ElevenLabs as first bound policy), but still seed-stage with no disclosed premium volume, and the business model — insuring AI risk rather than using AI to underwrite a traditional risk — is enough of a category-fit stretch to track rather than call a clean 'watch' yet.",
    last_updated: "2026-09-02"
  },
  {
    id: "multiplier-ai",
    name: "Multiplier",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Capital markets / investment operations (agent harness for asset managers)",
    stage: "Seed",
    website: "https://www.multiplier.ai",
    socials: { twitter: null, linkedin: null },
    founding_team: "Ian McInnis (CEO) — former investor at Bridgewater Associates; Ryan Winkler (COO) — previously at StepStone Group; Ben Finch (CTO/President) — former founding researcher at Sentient Labs. Co-founders met running a student-run hedge fund at Princeton. Company socials unconfirmed — not guessing rather than listing an unverified handle.",
    product_wedge: "Deploys a common 'agent harness' substrate inside each customer's own systems (rather than a standalone hosted SaaS app) and builds firm-specific AI agents on top of it, incorporating a fund's proprietary research frameworks, internal information, and investment processes — spanning the investment workflow from idea generation through post-trade review for fundamental equity hedge funds and asset managers.",
    funding_history: [
      { date: "2026-08-26", event: "$6M Seed", valuation: null, lead: "Lux Capital", other_investors: "Y Combinator, GoAhead Ventures, Rebel Fund, General Advance, Unpopular Ventures, Amino Capital; angels incl. Bridgewater co-CIOs Greg Jensen and Karen Karniol-Tambour, Fortress Investment Group Chairman Pete Briger, DeepMind CSO Jasjeet Sekhon" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "customers", value: "No customer count or AUM figure disclosed at seed announcement; Mercator Partners named as a customer" }
    ],
    qualitative_signal: [
      { date: "2026-08-26", note: "Investor list is unusually stacked with sitting operators/executives from Bridgewater, Fortress, DeepMind, and Polygon rather than pure financial LPs — a credibility signal for the deploy-inside-the-client's-own-systems technical approach, though it remains a $6M seed with no disclosed revenue." }
    ],
    thesis_fit: "Moderate — sits inside a real regulated-adjacent decision workflow (investment research and execution for asset managers) with a differentiated deploy-inside-your-stack technical approach rather than a hosted chat wrapper, but at seed stage with zero disclosed customers or AUM it's unproven, and 'agent harness for hedge funds' is closer to LinqAlpha's assistive-research wedge (already tracked, scored revisit) than a full regulated-decision-point product like Taktile.",
    verdict: "revisit",
    verdict_rationale: "Strong founder/investor pedigree and a genuinely different technical approach (in-house deployment vs. hosted SaaS), but a $6M seed with no disclosed traction and a positioning that overlaps with LinqAlpha (already scored revisit for a similar reason) — track into the next round rather than call watch on pedigree alone.",
    last_updated: "2026-09-02"
  },
  {
    id: "temporal",
    name: "Temporal",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Durable execution / orchestration",
    stage: "Series D",
    website: "https://temporal.io",
    socials: { twitter: "https://x.com/temporalio", linkedin: "https://www.linkedin.com/company/temporal-technologies" },
    founding_team: "Maxim Fateev (CEO) and Samar Abbas (CTO), co-founders — both spent ~20 years in distributed systems at AWS, Microsoft and Uber; Fateev led development of what became Amazon SQS, and the pair co-created Amazon Simple Workflow Service before founding Temporal in 2019 as an open-source durable-execution engine.",
    product_wedge: "Open-source durable execution system that keeps long-running, stateful workflows (and now agent runs) fault-tolerant across retries, failures and human-in-the-loop pauses — the exact 'durable state across long-running agent workflows' wedge theses.md names as the highest-conviction agent-infra sub-category; production users include Datadog, Netflix, Indeed, Snap, Remitly and Yum! Brands.",
    funding_history: [
      { date: "2026-02-17", event: "$300M Series D", valuation: 5000, lead: "a16z", other_investors: "Lightspeed Venture Partners, Sapphire Ventures, Sequoia Capital, Index Ventures, Tiger Global, GIC, Madrona, Amplify Partners" }
    ],
    disclosed_traction: [
      { date: "2026-02", metric: "revenue growth", value: "380%+ YoY revenue growth" },
      { date: "2026-02", metric: "usage", value: "350% YoY increase in weekly active usage; installs exceed 20M/month; 9.1 trillion lifetime action executions on Temporal Cloud" }
    ],
    qualitative_signal: [
      { date: "2026-02", note: "Unveiled 'serverless durable execution' at its Replay 2026 conference, explicitly reframing the product around agentic AI reliability rather than generic microservices orchestration." }
    ],
    thesis_fit: "High — durable execution is the sub-category theses.md names as most likely to matter in 3 years, and Temporal is the category-defining, decade-hardened incumbent now explicitly repositioning around agent workloads.",
    verdict: "watch",
    verdict_rationale: "The clearest real-world validation of the durable-execution wedge — 380%+ YoY revenue growth and 20M+ monthly installs prove the problem is real and Temporal already owns it — but at a $5B valuation with elite distribution already built, it's a bellwether to track (like Harvey/Sierra) rather than a ground-floor pick.",
    last_updated: "2026-09-02"
  },
  {
    id: "wonderful",
    name: "Wonderful",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Horizontal enterprise agent deployment platform",
    stage: "Series B",
    website: "https://www.wonderful.ai",
    socials: { twitter: null, linkedin: "https://www.linkedin.com/company/wonderful-ai" },
    founding_team: "Bar Winkler (CEO) — co-founded Approve.com (acquired by Tipalti), financial-automation background; Roey Lalazar (CTO) — co-founded Kaps, AI language-localization background. Founded Amsterdam, emerged from stealth mid-2025.",
    product_wedge: "Combines a multi-model AI platform with locally embedded, forward-deployed teams to help large enterprises stand up production AI agents across customer, employee and back-office workflows in 30+ countries — a breadth/localization-first go-to-market rather than a named technical wedge.",
    funding_history: [
      { date: "2025-Q3", event: "$34M Seed (emerged from stealth)", valuation: null, lead: "Index Ventures" },
      { date: "2025-11", event: "$100M Series A", valuation: null, lead: "Index Ventures" },
      { date: "2026-03-12", event: "$150M Series B", valuation: 2000, lead: "Insight Partners", other_investors: "Index Ventures, IVP, Bessemer Venture Partners, Vine Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-03", metric: "footprint", value: "Live in 30+ countries; scaling headcount from 350 to ~900 by year-end 2026" },
      { date: "2026-03", metric: "total raised", value: "$286M across Seed/Series A/B in under a year from stealth" }
    ],
    qualitative_signal: [
      { date: "2026-03", note: "Announced a partnership with McKinsey & Company and QuantumBlack pairing Wonderful's platform with McKinsey's transformation consulting and forward-deployed engineers — a services-led distribution motion, not developer-led adoption." }
    ],
    thesis_fit: "Low — a horizontal 'multi-model AI platform + local deployment teams' story with no named production failure mode solved; growth narrative is headcount/geography expansion and a McKinsey consulting partnership, not a durable-state, evaluation, or cost-control wedge.",
    verdict: "pass",
    verdict_rationale: "Real capital and fast scaling, but this matches theses.md's explicit 'what's overhyped' pattern almost exactly — a broad enterprise AI-agent platform competing on deployment breadth and consulting-style delivery rather than solving one gnarly production problem; logged mainly as a marker of how much capital a well-marketed horizontal platform can still raise in this market.",
    last_updated: "2026-09-02"
  },
  {
    id: "axle",
    name: "Axle",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance (AI-native clearinghouse / verification infra)",
    stage: "Series A",
    website: "https://www.axle.insure",
    socials: { twitter: null, linkedin: null },
    founding_team: "Cameron Duncan (CEO), Armaan Sikand (COO) and Nihar Parikh (CTO) — Emory University friends who encountered fragmented insurance-verification systems while working on automotive/mortgage products at Deloitte Digital and Cox Automotive (Duncan was later Head of Product at Clutch, acquired by Cox Automotive). Team includes a former founding Plaid growth lead and former heads of risk/insurance at DoorDash and Sixt.",
    product_wedge: "AI-native clearinghouse that programmatically connects insurance carriers to the businesses that need to verify or act on coverage (auto dealers, rental companies, mortgage and auto lenders, employers) — replacing manual, fragmented insurance-verification workflows with automated clearing, described as making insurance 'programmable.'",
    funding_history: [
      { date: "2026-08-13", event: "$17.5M Series A", valuation: null, lead: "Base10 Partners", other_investors: "Y Combinator, Gradient, Stage 2 Capital; angels incl. Cover Genius founders and early Plaid team members" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "annual coverage cleared", value: "$100B+ cleared annually across 4,000+ customers incl. Fortune 500 logos Rocket Mortgage, Avis, Experian and Sonic Automotive" },
      { date: "2026-08", metric: "growth", value: "Tripled automated workflows in the trailing 6 months; workflows sped up 20x vs. manual process, recovering 'hundreds of millions' in losses for customers (exact figure not disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-08", note: "Plans to expand from its initial 5 insurance markets to 50+ segments (home, motor, renters, commercial, specialty)." }
    ],
    thesis_fit: "High — an AI-native clearinghouse sitting inside a fragmented, data-locked insurance-verification workflow that a horizontal platform can't easily replicate; real evidence of autonomous execution (automated clearing, loss recovery, 20x workflow speedup) at meaningful scale with blue-chip Fortune 500 logos.",
    verdict: "watch",
    verdict_rationale: "Best-evidenced pick this batch — $100B+ in coverage cleared annually and a Fortune 500 customer roster is real, dated, verifiable traction at Series A, in an insurance-infrastructure niche theses.md specifically flags as an 'open window' relative to already-crowded legal and healthcare.",
    last_updated: "2026-09-02"
  },
  {
    id: "assort-health",
    name: "Assort Health",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Healthcare (patient-access / call-center voice agents)",
    stage: "Series C",
    website: "https://www.assorthealth.com",
    socials: { twitter: "https://x.com/assort_health", linkedin: "https://www.linkedin.com/company/assorthealth" },
    founding_team: "Jonathan Wang and Jeffery Liu, co-founders; company founded 2023, based in San Francisco.",
    product_wedge: "Specialty-specific voice AI agents that automate the patient-access call center — scheduling, triage, prescription refills, billing/payment collection — for practices spanning orthopedics, cardiology and immunology, built on a proprietary clinical-interaction dataset rather than a generic voice-agent shell.",
    funding_history: [
      { date: "2025-09-30", event: "$76M Series B", valuation: null, lead: "Lightspeed Venture Partners", other_investors: "Felicis, First Round Capital, Chemistry, A*, Liquid2, Quiet Capital" },
      { date: "2026-06-24", event: "$120M Series C", valuation: 1200, lead: "Menlo Ventures", other_investors: "Lightspeed, Felicis, First Round Capital, Chemistry, Tau Ventures, Quiet Capital; angel Joe Montana" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "proprietary dataset", value: "190M patient interactions, 62,000 care protocols, 1.6M decision pathways" },
      { date: "2026-06", metric: "deployment scale", value: "Assort Activate (outbound agent) deployed across 1,000+ provider sites" }
    ],
    qualitative_signal: [
      { date: "2026", note: "Named to CB Insights' 2026 AI 100 list of most innovative AI startups." }
    ],
    thesis_fit: "High — a proprietary specialty-specific clinical-interaction dataset (190M interactions) is a real data moat, and the agents take autonomous action (booking, triage, outbound calls) rather than just assisting a human — on-thesis for 'software that does, not software that assists.'",
    verdict: "watch",
    verdict_rationale: "Reached unicorn status in under 3 years with real deployment scale (1,000+ provider sites) and a genuine proprietary-data moat, but healthcare is explicitly flagged in theses.md as an already-crowded, richly-valued vertical — track as a comp for the patient-access/call-center niche rather than an underexplored find.",
    last_updated: "2026-09-02"
  },
  {
    id: "nekuda",
    name: "Nekuda",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Agentic payments (agent identity + payment credentials/mandates)",
    stage: "Seed",
    website: "https://nekuda.ai",
    socials: { twitter: null, linkedin: "https://www.linkedin.com/in/ayal-karmi-%F0%9F%94%B5-13403829/" },
    founding_team: "Ayal Karmi, CEO & co-founder — background in statistics and cross-border payments at the Central Bank of Israel; previously co-founded an agricultural computer-vision startup and later worked at Solidus Labs (crypto market-surveillance/compliance).",
    product_wedge: "Payments SDK — Secure Agent Wallet plus 'Agentic Mandates' — that lets AI agents hold payment credentials and execute autonomous online transactions on a user's or business's behalf with an auditable authorization trail; a launch partner for Visa Intelligent Commerce.",
    funding_history: [
      { date: "2025-05-14", event: "$5M Seed", valuation: null, lead: "Madrona", other_investors: "Amex Ventures, Visa Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-09", metric: "usage", value: "No transaction volume, revenue, or customer count publicly disclosed as of this update" }
    ],
    qualitative_signal: [
      { date: "2025-05", note: "Launch partner for Visa Intelligent Commerce — strategic backing from both Visa Ventures and Amex Ventures is a stronger regulated-network validation signal than a typical seed round." }
    ],
    thesis_fit: "Moderate — sits at a real regulated decision point (payment authorization/execution) with credible strategic backing from Visa Ventures and Amex Ventures, on the least-crowded fintech sub-thread theses.md calls out for extra attention; but pre-disclosed-revenue, and the sub-thread already has several comps logged (Natural, Ralio, AIsa, Basis Theory).",
    verdict: "revisit",
    verdict_rationale: "Genuinely good strategic signal — Visa and Amex corporate VCs backing an agentic-payments infra startup is a stronger tell than a typical seed round — but there's no disclosed transaction volume or customer count to underwrite a 'watch,' and the tracker already carries four other agentic-payments plays; revisit once usage numbers surface.",
    last_updated: "2026-09-02"
  },
  {
    id: "reserv",
    name: "Reserv",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance (claims / AI-native TPA)",
    stage: "Series C",
    website: "https://www.reserv.com",
    socials: { twitter: null, linkedin: "https://www.linkedin.com/company/reserv-ai" },
    founding_team: "CJ Przybyl (CEO) — previously scaled claims-tech company Snapsheet — and Martha Dreiling (COO) — prior operating roles at OnDeck, Attune, Rhino, and BCG financial-services strategy — co-founded the company in 2022.",
    product_wedge: "AI-native third-party administrator (TPA) for property & casualty insurance claims — full claims handling and adjudication built around AI models from the ground up rather than a SaaS layer bolted onto legacy adjusters — serving ~200 insurers, MGAs, corporate captives and brokers across North America, the UK and EU.",
    funding_history: [
      { date: "2022-07-26", event: "$8M Seed", valuation: null, lead: "Altai Ventures, Bain Capital Ventures" },
      { date: "2025-06-04", event: "$25M Series B", valuation: null, lead: "Flourish Ventures", other_investors: "Bain Capital Ventures, Altai Ventures, Accenture Ventures" },
      { date: "2025-09-18", event: "Series B extended to $41M total", valuation: null, lead: "QBE Ventures" },
      { date: "2026-05-04", event: "$125M Series C", valuation: null, lead: "KKR", other_investors: "Bain Capital Ventures, Flourish Ventures, select strategic partners/clients" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "ARR", value: "$100M" },
      { date: "2026-05", metric: "claims volume", value: "500,000 annual complex claims processed, more than doubling capacity year over year; plan to scale to 30M within 4 years" },
      { date: "2026-05", metric: "customers", value: "~200 insurers, corporate captives, MGAs and brokers" }
    ],
    qualitative_signal: [
      { date: "2026-05", note: "One of the largest nine-figure P&C insurtech financings globally since the sector's 2021 funding peak; KKR-led round signals late-stage/growth-investor conviction, not just venture." }
    ],
    thesis_fit: "High — sits inside a regulated, data-rich vertical (P&C claims handling) where compliance and claims-outcome data are the moat; genuine autonomous execution (claims adjudication, not just an assistive copilot) with $100M ARR and a founding team (Snapsheet, OnDeck/Attune/Rhino) that has actually operated in this workflow before.",
    verdict: "watch",
    verdict_rationale: "Real, fast-scaling ARR ($100M, claims volume doubling annually) plus a KKR-led $125M Series C is exactly the 'speed to meaningful ARR' signal theses.md treats as proof of product-market fit in vertical SaaS; insurance claims is a less crowded niche than legal/healthcare, so this is a strong pick even though it's already growth-stage.",
    last_updated: "2026-09-02"
  },
  {
    id: "bunkerhill-health",
    name: "Bunkerhill Health",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Healthcare (health-system AI agent operating layer)",
    stage: "Series B",
    website: "https://www.bunkerhillhealth.com",
    socials: { twitter: "https://x.com/joinBunkerhill", linkedin: "https://www.linkedin.com/company/bunkerhill-health" },
    founding_team: "David Eng and Nishith Khandwala, co-founders; company grew out of a Stanford project using existing radiology scans to surface cardiac risk. Founded 2018, San Francisco.",
    product_wedge: "Carebricks — a platform that lets health systems build and run clinical, operational and administrative AI agents themselves, on top of Bunkerhill's library of FDA-cleared algorithms — positioned as an 'operating layer' for healthcare AI rather than a single-purpose point tool.",
    funding_history: [
      { date: "2026-07-16", event: "$25M Series B", valuation: null, lead: "Khosla Ventures", other_investors: "Sequoia Capital, Felicis, Optum Ventures, Y Combinator" }
    ],
    disclosed_traction: [
      { date: "2026-07", metric: "total funding", value: "$55M raised to date (seed + Series A + Series B; seed/A split not disclosed)" },
      { date: "2026-07", metric: "revenue growth", value: "20x revenue growth over the trailing year" },
      { date: "2026-07", metric: "customers", value: "15 health systems live incl. Cleveland Clinic, Mayo Clinic and Intermountain Health; 9 FDA-cleared algorithms; signed 12+ health systems in the past year" }
    ],
    qualitative_signal: [
      { date: "2026", note: "Cited by Sequoia Capital as an example of 'AI's killer app' in healthcare." }
    ],
    thesis_fit: "High — proprietary access to health-system clinical/operational workflows (not just a chat layer), disclosed 20x revenue growth and blue-chip health-system logos, and a platform model (build-your-own clinical agents on FDA-cleared building blocks) that owns more of the workflow over time rather than a single narrow task.",
    verdict: "watch",
    verdict_rationale: "20x trailing-year revenue growth plus marquee health-system customers (Cleveland Clinic, Mayo, Intermountain) and 9 FDA clearances is unusually well-evidenced for a Series B — real regulatory and data moat, and the strongest healthcare pick sourced this week.",
    last_updated: "2026-09-02"
  },
  {
    id: "sardine",
    name: "Sardine",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Fraud prevention / compliance / credit underwriting",
    stage: "Series C",
    website: "https://www.sardine.ai",
    socials: { twitter: "https://x.com/sardine", linkedin: "https://www.linkedin.com/company/sardineai" },
    founding_team: "Soups Ranjan (CEO) — ex-Head of Risk at Coinbase, ex-Head of Financial Crime at Revolut — co-founded with Aditya Goel and Zahid Shaikh in 2020; deep fintech/regulatory operating experience across all three founders.",
    product_wedge: "AI risk platform combining device intelligence, behavioral biometrics and machine learning to make real-time fraud, compliance (KYC/AML) and credit-underwriting decisions for banks and fintechs — sits directly at the regulated decision point rather than a support/chat layer.",
    funding_history: [
      { date: "2022-09-20", event: "$51.5M Series B", valuation: null, lead: "Andreessen Horowitz Growth Fund" },
      { date: "2025-02-11", event: "$70M Series C", valuation: null, lead: "Activant Capital", other_investors: "a16z, Nyca Partners, Google Ventures, Geodesic Capital, Cross Creek Capital, Moody's Analytics, Experian Ventures, NAventures" },
      { date: "2026-05-21", event: "$25M Series C extension", valuation: 660, lead: "National Bank of Canada" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "total funding", value: "$170M raised to date" },
      { date: "2026-05", metric: "customers", value: "250+ enterprise customers across 70+ countries" }
    ],
    qualitative_signal: [
      { date: "2026-05", note: "National Bank of Canada is rolling out Sardine's device intelligence and real-time risk scoring across retail, commercial and wealth operations after a live platform evaluation showed improved fraud detection and fewer false positives — a real bank production deployment, not a pilot announcement." }
    ],
    thesis_fit: "High — AI sits directly at the regulated decision point (fraud, KYC/AML, credit risk) rather than a chat UI; founding team has genuine fintech/regulatory operating experience (Coinbase, Revolut risk leadership); proprietary device-intelligence/behavioral data most banks can't replicate in-house.",
    verdict: "watch",
    verdict_rationale: "Not a brand-new startup, but the May 2026 National Bank of Canada production rollout is a fresh, verifiable, regulated-institution deployment that validates the core AI-native-fintech thesis cue (a real bank betting its fraud/risk stack on it) — logged now on the strength of that dated signal rather than the company's age.",
    last_updated: "2026-09-02"
  },
  {
    id: "rockrose-risk",
    name: "RockRose Risk",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Insurance (wildfire risk mitigation & brokerage)",
    stage: "Series A",
    website: "https://www.rockroserisk.com",
    socials: { twitter: null, linkedin: "https://www.linkedin.com/company/rockrose-risk" },
    founding_team: "Andrew Engler, founder & CEO — 20 years in catastrophe risk and insurance; company founded ~2023, based in San Francisco.",
    product_wedge: "Technology-enabled wildfire-insurance brokerage that scores wildfire risk with ML models over satellite/weather/imagery data plus 'Rosebud,' a purpose-built lidar/camera assessment rover for ground-level property inspection — then ties verified mitigation work to lower insurance costs; expanding via acquisition (tree-trimming, roofing) into a vertically integrated risk manager.",
    funding_history: [
      { date: "2026-03-16", event: "$9M Seed", valuation: null, lead: "unconfirmed" },
      { date: "2026-08-19", event: "$12.5M Series A", valuation: null, lead: "Crosslink Capital, Congruent Ventures (co-led)", other_investors: "Nuveen" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "pricing outcome", value: "Average 21% reduction in policy prices for commercial property owners using its mitigation-first model" },
      { date: "2026-08", metric: "markets", value: "Live in California, Colorado and Nevada" }
    ],
    qualitative_signal: [
      { date: "2026-07", note: "Launched Rosebud, a lidar/camera-equipped assessment rover, to capture ground-level property conditions satellite imagery and ZIP-code models miss." },
      { date: "2026-08", note: "Company states human experts remain in the loop for high-impact insurance decisions rather than leaving coverage calls entirely to the model." }
    ],
    thesis_fit: "Moderate — real proprietary data (physical rover inspections + ML risk scoring) in a regulated, underserved niche (wildfire property insurance), but the model keeps humans in the loop for high-impact decisions rather than autonomous execution, and the growth strategy (acquiring tree-trimming/roofing firms) is pulling the business toward a services roll-up as much as an AI-native software company.",
    verdict: "revisit",
    verdict_rationale: "Genuinely differentiated data collection (the Rosebud rover) and a real, measured pricing outcome (21% average reduction) are promising, but the company explicitly keeps AI as a decision-support input rather than the autonomous executor, and its next phase leans into acquiring physical-services businesses — worth rechecking once it's clearer whether the wedge stays software-led or becomes primarily a brokerage/services roll-up.",
    last_updated: "2026-09-02"
  },
  {
    id: "xpander",
    name: "Xpander",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Enterprise agent governance / agent-builder platform",
    stage: "Seed",
    website: "https://xpander.ai",
    socials: { twitter: "https://x.com/xpander_ai", linkedin: "https://www.linkedin.com/company/xpander-ai" },
    founding_team: "David Twizer, Moriel Pahima and Ran Sheinberg — former AWS engineers — founded the company in 2024; based in Tel Aviv.",
    product_wedge: "A 'universal agent harness' that lets enterprises build, run, secure and govern AI agents as portable workloads across any cloud, model or framework, keeping execution inside the customer's own environment; ships 'Omni,' a flagship enterprise agent, and a governance layer positioned as 'a personal AI agent for every employee.'",
    funding_history: [
      { date: "2026-08-17", event: "$7.5M Seed", valuation: null, lead: "Pico Venture Partners", other_investors: "Emerge Ventures, Samsung Next, SeedIL" }
    ],
    disclosed_traction: [
      { date: "2026-08", metric: "usage/customers", value: "No ARR or customer count publicly disclosed" },
      { date: "2026-08", metric: "benchmark", value: "Self-reported: Omni agent scored 90.9% on the GAIA benchmark; Agent Graph System reported a 98% success rate on multi-step tasks vs. 24% for traditional methods in internal testing" }
    ],
    qualitative_signal: [
      { date: "2026-08", note: "Positions itself as a horizontal, vendor-neutral 'AI enablement platform' and 'personal AI agent for every employee,' rather than around one named production failure mode." }
    ],
    thesis_fit: "Low-to-moderate — real underlying engineering (portable agent runtime, credible benchmark results) but the go-to-market framing is exactly the horizontal 'agent builder' / 'agent for every employee' pattern theses.md calls out as overhyped and likely to get squeezed out by labs shipping better agent SDKs directly, rather than solving one specific, named production reliability problem.",
    verdict: "pass",
    verdict_rationale: "Credible team (ex-AWS) and a real technical benchmark, but the positioning is squarely the generic horizontal agent-builder pattern the thesis explicitly flags as low-fit and due for consolidation — no disclosed customers or ARR yet to argue otherwise, so this is a pass rather than a ground-floor pick.",
    last_updated: "2026-09-02"
  },
  {
    id: "onyx-security",
    name: "Onyx Security",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Security / governance (guardrails)",
    stage: "Series B",
    website: "https://www.onyx.security",
    socials: { twitter: null, linkedin: "https://linkedin.com/company/onyx-security" },
    founding_team: "Maxim Bar Kogan (CEO, ex-IDF Unit 8200 cyber intelligence, ex-VP Product & Engineering at Mixtiles) and Gil Elbaz (Chief AI Officer, ex-AI architect at NVIDIA) — co-founders; founded 2024, Israel.",
    product_wedge: "Secure AI control plane that discovers every AI agent across SaaS, cloud, endpoints and internal infrastructure, monitors each step of an agent's reasoning in real time, and lets security teams approve, modify, or block agent actions before they execute — not just post-incident log review; integrated directly with Anthropic (Jun 2026) to help secure enterprise Claude/agent adoption.",
    funding_history: [
      { date: "2026-03-11", event: "$40M launch funding ($5M Seed + $35M Series A)", valuation: null, lead: "Cyberstarts (Seed), Conviction (Series A)" },
      { date: "2026-07-29", event: "$113M Series B", valuation: 640, lead: "Bessemer Venture Partners", other_investors: "Cyberstarts, TCV, Conviction, FirstMark, Vintage Investment Partners, QuantumLight, G Squared" }
    ],
    disclosed_traction: [
      { date: "2026-07", metric: "revenue growth", value: "4x revenue growth in the 4 months since stealth launch (company-disclosed)" },
      { date: "2026-07", metric: "scale", value: "1.1M+ AI agents secured and 66M+ AI agent sessions inspected in real time across enterprise customers (company-disclosed)" },
      { date: "2026-07", metric: "customers", value: "Dozens of Fortune 500 companies across banking, technology, insurance, and energy (named count not disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Anthropic announced a direct integration with Onyx to help secure enterprise Claude/agent adoption — a credibility signal from a foundation-model lab, similar in spirit to the strategic-backing pattern already seen with Arize (Datadog/PagerDuty) and Casca (Canapi)." }
    ],
    thesis_fit: "High — sits squarely in the gateways/guardrails sub-category theses.md names as one of the three real agent-infra gaps; real operational scale metrics (1.1M+ agents secured, 66M+ sessions inspected) and a foundation-model-lab integration are concrete production evidence, not a demo.",
    verdict: "watch",
    verdict_rationale: "Fastest revenue growth signal of any infra company logged to date (4x in 4 months) backed by a top-tier lead (Bessemer) and validated by an Anthropic integration — but this is now the second security/governance guardrail company tracked after Zenity, so the two are direct competitors in a sub-category that could consolidate the way observability/eval already has (Langfuse/Helicone/Galileo acquired in 2026); worth comparing head-to-head at the next disclosed round.",
    last_updated: "2026-09-02"
  },
  {
    id: "interloom",
    name: "Interloom",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Memory / knowledge layer for AI agents",
    stage: "Seed",
    website: "https://interloom.com",
    socials: { twitter: "https://x.com/interloom", linkedin: null },
    founding_team: "Fabian Jakobi (Founder/CEO) — repeat founder, previously founded Boxplot (sold to Hyperscience in 2021); founded 2024, Munich/Berlin, Germany.",
    product_wedge: "Captures an enterprise's tacit operational knowledge — support emails, service tickets, call transcripts, work orders — into a continuously updated 'context graph' that becomes permanent, reusable memory for AI agents, addressing the fact that an estimated 70% of operational decisions are never written down.",
    funding_history: [
      { date: "2026-03-23", event: "$16.5M Seed (€14.2M)", valuation: null, lead: "DN Capital", other_investors: "Bek Ventures, Air Street Capital (existing investor)" }
    ],
    disclosed_traction: [
      { date: "2026-03", metric: "customers", value: "Named enterprise customers Zurich Insurance and Fiege (logistics), processing millions of operational cases (company-disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026", note: "Independent market analysis flags agent-memory systems as a thin standalone category — ~3.4% of agent-infra deals but only ~0.6% of category capital as of mid-2026 — because memory is increasingly treated as a feature labs ship natively rather than a durable independent business; worth weighing against Interloom's real named-customer traction." }
    ],
    thesis_fit: "Moderate-high — memory/context is one of the fragmented sub-categories theses.md names as part of the durable-execution/production-reliability gap, and named enterprise customers processing real volume is genuine evidence rather than a demo; but the memory sub-category specifically is flagged by market data as financially thin standalone, a real headwind theses.md's 18-month consolidation view would predict.",
    verdict: "revisit",
    verdict_rationale: "Real named customers (Zurich Insurance, Fiege) processing production volume at seed stage is a genuinely good sign, and the founder has a proven prior exit — but the memory-layer sub-category is the weakest-funded slice of agent infrastructure and the most exposed to foundation labs shipping native memory, so this is a name to check back on once a Series A proves the standalone business rather than score as a confident watch today.",
    last_updated: "2026-09-02"
  },
  {
    id: "spektr",
    name: "Spektr",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Compliance / KYC-KYB decisioning",
    stage: "Series A",
    website: "https://www.spektr.com",
    socials: { twitter: null, linkedin: "https://linkedin.com/company/getspektr" },
    founding_team: "Mikkel Skarnager, Jan-Erik Wagner, Jeremy Joly, and Ciprian Florescu — co-founders; Skarnager and Florescu previously founded digital-onboarding startup HelloFlow (2020), sold to Trulioo for $50M+ within two years. Founded 2023, Copenhagen, Denmark.",
    product_wedge: "Configurable AI agents that automate manual KYC/KYB compliance review for banks and fintechs — researching companies, verifying business activity, interpreting source documents, and generating structured risk rationales — replacing hours of analyst work with minutes of automated investigation, positioned as a replacement for manual compliance workflow rather than a copilot layered on top of it.",
    funding_history: [
      { date: "2026-04-16", event: "$20M Series A", valuation: null, lead: "New Enterprise Associates (NEA)", other_investors: "Northzone, Seedcamp, PSV Tech (existing investors)" }
    ],
    disclosed_traction: [
      { date: "2026-04", metric: "total raised", value: "$26M across all rounds" },
      { date: "2026-04", metric: "customers", value: "Live named customers: Pleo, Santander Leasing, Mercuryo, Phantom, Monta" }
    ],
    qualitative_signal: [
      { date: "2026-04", note: "Repeat-founder pattern with a real prior fintech exit (HelloFlow → Trulioo) — the same credible-repeat-founder signal already noted favorably for Concentrate AI and Rezolv in this tracker." }
    ],
    thesis_fit: "Very high — AI agents sit directly at a regulated compliance decision point (KYC/KYB review and risk rationale generation) inside real banks and fintechs, the exact wedge theses.md defines as winning; founding team combines real fintech/regulatory operating experience with a proven prior exit, matching the thesis's highest-fit scoring cue directly.",
    verdict: "watch",
    verdict_rationale: "Cleanest fintech thesis-fit sourced this cycle alongside Taktile/Casca: named bank and fintech customers, a regulated decision point as the actual product (not a chat layer), and repeat founders with a real prior exit in adjacent compliance tooling — a strong follow-up candidate for a first scored memo in this category.",
    last_updated: "2026-09-02"
  },
  {
    id: "nomic",
    name: "Nomic",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Construction / AEC (code compliance & document intelligence)",
    stage: "Series A (+ 2026 strategic investment)",
    website: "https://www.nomic.ai",
    socials: { twitter: "https://x.com/nomic_ai", linkedin: null },
    founding_team: "Brandon Duderstadt and Andriy Mulyar — co-founders, founded 2021 in New York; originally built open-source AI tooling (GPT4All, Nomic Atlas/Embed) before repositioning the company entirely around AEC-vertical AI starting in 2024.",
    product_wedge: "Domain-specific AI platform for architecture, engineering, and construction firms that grounds agents in a firm's own drawings, specs, and 380+ building codes/standards to automate code-compliance checking, QA/QC review, RFI management, and submittal review — claims up to 80% faster code-compliance checks and up to 12x faster submittal/spec review.",
    funding_history: [
      { date: "2023-07-13", event: "$17M Series A", valuation: 100, lead: "Coatue", other_investors: "Contrary Capital, Betaworks Ventures, SV Angel, Story Ventures, Factorial Capital" },
      { date: "2026-07-29", event: "Strategic investment (amount undisclosed) from Arcadis, entering a long-term commercial partnership", valuation: null, lead: "Arcadis" }
    ],
    disclosed_traction: [
      { date: "2026-07", metric: "pilot scale", value: "6-month pilot across ~150 Arcadis engineers, multiple disciplines/sectors/countries, testing Nomic's agents on drawing review, code compliance, submittal review, RFI research, and BIM coordination, ahead of Arcadis's strategic investment" }
    ],
    qualitative_signal: [
      { date: "2026-07", note: "A real strategic-pivot story: the company built its technical foundation in open-source embeddings/local LLMs (GPT4All has 33,000+ GitHub stars) before repositioning entirely around AEC-vertical AI; Arcadis — a top global AEC engineering firm — chose to invest strategically after a real multi-discipline pilot rather than simply license the product, a stronger validation signal than a VC-only round." }
    ],
    thesis_fit: "High — construction/AEC is an explicit 'open window' vertical theses.md calls out for extra sourcing attention, and the wedge (grounding agents in a firm's own project documents plus codified industry standards) fits the proprietary-data/workflow-ownership pattern the thesis rewards; the Arcadis strategic investment following a real pilot is closer to 'autonomous execution proof' than a typical seed-stage logo mention.",
    verdict: "watch",
    verdict_rationale: "The Arcadis investment is meaningfully different from a typical venture round — it followed a real 6-month, 150-engineer pilot and came from an actual AEC operator, not just a VC — which is rare, credible production validation; the open question is that the company's only disclosed priced round (Series A) predates the AEC pivot by about three years, so a fresh disclosed raise at current scale would sharpen this considerably.",
    last_updated: "2026-09-02"
  },
  {
    id: "earlytrade",
    name: "Earlytrade",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Construction (subcontractor payments / working-capital marketplace layering in agentic AI)",
    stage: "Growth (multiple rounds since 2019)",
    website: "https://earlytrade.com",
    socials: { twitter: "https://x.com/earlytrade", linkedin: "https://linkedin.com/company/earlytrade" },
    founding_team: "Guy Saxelby (CEO, previously scaled digital challenger bank Monese and The Exchange Lab, acquired by WPP) and Piers Symons (COO, ex-ASX data-analytics strategy lead) — co-founders; founded 2018, Australia, expanding into the US since 2024.",
    product_wedge: "Two-sided working-capital marketplace connecting general contractors and subcontractors for early/dynamic payment of invoices — now layering agentic AI on top of that existing marketplace to automate payment-timing and supply-chain-financing decisions, rather than being built AI-native from inception.",
    funding_history: [
      { date: "2019", event: "~$6M early funding round", valuation: null, lead: "unconfirmed" },
      { date: "2022", event: "~$8.9M Series A", valuation: null, lead: "unconfirmed" },
      { date: "2026-06-09", event: "~$10M growth round (round name unconfirmed) to fund US expansion and build agentic AI into the marketplace", valuation: null, lead: "S3 Ventures, Brick & Mortar Ventures (co-led)" }
    ],
    disclosed_traction: [
      { date: "2026-06", metric: "total raised", value: "~$25M across all rounds since 2019" },
      { date: "2026-06", metric: "scale", value: "211,000+ subcontractors in network; $3B+ in early payments facilitated globally; 7x revenue growth since entering the US market in 2024 (company-disclosed)" }
    ],
    qualitative_signal: [
      { date: "2026-06", note: "Investor commentary (S3 Ventures) framed the appeal as Earlytrade already having a live two-sided marketplace for agents to act inside — but the agentic-AI capability itself is newly announced and not yet shipped or measured; today's real, verified traction is the pre-AI payments marketplace, not an AI-native product." }
    ],
    thesis_fit: "Low-moderate — construction is an explicit 'open window' vertical and the underlying marketplace scale is real and well-verified, but the AI layer is a recent addition to an 8-year-old, non-AI-native payments business rather than a ground-up AI-native wedge — closer to the 'feature-level AI bolt-on to existing software' pattern theses.md flags as overhyped for vertical SaaS than to a company that owns its workflow via AI from day one.",
    verdict: "revisit",
    verdict_rationale: "The most verifiably large-scale traction sourced this week (211K+ subcontractors, $3B+ facilitated, 7x US revenue growth) — but it's traction from the pre-AI marketplace business, and the agentic-AI angle that makes this relevant to the thesis is unshipped and unmeasured; revisit once Earlytrade discloses actual agent usage or outcomes rather than scoring the announcement itself as thesis fit.",
    last_updated: "2026-09-02"
  },
  {
    id: "daytona",
    name: "Daytona",
    category: "agent-infrastructure",
    category_label: "Agent Infrastructure",
    subcategory: "Durable execution / agent-native compute sandboxes",
    stage: "Series A",
    website: "https://www.daytona.io",
    socials: { twitter: "https://x.com/daytonaio", linkedin: "https://linkedin.com/company/daytonaio" },
    founding_team: "Ivan Burazin (CEO), Vedran Jukic (CTO), and Goran Draganić (Chief Architect) — co-founders; Burazin previously founded Codeanywhere and was Chief Developer Experience Officer at Infobip. Founded 2023, pivoted from self-hosted dev-environment tooling to agent-native compute infrastructure.",
    product_wedge: "Stateful, composable 'computers' for AI agents — isolated sandboxes (dedicated kernel, filesystem, network stack) that spin up in under 90ms and can be paused, snapshotted, and forked into parallel execution branches, letting agents preserve state across failures and explore multiple paths. Positions itself as the compute/runtime layer, distinct from orchestration or eval tooling.",
    funding_history: [
      { date: "2023-11", event: "$2M pre-seed", valuation: null, lead: "unconfirmed" },
      { date: "2024-06", event: "$5M seed", valuation: null, lead: "Upfront Ventures" },
      { date: "2026-04", event: "$24M Series A", valuation: null, lead: "FirstMark Capital", other_investors: "Pace Capital, Upfront Ventures, E2VC, Darkmode; strategic investment from Datadog and Figma Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-04", metric: "forward revenue run-rate", value: "$1M reached within ~3 months of launching the current product; doubled roughly 6 weeks later (company-disclosed, exact dates not published)" }
    ],
    qualitative_signal: [
      { date: "2026-04", note: "Named customers span early-stage YC startups to Fortune 100s, including LangChain, Turing, Writer, and SambaNova; Datadog and Figma Ventures joined as strategic investors alongside the Series A." }
    ],
    thesis_fit: "High — solves a concrete production problem (stateful, isolated compute for agent execution) that foundation model labs are unlikely to own themselves; open-source-adjacent, developer-led distribution matches the go-to-market theses.md flags as the winning pattern pre-Series B.",
    verdict: "watch",
    verdict_rationale: "Fast, usage-driven revenue growth (self-reported doubling within weeks) plus credible infra-focused strategic backers (Datadog, Figma) support the durable-execution/compute sub-thesis theses.md flags as one of the two agent-infra sub-categories most likely to matter in 3 years. Figures are still small and self-reported — recheck once a disclosed ARR number exists.",
    last_updated: "2026-09-02"
  },
  {
    id: "crosby",
    name: "Crosby",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Legal (AI-native law firm / services-as-software)",
    stage: "Series B",
    website: "https://crosby.ai",
    socials: { twitter: "https://x.com/crosbylegal", linkedin: null },
    founding_team: "Ryan Daniels (CEO) — Stanford JD, ex-Cooley associate, ex-Bain EIR, ex-A.Team General Counsel — and John Sarihan (CTO) — ex-Ramp product leader, Penn M&T. Co-founded 2024.",
    product_wedge: "Operates as an actual two-entity law firm (Crosby Legal PLLC for the legal work, Crosby Legal Inc. for the AI technology) rather than selling software to lawyers — AI drafts and negotiates MSAs/DPAs/NDAs with licensed lawyers in the loop, reviewing a new contract in under an hour. A 'services-as-software' model that replaces outside-counsel spend directly rather than assisting it.",
    funding_history: [
      { date: "2024", event: "$5.8M seed", valuation: null, lead: "Sequoia Capital" },
      { date: "2026-04", event: "$60M Series B", valuation: 400, lead: "Lux Capital, Index Ventures (co-led)", other_investors: "Sequoia Capital, 01 Advisors, Bain Capital Ventures, Elad Gil (angel)" }
    ],
    disclosed_traction: [
      { date: "2025-06", metric: "total negotiated contract volume", value: "$30M" },
      { date: "2026-04", metric: "total negotiated contract volume", value: "$1B" }
    ],
    qualitative_signal: [
      { date: "2026-03", note: "Named customers include Cursor; press framing positions Crosby as 'ditching the billable hour,' distinguishing it from both traditional law firms and copilot-style legal-AI tools." }
    ],
    thesis_fit: "High — legal is an explicitly 'crowded but real' vertical per theses.md; Crosby differentiates by owning the full workflow (delivering the actual legal work product, not just a review tool), which is the wedge theses.md identifies as the one that wins.",
    verdict: "watch",
    verdict_rationale: "Negotiated contract volume grew from $30M to $1B in under a year, and the two-entity law-firm structure is a genuine model innovation rather than a feature bolt-on. Legal is already crowded and richly valued (Harvey is logged here too), so this is a differentiated sub-niche bet rather than a first-mover pick.",
    last_updated: "2026-09-02"
  },
  {
    id: "ivo",
    name: "Ivo",
    category: "vertical-saas-ai-native",
    category_label: "Vertical SaaS — AI-native",
    subcategory: "Legal (contract review / contract intelligence tool)",
    stage: "Series B",
    website: "https://www.ivo.ai",
    socials: { twitter: "https://x.com/heyivoai", linkedin: "https://linkedin.com/company/ivoai" },
    founding_team: "Min-Kyu Jung (CEO/founder) — former corporate lawyer in New Zealand who taught himself to code and built the first version of the product himself. Founded 2021 (originally as 'Latch'), relocated HQ to San Francisco in 2023.",
    product_wedge: "AI-powered contract review and redlining delivered as a Word add-in for in-house legal teams — compares each deal against a company's prior negotiated agreements and auto-detects relationships across a contract library (amendments, restatements, supersessions) without manual tagging. An assistive tool embedded in the legal team's existing workflow, not a replacement for outside counsel.",
    funding_history: [
      { date: "2026-01", event: "$55M Series B", valuation: null, lead: "Blackbird (existing investor)", other_investors: "Costanoa Ventures, Uncork Capital, Fika Ventures, GD1, Icehouse Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-01", metric: "ARR growth since last round", value: "+500%" },
      { date: "2026-01", metric: "customer count growth since last round", value: "+134%" },
      { date: "2026-01", metric: "Fortune 500 adoption growth since last round", value: "+250%" },
      { date: "2026-01", metric: "named customers", value: "Uber, Shopify, Atlassian, Reddit, Canva (hundreds of organizations total)" }
    ],
    qualitative_signal: [
      { date: "2026-01", note: "~60 employees at time of raise; plans to more than triple headcount by year-end." }
    ],
    thesis_fit: "Low-moderate — strong growth, but the product assists lawyers within the existing in-house-counsel workflow rather than owning and executing it end to end; theses.md explicitly flags point solutions like this as prone to commoditization once a platform player (or a full-service competitor like Crosby, also sourced this week) adds the same feature.",
    verdict: "revisit",
    verdict_rationale: "Growth metrics are genuinely strong (500% ARR growth, blue-chip logos including Uber and Canva), but thesis-fit is weaker than category peers Harvey and Crosby — Ivo assists lawyers rather than replacing the work product, the exact pattern theses.md warns gets squeezed by broader platforms over time. Worth rechecking if it expands beyond contract review into fuller workflow ownership.",
    last_updated: "2026-09-02"
  },
  {
    id: "catena-labs",
    name: "Catena Labs",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Agentic payments / AI-native banking infrastructure",
    stage: "Series A",
    website: "https://catena.com",
    socials: { twitter: "https://x.com/catena_labs", linkedin: "https://linkedin.com/company/catenalabs" },
    founding_team: "Sean Neville (CEO) — co-founder and former co-CEO of Circle, co-created the USDC stablecoin — and Matt Venables (CTO), also a Circle alum. Boston-based; founded 2025.",
    product_wedge: "Building what it describes as the first fully regulated AI-native financial institution — banking rails purpose-built for AI agents to hold funds, make payments, and transact autonomously. Has filed with the U.S. OCC for a national trust bank charter, making the regulatory path itself part of the moat rather than a retrofit onto legacy rails.",
    funding_history: [
      { date: "2025-05", event: "$18M seed", valuation: null, lead: "a16z crypto" },
      { date: "2026-05-20", event: "$30M Series A", valuation: null, lead: "Acrew Capital, a16z crypto (co-led)", other_investors: "Breyer Capital, General Catalyst, QED Investors" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "regulatory milestone", value: "Filed application with the OCC for a national trust bank charter in New York (not yet approved as of this writing)" }
    ],
    qualitative_signal: [
      { date: "2026-05", note: "No disclosed revenue, transaction volume, or customer count — company is pre-launch, building regulatory and banking infrastructure ahead of shipping a product." }
    ],
    thesis_fit: "High on paper — agentic payments / agent-first banking is the least-crowded fintech sub-thread theses.md flags as deserving disproportionate sourcing attention, and a real bank-charter filing is a genuine regulatory moat rather than a chat layer over existing rails. Founding team has rare direct experience building regulated financial infrastructure at scale (USDC/Circle).",
    verdict: "watch",
    verdict_rationale: "Best-pedigreed team and most structurally serious regulatory bet sourced this week in the agentic-payments sub-thread theses.md calls out as underweighted — but there is zero disclosed usage or revenue yet, and the bank charter is filed, not granted. Track the charter process and any post-launch traction closely rather than treating this as proven.",
    last_updated: "2026-09-02"
  },
  {
    id: "saris",
    name: "Saris",
    category: "ai-native-fintech",
    category_label: "AI-native Fintech",
    subcategory: "Bank / credit-union back-office & lending workflow automation",
    stage: "Series A",
    website: "https://saris.ai",
    socials: { twitter: null, linkedin: null },
    founding_team: "Danial Jameel (CEO), Alice Dinu, and James Dang — repeat founders who previously built Oohlala Mobile together.",
    product_wedge: "AI agents trained on a specific bank or credit union's existing systems and workflows that execute back-office lending tasks (consumer, mortgage, commercial) autonomously under human supervision, rather than a generic chatbot or copilot. Go-to-market leans on deep integrations with core banking/lending platforms (Fiserv, Encompass, MeridianLink).",
    funding_history: [
      { date: "2026-05-28", event: "$28.8M Series A", valuation: null, lead: "8VC", other_investors: "Audacious Ventures, Homebrew, Btech Consortium, Service Ventures" }
    ],
    disclosed_traction: [
      { date: "2026-05", metric: "lending task automation", value: "up to 70% of consumer/mortgage/commercial lending back-office tasks automated (customer-reported)" },
      { date: "2026-05", metric: "cost reduction", value: "up to 35% operational cost reduction at early bank/credit-union customers" },
      { date: "2026-05", metric: "output growth", value: "more than doubled lending output without adding headcount at early customers" }
    ],
    qualitative_signal: [
      { date: "2026-05", note: "Funding earmarked for deeper integrations with Fiserv, Encompass, and MeridianLink — a distribution-via-core-platform strategy typical of bank back-office vendors." }
    ],
    thesis_fit: "Medium-high — touches a regulated lending workflow at real banks/credit unions with credible customer-reported efficiency numbers, though it reads closer to back-office workflow automation (like Rillet/Poetic, logged as vertical SaaS) than to a company that owns the underwriting/credit decision itself, which is the sharper fintech wedge in theses.md.",
    verdict: "watch",
    verdict_rationale: "Concrete, named efficiency metrics (70% task automation, 35% cost reduction, doubled output) at real regulated financial institutions are exactly the kind of proof point theses.md wants, and the 8VC-led round plus integration-partner strategy (Fiserv, Encompass, MeridianLink) suggest a credible distribution plan. Categorized as fintech given its direct role in lending workflow, but the boundary with vertical-SaaS back-office tooling is genuinely blurry — revisit how autonomous vs. assistive the actual lending decisions are as more detail emerges.",
    last_updated: "2026-09-02"
  }
];
