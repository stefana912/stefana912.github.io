import { ArrowUpRight } from 'lucide-react';

const links = [
  { href: '/speaking', label: 'Speaking' },
  { href: '/mentorship', label: 'Mentorship' },
  { href: '/experience', label: 'Experience' },
  { href: '/#writing', label: 'Writing' },
  { href: '/#about', label: 'About' },
  { href: '/#connect', label: 'Connect' },
];

export function SiteNav() {
  return <nav className="site-nav" aria-label="Main navigation">
    <a className="wordmark" href="/" aria-label="Stefana Muller, home"><span>SM</span> Stefana Muller</a>
    <div className="nav-links">{links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div>
    <details className="mobile-nav"><summary>Menu</summary><div>{links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</div></details>
  </nav>;
}

export function SiteFooter() {
  return <footer><span>© {new Date().getFullYear()} Stefana Muller</span><span>Built with intention. Published on GitHub.</span></footer>;
}

export function PageIntro({ eyebrow, title, intro, action }: { eyebrow: string; title: string; intro: string; action?: { href: string; label: string } }) {
  const external = action?.href.startsWith('http');
  return <header className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p>{intro}</p>{action && <a className="button button-primary" href={action.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>{action.label} <ArrowUpRight aria-hidden="true" /></a>}</header>;
}
