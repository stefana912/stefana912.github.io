import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { PageIntro, SiteFooter, SiteNav } from '../components';
import { speakingFormUrl, talks } from '../content';

export const metadata: Metadata = { title: 'Speaking | Stefana Muller', description: 'Invite Stefana Muller to speak about agentic development and operations, SRE, cloud infrastructure, platform engineering, and technology leadership.' };

const topics = [
  ['Agentic development and operations', 'Moving from isolated AI experiments to shared practices that preserve human ownership and accountability.'],
  ['SRE and reliability at scale', 'What it takes to build trust, operating discipline, and resilient systems through rapid growth and change.'],
  ['Cloud and platform engineering', 'The technical and organizational choices behind platforms that enable teams instead of slowing them down.'],
  ['Leading through transformation', 'Practical lessons from acquisitions, IPO readiness, organizational change, and the evolution of engineering work.'],
];

export default function SpeakingPage() {
  return <main>
    <SiteNav />
    <PageIntro eyebrow="Speaking" title="Real lessons from building and leading at scale." intro="I speak candidly about the operating choices, organizational shifts, and human judgment behind resilient technology." action={{ href: speakingFormUrl, label: 'Invite me to speak' }} />
    <section className="signal-strip impact-strip"><span><strong>KubeCon</strong>CloudNativeCon North America</span><span><strong>AWS re:Invent</strong>Conference speaker</span><span><strong>AI SRE Summit</strong>Industry panelist</span><span><strong>DevOpsDays NYC</strong>Organizer and emcee</span></section>
    <section className="section speaking-topics"><div className="section-heading"><div><p className="eyebrow">Topics</p><h2>Conversations grounded in operating experience.</h2></div><p className="section-intro">Available for keynotes, conference talks, panels, podcasts, executive roundtables, and technical leadership events.</p></div><div className="topic-cards">{topics.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
    <section className="section talk-archive"><div className="section-heading"><div><p className="eyebrow">Selected appearances</p><h2>Watch the conversation.</h2></div></div><div className="talk-list">{talks.map((talk) => <article className="talk" key={talk.title}><div className="talk-meta"><span>{talk.year}</span><span>{talk.format}</span></div><div className="talk-copy"><h3>{talk.title}</h3><p className="talk-event">{talk.event}</p><p className="talk-overview">{talk.overview}</p><a className="talk-link" href={talk.url}>Watch the recording <ArrowUpRight aria-hidden="true" /></a></div></article>)}</div></section>
    <section className="section organizer-proof"><div><p className="eyebrow">Beyond the stage</p><h2>I understand what it takes to create a strong event.</h2></div><div><p>As a DevOpsDays NYC organizer and emcee, I led talk programming and speaker management, organized volunteers, supported registration, ran social media advertising and marketing, and handled printed signage and event materials.</p><div className="inline-links"><a href="https://www.youtube.com/watch?v=e8vmB2c8xo8">2020 welcome <ArrowUpRight aria-hidden="true" /></a><a href="https://www.youtube.com/@devopsdaysnyc4226/search?query=devopsdaysNYC%202023">2023 recordings <ArrowUpRight aria-hidden="true" /></a></div></div></section>
    <section className="connect simple-connect"><p className="eyebrow">Invite me to speak</p><h2>Bring a candid, experienced voice to your audience.</h2><p>Tell me about your event, audience, and the conversation you want to create.</p><div className="hero-actions"><a className="button button-light" href={speakingFormUrl} target="_blank" rel="noreferrer">Submit a speaking inquiry <ArrowUpRight aria-hidden="true" /></a><a className="button button-outline-light" href="https://www.linkedin.com/in/stefanamuller/">Connect on LinkedIn</a></div></section>
    <SiteFooter />
  </main>;
}
