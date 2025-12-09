import React, { useEffect, useState } from "react";

const solutionSteps = [
  {
    title: "Smart scoping",
    blurb: "We align on the highest-impact automation and a measurable KPI.",
    points: ["30-min assessment call", "Pick from proven automation menu", "Define owners and success metric"],
    visual: "radar",
  },
  {
    title: "Build with playbooks",
    blurb: "We assemble and customize with components we've shipped dozens of times.",
    points: ["Connect to your stack", "Handle edge cases and alerts", "Ship a working draft in hours"],
    visual: "code",
  },
  {
    title: "Launch + train",
    blurb: "We deploy, test live, and train your team so it sticks.",
    points: ["Production deploy", "Team training session", "Dashboards for visibility"],
    visual: "integration",
  },
  {
    title: "Optimize + verify",
    blurb: "We track the KPI for 30 days and tune for lift before we call it done.",
    points: ["Monitor impact", "Tweak prompts/flows", "Prove the KPI before handoff"],
    visual: "checklist",
  },
];

const solutions = [
  {
    title: "Automate repetitive tasks",
    blurb: "AI workflows that take the manual steps off your team's plate and run on triggers you control.",
    tags: ["Automation", "AI assistants", "Workflows"],
    visual: "list",
  },
  {
    title: "Delegate daily tasks",
    blurb: "Inbox triage, QA checks, and summaries handled before your team starts their day.",
    tags: ["Delegation", "Daily ops", "Productivity"],
    visual: "spinner",
  },
  {
    title: "Accelerate sales growth",
    blurb: "Automatic research, enrichment, and outbound prep so reps stay in the conversation, not the CRM.",
    tags: ["Sales", "Enrichment", "Outbound"],
    visual: "table",
  },
  {
    title: "Build smarter systems",
    blurb: "Layer AI reasoning onto your stack: routing, scoring, and data sanity checks in one flow.",
    tags: ["Systems", "Data quality", "Routing"],
    visual: "cards",
  },
];

const testimonials = [
  {
    name: "James Carter",
    role: "CEO at TechFlow Solutions",
    quote:
      "QuickGrowth transformed our operations by eliminating repetitive tasks and improving efficiency. Scaling our workflow has never been easier.",
    stars: 5,
    initials: "JC",
  },
  {
    name: "Sophia Martinez",
    role: "Operations Manager at NexaCorp",
    quote:
      "With QuickGrowth, we cut manual work and improved accuracy. Our team now focuses on high-impact tasks while automation handles the rest.",
    stars: 5,
    initials: "SM",
  },
  {
    name: "David Reynolds",
    role: "Head of Sales at GrowthPeak",
    quote:
      "QuickGrowth's insights doubled our sales efficiency. We now engage leads at the right time with smarter, data-backed decisions.",
    stars: 5,
    initials: "DR",
  },
  {
    name: "Emily Wong",
    role: "Customer Success Lead at SupportHive",
    quote:
      "Customer support is now seamless. Our response time improved drastically, and satisfaction levels are at an all-time high.",
    stars: 5,
    initials: "EW",
  },
];

const pricing = [
  {
    title: "Fixed Sprint",
    price: "$5,000",
    badge: "Most popular",
    bullets: ["One automation", "2 days", "Clear scope"],
  },
  {
    title: "Outcome-based",
    price: "Pay on results",
    bullets: ["Agree on a KPI", "Build the automation", "You pay only if we hit it"],
  },
];

