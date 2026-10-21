<p align="center">
  <img src="assets/profile-banner.svg" width="100%" alt="Dylan Tuna — products, playful experiences and developer tools" />
</p>

<h1 align="center">Senior Full-Stack Developer &amp; AI Product Engineer</h1>

<p align="center">
  I build web products, create games, and turn reusable code into developer tools.<br />
  TypeScript across the stack. Product thinking throughout. AI agents in the workflow.
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/dylan-tuna-635405a8/"><img alt="Connect on LinkedIn" src="https://img.shields.io/badge/LinkedIn-Let's_connect-0A66C2?style=for-the-badge" /></a>
  <a href="https://x.com/DylanTuna"><img alt="Follow DylanTuna on X" src="https://img.shields.io/badge/X-@DylanTuna-181717?style=for-the-badge&amp;logo=x&amp;logoColor=white" /></a>
  <a href="https://www.youtube.com/@CorvusWebStudio"><img alt="Corvus Web Studio on YouTube" src="https://img.shields.io/badge/YouTube-Corvus_Web_Studio-FF0033?style=for-the-badge&amp;logo=youtube&amp;logoColor=white" /></a>
</p>

<p align="center">
  <a href="#selected-work">Selected work</a> &nbsp; / &nbsp;
  <a href="#typescript-patterns">TypeScript patterns</a> &nbsp; / &nbsp;
  <a href="#technical-stack">Technical stack</a> &nbsp; / &nbsp;
  <a href="https://github.com/cendevweb?tab=overview#js-contribution-activity-description">GitHub activity</a>
</p>

## Selected work

### Games — see them in motion

<table>
  <tr>
    <td align="center" width="33%"><strong>FASTR</strong></td>
    <td align="center" width="33%"><strong>ICONIC</strong></td>
    <td align="center" width="33%"><strong>ONE PIEXEL</strong></td>
  </tr>
  <tr>
    <td><a href="assets/fastr-trailer.mp4"><img src="assets/fastr-preview.gif" width="100%" alt="FASTR — animated trailer preview; click for the full video" /></a></td>
    <td><a href="assets/iconic-trailer.mp4"><img src="assets/iconic-preview.gif" width="100%" alt="ICONIC — animated trailer preview; click for the full video" /></a></td>
    <td><a href="assets/one-piexel-trailer.mp4"><img src="assets/one-piexel-preview.gif" width="100%" alt="ONE PIEXEL — animated trailer preview; click for the full video" /></a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://fastr.gg/">Play the game ↗</a><br /><a href="assets/fastr-trailer.mp4">Watch full trailer</a></td>
    <td align="center"><a href="https://iconic-game.gg/">Play the game ↗</a><br /><a href="assets/iconic-trailer.mp4">Watch full trailer</a></td>
    <td align="center"><a href="https://one-piexel.gg/">Play the game ↗</a><br /><a href="assets/one-piexel-trailer.mp4">Watch full trailer</a></td>
  </tr>
</table>

### Unbox — explicit error handling for promises

**A small TypeScript utility that makes promise failures part of the return type.**
`unbox` and `unboxAll` encourage callers to handle errors before consuming the result, with fewer repetitive `try/catch` blocks.

[Explore the source →](https://github.com/cendevweb/unbox) &nbsp; · &nbsp; [View on npm →](https://www.npmjs.com/package/unbox-js)

```ts
const result = await unbox(promise);

if (result.error) {
  throw result.error;
}

const { data } = result;
```

## TypeScript patterns

Small, focused examples of language features and reusable patterns — selected from my pinned gists.

| Pattern | What it demonstrates |
| :--- | :--- |
| [Function overloads](https://gist.github.com/cendevweb/cf22bca87833bd358cca86c2ccbaf73c) | Express different return types for different input signatures. |
| [Lookup tables](https://gist.github.com/cendevweb/db42f2bf8fa5f16fa42d50e2d0502d6a) | Represent status mappings as data for straightforward lookups. |
| [Conditional object spread](https://gist.github.com/cendevweb/8d4705121ac7cdfe860167b0dd59649c) | Guard a value with `typeof` before spreading it into an object. |
| [Proxy validator](https://gist.github.com/cendevweb/d2022012c4907d51ca98610169157018) | Intercept property assignments with a JavaScript `Proxy`. |

[Browse all my gists →](https://gist.github.com/cendevweb)

## Technical stack

**Full-stack TypeScript · Frontend & backend development**

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-111827?style=flat-square&logo=nextdotjs&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-417E38?style=flat-square&logo=nodedotjs&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat-square&logo=nestjs&logoColor=white)
![GraphQL](https://img.shields.io/badge/GraphQL-E10098?style=flat-square&logo=graphql&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=flat-square&logo=tailwindcss&logoColor=white)

**Databases & payments**

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-116149?style=flat-square&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=prisma&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-635BFF?style=flat-square&logo=stripe&logoColor=white)

**Cloud, containers & CI/CD**

![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![CI/CD](https://img.shields.io/badge/CI%2FCD-334155?style=flat-square)

**AI product engineering & agentic development**

![Claude Code](https://img.shields.io/badge/Claude_Code-D97757?style=flat-square&logo=claude&logoColor=white)
![Codex](https://img.shields.io/badge/Codex-111827?style=flat-square)
![AI agents](https://img.shields.io/badge/AI_Agents-6D28D9?style=flat-square)
![Agentic workflows](https://img.shields.io/badge/Agentic_Workflows-6D28D9?style=flat-square)
![Workflow orchestration](https://img.shields.io/badge/Workflow_Orchestration-6D28D9?style=flat-square)
![Agent skills](https://img.shields.io/badge/Agent_Skills-6D28D9?style=flat-square)
![Agent rules](https://img.shields.io/badge/Agent_Rules-6D28D9?style=flat-square)

I use AI coding tools, reusable agent skills, rules, and workflows as part of my development process.

---

<p align="center">
  <strong>Let's build something people want to use.</strong><br />
  <a href="https://www.linkedin.com/in/dylan-tuna-635405a8/">Connect with me on LinkedIn →</a>
</p>

<!-- GitHub renders the live native contribution calendar and activity overview below this README and pinned items. -->
