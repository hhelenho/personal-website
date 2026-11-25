import React, { useState } from 'react';
import styles from './ProjectCard.module.css';

interface ProjectDetails {
  problem: string;
  role: string;
}

interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
  impact: string;
  details?: ProjectDetails;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ tag, title, description, impact, details }) => {
  const [open, setOpen] = useState(false);

  return (
    <article className={styles.card}>
      <span className={styles.tag}>{tag}</span>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p className={styles.impact}>
        <span className={styles.impactLabel}>Impact</span>
        {impact}
      </p>
      {details && (
        <div className={styles.footer}>
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Hide details' : 'View details'}
            <span className={`${styles.icon} ${open ? styles.iconOpen : ''}`} aria-hidden="true">
              +
            </span>
          </button>
          {open && (
            <dl className={styles.details}>
              <dt>Problem</dt>
              <dd>{details.problem}</dd>
              <dt>My role</dt>
              <dd>{details.role}</dd>
            </dl>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
