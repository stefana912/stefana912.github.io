import { ArrowUpRight, Contact, GitBranch, MapPin } from 'lucide-react';

const essays = [
  { date: 'Jul 2026', title: "If You're Waiting for a Project to Start Using AI, You're Doing It Wrong", summary: 'A note to engineering leaders: your everyday work is already the AI use case. Start together, in the room, with the context owners present.' },
  { date: 'Nov 2025', title: 'Déjà Vu in the Digital Age: Why AI Coding Is the New “Rogue IT”', summary: 'What the cloud and DevOps transformations can teach us about guiding the fast, decentralized adoption of AI coding tools.' },
  { date: 'Apr 2025', title: 'Level Up Together', summary: 'An invitation to inclusive group mentoring—and a practical approach to growing technical leaders in community.' },
];

const projects = [
  { name: 'Skopos Surveyor', description: 'An open-source tool that discovers running Docker applications and makes their architecture visible.', meta: 'Docker · Architecture · Visualization', href: 'https://github.com/stefana912/skopos_surveyor' },
  { name: 'SaaS Operations Dictionary', description: 'A shared vocabulary for the language, practices, and systems behind modern SaaS operations.', meta: 'Operations · Open knowledge', href: 'https://github.com/stefana912/saas-operations-dictionary' },
  { name: 'Speaker Proposals', description: 'An open collection of conference proposals spanning DevOps, product leadership, and technology transformation.', meta: 'Speaking · Community', href: 'https://github.com/stefana912/cfp' },
];

const writingUrl = 'https://www.linkedin.com/in/stefanamuller/recent-activity/articles/';

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="wordmark" href="#top" aria-label="Stefana Muller, home"><span>SM</span> Stefana Muller</a>
        <div className="nav-links"><a href="#writing">Writing</a><a href="#work">Work</a><a href="#resume">Résumé</a><a href="#about">About</a><a href="#connect">Connect</a></div>
      </nav>

      <header className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Infrastructure · Product · People</p>
          <h1>Building systems<br /><em>and the teams</em><br />behind them.</h1>
          <p className="hero-intro">I&apos;m Stefana Muller, a technology executive who turns complex platforms into dependable products—and helps people do the best work of their careers.</p>
          <div className="hero-actions"><a className="button button-primary" href="#writing">Read my writing <ArrowUpRight aria-hidden="true" /></a><a className="button button-quiet" href="#about">More about me</a></div>
        </div>
        <div className="hero-aside">
          <img src="https://avatars.githubusercontent.com/u/6431596?v=4" alt="Stefana Muller" width="320" height="320" />
          <div className="status-card"><span className="status-dot" aria-hidden="true" /><div><strong>VP, Infrastructure &amp; Operations</strong><span>Salesforce · New York</span></div></div>
        </div>
      </header>

      <section className="signal-strip" aria-label="Professional focus"><span>Enterprise technology</span><span>Cloud infrastructure</span><span>AI-enabled operations</span><span>Technical leadership</span></section>

      <section className="section writing" id="writing">
        <div className="section-heading"><div><p className="eyebrow">01 / Field notes</p><h2>Ideas for people building what&apos;s next.</h2></div><a className="text-link" href={writingUrl}>All writing on LinkedIn <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="essay-list">
          {essays.map((essay, index) => <a className="essay" href={writingUrl} key={essay.title}><div className="essay-index">0{index + 1}</div><div><span className="essay-date">{essay.date}</span><h3>{essay.title}</h3><p>{essay.summary}</p></div><ArrowUpRight aria-hidden="true" /></a>)}
        </div>
      </section>

      <section className="section work" id="work">
        <div className="section-heading"><div><p className="eyebrow">02 / Selected work</p><h2>Making complicated things useful.</h2></div><a className="text-link" href="https://github.com/stefana912">GitHub profile <GitBranch aria-hidden="true" /></a></div>
        <div className="project-grid">{projects.map((project, index) => <a className="project-card" href={project.href} key={project.name}><span className="project-number">0{index + 1}</span><h3>{project.name}</h3><p>{project.description}</p><span className="project-meta">{project.meta}</span><ArrowUpRight className="project-arrow" aria-hidden="true" /></a>)}</div>
      </section>

      <section className="section resume" id="resume">
        <div className="section-heading"><div><p className="eyebrow">03 / Résumé</p><h2>A career connecting technology strategy to reliable execution.</h2></div><a className="text-link" href="https://www.linkedin.com/in/stefanamuller">Full profile <ArrowUpRight aria-hidden="true" /></a></div>
        <div className="career-list">
          <div className="career-row"><span>Now</span><div><h3>Salesforce</h3><p>VP, Infrastructure &amp; Operations</p></div><p>Leading infrastructure and operations at enterprise scale, with a focus on dependable platforms and AI-enabled ways of working.</p></div>
          <div className="career-row"><span>Previously</span><div><h3>Own</h3><p>SVP, Cloud Infrastructure &amp; Operations</p></div><p>Led global cloud infrastructure, SRE, and production engineering across AWS and Azure.</p></div>
          <div className="career-row"><span>Previously</span><div><h3>Oscar Health</h3><p>CTO Product &amp; Program Leadership</p></div><p>Built technical product, compliance, and program capabilities to help a growing healthcare technology organization scale.</p></div>
          <div className="career-row"><span>Earlier</span><div><h3>CA Technologies</h3><p>Product &amp; Technology Leadership</p></div><p>Worked across security, infrastructure automation, service virtualization, DevOps, and product management.</p></div>
        </div>
      </section>

      <section className="section about" id="about">
        <div><p className="eyebrow">04 / About</p><h2>I&apos;ve always been interested in how things work—and how they could work better.</h2></div>
        <div className="about-copy"><p>My path into technology started in my family&apos;s New York restaurant, where I built a menu and printing system to make a busy operation run more smoothly. That instinct—to understand the real problem, then build the system people actually need—has stayed with me.</p><p>Today I lead at the intersection of infrastructure, operations, product, and people. I&apos;ve helped organizations scale cloud platforms, strengthen reliability and security, and navigate major shifts from DevOps to AI—all while keeping human accountability at the center.</p><div className="about-facts"><span><MapPin aria-hidden="true" /> New York</span><span>Speaker · Mentor · Builder</span></div></div>
      </section>

      <section className="connect" id="connect"><p className="eyebrow">Let&apos;s compare notes</p><h2>Have a hard infrastructure problem—or a good idea?</h2><p>I&apos;m always interested in thoughtful conversations about technology, leadership, and what comes next.</p><div className="hero-actions"><a className="button button-light" href="https://www.linkedin.com/in/stefanamuller"><Contact aria-hidden="true" /> Connect on LinkedIn</a><a className="button button-outline-light" href="https://github.com/stefana912"><GitBranch aria-hidden="true" /> Follow on GitHub</a></div></section>

      <footer><span>© {new Date().getFullYear()} Stefana Muller</span><span>Built with intention. Published on GitHub.</span></footer>
    </main>
  );
}
