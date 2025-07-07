import styles from "./userPlaylist.module.scss"
import { useState } from "react";

type userPlaylistProps = {
    image: string;
    title: string;
}

export default function UserPlaylist({image, title}: userPlaylistProps ) {

    const [showPopup, setShowPopup] = useState(false);


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
            <div className={styles.playlist}>
            <img src="/addToPlaylist.png" />
            <p>Add To Playlist</p>
            </div>
            <div className={styles.trash}>
            <img src="/trash.png" />
            <p>Delete</p>
            </div>
            </div>)}
            <h3 className={styles.title}>{title}</h3>
            </div>
            
        </>
    )
}