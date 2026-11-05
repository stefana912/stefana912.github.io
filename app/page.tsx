import { ArrowUpRight, Contact, MapPin } from 'lucide-react';
import { SiteFooter, SiteNav } from './components';
import { essays, expertise, mentorshipFormUrl, talks, writingUrl } from './content';

export default function Home() {
  return <main>
    <SiteNav />

    <header className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Speaker · Mentor · Technology executive</p>
        <h1>Building systems<br /><em>that scale.</em><br />Sharing what works.</h1>
        <p className="hero-intro">I&apos;m Stefana Muller. I bring 26+ years of technology leadership into candid conference conversations and practical mentorship for people building their careers.</p>
        <div className="hero-actions"><a className="button button-primary" href="/speaking">Invite me to speak <ArrowUpRight aria-hidden="true" /></a><a className="button button-secondary" href="/mentorship">Explore mentorship</a><a className="quiet-link" href="/experience">View executive experience</a></div>
      </div>
      <div className="hero-aside">
        <img src="https://avatars.githubusercontent.com/u/6431596?v=4" alt="Stefana Muller" width="320" height="320" />
        <div className="status-card"><span className="status-dot" aria-hidden="true" /><div><strong>VP, Infrastructure &amp; Operations</strong><span>Salesforce · New York</span></div></div>
      </div>
    </header>

    <section className="signal-strip impact-strip" aria-label="Experience and credibility"><span><strong>26+</strong>Years in technology</span><span><strong>Since 2001</strong>Leading and developing people</span><span><strong>Since 2015</strong>Formal technology mentorship</span><span><strong>KubeCon</strong>AWS re:Invent · AI SRE Summit</span></section>

    <section className="section home-speaking" id="speaking">
      <div className="section-heading"><div><p className="eyebrow">01 / Speaking</p><h2>Real lessons from building and leading at scale.</h2></div><p className="section-intro">Grounded conversations about the choices, tradeoffs, and human judgment behind resilient technology.</p></div>
      <div className="home-split">
        <div className="home-offer"><p className="project-number">Open to invitations</p><h3>Bring the conversation to your audience.</h3><p>I welcome keynotes, conference talks, panels, podcasts, executive roundtables, and technical leadership events.</p><div className="topic-list"><span>Agentic development and operations</span><span>SRE and reliability at scale</span><span>Cloud and platform engineering</span><span>Leading through transformation</span></div><a className="button button-primary" href="/speaking">Explore speaking topics <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="featured-talks"><p className="project-number">Featured appearances</p>{talks.slice(0, 3).map((talk) => <article key={talk.title}><div><span>{talk.year}</span><span>{talk.format}</span></div><h3>{talk.title}</h3><p>{talk.event}</p><a href={talk.url}>Watch <ArrowUpRight aria-hidden="true" /></a></article>)}</div>
      </div>
    </section>

    <section className="section home-mentorship" id="mentorship">
      <div className="section-heading"><div><p className="eyebrow">02 / Mentorship</p><h2>Experienced guidance for what comes next.</h2></div><p className="section-intro">For people entering technology and leaders preparing for greater scope.</p></div>
      <div className="mentor-preview">
        <article><span className="project-number">Launch</span><h3>Start your technology career.</h3><p>Understand the jobs available, position your experience, prepare for interviews, succeed in your first roles, and build lasting professional connections.</p></article>
        <article><span className="project-number">Advance</span><h3>Grow as a technology leader.</h3><p>Clarify your next move, strengthen your professional presence, navigate difficult decisions, and prepare for greater leadership responsibility.</p></article>
        <aside><strong>Your first 30 minutes are complimentary.</strong><p>Start with a get-to-know-you conversation to discuss your goals and decide whether working together makes sense.</p><a className="button button-light" href={mentorshipFormUrl} target="_blank" rel="noreferrer">Apply for mentorship <ArrowUpRight aria-hidden="true" /></a><a className="detail-link" href="/mentorship">View mentorship options</a></aside>
      </div>
    </section>

    <section className="section home-experience" id="experience">
      <div className="section-heading"><div><p className="eyebrow">03 / Executive experience</p><h2>The operating experience behind the advice.</h2></div><a className="text-link" href="/experience">Full career history <ArrowUpRight aria-hidden="true" /></a></div>
      <div className="expertise-grid">{expertise.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      <div className="experience-proof"><span><strong>9-figure</strong>Operating portfolio</span><span><strong>12K+</strong>Customers supported</span><span><strong>3</strong>Company exits · 1 IPO · 2 acquisitions</span></div>
    </section>

    <section className="section writing" id="writing">
      <div className="section-heading"><div><p className="eyebrow">04 / Field notes</p><h2>Ideas for people building what&apos;s next.</h2></div><a className="text-link" href={writingUrl}>All writing on LinkedIn <ArrowUpRight aria-hidden="true" /></a></div>
      <div className="essay-list">{essays.map((essay, index) => <a className="essay" href={essay.href ?? writingUrl} key={essay.title}><div className="essay-index">0{index + 1}</div><div><span className="essay-date">{essay.date}</span><h3>{essay.title}</h3><p>{essay.summary}</p></div><ArrowUpRight aria-hidden="true" /></a>)}</div>
    </section>

    <section className="section about" id="about">
      <div><p className="eyebrow">05 / About</p><h2>I&apos;ve always been interested in how things work and how they could work better.</h2></div>
      <div className="about-copy"><p>My path into technology started in my family&apos;s New York restaurant, where I built a menu and printing system to make a busy operation run more smoothly. That instinct, to understand the real problem and then build the system people actually need, has stayed with me.</p><p>Today I operate where cloud infrastructure, SRE, platform engineering, security, and business outcomes meet. I&apos;ve built global teams, launched new practices, led through acquisition, and created the operating systems that help hundreds of engineers move together.</p><div className="about-facts"><span><MapPin aria-hidden="true" /> New York</span><span>Speaker · Mentor · Builder</span><span>AWS · Azure · Kubernetes</span></div></div>
    </section>

    <section className="connect choice-connect" id="connect"><p className="eyebrow">Let&apos;s work together</p><h2>What brings you here?</h2><div className="connect-choices"><article><h3>Bring me to your audience.</h3><p>Keynotes, panels, podcasts, roundtables, and technical leadership events.</p><a className="button button-light" href="/speaking">Explore speaking <ArrowUpRight aria-hidden="true" /></a></article><article><h3>Build your next chapter.</h3><p>Practical mentorship for early-career professionals, leaders, executives, and founders.</p><a className="button button-light" href="/mentorship">Explore mentorship <ArrowUpRight aria-hidden="true" /></a></article></div><a className="general-contact" href="https://www.linkedin.com/in/stefanamuller"><Contact aria-hidden="true" /> For everything else, connect on LinkedIn</a></section>

    <SiteFooter />
  </main>;
}
