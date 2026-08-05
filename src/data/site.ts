export const site = {
  name: 'Sajid Alam',
  domain: 'https://sajidalam.co.uk',
  role: 'Senior Software Engineer',
  employer: 'QuantumBlack, AI by McKinsey',
  employerUrl: 'https://www.mckinsey.com/capabilities/quantumblack',
  location: 'London, United Kingdom',
  tagline:
    'Senior Software Engineer at QuantumBlack, AI by McKinsey, and a maintainer of Kedro — an open-source Python framework on the Linux Foundation’s LF AI & Data.',
  description:
    'Sajid Alam is a Senior Software Engineer at QuantumBlack, AI by McKinsey and a maintainer on the Kedro Technical Steering Committee. Five years building the Kedro framework, its Databricks and Spark integrations, its React visualisation tool, and its LLM observability datasets.',
  email: 'sajidalam786@gmail.com',
  workEmail: 'sajid_alam@mckinsey.com',
  github: 'https://github.com/SajidAlamQB',
  githubHandle: 'SajidAlamQB',
  linkedin: 'https://www.linkedin.com/in/sajid-alam-b2a228151/',
  org: 'https://github.com/kedro-org',
} as const;

/** Headline numbers. Each is independently verifiable — see `source`. */
export const metrics = [
  {
    value: '5 yrs',
    label: 'maintaining Kedro',
    detail: 'Continuous contribution since October 2021.',
    source: 'https://github.com/kedro-org',
  },
  {
    value: '200+',
    label: 'merged pull requests',
    detail: 'Across kedro, kedro-viz, kedro-plugins, kedro-starters, vscode-kedro and kedro-academy.',
    source: 'https://github.com/search?q=author%3ASajidAlamQB+org%3Akedro-org+is%3Amerged&type=pullrequests',
  },
  {
    value: '10.9k',
    label: 'stars on the framework',
    detail: 'kedro-org/kedro — an LF AI & Data graduate project.',
    source: 'https://github.com/kedro-org/kedro',
  },
  {
    value: '860k',
    label: 'downloads per month',
    detail: 'PyPI installs of kedro.',
    source: 'https://pypistats.org/packages/kedro',
  },
] as const;

/** Where the five years actually went. */
export const footprint = [
  {
    repo: 'kedro-org/kedro',
    url: 'https://github.com/kedro-org/kedro',
    what: 'The framework itself',
    prs: 86,
    commits: 643,
    detail:
      'Runner internals, the parameter validation subsystem, the `kedro new` tools flow, micropackaging, Rich logging, cloud `--conf-source`, and release engineering.',
  },
  {
    repo: 'kedro-org/kedro-plugins',
    url: 'https://github.com/kedro-org/kedro-plugins',
    what: 'Datasets & integrations',
    prs: 44,
    commits: 458,
    detail:
      'SparkDatasetV2, Databricks and Spark Connect utilities, the vector-store abstraction, and the Langfuse/Opik LLM observability family.',
  },
  {
    repo: 'kedro-org/kedro-viz',
    url: 'https://github.com/kedro-org/kedro-viz',
    what: 'The React visualisation tool',
    prs: 35,
    commits: 487,
    detail:
      'Flowchart model decomposition, DataCatalog 2.0 lazy loading, modular pipeline expansion, and the Redux preferences layer.',
  },
  {
    repo: 'kedro-org/kedro-starters',
    url: 'https://github.com/kedro-org/kedro-starters',
    what: 'Project templates',
    prs: 17,
    commits: 57,
    detail:
      'The spaceflights, pyspark-iris and databricks-iris starters — including the canonical “initialise Spark via hooks” pattern.',
  },
  {
    repo: 'kedro-org/vscode-kedro',
    url: 'https://github.com/kedro-org/vscode-kedro',
    what: 'The editor extension',
    prs: 9,
    commits: 74,
    detail:
      'Refactored the Python language-server validation architecture into a pluggable validator package with live catalog diagnostics.',
  },
  {
    repo: 'kedro-org/kedro-academy',
    url: 'https://github.com/kedro-org/kedro-academy',
    what: 'Teaching material',
    prs: 3,
    commits: 2,
    detail: 'Observability provider as an environment switch, and evaluation-pipeline training content.',
  },
] as const;

