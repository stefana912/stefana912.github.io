import { ArrowUpRight, Contact, MapPin } from 'lucide-react';

const essays = [
  { date: 'Jul 2026', title: "If You're Waiting for a Project to Start Using AI, You're Doing It Wrong", summary: 'A note to engineering leaders: your everyday work is already the AI use case. Start together, in the room, with the context owners present.' },
  { date: 'Nov 2025', title: 'Déjà Vu in the Digital Age: Why AI Coding Is the New “Rogue IT”', summary: 'What the cloud and DevOps transformations can teach us about guiding the fast, decentralized adoption of AI coding tools.' },
  { date: 'Apr 2025', title: 'Level Up Together', summary: 'An invitation to inclusive group mentoring and a practical approach to growing technical leaders in community.' },
];

const writingUrl = 'https://www.linkedin.com/in/stefanamuller/recent-activity/articles/';

const talks = [
  { year: '2026', event: 'AI SRE Summit', format: 'Panel', title: 'AI in SRE: Hype vs. Reality in 2026', overview: 'A grounded conversation about where AI is creating measurable value in production operations, where it still falls short, and why trust, context, and human judgment remain essential in high-stakes systems.', url: 'https://www.youtube.com/watch?v=xZkwvK-vL40' },
  { year: '2026', event: 'Kubernetes for Humans', format: 'Podcast', title: 'From Pagers to Pair Programming: Navigating Massive Scale and AI', overview: 'A conversation about scaling global, multi-cloud Kubernetes operations through rapid customer growth and acquisition, then applying AI to pair programming, documentation, troubleshooting, and production operations without giving up human accountability.', url: 'https://youtu.be/swRp9d75IUc' },
  { year: '2025', event: 'KubeCon + CloudNativeCon North America', format: 'Panel', title: 'Security Theater or Real Defense? Navigating Open Source Security in a Cloud Native World', overview: 'A candid discussion of what effective cloud-native security looks like beyond checklists, from runtime detection and evolving threats to balancing open source velocity, compliance, and practical risk reduction.', url: 'https://www.youtube.com/watch?v=jETmMin6-_M' },
  { year: '2025', event: 'Kubernetes Community Day New York', format: 'Panel', title: 'Is AI in the Future of Infrastructure as Code?', overview: 'A discussion of how AI-driven automation and platform engineering are reshaping infrastructure as code, including the evolution of today\'s tools, the promise of generative IaC, and the implications for scalability, security, and developer velocity.', url: 'https://www.youtube.com/watch?v=7xtu-3_1i6k' },
  { year: '2023', event: 'The CareerOps Podcast', format: 'Podcast', title: 'Technology Leadership, Startups, Operations, and Lessons Learned', overview: 'A wide-ranging conversation about career transitions, executive leadership, and building DevOps and SRE organizations, with lessons drawn from the early cloud era, startups, IPOs, acquisitions, multi-cloud operations, and the people side of technology.', url: 'https://www.youtube.com/watch?v=ckd7PWBDugk' },
  { year: '2019', event: 'AWS re:Invent', format: 'Conference talk', title: 'Simple Path to AWS Managed Services', overview: 'A practical guide to accelerating enterprise cloud adoption with AWS Managed Services, from assessing existing infrastructure and planning migration through automation, operational readiness, and the transition to a durable cloud operating model.', url: 'https://www.youtube.com/watch?v=T64UQqD_BeE' },
];

