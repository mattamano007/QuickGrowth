import React from "react";

const painPoints = [
  { tag: "Consultants", text: "6 months. $200K. You get a strategy deck and a bill." },
  { tag: "Hiring", text: "6 months to find talent. $150K salary. Risk they build the wrong thing." },
  { tag: "DIY tools", text: "Which automation first? Does it even work? Meanwhile the team keeps doing the manual work." },
];

const sprintSteps = [
  { label: "Day 0", text: "30-minute call. You pick an automation from our menu. We agree on a KPI." },
  { label: "Day 1", text: "We build using proven playbooks deployed dozens of times. No experiments on your dime." },
  { label: "Day 2", text: "We deploy. Train your team. Set up tracking. You watch it work." },
];

const automations = [
  {
    title: "Lead qualification",
    before: "Before: Sales spent 20 hrs/week qualifying leads.",
    after: "After: Automatic scoring. 18 hrs back. 30% better conversion.",
  },
  {
    title: "Customer support",
    before: "Before: Team drowning in repetitive tickets. 24-hour waits.",
    after: "After: AI handles 60% of tickets. Response time: 2 hours → 10 minutes.",
  },
  {
    title: "Content repurposing",
    before: "Before: 15 hrs/week adapting posts for each channel.",
    after: "After: Automatic repurposing. 3x output. 12 hrs back weekly.",
  },
  {
    title: "CRM enrichment",
    before: "Before: Messy data. Manual updates. Slow follow-ups.",
    after: "After: Automatic enrichment. 95% data quality. 15 hrs/week saved.",
  },
];

const proofStats = [
  { number: "400+", label: "automations delivered" },
  { number: "14-20", label: "sprints every month" },
  { number: "5-10x", label: "ROI in year one" },
  { number: "10-20", label: "hours/week freed per automation" },
  { number: "0", label: "refunds issued" },
];

const timeline = [
  { label: "Hour 0-1", text: "Assessment call. Pick automation. Define KPI and owner." },
  { label: "Hour 2-12", text: "Build with our playbooks. Connect to your stack. Test edge cases." },
  { label: "Hour 13-24", text: "Deploy to production. Run live tests. Set alerts and dashboards." },
  { label: "Hour 25-48", text: "Team training. KPI verification. Handover with documentation." },
];

const audienceFit = {
  best: [
    "10-200 person companies: agencies, SaaS, e-commerce, pro services",
    "Ops leaders drowning in repetitive work",
    "Teams ready to move fast",
    "Clear processes that need a push, not a reinvention",
  ],
  not: [
    "Pre-revenue or still finding product-market fit",
    "Six-month procurement cycles",
    "Custom AI research projects",
    "No defined processes to automate yet",
  ],
};

const pricingOptions = [
  {
    title: "Fixed sprint",
    price: "$5,000",
    copy: "One automation. 2 days. Clear scope.",
    tag: "Most popular",
    highlight: true,
  },
  { title: "Outcome-based", price: "Pay on results", copy: "We agree on a KPI. You pay only if we hit it." },
];

const faq = [
  {
    q: "How can you do in 2 days what consultants need 6 months for?",
    a: "We use proven playbooks. It's assembling tested parts, not inventing from scratch. We focus on the 80% that drives impact.",
  },
  {
    q: "What if our situation is unique?",
    a: "We see patterns. If you're truly unique, we'll tell you on the 30-min call and point you to the right path.",
  },
  {
    q: "What happens after 2 days?",
    a: "The automation is live. We monitor for 30 days and train your team. Most clients book another sprint once they see the ROI.",
  },
  {
    q: "Why should we trust you?",
    a: "400+ builds. 14-20 sprints every month. 5-10x ROI typical. Never had to refund. We only take on projects where we're confident.",
  },
];

const metrics = ["400+ builds", "14-20 sprints/month", "Never issued a refund"];

export const CTAButton = ({ small = false }: { small?: boolean }) => (
  <button className={`cta ${small ? "small" : ""}`} aria-label="Book 30-minute assessment">
    Book 30-min Assessment
  </button>
);

export const NavBadge = () => (
  <div className="nav-badge">Loved by operators shipping 14-20 sprints every month</div>
);

export const Section = ({
  title,
  className = "",
  children,
  id,
  label,
}: {
  title?: string;
  className?: string;
  children: React.ReactNode;
  id?: string;
  label?: string;
}) => (
  <section className={`section ${className}`.trim()} id={id}>
    {label ? <p className="section-label">{label}</p> : null}
    {title ? <h2>{title}</h2> : null}
    {children}
  </section>
);