/** Case studies. `slug` maps to /work/<slug>. */
export const work = [
  {
    slug: 'kep-10-dataset-validation',
    index: '01',
    title: 'Catalog-native dataset validation',
    kicker: 'KEP-10 · Kedro Enhancement Proposal',
    summary:
      'Authored and shepherded a formal enhancement proposal through community review, a withdrawal, a redesign, and a Technical Steering Committee vote — then built it.',
    year: '2026',
    tags: ['Python', 'API design', 'Pandera', 'Technical governance'],
    headline: 'Accepted by TSC vote',
  },
  {
    slug: 'spark-dataset-v2',
    index: '02',
    title: 'Rewriting Kedro’s Spark dataset',
    kicker: 'kedro-plugins #1185',
    summary:
      'A ground-up replacement for the most load-bearing dataset in the ecosystem, adding Spark Connect support and untangling a decade of Databricks path handling.',
    year: '2025',
    tags: ['PySpark', 'Databricks', 'Spark Connect', 'Migration'],
    headline: '+1,956 lines, zero breaking changes',
  },
  {
    slug: 'parameter-validation',
    index: '03',
    title: 'Type-hint parameter validation',
    kicker: 'Shipped in Kedro 1.3.0',
    summary:
      'A validation subsystem that reads the type hints already on your node functions and turns them into runtime guarantees — delivered as six reviewable pull requests.',
    year: '2026',
    tags: ['Python', 'Pydantic', 'Type systems', 'Incremental delivery'],
    headline: 'In every Kedro install since 1.3.0',
  },
  {
    slug: 'llm-observability-datasets',
    index: '04',
    title: 'Observability for LLM pipelines',
    kicker: 'Langfuse · Opik · AutoGen',
    summary:
      'The tracing and evaluation datasets that let a Kedro pipeline emit LLM telemetry the same way it writes a Parquet file — plus an MCP server that answers questions about Kedro itself.',
    year: '2025–26',
    tags: ['LLM observability', 'OpenTelemetry', 'MCP', 'RAG'],
    headline: '~3,400 lines across two providers',
  },
] as const;

/** Talks, streams and community. */
export const talks = [
  {
    title: 'Dataset Validation is coming to Kedro',
    venue: 'Kedro Coffee Chat',
    date: '2026-08-07',
    dateLabel: 'August 2026',
    status: 'upcoming',
    detail:
      'Presenting the KEP-10 design and a live before/after demo: a supplier feed with a duplicate ID, a malformed rating and an invalid flag, caught at the I/O boundary instead of deep inside a node.',
    url: 'https://www.youtube.com/@kedro-python/streams',
  },
  {
    title: 'Kedro: The Toolbox for Production-Ready Data Pipelines',
    venue: 'GOSIM Paris 2026 · Station F',
    date: '2026-05-05',
    dateLabel: 'May 2026',
    status: 'past',
    detail:
      'Invited talk at the Own Your Data Science & AI Workshop, hosted by scikit-learn, Probabl and Fraunhofer IAIS.',
    url: 'https://paris2026.gosim.org/speakers/sajid-alam/',
  },
  {
    title: 'GraphRAG with Kedro',
    venue: 'Kedro Coffee Chat · with Laura Couto',
    date: '2026-06-01',
    dateLabel: 'June 2026',
    status: 'past',
    detail:
      'On GraphRAG, agents, and the unglamorous pipeline work that makes agentic systems reproducible. The most-watched Coffee Chat of the series.',
    url: 'https://www.youtube.com/@kedro-python/streams',
  },
  {
    title: 'Host, Kedro Coffee Chats',
    venue: 'Kedro community livestream',
    date: '2026-01-01',
    dateLabel: '2026 — present',
    status: 'ongoing',
    detail:
      'Took over hosting the community’s public technical stream: booking speakers, shaping each session, and running the broadcast. Recent episodes have covered the Data Catalog, spec-driven development, Kedro in VS Code, and evaluation pipelines with Langfuse.',
    url: 'https://www.youtube.com/@kedro-python/streams',
  },
] as const;

/** Releases cut personally. Trust signal: you don't get the keys by accident. */
export const releases = [
  { project: 'kedro', versions: ['0.17.7', '0.18.12', '0.19.2', '1.3.0', '1.3.1'] },
  { project: 'kedro-viz', versions: ['9.2.0', '10.2.0'] },
  { project: 'vscode-kedro', versions: ['0.6.0', '0.7.0'] },
] as const;

export const education = [
  {
    qualification: 'MSc Artificial Intelligence',
    institution: 'Queen Mary University of London',
    period: '2020 – 2021',
    result: 'Merit',
    note: 'QuantumBlack & UK Office for AI scholarship recipient.',
  },
  {
    qualification: 'BSc Computer Science with Industrial Experience',
    institution: 'Queen Mary University of London',
    period: '2016 – 2020',
    result: 'First Class Honours',
    note: 'Industrial placement as a Software Engineer Intern at McAfee, on the Data Loss Prevention team.',
  },
] as const;

export const publication = {
  title: 'Rolling Horizon NEAT for General Video Game Playing',
  authors: 'Diego Perez-Liebana, Muhammad Sajid Alam, Raluca D. Gaina',
  venue: 'IEEE Conference on Games (CoG)',
  year: '2020',
  arxiv: 'https://arxiv.org/abs/2005.06764',
  doi: 'https://doi.org/10.1109/CoG47356.2020.9231606',
  summary:
    'A statistical forward-planning method that evolves the weights and topology of a neural network in real time, mid-game, rather than evolving a sequence of actions. Evaluated across 20 GVGAI games; it set new state-of-the-art records on games that other planning methods had consistently struggled with.',
};
