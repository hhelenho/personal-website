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
      'Own the centralized pricing portal, replacing fragmented price checks across multiple sources; grew usage 40% and detected stale prices 2–3 days earlier.',
      'Built an LLM-powered assistant that lets non-technical users work through trade breaks in plain English using on-screen filters, cutting investigation time by 70%.',
      'Built a dashboard tracking investor reporting requirements, replacing manual Excel exports and comparisons and reducing month-end reporting by 3 hours per month.',
      'Product owner for pricing and P&L valuation systems: triage stale prices and exceptions with the valuation team, and drive fixes through UAT to production to protect end-of-day NAV.',
      'Tested and debugged the operations trading reconciliation report, enabling reconciliation of new asset classes, including structured credit and digital assets.',
      'Lead ETL workflows and pipeline architecture for operational trading products across fund accounting, treasury, and P&L platforms.',
    ],
  },
  {
    title: 'Product Management Intern, Accounting & Valuation Technology',
    org: 'Schonfeld Strategic Advisors',
    location: 'New York, NY',
    dates: 'Jun 2024 – Aug 2024',
    points: [
      'Facilitated cross-team requirements sessions with fund accounting, operations, and engineering to align on a unified accounting data pipeline.',
      'Designed an intermediary CRM UI in Figma before a vendor CRM cutover, and built an intake system on the ChatGPT LLM API that reached 80% accuracy on investor tax data, versus about 40% for AWS Textract.',
    ],
  },
  {
    title: 'Business Analytics Intern, Intelligence Technology',
    org: 'Point72 Asset Management',
    location: 'Stamford, CT',
    dates: 'Jun 2023 – Aug 2023',
    points: [
      'Shipped an LLM summarization pipeline to production for industry announcements, pairing sentiment with trade-volume signals for three PM desks.',
      'Prototyped a sentiment surveillance tool in Figma, then built pricing and surveillance dashboards in React, iterating with users before the production build.',
      'Built and presented an NLP-based compliance workflow to senior compliance and technology stakeholders.',
    ],
  },
  {
    title: 'Accounting & Corporate Finance Intern',
    org: 'Acres Capital',
    location: 'New York, NY',
    dates: 'May 2022 – Aug 2022',
    points: [
      'Built accounting models for reporting and reconciliation, and prepared quarterly management reports and capital allocation summaries for senior leadership.',
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
      <Reveal>
        <div className={styles.education}>
          <p className={styles.dates}>Aug 2021 – May 2025</p>
          <h3>B.S. in Finance, Double Major in Computer Science</h3>
          <p className={styles.org}>New York University · New York, NY</p>
        </div>
      </Reveal>
    </section>
  );
}

export default Experience;
