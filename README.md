# stefanamuller.com

Personal website for Stefana Muller, published with GitHub Pages.

## Edit the site

Talks, essays, career history and shared figures (site address, years in technology, form links) live in `app/content.ts`. Page layouts live in `app/page.tsx` and `app/*/page.tsx`; colors and visual styling live in `app/globals.css`.

When the custom domain is ready, change `siteUrl` in `app/content.ts` and set the domain in the repository's Pages settings.

```bash
npm install
npm run dev
```

Pull requests run lint and a build check. Pushing to `main` publishes the site through the included GitHub Actions workflow.
