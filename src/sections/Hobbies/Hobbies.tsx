import styles from './HobbiesStyles.module.css';
import Reveal from '../../common/Reveal';
import { photos, placeholderCount } from './photos';

const placeholders = Array.from({ length: placeholderCount }, (_, i) => i);

function Hobbies() {
  return (
    <section id="hobbies" className={styles.container}>
      <Reveal>
        <h2 className="sectionTitle">Running</h2>
      </Reveal>

      <Reveal delay={100}>
        <div className={styles.intro}>
          <p className={styles.lead}>
            Running is how I reset. I'm currently training for my next major NYC Marathon, one long run at a time.
          </p>
        </div>
      </Reveal>

      <Reveal delay={200}>
        <div className={styles.strip} role="list" aria-label="Running photos">
          {photos.length > 0
            ? photos.map((photo) => (
                <figure key={photo.src} className={styles.tile} role="listitem">
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                  {photo.caption && <figcaption>{photo.caption}</figcaption>}
                </figure>
              ))
            : placeholders.map((i) => (
                <figure key={i} className={`${styles.tile} ${styles.placeholder}`} role="listitem">
                  <span>Photo coming soon</span>
                </figure>
              ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Hobbies;
