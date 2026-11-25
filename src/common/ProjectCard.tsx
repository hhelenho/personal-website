import React from 'react';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  tag: string;
  title: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ tag, title, description }) => {
  return (
    <article className={styles.card}>
      <span className={styles.tag}>{tag}</span>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default ProjectCard;
