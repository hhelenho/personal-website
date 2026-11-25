import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';
import Reveal from '../../common/Reveal';

const projects = [
  {
    tag: 'Post-trade',
    title: 'Trade settlement reporting',
    description:
      'Took open trade settlement reporting from requirements to production, flagging fails and aging breaks across equities, fixed income, structured credit, and digital assets.',
  },
  {
    tag: 'Valuation',
    title: 'Pricing and P&L valuation',
    description:
      'Own product requirements for pricing and valuation workflows, working with the valuation team and engineers through UAT to ship fixes that protect end-of-day NAV.',
  },
  {
    tag: 'AI assistant',
    title: 'Trade break investigation assistant',
    description:
      'Built a chat assistant that lets non-technical users investigate trade breaks in plain English, using the screen and data filters they already have open instead of writing database queries. It saves investigation context as they work through each break.',
  },
  {
    tag: 'Intake automation',
    title: 'Document intake pipeline',
    description:
      'Scoped an investor relations use case, then designed and delivered an AWS Textract and Augmented AI solution from discovery through a working product.',
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
          <Reveal key={project.title} delay={i % 2 === 0 ? 0 : 120}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;