const career = [
  { period: '2025 - Now', company: 'Salesforce', role: 'VP, Infrastructure & Operations · Salesforce Guardian', detail: 'Leading infrastructure strategy and operational excellence for products serving 12,000+ customers in a business that grew 2x year over year following acquisition. Own a 9-figure operating portfolio spanning infrastructure, cloud services, and strategic vendors. Responsible for post-acquisition integration, security and compliance, and the shift to agentic development and operations.' },
  { period: '2023 - 2025', company: 'Own', role: 'SVP, Infrastructure & Operations', detail: 'Led global Cloud Infrastructure, SRE, and Production Engineering for 10,000+ customers in 15 regions. Supported acquisition due diligence across architecture, engineering, and security, and scaled from 18,000 to 52,000+ Kubernetes clusters without adding headcount.' },
  { period: '2020 - 2023', company: 'Oscar Health', role: 'Senior Director, CTO Product & Process Office', detail: 'Built CTO Operations, FinOps, and PMO functions; advanced SOX compliance and IPO readiness across 40 teams and 400 engineers; and reduced mean time to recovery by 50%.' },
  { period: '2018 - 2020', company: '2nd Watch', role: 'Senior Product Manager, DevOps & Cloud Migration', detail: 'Launched the first DevOps professional and managed-service offering across AWS, Azure, and GCP, building the practice and hiring 30+ consultants. Developed a strategic alliance with GitLab that expanded a reseller relationship into a joint managed DevOps offering and coordinated go-to-market motion.', sourceUrl: 'https://www.crn.com/news/cloud/gitlab-introduces-first-channel-program-to-drive-devops-alliances', sourceLabel: 'Read the CRN coverage' },
  { period: '2016 - 2018', company: 'Opsani', role: 'VP, Business Development & Developer Evangelist', detail: 'Drove product-market fit for an ML-powered autonomous operations platform and built partnerships across Docker, Red Hat, CNCF, AWS, and Azure.' },
  { period: '2000 - 2016', company: 'CA Technologies', role: 'Senior Director, Product Management · DevOps', detail: 'Led global product management for enterprise cloud and DevOps solutions, managed a $100M P&L, and grew AppLogic revenue 128% year over year.' },
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Stefana Muller, home"><span>SM</span> Stefana Muller</a>
        <div className="nav-links"><a href="#expertise">Expertise</a><a href="#writing">Writing</a><a href="#resume">Résumé</a><a href="#speaking">Speaking</a><a href="#about">About</a><a href="#connect">Connect</a></div>
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
          {career.map((item) => <div className="career-row" key={item.company}><span>{item.period}</span><div><h3>{item.company}</h3><p>{item.role}</p></div><div className="career-detail"><p>{item.detail}</p>{item.sourceUrl && <a href={item.sourceUrl}>{item.sourceLabel} <ArrowUpRight aria-hidden="true" /></a>}</div></div>)}
        </div>
      </section>

      <section className="section speaking" id="speaking">
        <div className="section-heading"><div><p className="eyebrow">04 / Speaking engagements</p><h2>Real lessons from building and leading at scale.</h2></div><p className="section-intro">I speak candidly about the operating choices, organizational shifts, and human judgment behind resilient technology.</p></div>
        <div className="speaking-layout">
          <div className="speaking-invites">
            <p className="project-number">Open to invitations</p>
            <h3>Bring the conversation to your audience.</h3>
            <p>I welcome keynotes, conference talks, panels, podcasts, executive roundtables, and technical leadership events.</p>
            <div className="topic-list" aria-label="Speaking topics"><span>Agentic development and operations</span><span>SRE and reliability at scale</span><span>Cloud and platform engineering</span><span>Leading through transformation</span></div>
            <a className="text-link" href="https://www.linkedin.com/in/stefanamuller/">Invite me to speak <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="talk-list" aria-label="Selected talks">
            <p className="project-number">Selected talks</p>
            {talks.map((talk) => <article className="talk" key={`${talk.event}-${talk.year}`}><div className="talk-meta"><span>{talk.year}</span><span>{talk.format}</span></div><div className="talk-copy"><h3>{talk.title}</h3><p className="talk-event">{talk.event}</p><p className="talk-overview">{talk.overview}</p>{talk.url && <a className="talk-link" href={talk.url}>Watch the recording <ArrowUpRight aria-hidden="true" /></a>}</div></article>)}
            <p className="speaking-history">Also featured at Women Who Code Summit NYC.</p>
          </div>
        </div>
      </section>

      <section className="section leadership" id="leadership">
        <div className="section-heading"><div><p className="eyebrow">05 / On the record</p><h2>Recognition and community.</h2></div></div>
        <div className="leadership-grid">
          <article><span className="project-number">Lead</span><h3>Communities built to last</h3><ul>
            <li><a className="recognition-link" href="https://liwomenintech.com/"><strong>Founder, Long Island Women in Tech</strong><span>Community website</span><ArrowUpRight aria-hidden="true" /></a></li>
            <li className="organized-event"><strong>Executive Sponsor, Salesforce NYC Women in Tech Hub</strong><p>Hosted Women Who Claude, teaching more than 50 participants how to use Claude Code.</p><span><a href="https://www.linkedin.com/posts/poojaupadhyay0406_womenintech-womenintechnology-nyctech-ugcPost-7495934814496141312-WKm5">Event recap <ArrowUpRight aria-hidden="true" /></a><a href="https://www.linkedin.com/posts/stefanamuller_womenintech-wit-salesforcewomensnetwork-activity-7467593109577760768-fkYt">Sponsor announcement <ArrowUpRight aria-hidden="true" /></a></span></li>
            <li className="organized-event"><strong>Conference organizer and emcee, DevOpsDays NYC</strong><p>Led talk programming and speaker management, organized volunteers, supported registration, ran social media advertising and marketing, and handled printed signage and event materials.</p><span><a href="https://www.youtube.com/watch?v=e8vmB2c8xo8">2020 welcome <ArrowUpRight aria-hidden="true" /></a><a href="https://www.youtube.com/@devopsdaysnyc4226/search?query=devopsdaysNYC%202023">2023 recordings <ArrowUpRight aria-hidden="true" /></a></span></li>
            <li><a className="recognition-link" href="https://sb.co/"><strong>Startup mentor, Springboard Enterprises</strong><span>Mentored women-led companies through its Tech Innovation and Health Innovation hubs for five years.</span><ArrowUpRight aria-hidden="true" /></a></li>
          </ul></article>
          <article><span className="project-number">Recognize</span><h3>Work acknowledged</h3><ul>
            <li><a className="recognition-link" href="https://venturefizz.com/insights/leadher-profile-stefana-muller-svp-cloud-infrastructure-operations-at-own/"><strong>VentureFizz Lead(H)er profile</strong><span>Career pivots, technical leadership, mentoring, and inclusive teams</span><ArrowUpRight aria-hidden="true" /></a></li>
            <li><a className="recognition-link" href="https://www.crn.com/rankings-and-lists/wotc2016-details"><strong>CRN Women of the Channel 2016</strong><span>Official recognition</span><ArrowUpRight aria-hidden="true" /></a></li>
            <li><a className="recognition-link" href="https://libn.com/wp-content/blogs.dir/1/files/2013/10/T50W-Honorees-FPFC.pdf"><strong>Long Island&apos;s Top 50 Most Influential Women in Business</strong><span>2015 honoree program</span><ArrowUpRight aria-hidden="true" /></a></li>
            <li><a className="recognition-link" href="https://www.linkedin.com/in/stefanamuller/"><strong>CA Technologies Above and Beyond Award</strong><span>Award details on LinkedIn</span><ArrowUpRight aria-hidden="true" /></a></li>
          </ul></article>
          <article><span className="project-number">Advise</span><h3>Experience shared forward</h3><ul>
            <li>Advisor to infrastructure and security startups</li>
            <li><a className="recognition-link" href="https://www.linkedin.com/pulse/level-up-together-invitation-join-inclusive-group-mentoring-muller-knuxe"><strong>Mentor to emerging technical leaders</strong><span>Level Up Together mentoring program</span><ArrowUpRight aria-hidden="true" /></a></li>
            <li>Partner to founders on product-market fit</li>
            <li><a className="recognition-link" href="https://liwomenintech.com/about-us/"><strong>Advocate for women in technology</strong><span>Community mission and impact</span><ArrowUpRight aria-hidden="true" /></a></li>
          </ul></article>
        </div>
      </section>

      <section className="section about" id="about">
        <div><p className="eyebrow">06 / About</p><h2>I&apos;ve always been interested in how things work and how they could work better.</h2></div>
        <div className="about-copy"><p>My path into technology started in my family&apos;s New York restaurant, where I built a menu and printing system to make a busy operation run more smoothly. That instinct, to understand the real problem and then build the system people actually need, has stayed with me.</p><p>Today I operate where cloud infrastructure, SRE, platform engineering, security, and business outcomes meet. I&apos;ve built global teams, launched new practices, led through acquisition, and created the operating systems that help hundreds of engineers move together.</p><p>I&apos;m now pioneering agentic development and operations: putting coding, SRE, FinOps, and troubleshooting agents into production while keeping human ownership and accountability at the center.</p><div className="about-facts"><span><MapPin aria-hidden="true" /> New York</span><span>Speaker · Mentor · Builder</span><span>AWS · Azure · Kubernetes</span></div></div>
      </section>

      <section className="connect" id="connect"><p className="eyebrow">Let&apos;s compare notes</p><h2>Have a hard infrastructure problem or a good idea?</h2><p>I&apos;m always interested in thoughtful conversations about technology, leadership, and what comes next.</p><div className="hero-actions"><a className="button button-light" href="https://www.linkedin.com/in/stefanamuller"><Contact aria-hidden="true" /> Connect on LinkedIn</a></div></section>

      <footer><span>© {new Date().getFullYear()} Stefana Muller</span><span>Built with intention. Published on GitHub.</span></footer>
    </main>
  );
}
