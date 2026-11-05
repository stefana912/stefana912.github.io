import type { Metadata } from 'next';
import { SiteFooter, SiteNav } from '../../components';

const title = 'I Vibe-Coded an App in an Hour. Then I Spent 12 Weeks Finishing It.';
const description = 'How a VP of engineering got back to building with AI tools — and what a live order system for a family butcher shop taught about why applications are hard.';
const path = '/writing/vibe-coded-an-app-in-an-hour';
const img = (name: string) => `${path}/${name}`;
const tags = ['ai-coding', 'vibe-coding', 'engineering-leadership', 'small-business', 'claude', 'aidlc'];

export const metadata: Metadata = {
  title: `${title} | Stefana Muller`,
  description,
  authors: [{ name: 'Stefana Muller' }],
  keywords: tags,
  openGraph: {
    title,
    description,
    url: path,
    siteName: 'Stefana Muller',
    type: 'article',
    publishedTime: '2026-11-05',
    authors: ['Stefana Muller'],
    tags,
    images: [{ url: img('home.png'), width: 1600, height: 1025, alt: 'Home screen of the order system, with demo data' }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [img('home.png')],
  },
};

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
}

function Figure({ src, alt, width, height, children }: { src: string; alt: string; width: number; height: number; children: React.ReactNode }) {
  return <figure><img src={img(src)} alt={alt} width={width} height={height} loading="lazy" /><figcaption>{children}</figcaption></figure>;
}

