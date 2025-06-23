'use client';
import styles from './TopBanner.module.scss';

const TopBanner = () => {
  const handlePlay = () => {
    console.log("Clicked Play!");
  };

  return (
    <section className={styles.banner}>
  <div className={styles.inner}>
    <div className={styles.content}>
      <h1 className={styles.title}>Top 100 Song For Drive</h1>
      <div className={styles.listeners}>
        <img src="/topbannerimg/headphone.svg" alt="Headphones" />
        <span className={styles.number}>71,478,078</span>
        <span className={styles.text}>Weekly Listener</span>
      </div>
      <button className={styles.playButton} onClick={handlePlay}>
        <span className={styles.playText}>Play</span>
        <span className={styles.playIcon}>
          <img src="/topbannerimg/play.svg" alt="Play" />
        </span>
      </button>
    
    </div>
    <div className={styles.dots}>
      <img src="/topbannerimg/dot1.png" alt="dot" />
      <img src="/topbannerimg/dot2.png" alt="dot" />
      <img src="/topbannerimg/dot3.png" alt="dot" />
      <img src="/topbannerimg/dot4.png" alt="dot" />
      <img src="/topbannerimg/dot5.png" alt="dot" />
    </div>
 
  </div>
</section>
  );
};

export default TopBanner;