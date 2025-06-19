'use client';
;

import styles from './AlbumCard.module.css';

type AlbumCardProps = {
  title: string;
  image: string;
  onClick?: () => void;
};

export function AlbumCard({ title, image, onClick }: AlbumCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.albumImage} />
        <div className={styles.overlay}>
          <button className={styles.playButton}>
            <img src="/icon/Music/Group.svg" alt="Play" />
          </button>
          <img src="/icon/interface/Group.svg" alt="More" className={styles.moreIcon} />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}