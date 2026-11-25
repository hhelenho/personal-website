import styles from './ClientsStyles.module.css';
import Reveal from '../../common/Reveal';

const stakeholders = [
  {
    title: 'Trading surveillance',
    body: 'Learned how surveillance and compliance teams work at Point72, then built an NLP-based compliance workflow and presented it to senior stakeholders.',
  },
  {
    title: 'Investor relations',
    body: 'Scoped investor relations needs for a document intake solution and took it from discovery to a working product.',
  },
  {
    title: 'Trading operations & P&L valuation',
    body: 'Own valuation exceptions and stale marks with trading operations, keeping P&L analytics reliable enough to protect end-of-day NAV.',
  },
  {
    title: 'Fund accounting & tax',
    body: 'Aligned fund accounting, operations, and engineering on one accounting data pipeline, and understand the tax workflows that sit alongside it.',
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
