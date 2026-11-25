import { useState } from 'react';
import styles from './AIStyles.module.css';
import Reveal from '../../common/Reveal';

const focusAreas = [
  {
    id: 'agentic',
    label: 'Agentic architecture',
    title: 'Designing for governed, multi-step agents',
    body: 'I am designing toward agentic systems with three layers: an orchestration layer that breaks work into steps, a governance layer for agent access, guardrails, and traceability, and evaluation that measures reliability before anything reaches production. Agent-to-agent protocols such as A2A are emerging for coordinating work across vendors.',
  },
  {
    id: 'testing',
    label: 'Browser testing',
    title: 'Exploring UI behavior before release',
    body: 'I use Playwright to test UI flows and explore unexpected behavior, surfacing problems before they reach production.',
  },
  {
    id: 'debugging',
    label: 'Debugging with Claude',
    title: 'Helping engineers on production code',
    body: 'I use Claude to debug and work through production code with engineers, from tracing a failing path to reviewing a proposed fix.',
  },
  {
    id: 'llm',
    label: 'LLM integration',
    title: 'Enhancing research with an LLM layer',
    body: 'I leverage an LLM API layer on top of existing operations platforms to enhance the research process, so users can investigate with plain-language questions instead of manual queries.',
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
          I'm most interested in applying AI to the work finance teams do every day: adding LLM capabilities
          to the platforms they already use, and building agentic systems that are governed and reliable in
          production.
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
