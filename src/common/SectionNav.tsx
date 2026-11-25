import { useEffect, useState } from 'react';
import styles from './SectionNav.module.css';

const sections = [
  { id: 'hero', label: 'Intro' },
  { id: 'work', label: 'Selected work' },
  { id: 'experience', label: 'Experience' },
  { id: 'hobbies', label: 'Running' },
  { id: 'skills', label: 'Skills' },
];

// Fixed dot navigation on the right edge that highlights the section in the middle of the screen.
function SectionNav() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.nav} aria-label="Page sections">
      <ul>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-label={label}
              aria-current={active === id ? 'true' : undefined}
              className={`${styles.dot} ${active === id ? styles.activeDot : ''}`}
            >
              <span className={styles.label}>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SectionNav;
