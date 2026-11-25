import { useState } from 'react';
import styles from './AIStyles.module.css';
import Reveal from '../../common/Reveal';

const focusAreas = [
  {
    id: 'automation',
    label: 'MCP & skills',
    title: 'Automating recurring workflows',
    body: 'I build MCP servers and skills that run recurring workflows across tools, so teams spend less time re-prompting the same steps by hand.',
  },
  {
    id: 'testing',
    label: 'Browser testing',
    title: 'Exploring UI and UAT edge cases',
    body: 'I use Playwright MCP to test UI flows and explore unexpected UAT behavior, surfacing problems before they reach users.',
  },
  {
    id: 'debugging',
    label: 'Debugging with Claude',
    title: 'Helping engineers on production code',
    body: 'I use Claude to debug and work through production code with engineers, from tracing a failing path to reviewing a proposed fix.',
  },
  {
    id: 'foundations',
    label: 'LLMs & RAG',
    title: 'Enhancing platforms with LLMs and RAG',
    body: 'I use LLM APIs to enhance enterprise platforms and workflows. In a full-stack app built on MongoDB Atlas vector search, I applied retrieval-augmented generation: documents are embedded, the passages most relevant to each question are retrieved, and the model answers from that retrieved context so responses stay tied to source data.',
  },
];

function AISection() {
  const [activeId, setActiveId] = useState(focusAreas[0].id);
  const active = focusAreas.find((area) => area.id === activeId) ?? focusAreas[0];

  return (
    <section id="ai" className={styles.container}>
      <Reveal>
        <h2 className="sectionTitle">AI &amp; Automation</h2>
      </Reveal>

      <Reveal delay={100}>
        <p className={styles.lead}>
          I'm most interested in applying AI to the everyday work of finance teams: moving from LLM
          prototypes to retrieval-grounded tools, then packaging them so recurring work runs with less
          manual prompting.
        </p>
      </Reveal>

      <Reveal delay={200}>
        <div className={styles.explorer}>
          <div className={styles.tabs} role="tablist" aria-label="AI focus areas">
            {focusAreas.map((area) => (
              <button
                key={area.id}
                type="button"
                role="tab"
                id={`ai-tab-${area.id}`}
                aria-selected={area.id === active.id}
                aria-controls="ai-panel"
                className={`${styles.tab} ${area.id === active.id ? styles.tabActive : ''}`}
                onClick={() => setActiveId(area.id)}
              >
                {area.label}
              </button>
            ))}
          </div>
          <div
            key={active.id}
            id="ai-panel"
            role="tabpanel"
            aria-labelledby={`ai-tab-${active.id}`}
            className={styles.panel}
          >
            <h3>{active.title}</h3>
            <p>{active.body}</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default AISection;