export default function VibeCodingPost() {
  return <main>
    <SiteNav />
    <article className="post">
      <header className="post-header">
        <p className="eyebrow"><a href="/#writing">Field notes</a> · <time dateTime="2026-11-05">November 5, 2026</time></p>
        <h1>{title}</h1>
        <p className="post-byline">By Stefana Muller</p>
      </header>

      <div className="post-body">
        <p>It started with my sister and an order form. She runs a family butcher shop, and every fall she processes venison for hundreds of hunters. She had been trying to turn her paper order form into an Excel file that could create orders. It wasn&apos;t working. Excel couldn&apos;t do what she needed, and every time someone opened the shared file to enter a new order, something else got deleted.</p>

        <p>She asked if I could help. I run engineering teams for a living, but somewhere along the way &quot;engineering&quot; turned into roadmaps, staffing plans and status reviews. I hadn&apos;t written real code in years. So I tried <Ext href="https://feeds.simonwillison.net/2025/Mar/6/vibe-coding/">vibe coding</Ext> it with an AI assistant, and I had a working first version in about an hour.</p>

        <p>I&apos;m not the only leader heading back to the keyboard. <Ext href="https://leaddev.com/management/engineering-managers-are-back-in-the-codebase">LeadDev reports</Ext> that the share of engineering managers doing more hands-on technical work rose from 20% in 2025 to 35% in 2026.</p>

        <p>That was August 16. Since then it has taken 62 commits over 12 weeks, and we still ship changes every week. This post is about both halves of that journey: how AI tools make it easy to get back to basics, and what the weeks after the first hour taught me about why applications are hard.</p>

        <h2>The use case: a seasonal shop running on paper</h2>

        <p>My sister&apos;s shop is in New York and processes venison during the fall and winter season. It handles roughly 1,000 animals between September and February, with one or two non-technical people entering orders.</p>

        <p>Some context, since the subject can be sensitive. Deer populations in much of the Northeast are larger than the land supports, which shows up as crop and garden damage, vehicle collisions and stressed forests. New York State manages the herd through regulated, tagged harvests, and shops like this one turn that harvest into food. A meaningful share is donated to food banks through an NYS program.</p>

        <p>That is all the background this post needs. The real subject is the kind of problem almost every home-based or seasonal business has: a lot of orders, a lot of rules, a paper form, and nobody who wants to pay for enterprise software.</p>

        <p>What the shop needed was specific:</p>

        <ul>
          <li>Take an order in about 90 seconds while a customer waits</li>
          <li>Track cuts, sausage and specialty work that finish weeks apart</li>
          <li>Print tickets and receipts on a cheap label printer</li>
          <li>Capture the New York State donation paperwork correctly</li>
          <li>Run on one laptop, with no cloud bill and no IT person</li>
        </ul>

        <h2>Hour one: what AI got right immediately</h2>

        <p>I didn&apos;t start with a prompt. I started the way I worked before I led engineering teams: as a product manager. I sat down with my sister for about 20 minutes and asked how she runs the business with that order form. What happens when a hunter drops off a deer? Who touches the order next? What goes wrong?</p>

        <p>I scribbled notes all over the front and back of the form. It was a mess, but it held a lot of context that had never been written down anywhere: how cuts trade off against each other, sausage minimums, donations, and when people pay.</p>

        <p>Then I typed those notes into ChatGPT and worked with it to turn them into a product requirements document: a detailed spec of every field, price, rule, printout and report the shop needed. It captured details like the 5 lb minimum per sausage flavor, the 60/40 venison-to-pork ratio, and the rule that a cape and a euro mount can&apos;t go on the same deer.</p>

        <p>I took that PRD to Claude to design the architecture and generate the code. Before writing anything, Claude produced a set of design docs and pushed back on the spec in places, raising questions the PRD hadn&apos;t answered. Two rounds of answers from the shop settled the details, and most of those answers removed features rather than adding them.</p>

        <p>That was the <Ext href="https://builder.aws.com/content/3KjWpM4sqd5f0zjUtE67OfUa7rk/ai-driven-development-life-cycle-ai-dlc-on-aws-a-new-approach-to-software-engineering">AI-driven development lifecycle (AIDLC)</Ext> I learned at work, scaled down to a family business: discovery, requirements, design, review, then build. Using two AI tools for different stages worked well to keep my token budget down in each app, as long as I carried the context between them myself.</p>

        <p>With that groundwork done, the build itself was fast. I had a usable app the same evening. The first commit landed on August 16 with 43 files and about 6,400 lines of code, tests included.</p>

        <p>I made one architecture call up front, and the AI held to it: zero dependencies. The app is Node.js with its built-in SQLite database and plain HTML pages. There is no <code>npm install</code>, no framework and nothing to break during an update. It runs on the owner&apos;s laptop and any phone or tablet on the shop Wi-Fi can open it.</p>

        <p>The home screen answers the question the shop asks all day: what is waiting, and on what?</p>

        <Figure src="home.png" alt="Home screen showing today's work by stage, with demo data" width={1600} height={1025}>The home screen: today&apos;s work by stage, plus anything that needs a person&apos;s attention. All screenshots in this post use made-up demo data; no real customer information is shown.</Figure>

        <p>Order entry is built for speed. Big touch targets, the phone number first (so repeat customers fill in automatically), and one button to save and print.</p>

        <Figure src="new-order.png" alt="New order form with customer, animal and services sections, with demo data" width={1600} height={1025}>New order: customer, animal and cut instructions on one scrolling form, with the running total pinned to the bottom. Demo data.</Figure>

        <p>This is the part of AI coding that feels like magic. A clean, opinionated first version that would have taken me a few weekends a decade ago took one evening. For a leader who has drifted away from code, that is a genuine on-ramp back to the craft.</p>

        <h2>Weeks two through twelve: reality shows up</h2>

        <p>The app went live on day three. Then the shop started using it, and the real requirements arrived one at a time. The codebase has roughly doubled since that first evening, to about 12,400 lines.</p>

        <Figure src="commits-by-week.png" alt="Bar chart of commits per week from August 16 to November 5, 2026: one commit the first evening, then bursts of 14, 14 and 10 commits as the season got going" width={1344} height={650}>Commits per week, from the project&apos;s git history: 62 commits, Aug 16 to Nov 5, 2026.</Figure>

        <p>The bursts line up with the shop&apos;s calendar: setup before the season, a rush when new animal types and the donation paperwork arrived, and steady tweaks once orders started flowing. Each commit message reads like a lesson the first prompt could not have known.</p>

        <div className="post-table">
          <table>
            <thead><tr><th>Date</th><th>Change</th><th>What reality taught us</th></tr></thead>
            <tbody>
              <tr><td>Nov 5</td><td>Owner-only area for money totals</td><td>Staff and owner need different views of the same data</td></tr>
              <tr><td>Nov 3</td><td>&quot;Canadian Bacon is not a roast&quot;</td><td>We had reversed this rule twice. Domain knowledge is earned, not prompted</td></tr>
              <tr><td>Oct 9</td><td>Stop customer names being overwritten</td><td>Real data is messier than demo data</td></tr>
              <tr><td>Oct 4</td><td>Printable NYS donation form</td><td>The paperwork was the real bottleneck all along</td></tr>
              <tr><td>Sep 20</td><td>Add elk, priced by weight on the bone</td><td>Every new product brings its own rules</td></tr>
              <tr><td>Sep 12</td><td>Hunter ID field, then stop blocking orders without it</td><td>A required field can stall a customer at the counter</td></tr>
              <tr><td>Aug 21</td><td>Resize prints for the real 4x6 label printer</td><td>Hardware decides your layout</td></tr>
              <tr><td>Aug 18</td><td>Fix &quot;today&quot; using UTC instead of shop time</td><td>Classic bugs still happen, fast</td></tr>
            </tbody>
          </table>
        </div>

        <p>Every commit is listed in the <Ext href="https://github.com/stefana912/deer-processing-system-design/blob/main/CHANGELOG.md">changelog in the public design repo</Ext>.</p>

        <p>The donations screen is a good example. It was not in the first version at all. It now checks every donated animal against what the New York State form requires and refuses to add incomplete rows, because NYS rejects incomplete forms.</p>

        <Figure src="donations.png" alt="Donations screen that builds the New York State donation form, with demo data" width={1600} height={1025}>Donations: the NYS form is assembled from orders, and missing fields are flagged before anything is submitted. Demo data.</Figure>

        <h2>The real lesson: vibe coding is the easy part</h2>

        <p>Vibe coding is great, and it is genuinely fun. But a vibe-coded app is designed for the day you build it. The moment real people depend on it, you have to think about scale: who the users are, what they will need to see, and how their use cases will change over time. Plenty of people are noticing the same thing: <Ext href="https://rehack.com/?p=14610">shipping is the easy part</Ext>, and <Ext href="https://feeds.simonwillison.net/2025/Mar/6/vibe-coding/">vibe coding straight into production</Ext> only works if someone understands the code.</p>

        <p>The clearest evidence is in our database, not our screens. The app has needed 22 schema migrations in 12 weeks, and several of them exist only because the first data model assumed the business would stay the same.</p>

        <div className="post-table">
          <table>
            <thead><tr><th>Migration</th><th>What changed</th><th>Why the first data model didn&apos;t fit</th></tr></thead>
            <tbody>
              <tr><td>005</td><td>Sausage orders became structured line items</td><td>Quantities were stored as text, so a one-time script had to rebuild every earlier order</td></tr>
              <tr><td>012, 014, 018</td><td>Added elk, then moose, then other specialty animals</td><td>Animal type was a fixed list inside the orders table, so the whole table was rebuilt three times</td></tr>
              <tr><td>015</td><td>Hunting groups became their own list</td><td>Free-typed names meant &quot;MMT&quot;, &quot;mmt&quot; and &quot;M.M.T.&quot; counted as three groups in every report</td></tr>
              <tr><td>019</td><td>How much venison an item needs moved onto the item itself</td><td>The first model assumed everything on a menu tab was made the same way</td></tr>
            </tbody>
          </table>
        </div>

        <p>Today I realized the bigger version of this problem. The core order is still shaped around one kind of job: a deer with four fixed services. If the shop takes on different types of orders, or wants reports we haven&apos;t imagined yet, the data structure may need to change significantly. That is a far bigger job than adding a screen, because a live season of orders has to survive the move.</p>

        <p>None of this means the hour was wasted. It means the hour is where the real design work starts. These are the questions I wish I had asked on day one:</p>

        <ol>
          <li><strong>Who else will use this?</strong> Staff and the owner turned out to need different views of the same data.</li>
          <li><strong>What will we sell next year that we don&apos;t today?</strong> Every new product brought its own pricing and paperwork rules.</li>
          <li><strong>What reports will someone ask for?</strong> A report is only as good as the structure underneath it.</li>
          <li><strong>What happens to old records when the rules change?</strong> We copy prices onto each order so a December change never rewrites an October bill.</li>
          <li><strong>What does it cost to change the structure once real data is in it?</strong> Far more than it costs on day one.</li>
        </ol>

        <p>The design reviews taught a counterweight to all this. Five of six answers from the shop pushed toward <em>less</em> software. Our test for any new feature is now: does it prevent a mistake involving a physical order, or capture a number that disappears if nobody writes it down? If not, a filter on the existing grid is probably enough.</p>

        <Figure src="all-orders.png" alt="All Orders grid with quick-view filters, with demo data" width={1600} height={1025}>All Orders: one grid with quick views for every stage, instead of a new screen for every question. Demo data: names and 555 phone numbers are made up.</Figure>

        <h2>What I&apos;d tell other leaders and small-business owners</h2>

        <p>Build something real for someone you know. A family business, a side hustle, a nonprofit, a home bakery. AI makes the first version cheap enough that the only real cost is your attention.</p>

        <ul>
          <li><strong>For engineering leaders:</strong> this is the fastest way I know to feel what your teams feel. You will rediscover why estimates slip, why &quot;small&quot; changes aren&apos;t, and why the person closest to the work matters more than the spec. One <Ext href="https://code.dblock.org/2026/05/05/coding-with-ai-agents-is-now-a-baseline-expectation-for-managers.md">VP of Engineering spent five weeks coding with AI</Ext> on one of his teams and came away arguing every manager should.</li>
          <li><strong>For home-based businesses:</strong> you can have software shaped exactly around how you work, without a subscription. Plan on a season of weekly tweaks, not a one-time install. Small businesses are already <Ext href="https://www.pymnts.com/?p=2845400">building their own back-office tools with AI</Ext> for the same reason: control.</li>
          <li><strong>For everyone:</strong> write the decisions down. Our design notes and a test suite let me, or an AI, change things safely months later.</li>
        </ul>

        <p>The one-hour app was the easy part, and the fun part. The twelve weeks that followed were the actual work: learning the users, the rules and how the business will grow. AI got me back to the basics of building. Thinking about scale got me back to the basics of engineering.</p>

        <p>If you want to see what this looks like in practice, the design documents, screenshots of every screen and printout, and the full change history are public at <Ext href="https://github.com/stefana912/deer-processing-system-design">github.com/stefana912/deer-processing-system-design</Ext>. The application code stays private, since it runs a real shop with real customers.</p>
      </div>

      <div className="post-footer">
        <ul className="post-tags" aria-label="Tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <a className="text-link" href="/#writing">← Back to field notes</a>
      </div>
    </article>
    <SiteFooter />
  </main>;
}
