/**
 * src/lib/mockData.ts
 * ═══════════════════════════════════════════════════════════════
 * CaseLens — Comprehensive Indian Judicial Dataset (Demo / Offline Mode)
 *
 * Coverage:
 *   • 50 court cases across 10 Indian courts
 *   • 8 case types: CRL.A, W.P.(C), SLP(C), SLP(CRL.), PIL, C.A.,
 *                   O.M.P., C.S.(Comm.), CRL.M.C., W.P.(T)
 *   • 4 statuses: pending, hearing, reserved, disposed
 *   • 3 complexity levels: Low, Medium, High
 *   • Priority scores 42 – 97
 *   • 20 landmark precedents (authentic Indian law citations)
 *   • Full SHAP factor explanations per case
 *   • Model benchmark metrics & feature importance
 * ═══════════════════════════════════════════════════════════════
 */

import {
  CourtCase,
  Precedent,
  ModelMetricComparison,
  FeatureImportance,
} from "./types";

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 1 — COURT CASES
// ─────────────────────────────────────────────────────────────────────────────

export const MOCK_CASES: CourtCase[] = [
  // ═══ UNDER HEARING (8 cases) ═══════════════════════════════════════════════

  {
    id: "case-001",
    caseNo: "CRL.A 4821/2024",
    caseType: "CRL.A",
    court: "Supreme Court of India",
    filingDate: "2024-02-14",
    hearingsCount: 22,
    status: "hearing",
    bench: "Division Bench IV",
    petitioner: "Arvind Kumar Sharma",
    respondent: "State of Uttar Pradesh",
    actsSections: ["IPC Sec. 302", "CrPC Sec. 374", "Constitution Art. 21"],
    description:
      "Appeal against conviction for murder under IPC Section 302; petitioner seeks acquittal citing circumstantial evidence insufficiency and denial of fair trial principles.",
    top1Similarity: 0.91,
    meanTop5Similarity: 0.84,
    countAboveThreshold: 5,
    matchedPrecedentIds: ["prec-001", "prec-002", "prec-003"],
    prediction: {
      predictedDays: 48,
      complexity: "High",
      priorityScore: 92.4,
      confidenceIntervalDays: [30, 72],
      precedentConfidence: 0.91,
      shapFactors: [
        {
          feature: "Precedent Convergence",
          impact: "reduces_delay",
          impactDays: -32,
          plainEnglishReason:
            "Strong binding precedent from Sharad Birdhichand Sarda (1984) narrows deliberative scope significantly.",
        },
        {
          feature: "Hearing Frequency",
          impact: "reduces_delay",
          impactDays: -18,
          plainEnglishReason:
            "22 prior hearings indicate advanced stage; arguments nearly complete.",
        },
        {
          feature: "Constitutional Liberty Dimension",
          impact: "reduces_delay",
          impactDays: -12,
          plainEnglishReason:
            "Personal liberty cases receive expedited listing per court's own administrative policy.",
        },
      ],
    },
  },

  {
    id: "case-002",
    caseNo: "CRL.A 3390/2024",
    caseType: "CRL.A",
    court: "Supreme Court of India",
    filingDate: "2024-03-21",
    hearingsCount: 18,
    status: "hearing",
    bench: "Division Bench II",
    petitioner: "Mohammad Irfan",
    respondent: "State of Maharashtra",
    actsSections: ["PMLA Sec. 45", "PMLA Sec. 3", "Constitution Art. 21"],
    description:
      "Bail application challenging twin conditions under PMLA Section 45 for alleged money laundering offence; prolonged custody without trial exceeding 3 years.",
    top1Similarity: 0.93,
    meanTop5Similarity: 0.88,
    countAboveThreshold: 6,
    matchedPrecedentIds: ["prec-004", "prec-005"],
    prediction: {
      predictedDays: 38,
      complexity: "High",
      priorityScore: 95.7,
      confidenceIntervalDays: [22, 55],
      precedentConfidence: 0.93,
      shapFactors: [
        {
          feature: "Precedent Convergence",
          impact: "reduces_delay",
          impactDays: -40,
          plainEnglishReason:
            "Vijay Madanlal Choudhary (2022) provides definitive ruling on twin conditions applicability.",
        },
        {
          feature: "Pre-Trial Detention Period",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "3+ year pre-trial detention creates constitutional urgency for immediate disposal.",
        },
      ],
    },
  },

  {
    id: "case-003",
    caseNo: "W.P.(C) 11203/2024",
    caseType: "W.P.(C)",
    court: "Delhi High Court",
    filingDate: "2024-01-09",
    hearingsCount: 14,
    status: "hearing",
    bench: "Single Bench (Writ)",
    petitioner: "Priya Mehrotra",
    respondent: "Union of India (MoEF)",
    actsSections: ["Environment Protection Act Sec. 5", "Constitution Art. 48A", "Constitution Art. 51A(g)"],
    description:
      "Writ petition challenging unlawful clearance of forest land for industrial project without mandatory EIA; seeking restoration of ecological balance and judicial monitoring.",
    top1Similarity: 0.87,
    meanTop5Similarity: 0.79,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-006", "prec-007"],
    prediction: {
      predictedDays: 65,
      complexity: "High",
      priorityScore: 88.1,
      confidenceIntervalDays: [45, 90],
      precedentConfidence: 0.87,
      shapFactors: [
        {
          feature: "Precedent Convergence",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "T.N. Godavarman line of cases provides settled constitutional framework on forest protection.",
        },
        {
          feature: "Government Respondent Complexity",
          impact: "increases_delay",
          impactDays: 28,
          plainEnglishReason:
            "Ministry counter-affidavit filing timelines add procedural lag to hearings.",
        },
      ],
    },
  },

  {
    id: "case-004",
    caseNo: "O.M.P.(I) 892/2024",
    caseType: "O.M.P.",
    court: "Delhi High Court",
    filingDate: "2024-04-05",
    hearingsCount: 9,
    status: "hearing",
    bench: "Commercial Bench",
    petitioner: "Reliance Infrastructure Ltd.",
    respondent: "DMRC",
    actsSections: ["Arbitration Act Sec. 9", "Arbitration Act Sec. 34", "Commercial Courts Act Sec. 12A"],
    description:
      "Emergency interim injunction application pending arbitration over disputed project termination; contractor seeks stay on encashment of bank guarantees worth ₹3,500 crore.",
    top1Similarity: 0.82,
    meanTop5Similarity: 0.76,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-008"],
    prediction: {
      predictedDays: 55,
      complexity: "Medium",
      priorityScore: 78.3,
      confidenceIntervalDays: [35, 80],
      precedentConfidence: 0.82,
      shapFactors: [
        {
          feature: "Commercial Urgency",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Commercial courts mandated 60-day disposal under Commercial Courts Act 2015.",
        },
        {
          feature: "Financial Stakes",
          impact: "increases_delay",
          impactDays: 15,
          plainEnglishReason:
            "High-value government infrastructure disputes involve additional cabinet-level approvals.",
        },
      ],
    },
  },

  {
    id: "case-005",
    caseNo: "SLP(C) 8841/2024",
    caseType: "SLP(C)",
    court: "Supreme Court of India",
    filingDate: "2024-05-17",
    hearingsCount: 7,
    status: "hearing",
    bench: "Division Bench I",
    petitioner: "Tata Consultancy Services Ltd.",
    respondent: "Commissioner of Income Tax, Mumbai",
    actsSections: ["Income Tax Act Sec. 143(3)", "Income Tax Act Sec. 263", "Income Tax Act Sec. 10AA"],
    description:
      "Special leave petition challenging High Court's order upholding CIT's revision jurisdiction in a software services export exemption dispute involving ₹1,240 crore tax demand.",
    top1Similarity: 0.79,
    meanTop5Similarity: 0.72,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-009", "prec-010"],
    prediction: {
      predictedDays: 90,
      complexity: "Medium",
      priorityScore: 71.2,
      confidenceIntervalDays: [65, 120],
      precedentConfidence: 0.79,
      shapFactors: [
        {
          feature: "Tax Corpus Depth",
          impact: "reduces_delay",
          impactDays: -15,
          plainEnglishReason:
            "Extensive tax precedent corpus enables rapid analogical reasoning by bench.",
        },
        {
          feature: "Complexity of Assessment Records",
          impact: "increases_delay",
          impactDays: 25,
          plainEnglishReason:
            "Transfer pricing and software export documentation require expert assessment.",
        },
      ],
    },
  },

  {
    id: "case-006",
    caseNo: "CRL.A 1120/2024",
    caseType: "CRL.A",
    court: "Karnataka High Court",
    filingDate: "2024-04-25",
    hearingsCount: 11,
    status: "hearing",
    bench: "Division Bench",
    petitioner: "K. Suresh Gowda",
    respondent: "State of Karnataka",
    actsSections: ["IPC Sec. 376", "POCSO Act Sec. 6", "POCSO Act Sec. 29", "Indian Evidence Act Sec. 114A"],
    description:
      "Appeal against conviction under POCSO Act; petitioner challenges identification evidence and reliability of minor victim's testimony recorded without procedural safeguards.",
    top1Similarity: 0.84,
    meanTop5Similarity: 0.77,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-011"],
    prediction: {
      predictedDays: 95,
      complexity: "High",
      priorityScore: 87.4,
      confidenceIntervalDays: [70, 125],
      precedentConfidence: 0.84,
      shapFactors: [
        {
          feature: "Child Victim Case Priority",
          impact: "reduces_delay",
          impactDays: -25,
          plainEnglishReason:
            "POCSO Act Sec. 35 mandates completion of trial within 1 year — appellate courts follow same urgency.",
        },
        {
          feature: "Evidentiary Complexity",
          impact: "increases_delay",
          impactDays: 30,
          plainEnglishReason:
            "Child testimony reliability analysis requires specialist input from courts.",
        },
      ],
    },
  },

  {
    id: "case-007",
    caseNo: "C.S.(Comm.) 441/2024",
    caseType: "C.S.(Comm.)",
    court: "Delhi High Court",
    filingDate: "2024-08-19",
    hearingsCount: 6,
    status: "hearing",
    bench: "Commercial Bench",
    petitioner: "Adobe Inc.",
    respondent: "Creative Fonts Studio Pvt. Ltd.",
    actsSections: ["Copyright Act Sec. 51", "Trademarks Act Sec. 29", "Information Technology Act Sec. 66"],
    description:
      "IP infringement suit alleging unauthorised reproduction of proprietary font software and trademark passing-off in SaaS product; interim injunction granted and confirmed.",
    top1Similarity: 0.78,
    meanTop5Similarity: 0.71,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-012"],
    prediction: {
      predictedDays: 180,
      complexity: "High",
      priorityScore: 67.3,
      confidenceIntervalDays: [140, 220],
      precedentConfidence: 0.78,
      shapFactors: [
        {
          feature: "IP Complexity",
          impact: "increases_delay",
          impactDays: 45,
          plainEnglishReason:
            "Technical expert witnesses and software code forensics elongate proceedings significantly.",
        },
        {
          feature: "Commercial Track",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Commercial court timelines mandate stricter case management under CPC Order XVA.",
        },
      ],
    },
  },

  {
    id: "case-008",
    caseNo: "W.P.(PIL) 2234/2024",
    caseType: "W.P.(C)",
    court: "Madras High Court",
    filingDate: "2024-05-30",
    hearingsCount: 8,
    status: "hearing",
    bench: "Division Bench",
    petitioner: "Tamil Nadu Advocates Association",
    respondent: "State of Tamil Nadu (Home Department)",
    actsSections: ["Prison Act Sec. 31", "Constitution Art. 21", "Constitution Art. 14", "Prisons Act Sec. 59"],
    description:
      "PIL seeking structural reforms in Tamil Nadu prisons — overcrowding beyond 180% capacity, inadequate medical care, illegal undertrial detentions exceeding maximum remand periods.",
    top1Similarity: 0.77,
    meanTop5Similarity: 0.70,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-013"],
    prediction: {
      predictedDays: 145,
      complexity: "High",
      priorityScore: 73.6,
      confidenceIntervalDays: [110, 185],
      precedentConfidence: 0.77,
      shapFactors: [
        {
          feature: "Systemic Reform Complexity",
          impact: "increases_delay",
          impactDays: 60,
          plainEnglishReason:
            "Structural compliance monitoring requires multiple committee inspection rounds and state compliance reports.",
        },
        {
          feature: "Constitutional Mandate",
          impact: "reduces_delay",
          impactDays: -25,
          plainEnglishReason:
            "Article 21 dignity-in-detention principle provides strong basis for expedited interim directions.",
        },
      ],
    },
  },

  // ═══ JUDGMENT RESERVED (7 cases) ════════════════════════════════════════════

  {
    id: "case-009",
    caseNo: "CRL.A 2017/2023",
    caseType: "CRL.A",
    court: "Supreme Court of India",
    filingDate: "2023-11-22",
    hearingsCount: 31,
    status: "reserved",
    bench: "Constitution Bench",
    petitioner: "Bilal Ahmed Kaloo",
    respondent: "State of Jammu & Kashmir",
    actsSections: ["UAPA Sec. 15", "NIA Act Sec. 21", "Constitution Art. 22", "Constitution Art. 21"],
    description:
      "Constitutional challenge to detention without trial under UAPA; judgment reserved after final arguments on proportionality of restrictions on bail in terror financing allegations.",
    top1Similarity: 0.88,
    meanTop5Similarity: 0.81,
    countAboveThreshold: 5,
    matchedPrecedentIds: ["prec-014", "prec-015"],
    prediction: {
      predictedDays: 28,
      complexity: "High",
      priorityScore: 85.6,
      confidenceIntervalDays: [18, 42],
      precedentConfidence: 0.88,
      shapFactors: [
        {
          feature: "Reserved Judgment Trajectory",
          impact: "reduces_delay",
          impactDays: -45,
          plainEnglishReason:
            "Post-reservation, Constitution Bench pronouncements typically occur within 3–6 weeks.",
        },
        {
          feature: "Constitutional Significance",
          impact: "increases_delay",
          impactDays: 15,
          plainEnglishReason:
            "Bench deliberation on UAPA bail restrictions involves nuanced rights-balancing analysis.",
        },
      ],
    },
  },

  {
    id: "case-010",
    caseNo: "W.P.(C) 7723/2023",
    caseType: "W.P.(C)",
    court: "Bombay High Court",
    filingDate: "2023-09-14",
    hearingsCount: 24,
    status: "reserved",
    bench: "Division Bench",
    petitioner: "Citizens for Clean Air Forum",
    respondent: "State of Maharashtra & MPCB",
    actsSections: ["Air (Prevention & Control of Pollution) Act Sec. 31A", "Constitution Art. 21", "Environment Protection Act Sec. 15"],
    description:
      "Public interest litigation against industrial air polluters in Pune district; judgment reserved after final arguments on remediation timelines, compliance penalties, and industry shutdowns.",
    top1Similarity: 0.85,
    meanTop5Similarity: 0.78,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-006"],
    prediction: {
      predictedDays: 22,
      complexity: "Medium",
      priorityScore: 80.4,
      confidenceIntervalDays: [14, 35],
      precedentConfidence: 0.85,
      shapFactors: [
        {
          feature: "Reserved Judgment Trajectory",
          impact: "reduces_delay",
          impactDays: -50,
          plainEnglishReason:
            "Arguments concluded; bench deliberating on penalty quantum and compliance monitoring structure only.",
        },
      ],
    },
  },

  {
    id: "case-011",
    caseNo: "C.A. 5519/2023",
    caseType: "C.A.",
    court: "Supreme Court of India",
    filingDate: "2023-07-30",
    hearingsCount: 19,
    status: "reserved",
    bench: "Division Bench III",
    petitioner: "Sajjan Kumar Agarwal (HUF)",
    respondent: "M/s Greenland Developers Pvt. Ltd.",
    actsSections: ["Transfer of Property Act Sec. 54", "Registration Act Sec. 17", "Specific Relief Act Sec. 10"],
    description:
      "Civil appeal in property title dispute; judgment reserved after final submissions on enforceability of agreement to sell and specific performance decree against developer.",
    top1Similarity: 0.76,
    meanTop5Similarity: 0.70,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 32,
      complexity: "Medium",
      priorityScore: 74.9,
      confidenceIntervalDays: [20, 48],
      precedentConfidence: 0.76,
      shapFactors: [
        {
          feature: "Reserved Judgment Trajectory",
          impact: "reduces_delay",
          impactDays: -40,
          plainEnglishReason:
            "Title question straightforward; quantum valuation computation only remains post-judgment.",
        },
      ],
    },
  },

  {
    id: "case-012",
    caseNo: "SLP(C) 22104/2024",
    caseType: "SLP(C)",
    court: "Supreme Court of India",
    filingDate: "2024-10-07",
    hearingsCount: 12,
    status: "reserved",
    bench: "Division Bench I",
    petitioner: "HDFC Bank Ltd.",
    respondent: "M/s Triton Industries (In Liquidation)",
    actsSections: ["IBC Sec. 53", "IBC Sec. 230", "Companies Act Sec. 391"],
    description:
      "Challenge to NCLAT order overriding secured creditor's waterfall priority under IBC Section 53 during corporate insolvency resolution process; judgment reserved after extensive arguments.",
    top1Similarity: 0.89,
    meanTop5Similarity: 0.83,
    countAboveThreshold: 5,
    matchedPrecedentIds: ["prec-017"],
    prediction: {
      predictedDays: 25,
      complexity: "High",
      priorityScore: 90.1,
      confidenceIntervalDays: [15, 38],
      precedentConfidence: 0.89,
      shapFactors: [
        {
          feature: "IBC Waterfall Precedent",
          impact: "reduces_delay",
          impactDays: -35,
          plainEnglishReason:
            "Committee of Creditors (2021) definitively settles Sec. 53 priority order — only application to facts remains.",
        },
        {
          feature: "Reserved Judgment Trajectory",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Post-reservation commercial matters typically pronounced within 3–4 weeks.",
        },
      ],
    },
  },

  {
    id: "case-013",
    caseNo: "W.P.(C) 18845/2024",
    caseType: "W.P.(C)",
    court: "Allahabad High Court",
    filingDate: "2024-09-03",
    hearingsCount: 16,
    status: "reserved",
    bench: "Single Bench (Writ)",
    petitioner: "UP Farmers Welfare Association",
    respondent: "State of Uttar Pradesh (Revenue Department)",
    actsSections: ["Land Acquisition Act Sec. 11", "Constitution Art. 300A", "Constitution Art. 14", "RFCTLARR Act Sec. 24"],
    description:
      "Challenge to bulk land acquisition notifications affecting 1,200 farmers without adequate compensation and mandatory social impact assessment; judgment reserved.",
    top1Similarity: 0.86,
    meanTop5Similarity: 0.80,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-018", "prec-019"],
    prediction: {
      predictedDays: 20,
      complexity: "High",
      priorityScore: 83.2,
      confidenceIntervalDays: [12, 32],
      precedentConfidence: 0.86,
      shapFactors: [
        {
          feature: "Constitutional Property Rights",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Pune Municipal Corporation precedent provides clear SIA requirement framework — legal position settled.",
        },
        {
          feature: "Reserved Judgment Trajectory",
          impact: "reduces_delay",
          impactDays: -30,
          plainEnglishReason:
            "Post-reservation, pronouncement expected within 3 weeks per bench's scheduling.",
        },
      ],
    },
  },

  {
    id: "case-014",
    caseNo: "C.A. 7812/2024",
    caseType: "C.A.",
    court: "Supreme Court of India",
    filingDate: "2024-06-18",
    hearingsCount: 10,
    status: "reserved",
    bench: "Division Bench IV",
    petitioner: "Life Insurance Corporation of India",
    respondent: "Mrs. Kamla Devi (Legal Heir)",
    actsSections: ["Insurance Act Sec. 45", "Consumer Protection Act Sec. 17", "IRDA Act Sec. 14"],
    description:
      "Appeal in insurance repudiation dispute; LIC challenges NCDRC order awarding enhanced death claim with interest on grounds of alleged policy misrepresentation at inception.",
    top1Similarity: 0.72,
    meanTop5Similarity: 0.66,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-020"],
    prediction: {
      predictedDays: 30,
      complexity: "Low",
      priorityScore: 58.7,
      confidenceIntervalDays: [20, 45],
      precedentConfidence: 0.72,
      shapFactors: [
        {
          feature: "Consumer Forum Precedent",
          impact: "reduces_delay",
          impactDays: -15,
          plainEnglishReason:
            "NCDRC orders on Section 45 misrepresentation are uniformly settled; factual application only remains.",
        },
        {
          feature: "Reserved Judgment Trajectory",
          impact: "reduces_delay",
          impactDays: -25,
          plainEnglishReason:
            "Straightforward insurance matter; bench deliberation limited to quantum assessment.",
        },
      ],
    },
  },

  {
    id: "case-015",
    caseNo: "SLP(CRL.) 4409/2024",
    caseType: "SLP(C)",
    court: "Supreme Court of India",
    filingDate: "2024-07-29",
    hearingsCount: 9,
    status: "reserved",
    bench: "Division Bench II",
    petitioner: "Gaurav Tiwari",
    respondent: "State of Chhattisgarh",
    actsSections: ["CrPC Sec. 41A", "Constitution Art. 21", "Constitution Art. 22"],
    description:
      "Petition challenging mechanical arrest without Section 41A notice by state police in a property dispute case; seeking implementation of Arnesh Kumar guidelines by state police.",
    top1Similarity: 0.92,
    meanTop5Similarity: 0.86,
    countAboveThreshold: 6,
    matchedPrecedentIds: ["prec-003"],
    prediction: {
      predictedDays: 18,
      complexity: "Low",
      priorityScore: 91.7,
      confidenceIntervalDays: [10, 28],
      precedentConfidence: 0.92,
      shapFactors: [
        {
          feature: "Settled Guidelines",
          impact: "reduces_delay",
          impactDays: -45,
          plainEnglishReason:
            "Arnesh Kumar (2014) guidelines are unambiguous — factual application to police conduct only remains.",
        },
        {
          feature: "Reserved Judgment Trajectory",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Post-reservation, liberty matter expected to be pronounced within 2 weeks.",
        },
      ],
    },
  },

  // ═══ PENDING (30 cases) ══════════════════════════════════════════════════════

  {
    id: "case-016",
    caseNo: "W.P.(C) 15002/2024",
    caseType: "W.P.(C)",
    court: "Supreme Court of India",
    filingDate: "2024-06-01",
    hearingsCount: 3,
    status: "pending",
    bench: "Single Bench (Admission)",
    petitioner: "Dr. Vandana Singh",
    respondent: "Medical Council of India",
    actsSections: ["Constitution Art. 19(1)(g)", "Indian Medical Council Act Sec. 10A", "Constitution Art. 14"],
    description:
      "Challenge to arbitrary cancellation of medical college recognition affecting 150 MBBS students; urgent stay application pending; first admission hearing scheduled.",
    top1Similarity: 0.80,
    meanTop5Similarity: 0.74,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-007"],
    prediction: {
      predictedDays: 110,
      complexity: "Medium",
      priorityScore: 76.8,
      confidenceIntervalDays: [80, 140],
      precedentConfidence: 0.80,
      shapFactors: [
        {
          feature: "Student Welfare Urgency",
          impact: "reduces_delay",
          impactDays: -25,
          plainEnglishReason:
            "Academic calendars impose natural urgency; courts typically grant interim orders within 2 hearings.",
        },
        {
          feature: "Fresh Filing",
          impact: "increases_delay",
          impactDays: 40,
          plainEnglishReason:
            "Counter-affidavit from MCI and centre pending; full hearing cycle not yet commenced.",
        },
      ],
    },
  },

  {
    id: "case-017",
    caseNo: "CRL.M.C. 3301/2024",
    caseType: "CRL.M.C.",
    court: "Delhi High Court",
    filingDate: "2024-07-11",
    hearingsCount: 5,
    status: "pending",
    bench: "Single Bench (Criminal)",
    petitioner: "Rahul Verma",
    respondent: "State (NCT of Delhi)",
    actsSections: ["CrPC Sec. 482", "IPC Sec. 420", "IPC Sec. 406"],
    description:
      "Petition to quash FIR registered for cheating and criminal breach of trust in a commercial dispute, alleging civil nature of the matter and abuse of criminal process.",
    top1Similarity: 0.83,
    meanTop5Similarity: 0.77,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-001"],
    prediction: {
      predictedDays: 85,
      complexity: "Medium",
      priorityScore: 69.5,
      confidenceIntervalDays: [60, 115],
      precedentConfidence: 0.83,
      shapFactors: [
        {
          feature: "FIR Quashing Corpus",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Bhajan Lal guidelines well-settled for commercial FIRs; bench can apply without extensive deliberation.",
        },
        {
          feature: "CBI/Police Response Time",
          impact: "increases_delay",
          impactDays: 25,
          plainEnglishReason:
            "State response on FIR investigation status typically takes 4–6 weeks for first hearing.",
        },
      ],
    },
  },

  {
    id: "case-018",
    caseNo: "W.P.(C) 21103/2024",
    caseType: "W.P.(C)",
    court: "Rajasthan High Court",
    filingDate: "2024-11-01",
    hearingsCount: 1,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Rajasthan Teacher Eligibility Forum",
    respondent: "State of Rajasthan (Dept. of Education)",
    actsSections: ["Right to Education Act Sec. 23", "Constitution Art. 14", "Constitution Art. 16"],
    description:
      "Fresh writ challenging arbitrary relaxation of TET qualification norms for 8,000 teacher recruitments, alleging violation of RTE mandate and unconstitutional class relaxation.",
    top1Similarity: 0.78,
    meanTop5Similarity: 0.72,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 140,
      complexity: "Medium",
      priorityScore: 66.4,
      confidenceIntervalDays: [105, 175],
      precedentConfidence: 0.78,
      shapFactors: [
        {
          feature: "Education Policy Litigation",
          impact: "increases_delay",
          impactDays: 35,
          plainEnglishReason:
            "Recruitment challenges require voluminous recruitment record production and notification analysis.",
        },
        {
          feature: "RTE Framework Clarity",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "TET requirement under RTE is unambiguous; judicial interpretation risk low.",
        },
      ],
    },
  },

  {
    id: "case-019",
    caseNo: "CRL.A 5612/2024",
    caseType: "CRL.A",
    court: "Calcutta High Court",
    filingDate: "2024-10-14",
    hearingsCount: 4,
    status: "pending",
    bench: "Division Bench",
    petitioner: "Subroto Banerjee",
    respondent: "State of West Bengal",
    actsSections: ["NDPS Act Sec. 20", "NDPS Act Sec. 37", "Constitution Art. 21"],
    description:
      "Bail application in NDPS case involving alleged possession of commercial quantity; petitioner challenges chain of custody, evidence tampering, and balance of convenience.",
    top1Similarity: 0.88,
    meanTop5Similarity: 0.82,
    countAboveThreshold: 5,
    matchedPrecedentIds: ["prec-005"],
    prediction: {
      predictedDays: 55,
      complexity: "High",
      priorityScore: 86.0,
      confidenceIntervalDays: [38, 78],
      precedentConfidence: 0.88,
      shapFactors: [
        {
          feature: "NDPS Stringency",
          impact: "increases_delay",
          impactDays: 20,
          plainEnglishReason:
            "NDPS Act Sec. 37 creates statutory presumption against bail, extending initial hearing cycle.",
        },
        {
          feature: "Chain of Custody Precedent",
          impact: "reduces_delay",
          impactDays: -25,
          plainEnglishReason:
            "Noor Aga (2008) provides clear evidentiary framework for NDPS chain-of-custody challenges.",
        },
      ],
    },
  },

  {
    id: "case-020",
    caseNo: "W.P.(T) 3312/2024",
    caseType: "W.P.(T)",
    court: "Jharkhand High Court",
    filingDate: "2024-09-10",
    hearingsCount: 3,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Jharkhand Coal Workers Union",
    respondent: "Coal India Ltd. & Union of India",
    actsSections: ["Industrial Disputes Act Sec. 25N", "Mines Act Sec. 40", "Constitution Art. 23"],
    description:
      "Writ petition challenging illegal retrenchment of 340 contractual coal mine workers without following mandatory consultation process under ID Act Sec. 25N.",
    top1Similarity: 0.81,
    meanTop5Similarity: 0.75,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 115,
      complexity: "Medium",
      priorityScore: 72.1,
      confidenceIntervalDays: [85, 150],
      precedentConfidence: 0.81,
      shapFactors: [
        {
          feature: "Labour Rights Framework",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Retrenchment procedure violations straightforwardly established under existing settled framework.",
        },
        {
          feature: "Government PSU Complexity",
          impact: "increases_delay",
          impactDays: 30,
          plainEnglishReason:
            "Coal India response timelines and Ministry of Coal counter-affidavit extend hearing cycle.",
        },
      ],
    },
  },

  {
    id: "case-021",
    caseNo: "C.A. 9931/2024",
    caseType: "C.A.",
    court: "Supreme Court of India",
    filingDate: "2024-11-05",
    hearingsCount: 1,
    status: "pending",
    bench: "Division Bench IV",
    petitioner: "M/s Pharma Innovations Ltd.",
    respondent: "Controller General of Patents",
    actsSections: ["Patents Act Sec. 3(d)", "Patents Act Sec. 25", "TRIPS Agreement Art. 27"],
    description:
      "Appeal against patent rejection on pharma compound under Section 3(d); petitioner challenges patent controller's enhanced efficacy standard interpretation in oncology drug.",
    top1Similarity: 0.83,
    meanTop5Similarity: 0.77,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-010", "prec-019"],
    prediction: {
      predictedDays: 125,
      complexity: "High",
      priorityScore: 70.8,
      confidenceIntervalDays: [95, 160],
      precedentConfidence: 0.83,
      shapFactors: [
        {
          feature: "Novartis Precedent",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Novartis AG (2013) definitively interprets Section 3(d) enhanced efficacy standard; legal position clear.",
        },
        {
          feature: "Scientific Expert Evidence",
          impact: "increases_delay",
          impactDays: 40,
          plainEnglishReason:
            "Oncology drug efficacy requires expert clinical trial data assessment by court-appointed expert.",
        },
      ],
    },
  },

  {
    id: "case-022",
    caseNo: "W.P.(C) 9340/2024",
    caseType: "W.P.(C)",
    court: "Bombay High Court",
    filingDate: "2024-07-22",
    hearingsCount: 5,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Nasreen Shaikh",
    respondent: "Municipal Corporation of Greater Mumbai",
    actsSections: ["Maharashtra Municipal Corporations Act Sec. 354", "Constitution Art. 21", "PMAY Guidelines Clause 4.3"],
    description:
      "Challenge to demolition notice issued to 60-year-old slum structure without due process; petitioner seeks rehabilitation under PMAY scheme and mandatory relocation survey.",
    top1Similarity: 0.75,
    meanTop5Similarity: 0.69,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-013"],
    prediction: {
      predictedDays: 120,
      complexity: "Medium",
      priorityScore: 65.9,
      confidenceIntervalDays: [90, 155],
      precedentConfidence: 0.75,
      shapFactors: [
        {
          feature: "Rehabilitation Policy",
          impact: "increases_delay",
          impactDays: 30,
          plainEnglishReason:
            "PMAY eligibility verification by MCGM and state housing board creates multi-agency bottleneck.",
        },
        {
          feature: "Shelter as Fundamental Right",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Right to shelter under Article 21 enables expedited interim stay on demolition orders.",
        },
      ],
    },
  },

  {
    id: "case-023",
    caseNo: "CRL.M.C. 7721/2024",
    caseType: "CRL.M.C.",
    court: "Delhi High Court",
    filingDate: "2024-08-05",
    hearingsCount: 4,
    status: "pending",
    bench: "Single Bench (Criminal)",
    petitioner: "Deepak Chandra",
    respondent: "Central Bureau of Investigation",
    actsSections: ["CrPC Sec. 439", "Prevention of Corruption Act Sec. 7", "Prevention of Corruption Act Sec. 13"],
    description:
      "Regular bail application in CBI corruption case; petitioner (former public servant) seeks bail citing prolonged pre-trial detention and clean antecedents in first offence.",
    top1Similarity: 0.86,
    meanTop5Similarity: 0.80,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-004"],
    prediction: {
      predictedDays: 42,
      complexity: "Medium",
      priorityScore: 82.5,
      confidenceIntervalDays: [28, 60],
      precedentConfidence: 0.86,
      shapFactors: [
        {
          feature: "Liberty Dimension",
          impact: "reduces_delay",
          impactDays: -30,
          plainEnglishReason:
            "Pre-trial liberty rights well-settled under Sanjay Chandra (2012); bench need only apply factors.",
        },
        {
          feature: "CBI Objections",
          impact: "increases_delay",
          impactDays: 15,
          plainEnglishReason:
            "CBI typically objects citing investigation pendency; additional hearing for prosecution reply required.",
        },
      ],
    },
  },

  {
    id: "case-024",
    caseNo: "C.S.(OS) 2210/2023",
    caseType: "C.S.(Comm.)",
    court: "Delhi High Court",
    filingDate: "2023-12-04",
    hearingsCount: 13,
    status: "pending",
    bench: "Single Bench (Civil)",
    petitioner: "Dr. Amit Bhardwaj",
    respondent: "St. Xavier Medical College Trust",
    actsSections: ["Indian Contract Act Sec. 73", "Specific Relief Act Sec. 10", "Constitution Art. 14"],
    description:
      "Faculty termination suit seeking reinstatement and arrears of salary; petitioner alleges arbitrary dismissal without following natural justice principles under service regulations.",
    top1Similarity: 0.74,
    meanTop5Similarity: 0.68,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 160,
      complexity: "Medium",
      priorityScore: 55.2,
      confidenceIntervalDays: [120, 200],
      precedentConfidence: 0.74,
      shapFactors: [
        {
          feature: "Service Litigation Volume",
          impact: "increases_delay",
          impactDays: 40,
          plainEnglishReason:
            "Service matters typically require extensive document discovery and multiple witness examination rounds.",
        },
        {
          feature: "Natural Justice Framework",
          impact: "reduces_delay",
          impactDays: -15,
          plainEnglishReason:
            "Procedure violation in dismissal is well-settled; evidentiary burden primarily on institution.",
        },
      ],
    },
  },

  {
    id: "case-025",
    caseNo: "W.P.(C) 33210/2024",
    caseType: "W.P.(C)",
    court: "Supreme Court of India",
    filingDate: "2024-08-20",
    hearingsCount: 6,
    status: "pending",
    bench: "Division Bench II",
    petitioner: "Internet Freedom Foundation",
    respondent: "Union of India (MeitY)",
    actsSections: ["Information Technology Act Sec. 69A", "Constitution Art. 19(1)(a)", "Constitution Art. 21"],
    description:
      "Constitutional challenge to internet shutdown orders in multiple states; petitioner seeks procedural safeguards, judicial review mechanism, and proportionality standards for shutdowns.",
    top1Similarity: 0.85,
    meanTop5Similarity: 0.79,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-002"],
    prediction: {
      predictedDays: 180,
      complexity: "High",
      priorityScore: 84.3,
      confidenceIntervalDays: [140, 230],
      precedentConfidence: 0.85,
      shapFactors: [
        {
          feature: "Anuradha Bhasin Precedent",
          impact: "reduces_delay",
          impactDays: -25,
          plainEnglishReason:
            "Anuradha Bhasin (2020) provides proportionality framework; legal principles already settled.",
        },
        {
          feature: "Policy Complexity",
          impact: "increases_delay",
          impactDays: 60,
          plainEnglishReason:
            "National security dimensions require classified material review and state-by-state analysis.",
        },
      ],
    },
  },

  {
    id: "case-026",
    caseNo: "CRL.A 6701/2024",
    caseType: "CRL.A",
    court: "Bombay High Court",
    filingDate: "2024-06-10",
    hearingsCount: 8,
    status: "pending",
    bench: "Division Bench",
    petitioner: "Prashant Deshmukh",
    respondent: "State of Maharashtra",
    actsSections: ["IPC Sec. 307", "IPC Sec. 326A", "Indian Evidence Act Sec. 32"],
    description:
      "Appeal against conviction for acid attack under IPC Section 326A; petitioner challenges identification by victim in dying declaration and reliability of medical evidence on acid type.",
    top1Similarity: 0.80,
    meanTop5Similarity: 0.74,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-001"],
    prediction: {
      predictedDays: 100,
      complexity: "High",
      priorityScore: 79.6,
      confidenceIntervalDays: [75, 130],
      precedentConfidence: 0.80,
      shapFactors: [
        {
          feature: "Dying Declaration Framework",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Khushal Rao (1958) and Laxman (2002) set clear dying declaration admissibility standards.",
        },
        {
          feature: "Medical Expert Testimony",
          impact: "increases_delay",
          impactDays: 30,
          plainEnglishReason:
            "Chemical analysis and forensic expert cross-examination requires separate court dates.",
        },
      ],
    },
  },

  {
    id: "case-027",
    caseNo: "W.P.(C) 44021/2024",
    caseType: "W.P.(C)",
    court: "Kerala High Court",
    filingDate: "2024-07-15",
    hearingsCount: 5,
    status: "pending",
    bench: "Division Bench",
    petitioner: "Kerala Fisher Workers Federation",
    respondent: "State of Kerala & Kerala Maritime Board",
    actsSections: ["Indian Fisheries Act Sec. 5", "Constitution Art. 19(1)(g)", "Maritime Zones Act Sec. 7"],
    description:
      "Challenge to exclusion zones imposed on traditional fishermen in coastal areas due to new port development; seeking compensation and alternative livelihood guarantees.",
    top1Similarity: 0.73,
    meanTop5Similarity: 0.67,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-018"],
    prediction: {
      predictedDays: 135,
      complexity: "Medium",
      priorityScore: 62.8,
      confidenceIntervalDays: [100, 170],
      precedentConfidence: 0.73,
      shapFactors: [
        {
          feature: "Livelihood Rights",
          impact: "reduces_delay",
          impactDays: -15,
          plainEnglishReason:
            "Olga Tellis (1985) establishes livelihood as fundamental right requiring expedited adjudication.",
        },
        {
          feature: "Environmental Clearance Complexity",
          impact: "increases_delay",
          impactDays: 45,
          plainEnglishReason:
            "Port development EIA documentation and maritime zone legality involve multi-ministry records.",
        },
      ],
    },
  },

  {
    id: "case-028",
    caseNo: "SLP(C) 31045/2024",
    caseType: "SLP(C)",
    court: "Supreme Court of India",
    filingDate: "2024-09-22",
    hearingsCount: 3,
    status: "pending",
    bench: "Division Bench III",
    petitioner: "Wipro Ltd.",
    respondent: "Employees Provident Fund Organisation",
    actsSections: ["EPF Act Sec. 2(b)", "EPF Act Sec. 7A", "Constitution Art. 14"],
    description:
      "Challenge to EPFO order expanding definition of 'basic wages' to include special allowances for PF calculation; potential liability of ₹2,100 crore across IT sector.",
    top1Similarity: 0.82,
    meanTop5Similarity: 0.76,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-009"],
    prediction: {
      predictedDays: 200,
      complexity: "High",
      priorityScore: 68.4,
      confidenceIntervalDays: [160, 250],
      precedentConfidence: 0.82,
      shapFactors: [
        {
          feature: "EPFO Basic Wages Precedent",
          impact: "reduces_delay",
          impactDays: -15,
          plainEnglishReason:
            "Surya Roshni (2019) provides framework for basic wages interpretation under EPF Act.",
        },
        {
          feature: "Industry-Wide Impact",
          impact: "increases_delay",
          impactDays: 55,
          plainEnglishReason:
            "Multiple similar SLPs from IT sector companies consolidated; coordination across parties required.",
        },
      ],
    },
  },

  {
    id: "case-029",
    caseNo: "W.P.(C) 51230/2024",
    caseType: "W.P.(C)",
    court: "Delhi High Court",
    filingDate: "2024-10-30",
    hearingsCount: 2,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Residents Welfare Association, Vasant Kunj",
    respondent: "DDA & GNCTD",
    actsSections: ["Delhi Development Act Sec. 14", "Master Plan for Delhi 2041 Clause 7.2", "Constitution Art. 21"],
    description:
      "Challenge to DDA's approval of high-rise commercial complex in residential zone violating Master Plan; petitioner seeks demolition and restoration of green buffer zone.",
    top1Similarity: 0.76,
    meanTop5Similarity: 0.70,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-006"],
    prediction: {
      predictedDays: 150,
      complexity: "Medium",
      priorityScore: 61.3,
      confidenceIntervalDays: [110, 190],
      precedentConfidence: 0.76,
      shapFactors: [
        {
          feature: "Master Plan Violation",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "M.C. Mehta v. Union of India precedents establish clear framework for Master Plan enforcement.",
        },
        {
          feature: "Municipal Bureaucracy",
          impact: "increases_delay",
          impactDays: 45,
          plainEnglishReason:
            "DDA building permission records, structural reports, and NOC chain require extensive discovery.",
        },
      ],
    },
  },

  {
    id: "case-030",
    caseNo: "CRL.M.C. 9120/2024",
    caseType: "CRL.M.C.",
    court: "Delhi High Court",
    filingDate: "2024-09-14",
    hearingsCount: 3,
    status: "pending",
    bench: "Single Bench (Criminal)",
    petitioner: "Meera Pillai",
    respondent: "State (NCT of Delhi) & Suresh Pillai",
    actsSections: ["IPC Sec. 498A", "Protection of Women from DV Act Sec. 12", "CrPC Sec. 125"],
    description:
      "Petition in matrimonial dispute seeking quashing of multiple overlapping FIRs under IPC 498A filed by husband and wife against each other; both parties seeking settlement.",
    top1Similarity: 0.79,
    meanTop5Similarity: 0.73,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-001"],
    prediction: {
      predictedDays: 75,
      complexity: "Low",
      priorityScore: 59.1,
      confidenceIntervalDays: [50, 100],
      precedentConfidence: 0.79,
      shapFactors: [
        {
          feature: "Matrimonial FIR Quashing Corpus",
          impact: "reduces_delay",
          impactDays: -30,
          plainEnglishReason:
            "Rajesh Sharma (2017) guidelines and B.S. Joshi precedent well-settled for 498A quashing on settlement.",
        },
        {
          feature: "Mediation Potential",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Both parties willing; court-annexed mediation can accelerate settlement-based disposal.",
        },
      ],
    },
  },

  {
    id: "case-031",
    caseNo: "W.P.(C) 12840/2024",
    caseType: "W.P.(C)",
    court: "Gujarat High Court",
    filingDate: "2024-08-05",
    hearingsCount: 4,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Gujarat Textile Exporters Association",
    respondent: "CGST Commissioner, Ahmedabad",
    actsSections: ["CGST Act Sec. 54", "IGST Act Sec. 16", "Constitution Art. 265"],
    description:
      "Challenge to denial of GST refund on zero-rated textile exports; petitioner alleges discriminatory treatment and violation of export promotion policy under CGST Act.",
    top1Similarity: 0.77,
    meanTop5Similarity: 0.71,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-009"],
    prediction: {
      predictedDays: 90,
      complexity: "Medium",
      priorityScore: 64.7,
      confidenceIntervalDays: [65, 120],
      precedentConfidence: 0.77,
      shapFactors: [
        {
          feature: "GST Refund Precedent",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Numerous settled precedents from Gujarat HC and Delhi HC on GST refund procedural requirements.",
        },
        {
          feature: "CGST Complexity",
          impact: "increases_delay",
          impactDays: 25,
          plainEnglishReason:
            "Export invoice verification and GSTR reconciliation require departmental audit records.",
        },
      ],
    },
  },

  {
    id: "case-032",
    caseNo: "CRL.A 8820/2024",
    caseType: "CRL.A",
    court: "Allahabad High Court",
    filingDate: "2024-05-18",
    hearingsCount: 9,
    status: "pending",
    bench: "Division Bench",
    petitioner: "Ram Prasad Yadav",
    respondent: "State of Uttar Pradesh",
    actsSections: ["IPC Sec. 395", "IPC Sec. 412", "CrPC Sec. 374"],
    description:
      "Appeal against conviction for dacoity with murder; petitioner challenges identification parade procedure and test identification validity in multi-accused gang robbery case.",
    top1Similarity: 0.82,
    meanTop5Similarity: 0.76,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-001"],
    prediction: {
      predictedDays: 120,
      complexity: "High",
      priorityScore: 77.4,
      confidenceIntervalDays: [90, 155],
      precedentConfidence: 0.82,
      shapFactors: [
        {
          feature: "Identification Parade Precedent",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Malkhansingh (1985) and Musheer Khan (2009) provide clear TIP admissibility standards.",
        },
        {
          feature: "Multi-Accused Trial Complexity",
          impact: "increases_delay",
          impactDays: 35,
          plainEnglishReason:
            "Co-accused with separate appeals creates coordination challenge for consolidated hearing.",
        },
      ],
    },
  },

  {
    id: "case-033",
    caseNo: "W.P.(PIL) 7733/2024",
    caseType: "W.P.(C)",
    court: "Punjab & Haryana High Court",
    filingDate: "2024-07-01",
    hearingsCount: 6,
    status: "pending",
    bench: "Division Bench",
    petitioner: "Citizens Against Stubble Burning Coalition",
    respondent: "State of Punjab & CAQM",
    actsSections: ["Commission for Air Quality Management Act Sec. 14", "EPA Sec. 5", "Constitution Art. 21"],
    description:
      "PIL seeking enforcement of Commission for Air Quality Management directions against stubble burning; seeking criminal prosecution of defaulting farmers and state officials.",
    top1Similarity: 0.78,
    meanTop5Similarity: 0.72,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-006"],
    prediction: {
      predictedDays: 160,
      complexity: "High",
      priorityScore: 71.9,
      confidenceIntervalDays: [120, 200],
      precedentConfidence: 0.78,
      shapFactors: [
        {
          feature: "CAQM Framework",
          impact: "reduces_delay",
          impactDays: -15,
          plainEnglishReason:
            "CAQM Act provides statutory mechanism; court's role limited to enforcement directions.",
        },
        {
          feature: "Agricultural Policy Sensitivity",
          impact: "increases_delay",
          impactDays: 55,
          plainEnglishReason:
            "Prosecution of farmers is politically sensitive; state compliance reports show systematic delay.",
        },
      ],
    },
  },

  {
    id: "case-034",
    caseNo: "C.A. 14802/2024",
    caseType: "C.A.",
    court: "Supreme Court of India",
    filingDate: "2024-08-12",
    hearingsCount: 4,
    status: "pending",
    bench: "Division Bench I",
    petitioner: "M/s Mukand Ltd.",
    respondent: "SEBI",
    actsSections: ["SEBI Act Sec. 11B", "SEBI (Prohibition of Insider Trading) Regulations 2015 Reg. 4", "Constitution Art. 14"],
    description:
      "Appeal against SEBI adjudicating officer's penalty order for alleged insider trading in steel sector acquisition deal; petitioner challenges evidence of unpublished price sensitive information access.",
    top1Similarity: 0.80,
    meanTop5Similarity: 0.74,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-017"],
    prediction: {
      predictedDays: 110,
      complexity: "High",
      priorityScore: 69.2,
      confidenceIntervalDays: [80, 145],
      precedentConfidence: 0.80,
      shapFactors: [
        {
          feature: "SEBI Insider Trading Corpus",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "SAT and Supreme Court have settled UPSI definition; legal framework clear.",
        },
        {
          feature: "Financial Market Complexity",
          impact: "increases_delay",
          impactDays: 35,
          plainEnglishReason:
            "Trading data analysis and communication records reconstruction require forensic accounting review.",
        },
      ],
    },
  },

  {
    id: "case-035",
    caseNo: "W.P.(C) 62100/2024",
    caseType: "W.P.(C)",
    court: "Delhi High Court",
    filingDate: "2024-11-08",
    hearingsCount: 1,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Payal Sharma & 342 Others",
    respondent: "Delhi Transport Corporation",
    actsSections: ["Industrial Disputes Act Sec. 10", "Constitution Art. 14", "Constitution Art. 16"],
    description:
      "Fresh petition by 343 contract bus drivers challenging DTC's refusal to regularise service despite 10+ years of continuous employment, in violation of regularisation policy.",
    top1Similarity: 0.76,
    meanTop5Similarity: 0.70,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 130,
      complexity: "Medium",
      priorityScore: 63.8,
      confidenceIntervalDays: [95, 170],
      precedentConfidence: 0.76,
      shapFactors: [
        {
          feature: "Uma Devi Regularisation Framework",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Uma Devi (2006) and subsequent 5-judge bench clarification limit but do not eliminate regularisation claims.",
        },
        {
          feature: "Scale of Claimants",
          impact: "increases_delay",
          impactDays: 40,
          plainEnglishReason:
            "343 petitioners require individual service record verification by DTC HR department.",
        },
      ],
    },
  },

  {
    id: "case-036",
    caseNo: "SLP(CRL.) 9031/2024",
    caseType: "SLP(C)",
    court: "Supreme Court of India",
    filingDate: "2024-10-03",
    hearingsCount: 2,
    status: "pending",
    bench: "Division Bench II",
    petitioner: "Faisal Hussain",
    respondent: "State of Manipur",
    actsSections: ["AFSPA Sec. 4", "CrPC Sec. 197", "Constitution Art. 21"],
    description:
      "Challenge to continued AFSPA immunity claim for alleged extrajudicial killing in Manipur; petitioner seeks prosecution sanction against named army personnel without prior government approval.",
    top1Similarity: 0.86,
    meanTop5Similarity: 0.80,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-014"],
    prediction: {
      predictedDays: 200,
      complexity: "High",
      priorityScore: 85.6,
      confidenceIntervalDays: [160, 260],
      precedentConfidence: 0.86,
      shapFactors: [
        {
          feature: "Extra-Judicial Killing Precedent",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "EEVFAM (2016) precedent limits AFSPA immunity for excess force; legal framework established.",
        },
        {
          feature: "National Security Dimension",
          impact: "increases_delay",
          impactDays: 80,
          plainEnglishReason:
            "Ministry of Defence classified operational records require in-camera review and coordination.",
        },
      ],
    },
  },

  {
    id: "case-037",
    caseNo: "W.P.(C) 71004/2024",
    caseType: "W.P.(C)",
    court: "Supreme Court of India",
    filingDate: "2024-11-10",
    hearingsCount: 1,
    status: "pending",
    bench: "Single Bench (Admission)",
    petitioner: "Indian Medical Association",
    respondent: "Union of India (Ministry of Health)",
    actsSections: ["National Medical Commission Act Sec. 32", "Constitution Art. 19(1)(a)", "Constitution Art. 14"],
    description:
      "Fresh challenge to NMC's new compulsory rural posting mandate for PG medical students as a condition for degree conferral; petitioner argues violation of professional rights.",
    top1Similarity: 0.74,
    meanTop5Similarity: 0.68,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 180,
      complexity: "Medium",
      priorityScore: 59.3,
      confidenceIntervalDays: [140, 230],
      precedentConfidence: 0.74,
      shapFactors: [
        {
          feature: "Medical Education Policy",
          impact: "increases_delay",
          impactDays: 60,
          plainEnglishReason:
            "Healthcare access vs professional rights balance requires extensive deliberation and policy impact assessment.",
        },
        {
          feature: "Constitutional Right to Profession",
          impact: "reduces_delay",
          impactDays: -25,
          plainEnglishReason:
            "Article 19(1)(g) framework on reasonable restrictions is well-settled.",
        },
      ],
    },
  },

  {
    id: "case-038",
    caseNo: "CRL.A 10220/2024",
    caseType: "CRL.A",
    court: "Bombay High Court",
    filingDate: "2024-06-25",
    hearingsCount: 7,
    status: "pending",
    bench: "Division Bench",
    petitioner: "Ajay Kulkarni",
    respondent: "State of Maharashtra",
    actsSections: ["IT Act Sec. 66D", "IPC Sec. 419", "IPC Sec. 420"],
    description:
      "Appeal against conviction for phishing and online financial fraud through cloned banking portal; petitioner challenges digital forensic evidence chain and attribution methodology.",
    top1Similarity: 0.81,
    meanTop5Similarity: 0.75,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-012"],
    prediction: {
      predictedDays: 105,
      complexity: "Medium",
      priorityScore: 64.1,
      confidenceIntervalDays: [75, 140],
      precedentConfidence: 0.81,
      shapFactors: [
        {
          feature: "Cyber Forensics Framework",
          impact: "reduces_delay",
          impactDays: -15,
          plainEnglishReason:
            "CERT-In protocols for cyber evidence chain of custody well-established in recent HCs.",
        },
        {
          feature: "Expert Witness Scheduling",
          impact: "increases_delay",
          impactDays: 30,
          plainEnglishReason:
            "CDAC/forensics expert witness availability for cross-examination typically adds 2–3 hearing cycles.",
        },
      ],
    },
  },

  {
    id: "case-039",
    caseNo: "W.P.(T) 5540/2024",
    caseType: "W.P.(T)",
    court: "Telangana High Court",
    filingDate: "2024-07-30",
    hearingsCount: 5,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Hyderabad IT Workers Union",
    respondent: "Infosys Ltd. & Labour Commissioner",
    actsSections: ["Industrial Employment (Standing Orders) Act Sec. 10", "ID Act Sec. 25G", "Constitution Art. 21"],
    description:
      "Writ petition challenging mass lay-off of 2,800 IT professionals without following standing orders on retrenchment; petitioner alleges disguised retrenchment as performance termination.",
    top1Similarity: 0.79,
    meanTop5Similarity: 0.73,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 140,
      complexity: "High",
      priorityScore: 73.5,
      confidenceIntervalDays: [105, 180],
      precedentConfidence: 0.79,
      shapFactors: [
        {
          feature: "IT Sector Retrenchment",
          impact: "increases_delay",
          impactDays: 45,
          plainEnglishReason:
            "Novel legal question whether IT professionals covered by Industrial Employment SO Act; first principles analysis required.",
        },
        {
          feature: "Scale of Affected Workers",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "2,800 worker mass action creates urgency classification under High Court's PIL monitoring framework.",
        },
      ],
    },
  },

  {
    id: "case-040",
    caseNo: "SLP(C) 41200/2024",
    caseType: "SLP(C)",
    court: "Supreme Court of India",
    filingDate: "2024-10-18",
    hearingsCount: 2,
    status: "pending",
    bench: "Division Bench IV",
    petitioner: "M/s Amazon Seller Services Pvt. Ltd.",
    respondent: "Competition Commission of India",
    actsSections: ["Competition Act Sec. 4", "Competition Act Sec. 27", "Competition Act Sec. 53B"],
    description:
      "Challenge to CCI order finding Amazon in abuse of dominant position through preferential algorithm listing and exclusive vendor arrangements; ₹202 crore penalty imposed.",
    top1Similarity: 0.78,
    meanTop5Similarity: 0.72,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-017"],
    prediction: {
      predictedDays: 240,
      complexity: "High",
      priorityScore: 65.7,
      confidenceIntervalDays: [190, 300],
      precedentConfidence: 0.78,
      shapFactors: [
        {
          feature: "Digital Market Competition",
          impact: "increases_delay",
          impactDays: 80,
          plainEnglishReason:
            "Novel digital platform competition law questions without settled Indian precedent; extensive deliberation expected.",
        },
        {
          feature: "CCI Economic Analysis",
          impact: "increases_delay",
          impactDays: 40,
          plainEnglishReason:
            "Market definition and dominance assessment requires economic expert testimony spanning multiple hearings.",
        },
      ],
    },
  },

  {
    id: "case-041",
    caseNo: "W.P.(C) 23041/2024",
    caseType: "W.P.(C)",
    court: "Delhi High Court",
    filingDate: "2024-09-05",
    hearingsCount: 4,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Sikh Gurdwara Management Committee",
    respondent: "Delhi Development Authority",
    actsSections: ["Religious Institutions (Prevention of Misuse) Act Sec. 3", "Constitution Art. 25", "Constitution Art. 26"],
    description:
      "Challenge to DDA's seal-and-demolish notice on Gurdwara community kitchen (langar hall) construction alleged to encroach on road margin; petitioner claims religious exemption.",
    top1Similarity: 0.72,
    meanTop5Similarity: 0.66,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 100,
      complexity: "Low",
      priorityScore: 56.4,
      confidenceIntervalDays: [70, 135],
      precedentConfidence: 0.72,
      shapFactors: [
        {
          feature: "Religious Freedom Framework",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Articles 25-26 framework on essential religious practices well-settled; factual encroachment determination remains.",
        },
        {
          feature: "Structural Survey Required",
          impact: "increases_delay",
          impactDays: 30,
          plainEnglishReason:
            "Physical survey by DDA and court commissioner needed to verify actual encroachment extent.",
        },
      ],
    },
  },

  {
    id: "case-042",
    caseNo: "CRL.M.C. 14051/2024",
    caseType: "CRL.M.C.",
    court: "Delhi High Court",
    filingDate: "2024-10-20",
    hearingsCount: 2,
    status: "pending",
    bench: "Single Bench (Criminal)",
    petitioner: "Suresh Nair",
    respondent: "State (NCT of Delhi)",
    actsSections: ["IT Act Sec. 67", "IT Act Sec. 67A", "IPC Sec. 509"],
    description:
      "Petition to quash FIR for alleged online obscenity and cyberstalking; petitioner argues constitutionally protected speech and lack of criminal intent in social media posts.",
    top1Similarity: 0.76,
    meanTop5Similarity: 0.70,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-002"],
    prediction: {
      predictedDays: 70,
      complexity: "Medium",
      priorityScore: 60.9,
      confidenceIntervalDays: [45, 100],
      precedentConfidence: 0.76,
      shapFactors: [
        {
          feature: "Free Speech Framework",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Shreya Singhal (2015) constitutional framework for online speech restriction well-established.",
        },
        {
          feature: "Digital Evidence Review",
          impact: "increases_delay",
          impactDays: 20,
          plainEnglishReason:
            "Social media records require platform data request and authentication before court analysis.",
        },
      ],
    },
  },

  {
    id: "case-043",
    caseNo: "W.P.(C) 81240/2024",
    caseType: "W.P.(C)",
    court: "Bombay High Court",
    filingDate: "2024-10-28",
    hearingsCount: 2,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Maharashtra Private Schools Association",
    respondent: "State of Maharashtra (Education)",
    actsSections: ["RTE Act Sec. 12(1)(c)", "Maharashtra Self-Financed Schools Act Sec. 7", "Constitution Art. 30"],
    description:
      "Challenge to state's directive mandating 25% EWS admission quota in unaided private schools beyond RTE requirements; petitioner argues financial viability and autonomy breach.",
    top1Similarity: 0.80,
    meanTop5Similarity: 0.74,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-007"],
    prediction: {
      predictedDays: 115,
      complexity: "Medium",
      priorityScore: 67.2,
      confidenceIntervalDays: [85, 150],
      precedentConfidence: 0.80,
      shapFactors: [
        {
          feature: "RTE Section 12 Precedent",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Society for Unaided Private Schools (2012) upholds RTE 12(1)(c) for unaided schools; subsequent clarifications settled.",
        },
        {
          feature: "State EWS Quota Legality",
          impact: "increases_delay",
          impactDays: 35,
          plainEnglishReason:
            "Beyond-RTE state mandate legality is a novel question requiring constitutional analysis.",
        },
      ],
    },
  },

  {
    id: "case-044",
    caseNo: "SLP(C) 48001/2024",
    caseType: "SLP(C)",
    court: "Supreme Court of India",
    filingDate: "2024-11-01",
    hearingsCount: 1,
    status: "pending",
    bench: "Division Bench III",
    petitioner: "M/s Paytm Payments Bank Ltd.",
    respondent: "Reserve Bank of India",
    actsSections: ["Payment and Settlement Systems Act Sec. 8", "RBI Act Sec. 35A", "Constitution Art. 19(1)(g)"],
    description:
      "Fresh SLP challenging RBI's regulatory action restricting onboarding of new customers; petitioner claims violation of due process and disproportionate regulatory intervention.",
    top1Similarity: 0.75,
    meanTop5Similarity: 0.69,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-017"],
    prediction: {
      predictedDays: 220,
      complexity: "High",
      priorityScore: 61.5,
      confidenceIntervalDays: [170, 280],
      precedentConfidence: 0.75,
      shapFactors: [
        {
          feature: "RBI Regulatory Authority",
          impact: "increases_delay",
          impactDays: 70,
          plainEnglishReason:
            "Courts traditionally defer to RBI's systemic risk assessment; extensive regulatory record review required.",
        },
        {
          feature: "Constitutional Commerce Right",
          impact: "reduces_delay",
          impactDays: -20,
          plainEnglishReason:
            "Article 19(1)(g) reasonable restriction standard provides clear analytical framework.",
        },
      ],
    },
  },

  {
    id: "case-045",
    caseNo: "W.P.(C) 91200/2024",
    caseType: "W.P.(C)",
    court: "Madras High Court",
    filingDate: "2024-10-15",
    hearingsCount: 3,
    status: "pending",
    bench: "Single Bench (Writ)",
    petitioner: "Dr. Radhakrishnan & 89 Others",
    respondent: "Tamil Nadu Public Service Commission",
    actsSections: ["Constitution Art. 14", "Constitution Art. 16", "Tamil Nadu Government Servants' Conduct Rules Sec. 20"],
    description:
      "Challenge to TNPSC's revised selection methodology for Group-I services introducing technical interview weightage; petitioners allege bias in interview panel composition and subjectivity.",
    top1Similarity: 0.73,
    meanTop5Similarity: 0.67,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-016"],
    prediction: {
      predictedDays: 130,
      complexity: "Medium",
      priorityScore: 57.8,
      confidenceIntervalDays: [95, 170],
      precedentConfidence: 0.73,
      shapFactors: [
        {
          feature: "Public Recruitment Precedent",
          impact: "reduces_delay",
          impactDays: -15,
          plainEnglishReason:
            "Ajay Hasia (1981) and K.S. Bhargava principles on interview weightage in public recruitment well-settled.",
        },
        {
          feature: "90 Petitioners Coordination",
          impact: "increases_delay",
          impactDays: 40,
          plainEnglishReason:
            "Individual assessment records for 90 candidates require TNPSC data production over multiple hearings.",
        },
      ],
    },
  },

  // ═══ DISPOSED (5 cases) ═══════════════════════════════════════════════════

  {
    id: "case-046",
    caseNo: "CRL.A 1899/2022",
    caseType: "CRL.A",
    court: "Supreme Court of India",
    filingDate: "2022-03-10",
    hearingsCount: 42,
    status: "disposed",
    bench: "Division Bench IV",
    petitioner: "Siddharth Chowdhury",
    respondent: "State of Bihar",
    actsSections: ["IPC Sec. 302", "IPC Sec. 120B", "CrPC Sec. 374"],
    description:
      "Appeal against conviction for murder and criminal conspiracy; petition disposed with acquittal on benefit of doubt — prosecution failed to establish guilt beyond reasonable doubt.",
    top1Similarity: 0.88,
    meanTop5Similarity: 0.82,
    countAboveThreshold: 5,
    matchedPrecedentIds: ["prec-001"],
    prediction: {
      predictedDays: 0,
      complexity: "High",
      priorityScore: 42.0,
      confidenceIntervalDays: [0, 0],
      precedentConfidence: 0.88,
      shapFactors: [
        {
          feature: "Disposed — Final Order",
          impact: "reduces_delay",
          impactDays: 0,
          plainEnglishReason: "Case disposed. Final order: Acquittal granted. Sentence set aside.",
        },
      ],
    },
  },

  {
    id: "case-047",
    caseNo: "W.P.(C) 5102/2022",
    caseType: "W.P.(C)",
    court: "Delhi High Court",
    filingDate: "2022-01-18",
    hearingsCount: 28,
    status: "disposed",
    bench: "Division Bench",
    petitioner: "Delhi Parents Association",
    respondent: "CBSE & Union of India",
    actsSections: ["RTE Act Sec. 29", "Constitution Art. 21A", "CBSE Affiliation Bylaws Sec. 15"],
    description:
      "PIL seeking cancellation of board examinations during COVID; petition disposed as infructuous after CBSE announced results based on internal assessment under Supreme Court's monitoring.",
    top1Similarity: 0.72,
    meanTop5Similarity: 0.66,
    countAboveThreshold: 2,
    matchedPrecedentIds: ["prec-007"],
    prediction: {
      predictedDays: 0,
      complexity: "Medium",
      priorityScore: 42.0,
      confidenceIntervalDays: [0, 0],
      precedentConfidence: 0.72,
      shapFactors: [
        {
          feature: "Disposed — Final Order",
          impact: "reduces_delay",
          impactDays: 0,
          plainEnglishReason: "Case disposed as infructuous. CBSE alternative assessment accepted.",
        },
      ],
    },
  },

  {
    id: "case-048",
    caseNo: "SLP(C) 11029/2023",
    caseType: "SLP(C)",
    court: "Supreme Court of India",
    filingDate: "2023-04-22",
    hearingsCount: 15,
    status: "disposed",
    bench: "Division Bench II",
    petitioner: "M/s Future Retail Ltd.",
    respondent: "Amazon.com NV Investment Holdings LLC",
    actsSections: ["Arbitration Act Sec. 17", "SEBI Regulations 2015 Reg. 23", "Competition Act Sec. 6"],
    description:
      "Dispute over enforcement of emergency arbitral award in Future-Amazon transaction; disposed following settlement between parties and withdrawal of all pending proceedings.",
    top1Similarity: 0.80,
    meanTop5Similarity: 0.74,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-008"],
    prediction: {
      predictedDays: 0,
      complexity: "High",
      priorityScore: 42.0,
      confidenceIntervalDays: [0, 0],
      precedentConfidence: 0.80,
      shapFactors: [
        {
          feature: "Disposed — Settlement",
          impact: "reduces_delay",
          impactDays: 0,
          plainEnglishReason: "Case disposed on settlement. All proceedings withdrawn by consent.",
        },
      ],
    },
  },

  {
    id: "case-049",
    caseNo: "CRL.M.C. 2201/2023",
    caseType: "CRL.M.C.",
    court: "Delhi High Court",
    filingDate: "2023-06-14",
    hearingsCount: 8,
    status: "disposed",
    bench: "Single Bench (Criminal)",
    petitioner: "Anjali Khanna",
    respondent: "Vikram Khanna",
    actsSections: ["IPC Sec. 498A", "Protection of Women from DV Act Sec. 12", "Hindu Marriage Act Sec. 13"],
    description:
      "FIR quashing petition in matrimonial dispute disposed on compromise; parties settled through court-annexed mediation with agreed terms on maintenance, custody, and property division.",
    top1Similarity: 0.76,
    meanTop5Similarity: 0.70,
    countAboveThreshold: 3,
    matchedPrecedentIds: ["prec-001"],
    prediction: {
      predictedDays: 0,
      complexity: "Low",
      priorityScore: 42.0,
      confidenceIntervalDays: [0, 0],
      precedentConfidence: 0.76,
      shapFactors: [
        {
          feature: "Disposed — Compromise",
          impact: "reduces_delay",
          impactDays: 0,
          plainEnglishReason: "Case disposed on compromise decree. Mediation settlement recorded.",
        },
      ],
    },
  },

  {
    id: "case-050",
    caseNo: "C.A. 3301/2023",
    caseType: "C.A.",
    court: "Supreme Court of India",
    filingDate: "2023-02-28",
    hearingsCount: 21,
    status: "disposed",
    bench: "Division Bench III",
    petitioner: "M/s Essar Oil Ltd.",
    respondent: "Hind Energy & Coal Beneficiation India Ltd.",
    actsSections: ["Arbitration Act Sec. 34", "Arbitration Act Sec. 37", "Indian Contract Act Sec. 28"],
    description:
      "Commercial arbitration appeal on setting aside award in petroleum supply contract dispute; appeal disposed — High Court's refusal to set aside award confirmed as within correct parameters.",
    top1Similarity: 0.83,
    meanTop5Similarity: 0.77,
    countAboveThreshold: 4,
    matchedPrecedentIds: ["prec-008"],
    prediction: {
      predictedDays: 0,
      complexity: "High",
      priorityScore: 42.0,
      confidenceIntervalDays: [0, 0],
      precedentConfidence: 0.83,
      shapFactors: [
        {
          feature: "Disposed — Appeal Dismissed",
          impact: "reduces_delay",
          impactDays: 0,
          plainEnglishReason: "Appeal dismissed. Arbitral award upheld. ONGC precedent applied on patent illegality.",
        },
      ],
    },
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 2 — LANDMARK PRECEDENTS (20 authentic Indian law citations)
// ─────────────────────────────────────────────────────────────────────────────

export const MOCK_PRECEDENTS: Precedent[] = [
  {
    id: "prec-001",
    title: "Sharad Birdhichand Sarda v. State of Maharashtra",
    citation: "(1984) 4 SCC 116",
    court: "Supreme Court of India",
    caseType: "CRL.A",
    judgmentDate: "1984-07-13",
    outcome: "Dismissed",
    bench: "Constitution Bench (5 Judges)",
    similarityScore: 0.91,
    keywordScore: 0.87,
    wordCount: 12800,
    summary: {
      facts: "Appeal against conviction for wife-poisoning murder based entirely on circumstantial evidence including financial motive and insurance policy.",
      issue: "What standard of proof is required for a conviction based solely on circumstantial evidence?",
      holding:
        "Five-pronged test established: (i) circumstances must be fully proved, (ii) consistent only with guilt, (iii) conclusive in nature, (iv) excluding every other hypothesis, and (v) forming a complete chain pointing unerringly to the accused.",
      outcomeText: "Dismissed",
    },
    matchedSnippets: [
      "The circumstances from which the conclusion of guilt is to be drawn should be fully established and they must be of a conclusive nature and tendency.",
    ],
    fullText:
      "The circumstances from which the conclusion of guilt is to be drawn should be fully proved and those circumstances must be of a conclusive nature and tendency. The chain of evidence must be so complete as not to leave any reasonable ground for a conclusion consistent with the innocence of the accused.",
  },

  {
    id: "prec-002",
    title: "Arnesh Kumar v. State of Bihar & Anr.",
    citation: "(2014) 8 SCC 273",
    court: "Supreme Court of India",
    caseType: "CRL.A",
    judgmentDate: "2014-07-02",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.88,
    keywordScore: 0.82,
    wordCount: 6400,
    summary: {
      facts: "Petitioner arrested without prior notice under IPC Section 498A in matrimonial dispute despite offence carrying sentence less than 7 years.",
      issue: "Whether police can arrest without issuing notice under CrPC Section 41A for offences with punishment less than 7 years.",
      holding:
        "Mandatory issuance of Section 41A notice before arrest; Magistrate must apply mind before authorising detention; checklist mechanism prescribed for all arrests.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "Arrest brings humiliation, curtails freedom and casts scars forever; law mandates police officer to be satisfied of necessity of arrest.",
    ],
    fullText:
      "Arrest brings humiliation, curtails freedom and casts scars forever. It needs to be exercised with due care and caution. No arrest should be made in a routine manner on the mere allegation of commission of an offence made against a person.",
  },

  {
    id: "prec-003",
    title: "Arnesh Kumar v. State of Bihar (Section 41A Guidelines)",
    citation: "(2014) 8 SCC 273 (paras 13-14)",
    court: "Supreme Court of India",
    caseType: "CRL.A",
    judgmentDate: "2014-07-02",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.92,
    keywordScore: 0.89,
    wordCount: 2400,
    summary: {
      facts: "Same as prec-002 — specifically the operative directions on Section 41A checklist.",
      issue: "What specific procedural safeguards apply before arrest for offences under 7 years punishment?",
      holding:
        "Police must serve Section 41A notice; must record in writing reasons justifying arrest need; Magistrate must examine compliance checklist before remand authorisation.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "We direct that all State Governments shall instruct their police officers not to automatically arrest when a case under Section 498A IPC is registered.",
    ],
    fullText:
      "We direct that all State Governments and Union Territories shall instruct their police officers not to automatically arrest when a case under Section 498A/Section 4 of the Dowry Prohibition Act is registered but to follow the drill as elaborated.",
  },

  {
    id: "prec-004",
    title: "Sanjay Chandra v. CBI",
    citation: "(2012) 1 SCC 40",
    court: "Supreme Court of India",
    caseType: "CRL.A",
    judgmentDate: "2011-11-23",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.86,
    keywordScore: 0.80,
    wordCount: 8900,
    summary: {
      facts: "Bail application in 2G spectrum scam prosecution; accused alleged to have committed economic offences of large magnitude.",
      issue: "What factors govern bail in cases of serious economic offences in pre-trial custody?",
      holding:
        "Bail is not punitive; pre-trial detention should not be used as punishment. Prolonged custody without trial violates Article 21. Flight risk, evidence tampering, and witness intimidation are relevant — not gravity of allegations alone.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "The object of bail is to secure the attendance of the accused at the trial. The proper test is not whether the accused is guilty or not, but whether the applicant will appear for trial.",
    ],
    fullText:
      "The grant of bail is the rule and its refusal is an exception. Courts must balance the right to personal liberty against the need for effective criminal prosecution. Prolonged pre-trial detention without adequate reasons violates the fundamental right under Article 21.",
  },

  {
    id: "prec-005",
    title: "Vijay Madanlal Choudhary v. Union of India",
    citation: "(2022) 10 SCC 1",
    court: "Supreme Court of India",
    caseType: "CRL.A",
    judgmentDate: "2022-07-27",
    outcome: "Dismissed",
    bench: "Division Bench",
    similarityScore: 0.93,
    keywordScore: 0.90,
    wordCount: 95000,
    summary: {
      facts: "Constitutional challenge to provisions of PMLA including twin conditions for bail under Section 45 and special courts' jurisdiction.",
      issue: "Whether twin conditions for bail under PMLA Section 45 and reverse burden of proof are constitutionally valid.",
      holding:
        "PMLA twin conditions upheld as constitutionally valid; reverse burden in Section 24 upheld; ED's power to arrest without FIR copy confirmed; Section 45 stringency justified by gravity of money laundering offences.",
      outcomeText: "Dismissed",
    },
    matchedSnippets: [
      "The twin conditions are stringent but not arbitrary; they are proportionate to the gravity of the offence of money laundering which destabilizes the economy.",
    ],
    fullText:
      "The provisions of PMLA are a complete code in themselves for prevention of money laundering and for matters connected therewith. The twin conditions in Section 45 are constitutionally valid as they are consistent with Articles 14, 20, and 21.",
  },

  {
    id: "prec-006",
    title: "T.N. Godavarman Thirumulpad v. Union of India",
    citation: "(2002) 10 SCC 606",
    court: "Supreme Court of India",
    caseType: "W.P.(C)",
    judgmentDate: "2002-10-30",
    outcome: "Allowed",
    bench: "Constitution Bench",
    similarityScore: 0.87,
    keywordScore: 0.84,
    wordCount: 24000,
    summary: {
      facts: "Continuing mandamus for protection of forests and environment across India; several states felling trees without approval.",
      issue: "Extent of court's jurisdiction to protect forest land and regulate felling of trees without prior approval.",
      holding:
        "Forests must be conserved in their entirety per dictionary definition; no felling without prior approval from Central Empowered Committee; polluter pays principle applied.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "The word 'forest' must be understood according to its dictionary meaning covering all statutorily recognised forests, irrespective of ownership or classification.",
    ],
    fullText:
      "The court's concern is to ensure that the forest cover of the country is maintained and that the existing forests are not denuded further. The 'precautionary principle' and the 'polluter pays principle' have been accepted as part of the law of the land.",
  },

  {
    id: "prec-007",
    title: "Society for Unaided Private Schools of Rajasthan v. Union of India",
    citation: "(2012) 6 SCC 1",
    court: "Supreme Court of India",
    caseType: "W.P.(C)",
    judgmentDate: "2012-04-12",
    outcome: "Dismissed",
    bench: "Constitution Bench (5 Judges)",
    similarityScore: 0.80,
    keywordScore: 0.76,
    wordCount: 31000,
    summary: {
      facts: "Unaided private schools challenged constitutional validity of RTE Act Section 12(1)(c) requiring 25% free admission for EWS children.",
      issue: "Whether the State can impose an obligation on unaided private schools to admit EWS children free of cost.",
      holding:
        "RTE Section 12(1)(c) is constitutionally valid for non-minority unaided private schools. Right to Education is a fundamental right that overrides commercial interest. Minority institutions exempt.",
      outcomeText: "Dismissed",
    },
    matchedSnippets: [
      "The right of children to free and compulsory education is a fundamental right flowing from Article 21A and the State can impose reasonable obligations on private schools.",
    ],
    fullText:
      "The legislation seeks to strike a balance between the rights of private schools to function without governmental interference and the right of every child to free and compulsory elementary education. Section 12(1)(c) passes constitutional muster.",
  },

  {
    id: "prec-008",
    title: "BCCI v. Kochi Cricket Pvt. Ltd.",
    citation: "(2018) 6 SCC 287",
    court: "Supreme Court of India",
    caseType: "C.A.",
    judgmentDate: "2018-04-05",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.82,
    keywordScore: 0.78,
    wordCount: 18000,
    summary: {
      facts: "Dispute over interpretation of amended Section 36 of the Arbitration Act on enforcement of arbitral awards pending challenge.",
      issue: "Whether automatic stay on arbitral award enforcement upon filing of Section 34 petition has been modified post-2015 amendment.",
      holding:
        "2015 amendment removes automatic stay; applicant must separately seek stay under Section 36(2) with unconditional deposit; amendment applies prospectively to pending cases.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "The legislative intent is clear — the amended Section 36 removes the automatic stay that was previously available to losing parties under the arbitral regime.",
    ],
    fullText:
      "The 2015 amendment to Section 36 of the Arbitration Act is a paradigm shift — it removes the automatic stay of arbitral award that was previously available. Courts must apply the amended provision to interpret pending applications.",
  },

  {
    id: "prec-009",
    title: "Commissioner of Income Tax v. Infosys Technologies Ltd.",
    citation: "(2008) 2 SCC 272",
    court: "Supreme Court of India",
    caseType: "C.A.",
    judgmentDate: "2008-01-18",
    outcome: "Dismissed",
    bench: "Division Bench",
    similarityScore: 0.79,
    keywordScore: 0.74,
    wordCount: 14000,
    summary: {
      facts: "Income tax dispute on exemption available to software export companies under Section 10A of Income Tax Act.",
      issue: "Whether onsite services provided abroad qualify as 'export of software' eligible for Section 10A exemption.",
      holding:
        "Onsite services qualify as export if payment received in foreign exchange, service rendered outside India, and software delivered from Indian unit. CIT's restrictive interpretation rejected.",
      outcomeText: "Dismissed",
    },
    matchedSnippets: [
      "The legislative intent behind Section 10A is to incentivise software export; the provision must be construed liberally to advance its object.",
    ],
    fullText:
      "The provision in Section 10A is a beneficent provision intended to encourage software export from India. The CIT's hyper-technical interpretation which seeks to exclude onsite work defeats the legislative purpose and must be rejected.",
  },

  {
    id: "prec-010",
    title: "Novartis AG v. Union of India & Others",
    citation: "(2013) 6 SCC 1",
    court: "Supreme Court of India",
    caseType: "C.A.",
    judgmentDate: "2013-04-01",
    outcome: "Dismissed",
    bench: "Division Bench",
    similarityScore: 0.83,
    keywordScore: 0.79,
    wordCount: 31000,
    summary: {
      facts: "Novartis challenged rejection of patent application for Gleevec (imatinib mesylate) under Patents Act Section 3(d) on enhanced efficacy grounds.",
      issue: "What constitutes 'enhanced efficacy' under Section 3(d) of the Patents Act 1970 to prevent evergreening?",
      holding:
        "Enhanced efficacy refers specifically to therapeutic efficacy, not merely physicochemical properties; Section 3(d) aims to prevent evergreening of patents; Novartis failed to prove enhanced therapeutic efficacy.",
      outcomeText: "Dismissed",
    },
    matchedSnippets: [
      "The amended Section 3(d) is meant to set up a higher, second-tier of qualifying standards for chemical substances and salts, polymorphs of known drugs.",
    ],
    fullText:
      "Section 3(d) is designed to prevent ever-greening and to provide easy access to life-saving drugs to the people of this country. The mere improved bioavailability does not amount to enhanced efficacy within the meaning of Section 3(d).",
  },

  {
    id: "prec-011",
    title: "State of Maharashtra v. Dr. Praful B. Desai",
    citation: "(2003) 4 SCC 601",
    court: "Supreme Court of India",
    caseType: "CRL.A",
    judgmentDate: "2003-02-05",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.84,
    keywordScore: 0.80,
    wordCount: 9200,
    summary: {
      facts: "POCSO-related case on recording of evidence of minor witness; procedural safeguards for child witness testimony.",
      issue: "What procedural safeguards must be observed when recording evidence of a child witness in sexual offence cases?",
      holding:
        "Child witness testimony through video conferencing is permissible; in-camera proceedings mandatory; special court must designate special public prosecutor and support person.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "The evidence of a child witness must be tested with great care and caution; the court must satisfy itself that the child understands the nature of the oath and can distinguish truth from falsehood.",
    ],
    fullText:
      "Child victims who are witnesses in POCSO cases must be afforded protective mechanisms. The court must assess the competence of the child to testify, provide a support person, and conduct the recording in a manner least traumatising to the child.",
  },

  {
    id: "prec-012",
    title: "Microsoft Corporation v. Yogesh Popat & Anr.",
    citation: "(2004) 29 PTC 265 (Del HC)",
    court: "Delhi High Court",
    caseType: "C.S.(Comm.)",
    judgmentDate: "2004-07-19",
    outcome: "Allowed",
    bench: "Single Bench",
    similarityScore: 0.78,
    keywordScore: 0.74,
    wordCount: 7800,
    summary: {
      facts: "Microsoft Corporation sought permanent injunction for software copyright infringement and trademark violation by software reseller.",
      issue: "What constitutes infringement of software copyright and what remedies are available to right holders?",
      holding:
        "Unauthorised copying of software constitutes copyright infringement; account of profits ordered; Anton Piller search order available; statutory damages applicable per infringing copy.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "Every unauthorised copy of a software program amounts to copyright infringement. The Copyright Act provides both civil and criminal remedies.",
    ],
    fullText:
      "Software is entitled to copyright protection as a 'literary work' under the Copyright Act, 1957. Unauthorised reproduction and sale of software constitutes infringement entitling the right holder to injunction, damages, and account of profits.",
  },

  {
    id: "prec-013",
    title: "Sunil Batra v. Delhi Administration",
    citation: "(1978) 4 SCC 494",
    court: "Supreme Court of India",
    caseType: "W.P.(C)",
    judgmentDate: "1978-07-07",
    outcome: "Allowed",
    bench: "Constitution Bench",
    similarityScore: 0.77,
    keywordScore: 0.72,
    wordCount: 22000,
    summary: {
      facts: "Habeas corpus petition challenging conditions of detention in Tihar Jail including torture, overcrowding, and denial of legal rights to undertrial prisoners.",
      issue: "What constitutional protections apply to prisoners and what remedies exist for violation of prisoner rights?",
      holding:
        "Prisoners retain fundamental rights; Article 21 extends within prison walls; courts have jurisdiction under habeas corpus to inquire into prison conditions; prisoner cannot be subjected to torture, dehumanising conditions, or solitary confinement except through law.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "The fundamental rights do not flee the person as he enters the prison although they may suffer shrinkage necessitated by incarceration.",
    ],
    fullText:
      "Imprisonment does not reduce the inmate to a non-person. The Constitution does not permit the dehumanisation of a prisoner. Courts retain supervisory jurisdiction over prisons and can issue directions to ensure constitutional conditions of detention.",
  },

  {
    id: "prec-014",
    title: "EEVFAM v. Union of India (Extra-Judicial Executions Case)",
    citation: "(2016) 14 SCC 536",
    court: "Supreme Court of India",
    caseType: "W.P.(C)",
    judgmentDate: "2016-07-08",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.86,
    keywordScore: 0.82,
    wordCount: 28000,
    summary: {
      facts: "PIL alleging 1,528 extra-judicial executions by armed forces in Manipur under AFSPA; petitioners sought independent investigation.",
      issue: "Whether AFSPA provides absolute immunity to armed forces for use of excessive force resulting in deaths in disturbed areas.",
      holding:
        "AFSPA does not provide absolute immunity; use of excessive and disproportionate force by armed forces is not protected; CBI investigation ordered in all 1,528 cases; each death requires prima facie enquiry.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "No one, including the Army, can act in a arbitrary, excessive and disproportionate manner even in disturbed areas. AFSPA does not give armed forces unbridled powers.",
    ],
    fullText:
      "Even in disturbed areas covered by AFSPA, the use of force must be proportionate and in accordance with the requirements of law. Deaths occurring in suspicious circumstances require investigation. The army cannot claim absolute immunity for deaths caused by excessive force.",
  },

  {
    id: "prec-015",
    title: "NIA v. Zahoor Ahmad Shah Watali",
    citation: "(2019) 5 SCC 1",
    court: "Supreme Court of India",
    caseType: "CRL.A",
    judgmentDate: "2019-04-02",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.88,
    keywordScore: 0.84,
    wordCount: 16000,
    summary: {
      facts: "Bail application in UAPA terrorism financing case; special NIA court denied bail; High Court granted bail.",
      issue: "What standard applies when granting bail under UAPA and what is the scope of High Court interference?",
      holding:
        "Bail under UAPA should not be granted unless prima facie case is not established; High Court must exercise restraint; accused must demonstrate that materials are prima facie false; pro-prosecution presumption applies at bail stage.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "While granting bail under UAPA, the courts must keep in mind that the offences are grave and the evidence must be weighed only to find if prima facie case is made out.",
    ],
    fullText:
      "The gravity of the offences under UAPA requires a different approach at the bail stage. The court must be circumspect and must not allow bail unless it is clear that the material placed by the prosecution cannot even prima facie establish the charge.",
  },

  {
    id: "prec-016",
    title: "Secretary, State of Karnataka v. Uma Devi",
    citation: "(2006) 4 SCC 1",
    court: "Supreme Court of India",
    caseType: "C.A.",
    judgmentDate: "2006-04-10",
    outcome: "Dismissed",
    bench: "Constitution Bench (5 Judges)",
    similarityScore: 0.74,
    keywordScore: 0.70,
    wordCount: 24000,
    summary: {
      facts: "Regularisation claims by large number of daily wage workers in government service working for years without regular appointment.",
      issue: "Whether constitutional courts can direct regularisation of daily wage government workers appointed without following recruitment rules.",
      holding:
        "Courts cannot direct regularisation of irregularly appointed workers as it would violate Articles 14 and 16; regularisation only permissible under a one-time measure; back-door entry through courts impermissible.",
      outcomeText: "Dismissed",
    },
    matchedSnippets: [
      "No court can be a party to the perpetuation of an action that is in clear disregard of the constitutional provisions and norms of regular employment.",
    ],
    fullText:
      "The right to equality enshrined in Articles 14 and 16 requires that public employment must be through fair, open, and transparent process. Courts cannot regularise those who entered public service through back-door, temporary, or casual routes without following recruitment rules.",
  },

  {
    id: "prec-017",
    title: "Committee of Creditors of Essar Steel India Ltd. v. Satish Kumar Gupta",
    citation: "(2020) 8 SCC 531",
    court: "Supreme Court of India",
    caseType: "C.A.",
    judgmentDate: "2019-11-15",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.89,
    keywordScore: 0.85,
    wordCount: 32000,
    summary: {
      facts: "Dispute over resolution plan under IBC; operational creditors and financial creditors disputed waterfall mechanism under Section 53.",
      issue: "Whether IBC Section 53 waterfall mechanism is mandatory and whether CoC has discretion to deviate from it in resolution plan.",
      holding:
        "Section 53 waterfall is mandatory in liquidation; CoC has discretion in resolution plan but must be fair to all creditors; NCLAT cannot substitute its commercial wisdom for CoC's; resolution plan approval binding on all stakeholders.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "The IBC is a complete code and commercial wisdom of the Committee of Creditors is paramount in approving resolution plans, subject to limited judicial review.",
    ],
    fullText:
      "The commercial wisdom of the Committee of Creditors should be respected. Courts must not interfere with business decisions taken by financial creditors in approving a resolution plan unless there is a clear violation of law or the plan is discriminatory.",
  },

  {
    id: "prec-018",
    title: "Pune Municipal Corporation v. Harakchand Misirimal Solanki",
    citation: "(2014) 3 SCC 183",
    court: "Supreme Court of India",
    caseType: "C.A.",
    judgmentDate: "2014-01-23",
    outcome: "Allowed",
    bench: "Division Bench",
    similarityScore: 0.86,
    keywordScore: 0.82,
    wordCount: 15000,
    summary: {
      facts: "Land acquisition in Pune; acquisition lapsed under Section 24(2) RFCTLARR Act as compensation not paid and possession not taken.",
      issue: "When does acquisition lapse under Section 24 RFCTLARR and what is 'paid into court' for Section 24(2)?",
      holding:
        "Acquisition lapses if 5 years elapse and possession not taken OR compensation not paid to landowner (not court deposit); dual conjunctive conditions; benefit of doubt to landowner.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "The land acquisition lapses if the government fails to take possession and fails to pay compensation to the landowner directly within five years.",
    ],
    fullText:
      "Section 24(2) of RFCTLARR Act envisages lapse of acquisition when two conditions are satisfied: physical possession not taken and compensation not actually paid to landowners. Deposit in court treasury does not constitute payment under Section 24.",
  },

  {
    id: "prec-019",
    title: "Indra Sawhney v. Union of India (Mandal Commission Case)",
    citation: "(1992) Supp (3) SCC 217",
    court: "Supreme Court of India",
    caseType: "W.P.(C)",
    judgmentDate: "1992-11-16",
    outcome: "Allowed",
    bench: "Constitution Bench (9 Judges)",
    similarityScore: 0.76,
    keywordScore: 0.72,
    wordCount: 185000,
    summary: {
      facts: "Challenge to Mandal Commission Report implementation providing 27% OBC reservation in central government jobs.",
      issue: "Constitutional limits on reservations: 50% ceiling, creamy layer exclusion, reservations in promotions.",
      holding:
        "27% OBC reservation constitutionally valid; total reservation cannot exceed 50% (Balaji rule confirmed); creamy layer must be excluded from OBC reservation; reservations in promotions impermissible without compelling state interest.",
      outcomeText: "Allowed",
    },
    matchedSnippets: [
      "Reservations are not an end in themselves but a means to achieve the larger goal of equality. The 50% ceiling must be strictly observed.",
    ],
    fullText:
      "The power to make reservations under Articles 15 and 16 is a constituent power of the State. However, it must be exercised within constitutional limits: the 50% ceiling, exclusion of creamy layer, and periodical reviews are mandatory.",
  },

  {
    id: "prec-020",
    title: "Aviva Life Insurance Co. India Ltd. v. Surekha Soni",
    citation: "(2017) 1 SCC 1 (Consumer Court)",
    court: "National Consumer Disputes Redressal Commission",
    caseType: "C.A.",
    judgmentDate: "2017-03-22",
    outcome: "Dismissed",
    bench: "Full Bench",
    similarityScore: 0.72,
    keywordScore: 0.68,
    wordCount: 8400,
    summary: {
      facts: "Insurance company repudiated death claim alleging material misrepresentation of health status at policy inception.",
      issue: "What constitutes material misrepresentation under Insurance Act Section 45 and what period of limitation applies?",
      holding:
        "After 3 years from policy issuance, insurer cannot repudiate on misrepresentation grounds unless fraud proven; non-disclosure of minor ailment not material misrepresentation; Section 45 as amended in 2015 is beneficial legislation.",
      outcomeText: "Dismissed",
    },
    matchedSnippets: [
      "Section 45 of the Insurance Act, as amended, creates an irrebuttable presumption that after 3 years, the policy is incontestable on grounds of misrepresentation absent proven fraud.",
    ],
    fullText:
      "The insurance company cannot repudiate a death claim on the ground of misrepresentation or suppression of material facts after 3 years have elapsed since the policy was issued. The insured's family is entitled to the benefit of the doubt regarding pre-existing conditions not material to the risk.",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 3 — MODEL BENCHMARK METRICS
// ─────────────────────────────────────────────────────────────────────────────

export const MOCK_MODEL_METRICS: ModelMetricComparison[] = [
  {
    metric: "MAE (days)",
    metadataOnly: 68.4,
    withPrecedents: 41.2,
    improvementPct: 39.8,
    unit: "days",
  },
  {
    metric: "RMSE (days)",
    metadataOnly: 94.7,
    withPrecedents: 58.3,
    improvementPct: 38.4,
    unit: "days",
  },
  {
    metric: "R² Score",
    metadataOnly: 0.51,
    withPrecedents: 0.78,
    improvementPct: 52.9,
    unit: "ratio",
  },
  {
    metric: "Top-1 Precedent Precision",
    metadataOnly: 0.0,
    withPrecedents: 0.84,
    improvementPct: 100.0,
    unit: "ratio",
  },
  {
    metric: "Mean Absolute Percentage Error",
    metadataOnly: 34.2,
    withPrecedents: 20.7,
    improvementPct: 39.5,
    unit: "percent",
  },
  {
    metric: "90-Day Accuracy (Correct Bucket %)",
    metadataOnly: 51.0,
    withPrecedents: 72.3,
    improvementPct: 41.8,
    unit: "percent",
  },
  {
    metric: "Spearman Rank Correlation (Priority)",
    metadataOnly: 0.44,
    withPrecedents: 0.71,
    improvementPct: 61.4,
    unit: "ratio",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// SECTION 4 — FEATURE IMPORTANCE (SHAP-ranked)
// ─────────────────────────────────────────────────────────────────────────────

export const MOCK_FEATURE_IMPORTANCE: FeatureImportance[] = [
  {
    rank: 1,
    featureName: "top1_similarity",
    category: "Precedent Intelligence",
    meanShap: 0.312,
    direction: "Reduces delay variance",
    description: "Top precedent cosine similarity score from FAISS vector index — most predictive single feature",
  },
  {
    rank: 2,
    featureName: "hearings_count",
    category: "Procedural",
    meanShap: 0.228,
    direction: "Nonlinear — high hearings both delays and signals near-conclusion",
    description: "Total number of hearings conducted to date; reflects case age and complexity simultaneously",
  },
  {
    rank: 3,
    featureName: "count_above_threshold",
    category: "Precedent Intelligence",
    meanShap: 0.187,
    direction: "Reduces delay variance",
    description: "Number of precedents with cosine similarity > 0.75 — corpus convergence signal",
  },
  {
    rank: 4,
    featureName: "case_type_encoded",
    category: "Case Metadata",
    meanShap: 0.143,
    direction: "Varies by type — CRL.A fastest, PIL slowest",
    description: "Encoded case type (CRL.A, W.P.(C), SLP, PIL, etc.); different procedural timelines per type",
  },
  {
    rank: 5,
    featureName: "filing_age_days",
    category: "Case Metadata",
    meanShap: 0.098,
    direction: "Increases delay — older cases predict longer remaining time",
    description: "Number of calendar days elapsed since case was first filed in registry",
  },
  {
    rank: 6,
    featureName: "mean_top5_similarity",
    category: "Precedent Intelligence",
    meanShap: 0.079,
    direction: "Reduces delay variance",
    description: "Mean cosine similarity of top-5 retrieved precedents — corpus depth signal",
  },
  {
    rank: 7,
    featureName: "court_tier",
    category: "Case Metadata",
    meanShap: 0.058,
    direction: "SC faster than HC for SLPs; HC faster for writs",
    description: "Court hierarchy tier (Supreme Court = 1, High Court = 2, Tribunal = 3)",
  },
  {
    rank: 8,
    featureName: "complexity_encoded",
    category: "Procedural",
    meanShap: 0.045,
    direction: "High complexity increases delay by 40–65 days on average",
    description: "AI-inferred complexity level (Low/Medium/High) from subject matter and precedent distance",
  },
  {
    rank: 9,
    featureName: "status_stage",
    category: "Procedural",
    meanShap: 0.038,
    direction: "Reserved judgment dramatically reduces predicted time",
    description: "Current stage (pending < hearing < reserved) — reserved cases show 85% faster completion",
  },
  {
    rank: 10,
    featureName: "acts_sections_count",
    category: "Case Metadata",
    meanShap: 0.022,
    direction: "More statutory provisions increases deliberation time",
    description: "Number of distinct acts and sections invoked in pleadings — proxy for legal complexity breadth",
  },
];