const faqs = [
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
    a: "400+ projects. 14-20 sprints/month. 5-10x ROI typical. Never had to refund.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    // Smooth scroll for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e: Event) => {
      e.preventDefault();
      const target = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (target && document.querySelector(target)) {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    // Magnetic button effect
    const buttons = document.querySelectorAll(".cta-button");
    const handleMove = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLButtonElement;
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) translateY(-2px)`;
    };
    const handleLeave = (e: MouseEvent) => {
      const btn = e.currentTarget as HTMLButtonElement;
      btn.style.transform = "translate(0, 0)";
    };
    buttons.forEach((btn) => {
      btn.addEventListener("mousemove", handleMove);
      btn.addEventListener("mouseleave", handleLeave);
    });

    // Intersection observer for fade-ins
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    const animatedEls = document.querySelectorAll(".animate");
    animatedEls.forEach((el) => observer.observe(el));

    return () => {
      anchors.forEach((anchor) => anchor.removeEventListener("click", handleClick));
      buttons.forEach((btn) => {
        btn.removeEventListener("mousemove", handleMove);
        btn.removeEventListener("mouseleave", handleLeave);
      });
      animatedEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="page">
      <nav className="top-nav">
        <div className="nav-inner">
          <div className="logo">QuickGrowth</div>
          <div className="nav-links">
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <button className="cta-button small">
              <span>Book 30-min Assessment</span>
            </button>
          </div>
        </div>
      </nav>
      <a className="mobile-sticky-cta" href="#pricing">
        <span>Book a free call</span>
        <span aria-hidden="true">↗</span>
      </a>

      <section className="hero" id="top">
        <div className="hero-bg">
          <div className="gradient-mesh" />
          <div className="grid-pattern" />
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
        </div>

        <div className="hero-content">
          <div className="eyebrow">
            <div className="pulse-dot" />
            <span>Loved by operators shipping 14-20 sprints every month</span>
          </div>

          <h1 className="hero-title">
            <span className="line">2 days.</span>
            <span className="line">Working system.</span>
            <span className="line">Guaranteed results.</span>
          </h1>

          <p className="hero-subtitle">
            Traditional consultants take 6 months and deliver a PowerPoint.
            <br />
            We take 2 days and deliver deployed automations.
          </p>

          <div className="hero-cta">
            <div className="cta-inline">
              <input className="cta-input" type="email" name="hero-email" placeholder="Work email" aria-label="Work email" />
              <button className="cta-button">
                <span>Book 30-Min Assessment</span>
              </button>
            </div>
            <p className="cta-subtext">$5K flat or outcome-based pricing</p>
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-line" />
          <span className="scroll-text">Scroll</span>
        </div>
      </section>

      <section className="problem-section">
        <div className="section-shell">
          <div className="section-label animate">THE PROBLEM</div>
          <h2 className="section-title animate">You know you need AI automation.</h2>
          <p className="section-subtitle">
            Competitors are automating. Your boss is asking. Your team is drowning in repetitive work.
          </p>
          <div className="spacer-line" aria-hidden="true" />
          <p className="section-subtitle">But the options are broken:</p>

          <div className="problem-grid">
            <div className="problem-card animate">
              <div className="problem-tag">CONSULTANTS</div>
              <ul className="problem-list">
                <li>
                  <span className="problem-icon">⏱</span>
                  <span>6 months. $200K.</span>
                </li>
                <li>
                  <span className="problem-icon">📄</span>
                  <span>You get a strategy deck and a bill.</span>
                </li>
              </ul>
            </div>

            <div className="problem-card animate">
              <div className="problem-tag">HIRING</div>
              <ul className="problem-list">
                <li>
                  <span className="problem-icon">🔍</span>
                  <span>6 months to find talent.</span>
                </li>
                <li>
                  <span className="problem-icon">💸</span>
                  <span>$150K salary. Risk they build the wrong thing.</span>
                </li>
              </ul>
            </div>

            <div className="problem-card animate">
              <div className="problem-tag">DIY TOOLS</div>
              <ul className="problem-list">
                <li>
                  <span className="problem-icon">❓</span>
                  <span>Which automation first?</span>
                </li>
                <li>
                  <span className="problem-icon">⏳</span>
                  <span>Does it even work? Team keeps doing manual work.</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="section-title closing-line animate">
            Meanwhile, your team does the same manual tasks 40 hours per week.{" "}
            <span className="accent-gradient">There's a better way.</span>
          </h3>
        </div>
      </section>

      <section className="solutions-section" id="work">
        <div className="section-shell">
          <div className="section-label animate">OUR SERVICES</div>
          <h2 className="section-title animate">AI solutions that take your business to the next level.</h2>
          <p className="section-subtitle">We design, develop, and implement automation tools that help you work smarter, not harder.</p>

          <div className="solutions-grid">
            {solutions.map((item, idx) => (
              <div className={`solution-row ${idx % 2 === 1 ? "reverse" : ""}`} key={item.title}>
                <div className="solution-card animate">
                  <div className="card-header">
                    <span className="chip">Automation</span>
                    <span className="chip ghost">Live</span>
                  </div>
                  <div className={`card-visual ${item.visual}`}>
                    {item.visual === "list" && (
                      <div className="list-mock">
                        <div className="list-row">
                          <span className="dot" />
                          <span className="label">System check</span>
                        </div>
                        <div className="list-row">
                          <span className="dot" />
                          <span className="label">Process check</span>
                        </div>
                        <div className="list-row">
                          <span className="dot" />
                          <span className="label">Speed check</span>
                        </div>
                        <div className="list-row">
                          <span className="dot" />
                          <span className="label">Manual work</span>
                        </div>
                        <div className="list-row">
                          <span className="dot" />
                          <span className="label">Repetitive task</span>
                        </div>
                      </div>
                    )}
                    {item.visual === "spinner" && (
                      <div className="spinner-wrap">
                        <div className="spinner" />
                        <p className="spinner-text">Work smarter, not harder.</p>
                      </div>
                    )}
                    {item.visual === "table" && (
                      <div className="table-mock">
                        <div className="table-row header">
                          <span>Accounts</span>
                          <span>Status</span>
                          <span>Owner</span>
                        </div>
                        <div className="table-row">
                          <span>NexaCorp</span>
                          <span className="pill green">Ready</span>
                          <span>Sarah</span>
                        </div>
                        <div className="table-row">
                          <span>GrowthPeak</span>
                          <span className="pill amber">Review</span>
                          <span>Alex</span>
                        </div>
                        <div className="table-row">
                          <span>TechFlow</span>
                          <span className="pill purple">Enriched</span>
                          <span>Jamie</span>
                        </div>
                      </div>
                    )}
                    {item.visual === "cards" && (
                      <div className="cards-mock">
                        <div className="card-line">
                          <span className="pill purple">Score</span>
                          <span className="pill ghost">Route</span>
                        </div>
                        <div className="card-line wide">
                          <span className="label">Data check</span>
                          <span className="pill green">Pass</span>
                        </div>
                        <div className="card-line wide">
                          <span className="label">Notify owner</span>
                          <span className="pill amber">Queued</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="solution-text animate">
                  <div className="section-label pill tiny">Use case</div>
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                  <div className="solution-tags">
                    {item.tags.map((tag) => (
                      <span className="solution-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="solution-section" id="solution">
        <div className="section-shell">
          <div className="section-label animate">OUR PROCESS</div>
          <h2 className="section-title animate">Simple, fast, and scalable.</h2>
          <p className="section-subtitle">We design, build, and optimize automations that ship in days—not months.</p>

          <div className="process-grid">
            {solutionSteps.map((step, idx) => (
              <div className="process-card animate" key={step.title}>
                <div className="process-top">
                  <span className="step-pill">Step {idx + 1}</span>
                  <h3 className="process-title">{step.title}</h3>
                  <p className="process-blurb">{step.blurb}</p>
                </div>
                <div className="process-body">
                  <div className={`process-visual ${step.visual}`}>
                    {step.visual === "radar" && (
                      <div className="radar">
                        <div className="ring ring-1" />
                        <div className="ring ring-2" />
                        <div className="ring ring-3" />
                        <div className="needle" />
                      </div>
                    )}
                    {step.visual === "code" && (
                      <div className="code-window">
                        <div className="code-bar">
                          <span />
                          <span />
                          <span />
                        </div>
                        <div className="code-lines">
                          <div className="code-line wide" />
                          <div className="code-line" />
                          <div className="code-line long" />
                          <div className="code-line short" />
                        </div>
                      </div>
                    )}
                    {step.visual === "integration" && (
                      <div className="integration">
                        <div className="node left">Your stack</div>
                        <div className="connector" />
                        <div className="node right">Automation</div>
                      </div>
                    )}
                    {step.visual === "checklist" && (
                      <div className="checklist">
                        <div className="check-row">
                          <span className="pill green">Live</span>
                          <span className="label">KPI tracking</span>
                        </div>
                        <div className="check-row">
                          <span className="pill purple">Tune</span>
                          <span className="label">Prompts/flows</span>
                        </div>
                        <div className="check-row">
                          <span className="pill amber">Verify</span>
                          <span className="label">Owner sign-off</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="section-subtitle">
            That's it. Working automation. 2 days. Not a strategy doc. Not a pilot plan. A deployed system that saves time or makes
            money.
          </p>
        </div>
      </section>

      <section className="milestone-section">
        <div className="section-shell">
          <div className="milestone-grid">
            <div className="milestone-card animate">
              <div className="milestone-number">2</div>
              <p className="milestone-copy">days to build and ship a working automation</p>
            </div>
            <div className="milestone-card animate">
              <div className="milestone-number">400+</div>
              <p className="milestone-copy">automations deployed across SaaS, e-comm, agencies, pro services</p>
            </div>
            <div className="milestone-card animate">
              <div className="milestone-number">5-10x</div>
              <p className="milestone-copy">typical ROI in year one with outcome-backed sprints</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="section-shell">
          <div className="section-label pill">Testimonials</div>
          <h2 className="section-title">Why businesses love our AI automation.</h2>
          <h3 className="section-title closing-line animate">
            <span className="punchline-lines">
              <span className="punchline-line">Why Businesses Love Our AI Solutions</span>
            </span>
          </h3>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card animate" key={t.name}>
                <div className="stars" aria-label={`${t.stars} out of 5 stars`}>
                  {"★".repeat(t.stars)}
                </div>
                <p className="testimonial-quote">"{t.quote}"</p>
                <div className="testimonial-footer">
                  <div className="avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="guarantee-section" id="guarantee">
        <div className="section-shell">
          <div className="section-label">ZERO RISK</div>
          <h2 className="section-title">Don't pay unless we add value.</h2>
          <p className="section-subtitle">
            Before we start, we agree on exactly what success looks like. A specific KPI. Time saved. Cost reduced. Revenue increased.
          </p>
          <p className="section-subtitle">We build in 2 days. We measure impact over 30 days. If we don't hit the KPI, you don't pay.</p>
          <div className="guarantee-highlight">We've never had to refund.</div>
        </div>
      </section>

      <section className="pricing-section" id="pricing">
        <div className="section-shell">
          <div className="section-label">PRICING</div>
          <h2 className="section-title">Two options. Same 2-day sprint.</h2>
          <p className="section-subtitle">Both include deployed system, training, and 30-day monitoring.</p>
          <div className="pricing-grid">
            {pricing.map((tier) => (
              <div className="pricing-card animate" key={tier.title}>
                {tier.badge ? <div className="pricing-badge">{tier.badge}</div> : null}
                <h3>{tier.title}</h3>
                <p className="price">{tier.price}</p>
                <ul>
                  {tier.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="pricing-actions">
                  <input className="cta-input" type="email" name={`${tier.title}-email`} placeholder="Work email" aria-label="Work email" />
                  <button className="cta-button">
                    <span>Book 30-Min Assessment</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <p className="section-subtitle small">No hidden fees. No monthly charges. No surprises.</p>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="section-shell">
          <div className="section-label pill">FAQs</div>
          <h2 className="section-title">Frequently asked questions</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <div className={`faq-item animate ${openFaq === faqs.indexOf(item) ? "open" : ""}`} key={item.q}>
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === faqs.indexOf(item) ? null : faqs.indexOf(item))}
                  aria-expanded={openFaq === faqs.indexOf(item)}
                >
                  <h4>{item.q}</h4>
                  <span className="faq-toggle">{openFaq === faqs.indexOf(item) ? "–" : "+"}</span>
                </button>
                <div className="faq-answer" aria-hidden={openFaq !== faqs.indexOf(item)}>
                  <p>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-shell">
          <h2 className="section-title">Let AI do the Work so you can Scale Faster</h2>
          <p className="section-subtitle final-cta-subtitle">Book a Call Today and Start Automating</p>
          <div className="final-cta-actions">
            <input className="final-cta-input" type="email" name="email" placeholder="Work email" aria-label="Work email" />
            <button className="cta-button final-cta-button">
              <span>Book a free call</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
