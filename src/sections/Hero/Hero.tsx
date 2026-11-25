import { useEffect, useRef } from 'react';
import styles from './HeroStyles.module.css';
import headshot from '../../assets/headshot.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/useTheme';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const photoRef = useRef<HTMLDivElement>(null);

  const themeIcon = theme === 'light' ? sun : moon;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Gentle parallax on the headshot as the hero scrolls away.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      if (photoRef.current) {
        const y = Math.min(window.scrollY, window.innerHeight) * 0.12;
        photoRef.current.style.transform = `translateY(${y}px)`;
      }
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.intro}>
        <p className={styles.eyebrow}>New York, NY</p>
        <h1 className={styles.name}>
          {'Helen Ho'.split('').map((letter, i) => (
            <span key={i} className={styles.letter} style={{ animationDelay: `${i * 60}ms` }}>
              {letter === ' ' ? ' ' : letter}
            </span>
          ))}
        </h1>
        <h2 className={styles.role}>Product Designer</h2>
        <p className={styles.tagline}>
          I design financial products and enterprise platforms that scale, bridging fund accounting,
          trading operations, and engineering so back-office workflows become tools people trust.
        </p>
        <ul className={styles.chips} aria-label="Focus areas">
          <li>Financial products</li>
          <li>Enterprise platforms</li>
          <li>AI-assisted workflows</li>
        </ul>
        <div className={styles.actions}>
          <a className={styles.primary} href={CV} download>
            Download resume
          </a>
          <a className={styles.secondary} href="mailto:hth2016@stern.nyu.edu">
            Get in touch
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://github.com/hhelenho" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/hhelenho/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
        </div>
      </div>
      <div className={styles.media}>
        <div ref={photoRef} className={styles.photoWrap}>
          <img src={headshot} className={styles.headshot} alt="Profile picture of Helen Ho" />
        </div>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Toggle color mode"
          onClick={toggleTheme}
        />
      </div>
      <a href="#work" className={styles.scrollCue} aria-label="Scroll to selected work">
        <span>Scroll</span>
        <span className={styles.arrow} />
      </a>
    </section>
  );
}

export default Hero;
