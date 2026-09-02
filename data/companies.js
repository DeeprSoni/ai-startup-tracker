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
  }
];
