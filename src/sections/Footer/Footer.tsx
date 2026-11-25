import styles from './FooterStyles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; {new Date().getFullYear()} Helen Ho. <br />
        All rights reserved.
      </p>
      <p className={styles.note}>
        Built with React and TypeScript, deployed to production on Netlify from GitHub.
      </p>
    </section>
  );
}

export default Footer;
