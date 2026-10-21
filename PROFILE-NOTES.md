# Profile maintenance

## Content choices

- English profile for an international recruiting audience.
- Headline: **Senior Full-Stack Developer & AI Product Engineer**.
- Only user-supplied skills are listed. CI/CD and workflow orchestration describe the supplied GitHub Actions and AI workflow experience.
- The four featured gists and the three game URLs were verified against the public GitHub profile on 21 October 2026.
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

Source discovery: 21 October 2026. Job postings can change or close.
Python, RAG, model training, evaluations and other skills from job descriptions were not added without evidence of the owner's experience.

## Trailers

The README uses seven-second animated GIF excerpts from the original local MP4s. All previews share a 480 × 270 canvas; portrait footage is padded to preserve its proportions. Clicking a preview opens the complete MP4 in the repository.

To regenerate with FFmpeg installed:

```powershell
foreach ($name in @('fastr', 'iconic', 'one-piexel')) {
  ffmpeg -hide_banner -loglevel error -ss 5 -t 7 -i "assets/$name-trailer.mp4" -filter_complex "fps=9,scale=480:270:force_original_aspect_ratio=decrease:flags=lanczos,pad=480:270:(ow-iw)/2:(oh-ih)/2:color=0x0b1120,split[a][b];[a]palettegen=stats_mode=diff[p];[b][p]paletteuse=dither=bayer:bayer_scale=3" -loop 0 -y "assets/$name-preview.gif"
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

`npm run prepush` also runs the validation manually; it is not an installed Git hook.

GitHub automatically uses the README from the default branch of **cendevweb/cendevweb** on the matching profile. No build or deployment is needed. Publishing through the SSH remote requires an SSH key authorized on the owner's GitHub account. Files are prepared locally; no push or profile setting change has been performed.

GitHub references: [profile README](https://docs.github.com/en/account-and-profile/concepts/personal-profile), [native contribution graph](https://docs.github.com/en/account-and-profile/concepts/contributions-on-your-profile).
