import styles from '../page.module.css';

type MusicCardProps = {
    numeration: number;
    picture: any;
    name: string;
    artist: string;
    date: string;
    duration: string;
}

export default function MusicCard({numeration, picture, name, artist, date, duration}: MusicCardProps) {
    return(
            <div className={styles.musicCard}>
                <div className={styles.musicCardDetails}>
                <h2 className={styles.number}>{numeration}</h2>
                <img src={picture} />
                <div className={styles.nameAndAuthor}>
                <h2 className={styles.musicName}>{name}</h2>
                <p className={styles.artist}>{artist}</p>
                </div>
                </div>
                <p className={styles.date}>{date}</p>
                <div className={styles.controls}>
                <img className={styles.timeicon} src="/time.png"/>
                <p className={styles.duration}>{duration}</p>
                <img className={styles.hearticon} src="/heart.png" />
                <img src="/threeDots.png" />
                </div>
            </div>
    )
}