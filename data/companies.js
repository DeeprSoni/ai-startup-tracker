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
  }
];
