import styles from './musicCard.module.scss';

type MusicCardProps = {
    numeration: number;
    picture: any;
    name: string;
    artist: string;
    date: any;
    duration: string;
}

export default function MusicCard({numeration, picture, name, artist, date, duration}: MusicCardProps) {
    return(
            <div className={styles.musicCard}>
                <div className={styles.musicCardDetails}>
                <h2 className={styles.number}>{numeration}</h2>
                <img src={picture} width={56} height={56}/>
                <div className={styles.nameAndAuthor}>
                <h2 className={styles.musicName}>{name}</h2>
                <p className={styles.artist}>{artist}</p>
                </div>
                </div>
                <p className={styles.date}>{date}</p>
                <div className={styles.controls}>
                <img className={styles.timeicon} src="/time.png"/>
                <p className={styles.duration}>{duration}</p>
                <img className={styles.heartIcon} src="/heart.png" />
                <img src="/threeDots.png" />
                </div>
            </div>
    )
}