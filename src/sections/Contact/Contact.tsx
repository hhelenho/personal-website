import styles from './ContactStyles.module.css';
import CV from '../../assets/cv.pdf';
import Reveal from '../../common/Reveal';

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <Reveal>
        <h2 className="sectionTitle">Let's talk</h2>
      </Reveal>
      <Reveal delay={100}>
        <p className={styles.lead}>
          I design financial products and enterprise platforms, and I'm always glad to talk about the work,
          whether that's a role, a project, or a problem you're trying to solve.
        </p>
      </Reveal>
      <Reveal delay={200}>
        <div className={styles.actions}>
          <a className={styles.primary} href="mailto:hth2016@stern.nyu.edu">
            hth2016@stern.nyu.edu
          </a>
          <a className={styles.secondary} href={CV} download>
            Download resume
          </a>
        </div>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/hhelenho/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/hhelenho" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export default Contact;
