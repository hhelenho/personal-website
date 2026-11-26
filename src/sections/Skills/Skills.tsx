import styles from './SkillsStyles.module.css';
import Reveal from '../../common/Reveal';

const groups = [
  {
    label: 'Asset classes',
    items: ['Equity', 'Fixed Income', 'Structured Credit', 'Digital Assets & Crypto'],
  },
  {
    label: 'Product & design',
    items: ['Product ownership', 'Stakeholder alignment', 'KPI tracking', 'Requirements', 'Production releases', 'Figma prototyping', 'UX / UI design', 'AI-assisted prototyping'],
  },
  {
    label: 'Financial domain',
    items: ['Fund accounting', 'Valuation & P&L', 'Trade settlement', 'Reconciliation', 'Post-trade operations', 'Investor reporting', 'Treasury', 'Financial services technology'],
  },
  {
    label: 'AI & engineering',
    items: ['LLM APIs', 'Prompt-based prototyping', 'Playwright', 'E2E & cross-browser testing', 'React', 'JavaScript', 'Python', 'Java', 'SQL', 'AWS (Textract, A2I)', 'Docker', 'Git', 'Power BI', 'MongoDB Atlas', 'Bloomberg API'],
  },
];

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <Reveal>
        <h2 className="sectionTitle">Skills</h2>
      </Reveal>
      <div className={styles.groups}>
        {groups.map((group, gi) => (
          <Reveal key={group.label} delay={gi * 120}>
            <div className={styles.group}>
              <h3 className={styles.label}>{group.label}</h3>
              <ul className={styles.chips}>
                {group.items.map((item, i) => (
                  <li key={item} className={styles.chip} style={{ animationDelay: `${i * 40}ms` }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Skills;
