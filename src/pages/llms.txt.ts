import type { APIRoute } from 'astro';
import { site, metrics, work, footprint, talks, releases, education, publication } from '~/data/site';

/**
 * A plain-text summary of this site for language models and other agents.
 *
 * Increasingly, the first thing to read a candidate's portfolio is a machine.
 * This gives it the facts directly rather than making it parse the markup —
 * the same argument behind the `llms.txt` support I added to Kedro's docs.
 */
export const GET: APIRoute = () => {
  const body = `# ${site.name}

> ${site.tagline}

${site.role} at ${site.employer}. Based in ${site.location}.
Maintainer on the Kedro Technical Steering Committee.

## At a glance

${metrics.map((m) => `- ${m.value} — ${m.label}. ${m.detail}`).join('\n')}

## Open-source footprint (github.com/kedro-org)

${footprint.map((f) => `- ${f.repo} — ${f.what}. ${f.prs} merged PRs, ${f.commits} commits. ${f.detail}`).join('\n')}

Releases cut personally:
${releases.map((r) => `- ${r.project}: ${r.versions.join(', ')}`).join('\n')}

## Selected work

${work.map((w) => `- [${w.title}](${site.domain}/work/${w.slug}) (${w.year}) — ${w.kicker}. ${w.summary} Outcome: ${w.headline}.`).join('\n')}

## Talks and community

${talks.map((t) => `- ${t.title} — ${t.venue}, ${t.dateLabel}. ${t.detail}`).join('\n')}

## Education

${education.map((e) => `- ${e.qualification}, ${e.institution} (${e.period}) — ${e.result}. ${e.note}`).join('\n')}

## Publication

- ${publication.title}. ${publication.authors}. ${publication.venue}, ${publication.year}. ${publication.arxiv}

## Contact

- Email: ${site.email}
- GitHub: ${site.github}
- LinkedIn: ${site.linkedin}
- Site: ${site.domain}
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
