import { useState } from 'react';
import styles from './AIStyles.module.css';
import Reveal from '../../common/Reveal';

interface FocusArea {
  id: string;
  label: string;
  title: string;
  summary: string;
  approach?: string[];
}

const focusAreas: FocusArea[] = [
  {
    id: 'agentic',
    label: 'Agentic architecture',
    title: 'Designing for governed, multi-step agents',
    summary:
      'I am designing toward agentic systems with three layers: an orchestration layer that breaks work into steps, a governance layer for agent access, guardrails, and traceability, and evaluation that measures reliability before anything reaches production. Agent-to-agent protocols such as A2A are emerging for coordinating work across vendors.',
  },
  {
    id: 'testing',
    label: 'Browser testing',
    title: 'Testing UI behavior before release',
    summary:
      'I use Playwright to test UI flows and explore unexpected behavior before a release reaches production. Playwright is the standard for reliable browser tests, and AI agents now help draft them.',
    approach: [
      'Explore unexpected UI behavior with Playwright before release, and record each finding as a reproducible case.',
      'Treat AI-generated tests as drafts: review assertions and self-healed selectors before they run in CI.',
      'Prefer role-based locators and auto-waiting assertions, so tests follow what users see.',
    ],
  },
  {
    id: 'debugging',
    label: 'Debugging with Claude',
    title: 'Debugging production code with engineers',
    summary:
      'I use Claude to help engineers on production code. AI debugging works best as decision support: it traces failing paths and proposes fixes, while engineers verify every change before it ships.',
    approach: [
      'Work with engineers in Claude to trace failing code paths, reproduce issues, and review proposed fixes.',
      'Keep a person approving every suggested change, since AI-generated code still surfaces production bugs.',
      'Turn each confirmed root cause into a test, so the same failure is caught earlier next time.',
      'Put observability first: AI is only as useful as the traces, logs, and metrics it can read.',
    ],
  },
  {
    id: 'llm',
    label: 'LLM integration',
    title: 'An LLM layer for research workflows',
    summary:
      'Enterprise LLM features need more than a model call. The goal is a managed layer that routes requests, traces them, and controls cost and risk.',
    approach: [
      'Leverage an LLM API layer on top of existing operations platforms to enhance research, so users ask plain-language questions instead of writing queries.',
      'The trade break investigation assistant saves at least 2–3 working hours on break research and communication.',
      'Route LLM traffic through a gateway with tracing, budgets, and guardrails before wider rollout.',
    ],
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
            <p>{active.summary}</p>
            {active.approach && (
              <div className={styles.block}>
                <h4 className={styles.blockLabel}>Approach</h4>
                <ul className={styles.list}>
                  {active.approach.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default AISection;
