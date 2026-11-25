import { useEffect, useRef, useState } from 'react';
import styles from './ExperienceStyles.module.css';
import Reveal from '../../common/Reveal';

const roles = [
  {
    title: 'Product Analyst, Accounting & Valuation Technology',
    org: 'Schonfeld Strategic Advisors',
    location: 'New York, NY',
    dates: 'Jul 2025 – Present',
    points: [
      'Design and support ETL workflows and pipeline architecture for operational trading products across fund accounting, treasury, and P&L platforms.',
      'Own product requirements for pricing and P&L valuation systems, triaging stale marks and exceptions with the valuation team to protect end-of-day NAV.',
      'Act as primary technical contact between engineering, fund accounting, trading operations, and investor relations.',
      'Bring open trade settlement reporting to production across equities, fixed income, structured credit, and digital assets.',
    ],
  },
  {
    title: 'Product Management Intern, Accounting & Valuation Technology',
    org: 'Schonfeld Strategic Advisors',
    location: 'New York, NY',
    dates: 'Jun 2024 – Aug 2024',
    points: [
      'Aligned fund accounting, operations, and engineering stakeholders on a unified accounting data pipeline.',
      'Delivered an AWS Textract and Augmented AI solution end to end, from stakeholder discovery to a working product.',
    ],
  },
  {
    title: 'Business Analytics Intern, Intelligence Technology',
    org: 'Point72 Asset Management',
    location: 'Stamford, CT',
    dates: 'Jun 2023 – Aug 2023',
    points: [
      'Partnered with the options trading desk on workflows and pricing needs using Python and Bloomberg API analysis.',
      'Built and presented an NLP-based compliance workflow to compliance and technology leaders.',
    ],
  },
  {
    title: 'Accounting & Corporate Finance Intern',
    org: 'Acres Capital',
    location: 'New York, NY',
    dates: 'May 2022 – Aug 2022',
    points: [
      'Built accounting models for reporting and reconciliation and prepared quarterly management reports for senior leadership.',
    ],
  },
];

function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  // The timeline rail fills in step with scrolling through the list.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setProgress(1);
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const el = listRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const p = (window.innerHeight * 0.6 - rect.top) / rect.height;
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="experience" className={styles.container}>
      <Reveal>
        <h2 className="sectionTitle">Experience</h2>
      </Reveal>
      <div className={styles.timelineWrap}>
        <div className={styles.rail} aria-hidden="true">
          <div className={styles.railFill} style={{ transform: `scaleY(${progress})` }} />
        </div>
        <ol ref={listRef} className={styles.timeline}>
          {roles.map((role) => (
            <li key={`${role.title}-${role.dates}`} className={styles.item}>
              <Reveal>
                <div className={styles.meta}>
                  <p className={styles.dates}>{role.dates}</p>
                  <p className={styles.org}>
                    {role.org} · {role.location}
                  </p>
                </div>
                <div className={styles.body}>
                  <h3>{role.title}</h3>
                  <ul className={styles.points}>
                    {role.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Experience;