export function Nav() {
  return (
    <header className="nav">
      <NavBadge />
      <div className="nav-center">QuickGrowth</div>
      <div className="nav-right">
        <a className="link" href="#work">
          Work
        </a>
        <a className="link" href="#pricing">
          Pricing
        </a>
        <a className="link" href="#faq">
          FAQ
        </a>
        <CTAButton small />
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <p className="eyebrow">AI automation that actually ships</p>
      <h1>
        2 days.
        <br />
        Working system.
        <br />
        Guaranteed results.
      </h1>
      <p className="lead">
        Traditional consultants take 6 months and deliver PowerPoint. We take 2 days and deliver deployed automations.
      </p>
      <div className="hero-actions">
        <CTAButton />
        <p className="hero-subtext">$5K flat or outcome-based pricing</p>
      </div>
      <div className="ticker">
        {metrics.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <Section title="You know you need AI automation." label="The Problem" id="problem">
      <p className="body-lg text-muted">
        Competitors are automating. Your board is asking. Your team is drowning in repetitive work.
      </p>
      <p className="body-lg text-muted">But the options are broken:</p>
      <div className="pillars">
        {painPoints.map((point) => (
          <div className="card card-hover" key={point.tag}>
            <p className="tag">{point.tag}</p>
            <p className="text-muted">{point.text}</p>
          </div>
        ))}
      </div>
      <p className="punchline">Meanwhile, your team does the same manual tasks 40 hours per week. There’s a better way.</p>
    </Section>
  );
}

export function Solution() {
  return (
    <Section title="Here's how it works." label="The Solution" className="solution" id="solution">
      <div className="steps">
        {sprintSteps.map((step, idx) => (
          <div className="step-card card-hover" key={step.label}>
            <span className="step-number">{String(idx + 1).padStart(2, "0")}</span>
            <p className="step-title">{step.label.toUpperCase()}</p>
            <p className="text-muted">{step.text}</p>
          </div>
        ))}
      </div>
      <div className="note">
        Working automation. 2 days. Not a strategy doc. Not a pilot plan. A deployed system that saves time or makes money.
      </div>
    </Section>
  );
}

export function Automations() {
  return (
    <Section title="Automations we ship" label="What We've Built" id="work">
      <div className="grid">
        {automations.map((item) => (
          <div className="card case-card card-hover" key={item.title}>
            <span className="tag">{item.title}</span>
            <div className="case-block">
              <p className="text-dim">Before</p>
              <p>{item.before}</p>
            </div>
            <div className="case-block">
              <p className="text-dim">After</p>
              <p>{item.after}</p>
            </div>
            <p className="time">2 days to deploy</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function Proof() {
  return (
    <Section title="Proof it works" label="Outcomes">
      <div className="stats">
        {proofStats.map((stat) => (
          <div className="stat" key={stat.number + stat.label}>
            <p className="stat-number">{stat.number}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const testimonials = [
  {
    quote: "Deployed a lead qualification system in 2 days that saves us 18 hours per week. ROI paid back in 3 weeks.",
    name: "Sarah Chen",
    role: "COO, B2B SaaS",
  },
  {
    quote: "Support tickets dropped 60% in the first week. Response times went from 2 hours to 10 minutes.",
    name: "Luis Martinez",
    role: "Head of CX, eCommerce",
  },
  {
    quote: "Content repurposing now runs itself. 3x output, same headcount. We booked another sprint immediately.",
    name: "Priya Kapoor",
    role: "Founder, Agency",
  },
];

export function SocialProof() {
  return (
    <Section title="Trusted by operators who need results" label="Social Proof">
      <div className="testimonials">
        {testimonials.map((t) => (
          <div className="testimonial card-hover" key={t.name}>
            <p className="quote">“{t.quote}”</p>
            <p className="author">{t.name}</p>
            <p className="text-muted">{t.role}</p>
          </div>
        ))}
      </div>
      <div className="stats-bar">
        {proofStats.map((stat) => (
          <div key={stat.label}>
            <span className="stat-number">{stat.number}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

export function SprintTimeline() {
  return (
    <Section title="The 2-day sprint" className="timeline" label="Timeline">
      <div className="steps vertical">
        {timeline.map((item) => (
          <div className="step" key={item.label}>
            <span className="step-number">{item.label}</span>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
      <div className="note">You own the system. No lock-in. We monitor for 30 days.</div>
    </Section>
  );
}

export function Guarantee() {
  return (
    <Section title="Don't pay unless we add value" className="guarantee" label="Zero Risk">
      <p>We agree on the KPI before we start. Time saved, cost cut, or revenue created.</p>
      <p>We measure impact for 30 days. If we miss, you don't pay. It's that simple.</p>
      <p className="punchline">We've never had to refund.</p>
    </Section>
  );
}

export function Audience() {
  return (
    <Section title="Who this is for" className="audience" label="Fit">
      <div className="grid two">
        <div className="card">
          <h3>Best fit</h3>
          <ul>
            {audienceFit.best.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Probably not</h3>
          <ul>
            {audienceFit.not.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

export function Pricing() {
  return (
    <Section title="Pricing" className="pricing" label="Pricing" id="pricing">
      <div className="grid two">
        {pricingOptions.map((option) => (
          <div className={`card ${option.highlight ? "highlight" : ""}`.trim()} key={option.title}>
            {option.tag ? <p className="tag">{option.tag}</p> : null}
            <h3>{option.title}</h3>
            <p className="price">{option.price}</p>
            <p>{option.copy}</p>
            <CTAButton />
          </div>
        ))}
      </div>
      <ul className="include">
        <li>2-day build and deploy</li>
        <li>Team training</li>
        <li>30-day monitoring</li>
        <li>You own everything. No lock-in.</li>
      </ul>
      <p className="text-muted">No hidden fees. No monthly charges. No surprises.</p>
    </Section>
  );
}

export function FAQ() {
  return (
    <Section title="Questions" className="faq" id="faq" label="FAQ">
      {faq.map((item) => (
        <div className="faq-item" key={item.q}>
          <h4>{item.q}</h4>
          <p>{item.a}</p>
        </div>
      ))}
    </Section>
  );
}

export function FinalCTA() {
  return (
    <Section className="final-cta">
      <h2>Ready to automate this week?</h2>
      <p>Book a 30-minute call. We'll pick the right automation, set the KPI, and tell you exactly what we would build.</p>
      <div className="hero-actions">
        <CTAButton />
        <p className="note">If we aren't confident we can add value, we'll say so.</p>
      </div>
    </Section>
  );
}
