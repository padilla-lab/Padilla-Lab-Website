# Padilla Lab Website — Setup Guide

This folder contains your complete, customized lab website. No coding is required to put it online — just careful clicking. Total time: about 30 minutes, most of it waiting for automated builds.

**The big picture:** GitHub will store your website files and host the site for free. A robot ("GitHub Actions") rebuilds the live site automatically every time you edit a file. You set this up once; after that, updating the site means editing a text file in your browser and clicking Save.

---

## Part 1 — Put the site online (one time, ~30 min)

### Step 1: Create a GitHub account for the lab

1. Go to [github.com/signup](https://github.com/signup).
2. **Username matters:** your free website address will be `USERNAME.github.io`. Suggestion: register the username **`padillalab`** so your site is **padillalab.github.io**. (If taken, try `padilla-lab` or `padillalabstanford` — and see the note at Step 6.)

### Step 2: Install GitHub Desktop

1. Download from [desktop.github.com](https://desktop.github.com) and install (it's a normal app — no command line).
2. Open it and sign in with your new account.

### Step 3: Turn this folder into a repository

1. Unzip `padilla-lab-website.zip` somewhere permanent (e.g., Documents). You should see folders like `_pages`, `_projects`, `assets` inside.
2. **Rename the unzipped folder** to exactly: `padillalab.github.io` (replace `padillalab` with your actual GitHub username if different).
3. In GitHub Desktop: **File → Add Local Repository** → choose that folder.
4. It will say "this directory does not appear to be a Git repository" — click the blue **"create a repository"** link, then click **Create Repository** (leave all defaults).

### Step 4: Publish it

1. Click the big **Publish repository** button at the top.
2. **Uncheck "Keep this code private"** (the site can't go live from a private repo on a free account).
3. Click **Publish Repository**.

### Step 5: Flip two switches on github.com

1. Go to `github.com/USERNAME/USERNAME.github.io` in your browser (you can click **Repository → View on GitHub** in GitHub Desktop).
2. **Settings → Actions → General →** scroll to **Workflow permissions** → select **Read and write permissions** → **Save**.
3. Go to the **Actions** tab. If you see a button to enable workflows, click it. You should see a workflow called **Deploy site** running (yellow dot). If nothing is running: open **Deploy** in the left sidebar → **Run workflow** → **Run workflow**.
4. Wait ~4 minutes for the green checkmark.
5. **Settings → Pages → Build and deployment:** set **Source** = "Deploy from a branch", **Branch** = `gh-pages` (NOT main), folder `/ (root)` → **Save**.
6. Wait ~1 minute, then visit **`https://USERNAME.github.io`**. Your site is live. 🎉

### Step 6: Only if your username is NOT the first part of your site address

If your repository could not be named `USERNAME.github.io`, the site lives at `https://USERNAME.github.io/REPONAME/` instead. In that case edit `_config.yml`: set `url` to `https://USERNAME.github.io` and `baseurl` to `/REPONAME`. (Skip this entirely if you followed Steps 1–3 as written.)

---

## Part 2 — Before you share the link (10 min of fill-ins)

I've marked every spot that needs your input with **TODO** or **[square brackets]**. Find them all:

| File | What to fill in |
| --- | --- |
| `_data/socials.yml` | Your real Stanford email, Google Scholar ID, ORCID |
| `_pages/join.md` | Your affiliated Ph.D. programs (bracketed placeholder) |
| `_pages/about_marshall.md` | One sentence on your Ph.D.; delete the TODO comment |
| `_pages/about.md` | Verify the ChEM-H address block; add office # when assigned |
| `_bibliography/papers.bib` | **Verify the 6 starter entries** (pulled from public records — check years/details), then paste in your full publication list (Google Scholar → cite → BibTeX) |
| `assets/img/prof_pic.jpg` | Replace the placeholder with your headshot (keep the same filename) |

**How to edit any file after the site is live (no app needed):** on github.com, navigate to the file → click the **pencil icon** → make changes → **Commit changes** (green button). The site rebuilds itself in ~4 minutes. This is how you'll do 95% of future updates.

---

## Part 3 — Common updates later

- **Add a publication:** edit `_bibliography/papers.bib`, paste a BibTeX entry. Add `selected={true}` inside it to feature it on the homepage.
- **Add a team member:** in `_pages/profiles.md`, copy the profile block; create `_pages/about_THEIRNAME.md` with their bio; upload their photo to `assets/img/`.
- **Post news:** add a file in `_news/` named like `announcement_grant.md`, copying the format of the existing ones (update the `date:` line).
- **Edit research areas:** the four files in `_projects/`.
- **Re-enable hidden pages** (blog, CV, teaching, repositories): they're all still in `_pages/` — change `nav: false` to `nav: true` when you want them.

## Part 4 — Custom domain (optional, ~$12/yr, do anytime)

1. Buy a domain (e.g., `padillalab.org`) at Namecheap, Porkbun, or Cloudflare.
2. On github.com: **Settings → Pages → Custom domain** → enter `padillalab.org` → Save → check **Enforce HTTPS** once available.
3. At your domain registrar, add these DNS records: four **A records** for `@` pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`, and a **CNAME record** for `www` pointing to `USERNAME.github.io`.
4. In `_config.yml`, change `url` to `https://padillalab.org`.
5. DNS can take a few hours to propagate.

## If something breaks

- **Site shows a 404:** double-check Step 5.5 (Pages source = `gh-pages` branch) and that the repo is public.
- **A red ❌ on the Actions tab:** click into it and read the last lines of the log — usually a typo in a file you just edited (a missing `---` or quote). Undo your last edit (the file's **History** button shows previous versions).
- **Edits not appearing:** wait the full ~5 minutes, then hard-refresh (Ctrl/Cmd+Shift+R).
- Anything else: paste the error into Claude — debugging this is exactly what I'm for.

Theme docs live in this folder too: `CUSTOMIZE.md` and `FAQ.md` cover every feature in depth.
