import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Reveal from '../../common/Reveal';

const projects = [
  {
    tag: 'Post-trade',
    title: 'Trade settlement reporting',
    description:
      'Took open trade settlement reporting from requirements to production, flagging fails and aging breaks across equities, fixed income, structured credit, and digital assets.',
    impact:
      'Moved reconciliation from T+1 to T0, so trade breaks surface and get triaged much sooner.',
    details: {
      problem: 'Fails and aging breaks across asset classes needed to be visible in one place, and only after T+1.',
      role: 'Product owner from requirements through testing with developers to production.',
    },
  },
  {
    tag: 'Valuation',
    title: 'Pricing and P&L valuation',
    description:
      'Own product requirements for pricing and valuation workflows, working with the valuation team and engineers to ship fixes that protect end-of-day NAV.',
    impact:
      'Stale-price analytics catch valuation breaks on average 4–5 days sooner than month-end.',
    details: {
      problem: 'Stale price marks and valuation exceptions were found late, putting end-of-day NAV at risk.',
      role: 'Product owner who triages exceptions with the valuation team and drives fixes through engineering to production.',
    },
  },
  {
    tag: 'AI assistant',
    title: 'Trade break investigation assistant',
    description:
      'Built a chat assistant that lets non-technical users investigate trade breaks in plain English, using the screen and data filters they already have open instead of writing database queries. It saves investigation context as they work through each break.',
    impact:
      'Saves at least 2–3 working hours on break research and communication by removing repeated context-setting and prompting.',
    details: {
      problem: 'Investigating a trade break meant writing database queries, which non-technical users could not do alone.',
      role: 'Designed the conversational flow and built the assistant to use the current screen and filters as context.',
    },
  },
  {
    tag: 'Intake automation',
    title: 'Document intake pipeline',
    description:
      'Scoped an investor relations use case, then designed and delivered an AWS Textract and Augmented AI solution from discovery through a working product.',
    impact:
      'Delivered a working document intake solution for investor relations, from discovery through to production.',
    details: {
      problem: 'An investor relations use case needed documents processed without manual entry.',
      role: 'Ran stakeholder discovery and took the AWS Textract and Augmented AI solution from concept to a working product.',
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
