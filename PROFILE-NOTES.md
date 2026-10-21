# Profile maintenance

## Content choices

- English profile for an international recruiting audience.
- Headline: **Senior Full-Stack Developer & AI Product Engineer**.
- The owner's preferred emphasis is games and skills first, followed by open source and gists. Professional experience appears near the bottom, with additional details in a collapsed section and no professional screenshots or demo videos.
- Professional context supplied by the owner: nine years working on high-volume SaaS at Paragone, lempire, Weblib and SportsDynamics, including Tweet Hunter and Taplio at lempire. Specific backend, automation, AWS and database contributions are summarized across roles without attributing them to an unconfirmed employer. No revenue, team size or personal performance outcomes are inferred.
- AWS Certified Developer – Associate is described as earned in 2019, not as a currently active credential.
- Owner-reported project figures as of October 2026: approximately 1,000 visits since launch for each game, approximately 100 registered accounts for ICONIC and 50 for ONE PIEXEL. These are not active-user counts or unique visitors.
- Owner-supplied FASTR implementation details: reusable skills for dictionary creation and improvement, incorporation of automatically collected player suggestions, a management backoffice and WebSocket development. No model provider, autonomous validation behavior or training pipeline is inferred.
- Account management for ICONIC and ONE PIEXEL uses Next.js and Better Auth / Auth.js. The owner has not specified the per-project authentication library, so neither library is assigned to a particular game.
- Only user-supplied skills are listed. CI/CD and workflow orchestration describe the supplied GitHub Actions and AI workflow experience.
- The four featured gists and the three game URLs were verified against the public GitHub profile on 21 October 2026.
- Live FASTR and ONE PIEXEL pages were opened in the browser during review. FASTR's rules confirm multiplayer, themed word dictionaries and four timed rounds. ICONIC's public page confirms character guessing, progress and streak bonuses.
- LinkedIn and YouTube were supplied by the profile owner.
- Unbox's description and example follow its repository README.
- GitHub's native contribution calendar and activity overview already appear below the README and pinned items. The navigation links to that live section; no static counts or external statistics service are needed.

## Recruiting keywords

This is a qualitative sample of relevant job postings, not a statistical ranking of the whole market. No frequency or market-share claims are made.

| Evidence | Relevant vocabulary | Profile decision |
| --- | --- | --- |
| [Scale Army — Full Stack TypeScript Engineer, Next.js & AI](https://jobs.ashbyhq.com/scale%20Army%20Careers/889e3259-d95a-437c-8bc3-ebf689ecf3a3) | TypeScript, React, Next.js, AI integrations, automated workflows | Put full-stack TypeScript first. |
| [Dotfile — Senior Fullstack Engineer](https://jobs.ashbyhq.com/dotfile/bb5e660f-3b60-4d72-9e44-986f0850afc5) | TypeScript, React, Node.js, NestJS, GraphQL, PostgreSQL, AWS, reusable agent workflows | Group frontend/backend, data and cloud skills clearly. |
| [Pylon — Member of Technical Staff, API](https://jobs.ashbyhq.com/pylon/d1ef993a-9d43-432c-8700-f185de00a1e4) | TypeScript, NestJS, GraphQL, PostgreSQL, workflow orchestration | Make NestJS and GraphQL visible alongside Node.js. |
| [Build — AI Engineer, Assistant Capabilities](https://jobs.ashbyhq.com/build/fa3959af-f28e-4127-8bea-29ee207bf274) | Product engineering, agentic workflows, workflow orchestration | Use readable AI engineering terminology alongside coding tools. |
| [Peec AI — Senior Product Engineer](https://jobs.ashbyhq.com/Peec/02f4e485-a502-4eb9-b08d-7d42a22b5844) | End-to-end ownership, TypeScript, React, deployed hobby projects, open source | Lead with professional experience and make playable projects and code easy to reach. |

Source discovery: 21 October 2026. Job postings can change or close.
Python, RAG, model training, evaluations and other skills from job descriptions were not added without evidence of the owner's experience.

## Trailers

The README uses seven-second animated GIF excerpts from the original local MP4s, at 7 fps with a 96-color palette. The three previews total approximately 3.3 MB, down from 4.3 MB. All previews share a 480 × 270 canvas; portrait footage is padded to preserve its proportions. Clicking a preview opens the complete MP4 through an explicit repository URL.

Each preview has a static JPEG alternative selected through a `picture` element for visitors who prefer reduced motion. Project sections are stacked so previews and links do not compete for space in a three-column grid.

To regenerate with FFmpeg installed:

```powershell
foreach ($name in @('fastr', 'iconic', 'one-piexel')) {
  $start = if ($name -eq 'iconic') { 2 } else { 32 }
  ffmpeg -hide_banner -loglevel error -ss $start -t 7 -i "assets/$name-trailer.mp4" -filter_complex "fps=7,scale=480:270:force_original_aspect_ratio=decrease:flags=lanczos,pad=480:270:(ow-iw)/2:(oh-ih)/2:color=0x0b1120,split[a][b];[a]palettegen=max_colors=96:stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=4" -loop 0 -y "assets/$name-preview.gif"
  $posterTime = if ($name -eq 'iconic') { 12 } else { 35 }
  ffmpeg -hide_banner -loglevel error -ss $posterTime -i "assets/$name-trailer.mp4" -frames:v 1 -vf "scale=640:360:force_original_aspect_ratio=decrease,pad=640:360:(ow-iw)/2:(oh-ih)/2:color=0x0b1120" -y "assets/$name-poster.jpg"
}
```

The banner is a local SVG with no remote fonts or scripts. Skill and social badges use Shields.io and require that service to be available.

## Publishing

The repository is already initialized on `main`, with `origin` pointing to `git@github.com:cendevweb/cendevweb.git`. Node.js 22 or later is used for local checks; there are no package dependencies.

```powershell
npm install
npm run check
git add README.md PROFILE-NOTES.md assets package.json package-lock.json scripts .gitignore .gitattributes
git commit -m "Create recruiter-focused GitHub profile"
git push -u origin main
```

`npm run prepush` also runs the validation manually; it is not an installed Git hook. Validation checks local HTML and Markdown links, reduced-motion poster references, repository trailer links, internal navigation and asset sizes. It does not check remote website availability.

GitHub automatically uses the README from the default branch of **cendevweb/cendevweb** on the matching profile. No build or deployment is needed. Publishing through the SSH remote requires an SSH key authorized on the owner's GitHub account. Files are prepared locally; no push or profile setting change has been performed.

GitHub references: [profile README](https://docs.github.com/en/account-and-profile/concepts/personal-profile), [native contribution graph](https://docs.github.com/en/account-and-profile/concepts/contributions-on-your-profile).
