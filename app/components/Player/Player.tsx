import { useState } from 'react';
import styles from './Player.module.scss';
import Image from 'next/image';

const Player = () => {
    const [progress, setProgress] = useState(30);
    const [volume, setVolume] = useState(50);

    return (
        <div className={styles.container}>
            <div className={styles.artistContainer}>
                <div className={styles.artistCardContainer}>
                    <img className={styles.imgStyle} src="StarBoy.png" alt="photo" />
                    <div className={styles.artistNameContainer}>
                        <div className={styles.artistNameImageContainer}>
                            <p className={styles.artistName}>Star Boy</p>
                            <img src="Talga.svg" alt="photo" />
                        </div>
                        <p className={styles.artistGroupName}>The Weeknd</p>
                    </div>
                </div>
                <div className={styles.musicControlContainer}>
                    <img className={styles.imgStyle} src="Rendom.svg" alt="photo" />
                    <img className={styles.imgStyle} src="Restart.svg" alt="photo" />
                </div>
            </div>
            <div className={styles.controlMusicPlay}>
                <div className={styles.playAndPausContainer}>
                    <img className={styles.imgStyle} src="Left.svg" alt="photo" />
                    <img className={styles.imgStyle} src="LeftMusic.svg" alt="photo" />
                    <img className={styles.imgStyle} src="Paus.svg" alt="photo" />
                    <img className={styles.imgStyle} src="RightMusic.svg" alt="photo" />
                    <img className={styles.imgStyle} src="Right.svg" alt="photo" />
                </div>
                <div className={styles.rangeContainer}>
                    
                </div>
            </div>
            <div className={styles.voisContainer}>
                <div className={styles.favouriteAndVoisContainer}>
                    <img className={styles.imgStyle} src="Favorit.svg" alt="photo" />
                    <img className={styles.imgStyle} src="Vois.svg" alt="photo" />
                </div>
                <input type='range'
                    min="0"
                    max="100"
                    value={progress}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className={styles.rangeVoisContainer}
                    style={{
                        background: `linear-gradient(to right, #A50F46 ${volume}%, #ccc ${volume}%)`
                    }} />
            </div>
        </div>
    )
}
export default Player;