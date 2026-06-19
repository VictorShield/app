// Static content for João Victor Tavares' portfolio

export const PROFILE = {
  name: "João Victor Tavares",
  role: "Creative Marketing Strategist",
  tagline:
    "I treat creative like an asset class — engineered, tested, killed when weak, scaled when winning.",
  location: "Available worldwide · Remote",
  email: "victormirmav00@gmail.com",
  linkedin: "https://www.linkedin.com/in/joao-victor-t-4a2b6085/",
};

export const SERVICES = [
  {
    id: "01",
    title: "Creative Strategy",
    body: "Diagnose the creative engine. Map the customer journey. Build the brief that the work answers.",
  },
  {
    id: "02",
    title: "Hook Frameworks",
    body: "4×3 hook-cluster matrices that map themes to funnel stages — so every asset has a job.",
  },
  {
    id: "03",
    title: "Performance Creative",
    body: "Static, motion, UGC, editorial. Built to survive the feed, the algorithm and the CFO.",
  },
  {
    id: "04",
    title: "Funnel Optimization",
    body: "TOFU prospecting, MOFU consideration, BOFU retargeting — each placement gets its own creative.",
  },
];

export const HEADLINE_METRICS = [
  { label: "Blended ROAS", from: "1.82x", to: "3.47x", delta: "+90.6%" },
  { label: "CAC", from: "$83", to: "$44", delta: "−47.5%" },
  { label: "Hook Rate (3s)", from: "12.4%", to: "23.4%", delta: "+88.5%" },
  { label: "Hold Rate (15s)", from: "3.2%", to: "7.4%", delta: "+132%" },
  { label: "Thumb-stop CTR", from: "0.9%", to: "2.3%", delta: "+157%" },
  { label: "In-platform Revenue", from: "$728K", to: "$1.39M", delta: "+90.9%" },
];

export const HOOK_CLUSTERS = [
  {
    code: "A",
    name: "Blue Noir",
    sub: "Y2K Editorial",
    stage: "TOFU",
    roas: "2.91x",
    cac: "$44",
    desc: "Price-led cold discovery. Nostalgia as a hook.",
    color: "#2563EB",
  },
  {
    code: "B",
    name: "Sunny Lifestyle",
    sub: "Yellow Car",
    stage: "MOFU",
    roas: "3.78x",
    cac: "$34",
    desc: "Color theory + aspirational objects. Highest thumb-stop.",
    color: "#F59E0B",
  },
  {
    code: "C",
    name: "Body Diversity",
    sub: "Inclusivity-Led",
    stage: "TOFU + Brand",
    roas: "2.64x",
    cac: "$47",
    desc: "Brand equity with overlooked segments. Highest comment ratio.",
    color: "#EC4899",
  },
  {
    code: "D",
    name: "Clean Studio",
    sub: "Catalog",
    stage: "BOFU / Retargeting",
    roas: "5.21x",
    cac: "$22",
    desc: "Conversion workhorse. Reallocated, not redesigned.",
    color: "#10B981",
  },
];

export const TESTING_ROADMAP = [
  {
    phase: "Phase 01",
    title: "Diagnose",
    body: "Audit creative inventory, map by funnel stage, surface margin leak.",
  },
  {
    phase: "Phase 02",
    title: "Cluster",
    body: "Group winning hooks into themes. Build the 4×3 matrix.",
  },
  {
    phase: "Phase 03",
    title: "Reallocate",
    body: "Move BOFU creative out of cold. Move brand creative into TOFU.",
  },
  {
    phase: "Phase 04",
    title: "Test & Kill",
    body: "Define kill criteria up front. Cut hook rate <8%. Reinvest within 48h.",
  },
  {
    phase: "Phase 05",
    title: "Scale on margin",
    body: "Stop optimizing for topline ROAS. Optimize for contribution margin.",
  },
];

export const PUSHBACKS = [
  {
    title: "Topline ROAS was lying.",
    body: "Discount stacking made the number look healthy. Contribution margin was bleeding. I forced the team to track margin-adjusted ROAS.",
  },
  {
    title: "The catalog wasn't a TOFU asset.",
    body: "Clean Studio on cold = 1.4x. Move it to retargeting = 5.21x. Same asset. Right placement.",
  },
  {
    title: "Inclusivity wasn't a 'campaign' — it was the audience.",
    body: "Body diversity creative drove 3.2× the comment-to-impression rate. We rebuilt the casting brief, not the ad.",
  },
];

export const KILLED = [
  "DENIM SHOPPE — indigo studio lying-pose. Cannibalized its own cluster.",
  "Iconic Denim — white tee variant. Hook rate 4.1%, below floor.",
  "Denim Shoppe — blue noir close-up. Eaten by Cluster A leader.",
];
