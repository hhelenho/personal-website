import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Reveal from '../../common/Reveal';

const projects = [
  {
    tag: 'Valuation',
    title: 'Centralized pricing portal',
    description:
      'Own the centralized pricing portal, replacing fragmented price checks across multiple sources, and track feature KPIs to decide what to build next.',
    impact: 'Grew usage 40% and detected stale prices 2–3 days earlier.',
    details: {
      problem: 'Price checks were fragmented across multiple sources, which slowed down valuation work.',
      role: 'Product owner who prioritizes features by KPI and drives changes from requirements to production.',
    },
  },
  {
    tag: 'AI assistant',
    title: 'Trade break investigation assistant',
    description:
      'Built an LLM-powered assistant that lets non-technical users investigate trade breaks in plain English, using the on-screen filters they already have open.',
    impact:
      'Cut investigation time by 70%, saving 30–40 minutes per break versus waiting on cross-team answers.',
    details: {
      problem: 'Investigating a break meant waiting on cross-team answers or writing database queries.',
      role: 'Designed and built the assistant to use the current screen and filters as context.',
    },
  },
  {
    tag: 'Investor reporting',
    title: 'Investor reporting dashboard',
    description:
      'Built a dashboard tracking key investor reporting requirements, including ownership percentage by fund and management structure, and membership changes versus the prior month.',
    impact: 'Reduced month-end reporting by 3 hours per month by replacing manual Excel exports and comparisons.',
    details: {
      problem: 'Month-end investor reporting relied on manual Excel exports and comparisons.',
      role: 'Designed and built the dashboard around the investor reporting requirements.',
    },
  },
  {
    tag: 'Post-trade',
    title: 'Trade settlement reporting',
    description:
      'Took open trade settlement reporting from requirements to production, flagging fails and aging breaks across equities, fixed income, structured credit, and digital assets.',
    impact: 'Moved reconciliation from T+1 to T0, so trade breaks surface and get triaged much sooner.',
    details: {
      problem: 'Reconciliation needed to cover new asset classes, including structured credit and digital assets.',
      role: 'Tested and debugged the reconciliation report on jobs and ETL pipelines, then stress-tested scenarios with AI-assisted prototypes before build.',
    },
  },
  {
    tag: 'Intake automation',
    title: 'Investor document intake',
    description:
      'Designed an intake system that calls the ChatGPT LLM API to capture ad hoc investor PDFs and filings.',
    impact:
      'Reached 80% accuracy on investor tax data, versus about 40% for AWS Textract, so reviewers check only the remaining 20%.',
    details: {
      problem: 'Ad hoc investor PDFs and filings needed to be captured without manual entry.',
      role: 'Built the intake system and compared it against AWS Textract on investor tax data.',
    },
  },
  {
    tag: 'Surveillance',
    title: 'Industry announcement surveillance',
    description:
      'Shipped an LLM summarization pipeline for industry announcements, pairing sentiment with trade-volume signals, along with a compliance dashboard for non-technical reviewers.',
    impact: 'Moved to production for three PM desks to flag abnormal trading ahead of announcements.',
    details: {
      problem: 'Non-technical reviewers needed flagged announcements and trading signals in one place.',
      role: 'Prototyped the tool in Figma, built the dashboards in React, and iterated with users before the production build.',
    },
  },
];

function Projects() {
  return (
    <section id="work" className={styles.container}>
      <Reveal>
        <h2 className="sectionTitle">Selected Work</h2>
      </Reveal>
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={i % 2 === 0 ? 0 : 120} className={styles.cell}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
