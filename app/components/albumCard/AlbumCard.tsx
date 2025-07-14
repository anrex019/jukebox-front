'use client';
;
import styles from './AlbumCard.module.css';
import Image from 'next/image';

type AlbumCardProps = {
  title: string;
  image: string;
  onClick?: () => void;
};

export function AlbumCard({ title, image, onClick }: AlbumCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} className={styles.albumImage} width={226} height={195} />
        <div className={styles.overlay}>
          <button className={styles.playButton}>
            <Image src="/icon/Music/Group.svg" alt="Play" width={80} height={80} />
          </button>
          <Image src="/icon/interface/Group.svg" alt="More" className={styles.moreIcon} width={24} height={24} />
        </div>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default AlbumCard;