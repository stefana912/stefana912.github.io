import { ArrowUpRight, Contact, MapPin } from 'lucide-react';

const essays = [
  { date: 'Jul 2026', title: "If You're Waiting for a Project to Start Using AI, You're Doing It Wrong", summary: 'A note to engineering leaders: your everyday work is already the AI use case. Start together, in the room, with the context owners present.' },
  { date: 'Nov 2025', title: 'Déjà Vu in the Digital Age: Why AI Coding Is the New “Rogue IT”', summary: 'What the cloud and DevOps transformations can teach us about guiding the fast, decentralized adoption of AI coding tools.' },
  { date: 'Apr 2025', title: 'Level Up Together', summary: 'An invitation to inclusive group mentoring and a practical approach to growing technical leaders in community.' },
];

const writingUrl = 'https://www.linkedin.com/in/stefanamuller/recent-activity/articles/';

const career = [
  { period: '2025 - Now', company: 'Salesforce', role: 'VP, Infrastructure & Operations · Trusted Services', detail: 'Leading infrastructure strategy and operational excellence for products serving 12,000+ customers in a business that grew 2x year over year following acquisition. Own an approximately $100M cost-to-serve and vendor budget, post-acquisition integration, security and compliance, and the shift to agentic development and operations.' },
  { period: '2023 - 2025', company: 'Own', role: 'SVP, Infrastructure & Operations', detail: 'Led global Cloud Infrastructure, SRE, and Production Engineering for 10,000+ customers in 15 regions. Supported acquisition due diligence across architecture, engineering, and security, and scaled from 18,000 to 52,000+ Kubernetes clusters without adding headcount.' },
  { period: '2020 - 2023', company: 'Oscar Health', role: 'Senior Director, CTO Product & Process Office', detail: 'Built CTO Operations, FinOps, and PMO functions; advanced SOX compliance and IPO readiness across 40 teams and 400 engineers; and reduced mean time to recovery by 50%.' },
  { period: '2018 - 2020', company: '2nd Watch', role: 'Senior Product Manager, DevOps & Cloud Migration', detail: 'Launched the first DevOps professional and managed-service offering across AWS, Azure, and GCP, building the practice and hiring 30+ consultants.' },
  { period: '2016 - 2018', company: 'Opsani', role: 'VP, Business Development & Developer Evangelist', detail: 'Drove product-market fit for an ML-powered autonomous operations platform and built partnerships across Docker, Red Hat, CNCF, AWS, and Azure.' },
  { period: '2000 - 2016', company: 'CA Technologies', role: 'Senior Director, Product Management · DevOps', detail: 'Led global product management for enterprise cloud and DevOps solutions, managed a $100M P&L, and grew AppLogic revenue 128% year over year.' },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Stefana Muller, home"><span>SM</span> Stefana Muller</a>
        <div className="nav-links"><a href="#expertise">Expertise</a><a href="#writing">Writing</a><a href="#resume">Résumé</a><a href="#about">About</a><a href="#connect">Connect</a></div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Agentic development and operations · Cloud infrastructure · SRE</p>
          <h1>Building systems<br /><em>that scale.</em><br />Leading people.</h1>
          <p className="hero-intro">I&apos;m Stefana Muller, a global infrastructure and operations executive with 26 years building enterprise cloud platforms and high-performing teams through hyper-growth, acquisition, and transformation.</p>
          <div className="hero-actions"><a className="button button-primary" href="#resume">Explore my experience <ArrowUpRight aria-hidden="true" /></a><a className="button button-quiet" href="#writing">Read my writing</a></div>
        </div>
        <div className="hero-aside">
          <img src="https://avatars.githubusercontent.com/u/6431596?v=4" alt="Stefana Muller" width="320" height="320" />
          <div className="status-card"><span className="status-dot" aria-hidden="true" /><div><strong>VP, Infrastructure &amp; Operations</strong><span>Salesforce · New York</span></div></div>
        </div>
      </header>

      <section className="signal-strip impact-strip" aria-label="Career impact"><span><strong>26</strong>Years in technology</span><span><strong>$100M</strong>Budget leadership</span><span><strong>12K+</strong>Customers supported</span><span><strong>3</strong>Company exits<br />1 IPO · 2 acquisitions</span></section>

      <section className="section expertise" id="expertise">
        <div className="section-heading"><div><p className="eyebrow">01 / Expertise</p><h2>I run both sides of the business.</h2></div><p className="section-intro">The commercial engine and the engineering organization that delivers it.</p></div>
        <div className="expertise-grid">
          <article><span>01</span><h3>Scale and operate</h3><p>Cloud infrastructure, SRE, platform engineering, reliability, security, compliance, FinOps, and 24x7 global operations.</p></article>
          <article><span>02</span><h3>Run the business</h3><p>P&amp;L and budget ownership, annual goals and measures, quarterly business reviews, long-range planning, business health, strategic sourcing, and executive alignment.</p></article>
          <article><span>03</span><h3>Build and commercialize</h3><p>Product strategy, go-to-market, offer development, revenue growth, customer engagement, and strategic partnerships.</p></article>
          <article><span>04</span><h3>Lead transformation</h3><p>AI strategy, organizational design, IPO readiness, M&amp;A due diligence and integration, change management, manager development, and cross-functional execution.</p></article>
        </div>
      </section>

      <section className="section writing" id="writing">
        <div className="section-heading"><div><p className="eyebrow">02 / Field notes</p><h2>Ideas for people building what&apos;s next.</h2></div><a className="text-link" href={writingUrl}>All writing on LinkedIn <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="essay-list">
          {essays.map((essay, index) => <a className="essay" href={writingUrl} key={essay.title}><div className="essay-index">0{index + 1}</div><div><span className="essay-date">{essay.date}</span><h3>{essay.title}</h3><p>{essay.summary}</p></div><ArrowUpRight aria-hidden="true" /></a>)}
        </div>
      </section>

      <section className="section resume" id="resume">
        <div className="section-heading"><div><p className="eyebrow">03 / Résumé</p><h2>A career connecting technology strategy to reliable execution.</h2></div><a className="text-link" href="https://www.linkedin.com/in/stefanamuller/">Full profile <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="career-list">
          {career.map((item) => <div className="career-row" key={item.company}><span>{item.period}</span><div><h3>{item.company}</h3><p>{item.role}</p></div><p>{item.detail}</p></div>)}
        </div>
      </section>

      <section className="section leadership" id="leadership">
        <div className="section-heading"><div><p className="eyebrow">04 / On the record</p><h2>Speaking, recognition, and community.</h2></div></div>
        <div className="leadership-grid">
          <article><span className="project-number">Speak</span><h3>Ideas shared in the open</h3><ul><li>KubeCon + CloudNativeCon North America</li><li>AI SRE Summit</li><li>AWS re:Invent</li><li>DevOpsDays NYC</li><li>Kubernetes Community Day New York</li></ul></article>
          <article><span className="project-number">Lead</span><h3>Communities built to last</h3><ul><li>Founder, Long Island Women in Tech</li><li>Executive Sponsor, Salesforce NYC Women in Tech Hub</li><li>Organizer, DevOpsDays NYC</li><li>Startup advisor and technical mentor</li></ul></article>
          <article><span className="project-number">Recognize</span><h3>Work acknowledged</h3><ul><li>VentureFizz Lead(H)er</li><li>CRN Women of the Channel</li><li>Long Island&apos;s Top 50 Most Influential Women in Business</li><li>CA Technologies Above and Beyond Award</li></ul></article>
        </div>
      </section>

      <section className="section about" id="about">
        <div><p className="eyebrow">05 / About</p><h2>I&apos;ve always been interested in how things work and how they could work better.</h2></div>
        <div className="about-copy"><p>My path into technology started in my family&apos;s New York restaurant, where I built a menu and printing system to make a busy operation run more smoothly. That instinct, to understand the real problem and then build the system people actually need, has stayed with me.</p><p>Today I operate where cloud infrastructure, SRE, platform engineering, security, and business outcomes meet. I&apos;ve built global teams, launched new practices, led through acquisition, and created the operating systems that help hundreds of engineers move together.</p><p>I&apos;m now pioneering agentic development and operations: putting coding, SRE, FinOps, and troubleshooting agents into production while keeping human ownership and accountability at the center.</p><div className="about-facts"><span><MapPin aria-hidden="true" /> New York</span><span>Speaker · Mentor · Builder</span><span>AWS · Azure · Kubernetes</span></div></div>
      </section>

      <section className="connect" id="connect"><p className="eyebrow">Let&apos;s compare notes</p><h2>Have a hard infrastructure problem or a good idea?</h2><p>I&apos;m always interested in thoughtful conversations about technology, leadership, and what comes next.</p><div className="hero-actions"><a className="button button-light" href="https://www.linkedin.com/in/stefanamuller"><Contact aria-hidden="true" /> Connect on LinkedIn</a></div></section>

      <footer><span>© {new Date().getFullYear()} Stefana Muller</span><span>Built with intention. Published on GitHub.</span></footer>
    </main>
  );
}
