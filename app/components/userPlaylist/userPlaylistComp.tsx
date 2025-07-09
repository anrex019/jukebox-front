import styles from "./userPlaylist.module.scss"
import { useState } from "react";

type userPlaylistProps = {
    image: string;
    title: string;
}

export default function UserPlaylist({image, title}: userPlaylistProps ) {

    const [showPopup, setShowPopup] = useState(false);
    const [showInnerPopup, setShowInnerPopup] = useState(false);
    const [showSecondPopup, setShowSecondPopup] = useState(false);


    return(
        <>
        <div className={styles.jail}>
            <img className={styles.image} src={image}></img>
            <div className={styles.hoverImg}>
            <img className={styles.play} src="/playButton.svg"></img>
            <img onClick={() => setShowPopup((prev) => !prev)} className={styles.threeDots} src="/threeDots.png"></img>
            </div>
                {showPopup && (
        <div className={styles.popup}>
            <div onClick={() => {
                setShowInnerPopup(true);
                setShowSecondPopup(false);
                setShowPopup(false);
            }} className={styles.playlist}>
                
            <img src="/addToPlaylist.png" />
            <p>Add To Playlist</p>
            </div>
            <div onClick={() => {
                setShowSecondPopup(true);
                setShowInnerPopup(false);
                setShowPopup(false);
            }}  className={styles.trash}>
            <img src="/trash.png" />
            <p>Delete</p>
            </div>
            </div>)}
            <h3 className={styles.title}>{title}</h3>
            </div>
            {showInnerPopup && (
                    <div className={styles.innerPopup}>
                        <div className={styles.popupHeader}>
                        <h2 className={styles.create}>Create Playlist</h2>
                        <img onClick={() => setShowInnerPopup(false)} src="/close.svg" />
                        </div>
                        <div className={styles.inputAndTitle}>
                        <p className={styles.playlistTitle}>Playlist Title:</p>
                        <input type="text" placeholder="Filter Playlist" className={styles.input} />
                        </div>
                        <div className={styles.buttons}>
                            <button onClick={() => setShowInnerPopup(false)} className={styles.notNow}>Not Now</button>
                            <button className={styles.createBtn}>Create</button>
                        </div>
                        </div>
                )}
            {showSecondPopup && (
                <div className={[styles.innerPopup, styles.secondPopup].join(" ")}>
                    <img className={styles.warning} src="/warning.svg" />
                    <p className={styles.playlistTitle}>Are you sure you want to delete this Chart?</p>
                    <div className={styles.buttons}>
                        <button onClick={() => setShowSecondPopup(false)} className={styles.notNow}>No</button>
                        <button className={styles.createBtn}>Yes</button>
                    </div>
                </div>
            )}
        </>
    )
}