import styles from './ClientsStyles.module.css';
import Reveal from '../../common/Reveal';

const stakeholders = [
  {
    title: 'Trading surveillance',
    body: 'Learned surveillance and compliance workflows at Point72, shipping an LLM summarization pipeline to production and presenting an NLP-based compliance workflow to senior stakeholders.',
  },
  {
    title: 'Investor relations',
    body: 'Designed an intermediary CRM UI in Figma and built an investor reporting dashboard that replaced manual month-end work.',
  },
  {
    title: 'Trading operations & P&L valuation',
    body: 'Own the centralized pricing portal and valuation exceptions with trading operations, catching stale prices earlier to protect end-of-day NAV.',
  },
  {
    title: 'Fund accounting & tax',
    body: 'Aligned fund accounting, operations, and engineering on one accounting data pipeline, and built an intake system that handles investor tax data.',
  },
];

function Clients() {
  return (
    <section id="clients" className={styles.container}>
      <Reveal>
        <h2 className="sectionTitle">Who I design for</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className={styles.lead}>
          My stakeholders are hedge funds and financial firms. I've learned their workflows and product needs
          across the front and back office, from trading surveillance to investor relations, trading
          operations, P&amp;L valuation, fund accounting, and tax.
        </p>
      </Reveal>
      <div className={styles.grid}>
        {stakeholders.map((s, i) => (
          <Reveal key={s.title} delay={i * 100} className={styles.cell}>
            <article className={styles.card}>
              <h3>{s.title}</h3>
              <p className={styles.body}>{s.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Clients;
