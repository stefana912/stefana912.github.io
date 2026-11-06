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
        <p>It started with my sister and an order form. She runs a family butcher shop, and every Fall she processes venison for hundreds of hunters. She had been trying to turn her paper order form into an Excel file that could create orders. It wasn&apos;t working. Excel couldn&apos;t do what she needed, and every time someone opened the shared file to enter a new order, something would accidentally get deleted.</p>

        <p>She asked if I could help. I run engineering teams for a living, but somewhere along the way &quot;engineering&quot; turned into roadmaps, staffing plans and status reviews. I hadn&apos;t written real code in years. So I tried <Ext href="https://medium.com/womenintechnology/my-thoughts-on-vibe-coding-have-evolved-7912d2df0300">vibe coding</Ext> it with ChatGPT and Claude, and I had a working first version in about an hour.</p>

        <p>I&apos;m not the only leader heading back to the keyboard. <Ext href="https://leaddev.com/management/engineering-managers-are-back-in-the-codebase">LeadDev reports</Ext> that the share of engineering managers doing more hands-on technical work rose from 20% in 2025 to 35% in 2026.</p>

        <p>That was August 16. Since then it has taken 62 commits over 12 weeks, and we still deploy changes every week.</p>

        <h2>The use case: a seasonal shop running on paper</h2>

        <p>My sister&apos;s shop is in New York and processes venison during the fall and winter season. It handles roughly 1,000 animals between September and February, with one or two non-technical people entering orders.</p>

        <p>Some context, since the subject can be sensitive. Deer populations in much of the Northeast are larger than the land supports, so New York State manages the herd through regulated, tagged harvests. Shops like this one turn that harvest into food, and some of it goes to food banks through an NYS program.</p>

        <p>It&apos;s the kind of problem a lot of home-based and seasonal businesses have: lots of orders, lots of rules, and a paper form that can&apos;t keep up.</p>

        <p>The shop needed fast order entry at the counter, printed tickets, and the New York State donation paperwork, all on one laptop with no monthly bill.</p>

        <h2>Hour one: what AI got right</h2>

        <p>I didn&apos;t start with a prompt. I started the way I worked before I led engineering teams: as a product manager. I sat down with my sister for about 20 minutes and asked how she runs the business with that order form. What happens when a hunter drops off a deer? Who touches the order next? What goes wrong?</p>

        <p>I scribbled notes all over the front and back of the form. It was a mess, but it held a lot of context that had never been written down anywhere: how cuts trade off against each other, sausage minimums, donations, and when people pay.</p>

        <p>Then I typed those notes into ChatGPT and turned them into a product requirements document (PRD).</p>

        <p>I took that PRD to Claude to design the architecture and generate the code. Before writing anything, Claude produced a set of design docs and pushed back on the spec in places, raising questions the PRD hadn&apos;t answered. Two rounds of answers from the shop settled the details, and most of those answers removed features rather than adding them.</p>

        <p>That was the <Ext href="https://builder.aws.com/content/3KjWpM4sqd5f0zjUtE67OfUa7rk/ai-driven-development-life-cycle-ai-dlc-on-aws-a-new-approach-to-software-engineering">AI-driven development lifecycle (AIDLC)</Ext> I learned at work, scaled down to a family business: discovery, requirements, design, review, then build. Using two AI tools for different stages worked well to keep my token budget down in each app, as long as I carried the context between them myself.</p>

        <p>With that groundwork done, the build itself was fast. I had a usable app the same night. The first commit landed on August 16 with 43 files and about 6,400 lines of code, tests included.</p>

        <p>I made one architecture call up front - no dependencies. It&apos;s just Node.js and its built-in database, running on the owner&apos;s laptop.</p>

        <p>The home screen answers the question the shop asks all day - what is waiting, and on what?</p>

        <Figure src="home.png" alt="Home screen showing today's work by stage, with demo data" width={1600} height={1025}>The home screen: today&apos;s work by stage, plus anything that needs a person&apos;s attention. All screenshots in this post use made-up demo data; no real customer information is shown.</Figure>

        <p>Order entry is built for speed. Big touch targets (for easy order entry), the phone number first (so repeat customers fill in automatically), and one button to save and print to multiple locations.</p>

        <Figure src="new-order.png" alt="New order form with customer, animal and services sections, with demo data" width={1600} height={1025}>New order: customer, animal and cut instructions on one scrolling form, with the running total pinned to the bottom. Demo data.</Figure>

        <p>A first version that would have taken me a few weekends a decade ago took about an hour.</p>

        <h2>Weeks 2 through 12: reality shows up</h2>

        <p>The app went live on day 3. Then the shop started using it, and the real requirements arrived one at a time. The codebase has roughly doubled since that first commit, to about 12,400 lines.</p>

        <Figure src="commits-by-week.png" alt="Bar chart of commits per week from August 16 to November 5, 2026: one commit for the first version, then bursts of 14, 14 and 10 commits as the season got going" width={1344} height={650}>Commits per week, from the project&apos;s git history: 62 commits, Aug 16 to Nov 5, 2026.</Figure>

        <p>The bursts of commits line up with the shop&apos;s calendar: setup before the season, a rush when new animal types and the donation paperwork arrived, and steady tweaks once orders started flowing.</p>

        <div className="post-table">
          <table>
            <thead><tr><th>Date</th><th>Change</th><th>What reality taught us</th></tr></thead>
            <tbody>
              <tr><td>Nov 5</td><td>Owner-only area for money totals</td><td>Staff and owner need different views of the same data</td></tr>
              <tr><td>Nov 3</td><td>&quot;Canadian Bacon is not a roast&quot;</td><td>We changed this rule twice before getting it right</td></tr>
              <tr><td>Oct 9</td><td>Stop customer names being overwritten</td><td>Real data is messier than demo data</td></tr>
              <tr><td>Oct 4</td><td>Printable NYS donation form</td><td>The paperwork was the real bottleneck all along</td></tr>
              <tr><td>Sep 20</td><td>Add elk, priced by weight on the bone</td><td>Every new product brings its own rules</td></tr>
              <tr><td>Sep 12</td><td>Hunter ID field, then stop blocking orders without it</td><td>A required field can stall a customer at the counter</td></tr>
              <tr><td>Aug 21</td><td>Resize prints for the real 4x6 label printer</td><td>The printer we actually had set the layout</td></tr>
              <tr><td>Aug 18</td><td>Fix &quot;today&quot; using UTC instead of shop time</td><td>AI-written code still has ordinary bugs</td></tr>
            </tbody>
          </table>
        </div>

        <p>Every commit is listed in the <Ext href="https://github.com/stefana912/deer-processing-system-design/blob/main/CHANGELOG.md">changelog in the public design repo</Ext>.</p>

        <p>The donations screen is a good example. It was not in the first version at all. But after my sister spent hours copying and pasting data into PDF files, I realized I could auto-generate those for her. The app now checks every donated animal against what the New York State form requires and refuses to add incomplete rows, because NYS rejects incomplete forms. It keeps track of what went to the form and what hasn’t yet so that she doesn’t accidentally submit the same deer twice. A lot of human error is eliminated with this automation.</p>

        <Figure src="donations.png" alt="Donations screen that builds the New York State donation form, with demo data" width={1600} height={1025}>Donations: the NYS form is assembled from orders, and missing fields are flagged before anything is submitted. Demo data.</Figure>

        <h2>The real lesson: vibe coding is the easy part</h2>

        <p>Vibe coding is great, and it is genuinely fun. But a vibe-coded app is designed for the day you build it. Once real people depend on it, you have to think about scale. Who are the users? What will they need to see? How will their use cases change over time? Others are seeing the same thing: <Ext href="https://www.jeannelizabeth.com/blog/vibe-coding-a-double-edged-sword">it&apos;s easy to mistake the prototype for the product</Ext>.</p>

        <p>Now every family dinner happens to be a new feature-gathering session for the app. My mom, dad, sister, and her husband text me requests in the middle of the day, and I&apos;m adding code from my phone on the fly. Every change has to pass more than 200 automated tests before it goes live.</p>

        <p>The clearest evidence of change is in our database, not our screens. The app has needed 22 schema migrations in 12 weeks, and several of them exist only because the first data model assumed the business would stay the same.</p>

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

        <p>Today I realized the bigger version of this problem. The core order is still shaped around one kind of job: a deer with four fixed services. If the shop takes on different types of orders, or wants reports we haven&apos;t imagined yet, the data structure may need to change significantly. That is a far bigger job than adding a screen, because a live season of orders has to migrate with the upgrade.</p>

        <h2>What I&apos;d tell other leaders and small-business owners</h2>

        <p>Build something real for someone you know. A family business, a side hustle, a nonprofit, a home bakery. AI makes the first version cheap enough that the only real cost is your attention.</p>

        <ul>
          <li><strong>For engineering leaders:</strong> this is the fastest way I know to feel what your teams feel. You will rediscover why estimates slip, why &quot;small&quot; changes aren&apos;t actually simple, and why the person closest to the work matters more than the spec. Charity Majors, co-founder and CTO of Honeycomb, has argued for years that <Ext href="https://www.infoq.com/presentations/hands-on-coding-managers">managers who keep their hands on code</Ext> gain credibility and better judgment.</li>
          <li><strong>For home-based businesses:</strong> you can have software shaped exactly around how you work, without a subscription. Plan on a season of weekly tweaks, not a one-time install. Solo founders are already <Ext href="https://www.forbes.com/sites/jodiecook/2026/03/23/how-solo-founders-are-vibe-coding-digital-products-that-make-instant-revenue/">vibe coding their own products</Ext>, too.</li>
          <li><strong>For everyone:</strong> write the decisions down. Our design notes and a test suite let me, or an AI, change things safely months later.</li>
        </ul>

        <p>The one-hour app was the easy part, and the fun part. The 12 weeks that followed were the actual work: learning the users, the rules and how the business will grow. AI got me back to the basics of building. Thinking about scale got me back to the basics of engineering.</p>

        <p>If you want to see what this looks like in practice, the design documents, screenshots of screens and printouts, and the full change history are public at <Ext href="https://github.com/stefana912/deer-processing-system-design">github.com/stefana912/deer-processing-system-design</Ext>. The application code stays private, since it runs a real shop with real customers.</p>
      </div>

      <div className="post-footer">
        <ul className="post-tags" aria-label="Tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <a className="text-link" href="/#writing">← Back to field notes</a>
      </div>
    </article>
    <SiteFooter />
  </main>;
}
