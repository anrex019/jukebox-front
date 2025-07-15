import styles from "./musicCard.module.scss";
import Image from "next/image";

type MusicCardProps = {
  numeration: number;
  picture: string;
  name: string;
  artist: string;
  date: string | number | Date;
  duration: string;
};

export default function MusicCard({
  numeration,
  picture,
  name,
  artist,
  date,
  duration,
}: MusicCardProps) {
  return (
    <div className={styles.musicCard}>
      <div className={styles.musicCardDetails}>
        <h2 className={styles.number}>{numeration}</h2>
        <Image src={picture} alt="photo" width={56} height={56} />
        <div className={styles.nameAndAuthor}>
          <h2 className={styles.musicName}>{name}</h2>
          <p className={styles.artist}>{artist}</p>
        </div>
      </div>
      <p className={styles.date}>
        {typeof date === "string" || typeof date === "number"
          ? date
          : date.toLocaleDateString()}
      </p>
      <div className={styles.controls}>
        <Image className={styles.timeicon} src="/time.png" alt="photo" width={24} height={24} />
        <p className={styles.duration}>{duration}</p>
        <Image src="/threeDots.png" alt="photo" width={24} height={24} />
      </div>
    </div>
  );
}
