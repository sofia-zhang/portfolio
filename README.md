# Portfolio site

A minimal 3-page portfolio: **work** (home), **about**, and **resume**.
No build step, no framework, no server required \u2014 just plain HTML/CSS/JS.

## Adding or editing a project

Everything on the work page and project pages comes from one file:

```
assets/js/projects-data.js
```

To add a project:
1. Put your photo(s) or video(s) in `assets/media/`.
2. Open `projects-data.js`, copy one of the existing entries in the
   `PROJECTS` array, paste it as a new entry, and edit the fields.
3. Save the file. The new project appears on the work grid automatically,
   and its detail page works automatically too (no new HTML file needed).

Each project can have:
- a **thumbnail** (image or video) shown on the work grid
- a **gallery** of multiple images/videos on its own detail page
- a **description** (as many paragraphs as you want)
- optional **links** (e.g. a paper, a GitHub repo, a video)

Full field-by-field notes are in the comment at the top of `projects-data.js`.

## Editing the about page

Open `about.html` directly and edit the bio paragraphs and portrait image
path. It's plain text/HTML, no templating.

## Adding your resume

Replace `assets/resume/resume.pdf` with your actual resume PDF, keeping
the exact filename `resume.pdf` (or update the two references to it in
`resume.html` if you rename it).

## Running it locally

Just open `index.html` in a browser \u2014 no server needed for basic viewing.
If videos or fonts don't load correctly when opened directly as a file,
run a tiny local server instead (from inside the `portfolio` folder):

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000` in your browser.

## Making it public

You have two easy, free options. Both give you a live URL; either can
later be pointed at a custom domain (e.g. sofiazhang.com) if you buy one.

### Option A: Netlify (easiest, no account needed to start)
1. Go to https://app.netlify.com/drop
2. Drag the whole `portfolio` folder onto the page.
3. Netlify gives you a live URL immediately (something like
   `random-name-123.netlify.app`).
4. To make future edits live: after editing files locally, drag the folder
   onto the same Netlify page again, or connect a GitHub repo (see below)
   for automatic updates every time you save changes.
5. To use a custom domain: Netlify site settings \u2192 Domain management \u2192
   Add a domain, then follow their DNS instructions.

### Option B: GitHub Pages (best if you want version history / it to
live alongside your code, and want automatic updates on every change)
1. Create a free GitHub account if you don't have one, and create a new
   repository (e.g. `portfolio`).
2. Upload all the files in this folder to that repository (via the GitHub
   website's "Add file \u2192 Upload files", or via `git` if you're
   comfortable with it).
3. In the repository, go to Settings \u2192 Pages.
4. Under "Source", choose the branch (usually `main`) and the root folder,
   then save.
5. GitHub gives you a live URL: `https://<your-username>.github.io/portfolio/`
6. Any time you edit `projects-data.js` (or any file) and push the change
   to GitHub, the live site updates automatically within a minute or two.
7. To use a custom domain: repository Settings \u2192 Pages \u2192 add your
   domain under "Custom domain", then add the DNS records GitHub shows you
   at your domain registrar.

### A note on custom domains
If you want something like `sofiazhang.com` instead of a `.netlify.app`
or `.github.io` address, buy the domain from a registrar (Namecheap,
Google Domains/Squarespace, Cloudflare Registrar are all reasonable,
inexpensive options), then follow the DNS steps in whichever hosting
option you chose above. This usually takes a few minutes to set up and
up to 24-48 hours to fully propagate.
