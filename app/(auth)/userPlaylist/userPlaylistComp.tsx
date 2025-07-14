import styles from "./userPlaylist.module.scss";
import { useState } from "react";
import Image from "next/image";
import { userPlaylistData } from "./dummy/userplaylist-dummy-data";

type userPlaylistProps = {
  image: string;
  title: string;
};

function UserPlaylist({ image, title }: userPlaylistProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [showInnerPopup, setShowInnerPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  return (
    <>
      <div className={styles.jail}>
        <Image className={styles.image} src={image} alt={title} width={226} height={195} />
        <div className={styles.hoverImg}>
          <Image
            className={styles.play}
            src="/playButton.svg"
            alt="photo"
            width={80}
            height={80}
          />
          <Image
            onClick={() => setShowPopup((prev) => !prev)}
            className={styles.threeDots}
            src="/threeDots.png"
            alt="photo"
            width={24}
            height={24}
          />
        </div>
        {showPopup && (
          <div className={styles.popup}>
            <div
              onClick={() => {
                setShowInnerPopup(true);
                setShowSecondPopup(false);
                setShowPopup(false);
              }}
              className={styles.playlist}
            >
              <Image
                src="/addToPlaylist.png"
                alt="photo"
                width={24}
                height={24}
              />
              <p>Add To Playlist</p>
            </div>
            <div
              onClick={() => {
                setShowSecondPopup(true);
                setShowInnerPopup(false);
                setShowPopup(false);
              }}
              className={styles.trash}
            >
              <Image src="/trash.png" alt="photo" width={24} height={24} />
              <p>Delete</p>
            </div>
          </div>
        )}
        <h3 className={styles.title}>{title}</h3>
      </div>
      {showInnerPopup && (
        <div className={styles.innerPopup}>
          <div className={styles.popupHeader}>
            <h2 className={styles.create}>Create Playlist</h2>
            <Image
              onClick={() => setShowInnerPopup(false)}
              src="/close.svg"
              alt="photo"
              width={40}
              height={40}
            />
          </div>
          <div className={styles.inputAndTitle}>
            <p className={styles.playlistTitle}>Playlist Title:</p>
            <input
              type="text"
              placeholder="Filter Playlist"
              className={styles.input}
            />
          </div>
          <div className={styles.buttons}>
            <button
              onClick={() => setShowInnerPopup(false)}
              className={styles.notNow}
            >
              Not Now
            </button>
            <button className={styles.createBtn}>Create</button>
          </div>
        </div>
      )}
      {showSecondPopup && (
        <div className={[styles.innerPopup, styles.secondPopup].join(" ")}>
          <Image
            className={styles.warning}
            src="/warning.svg"
            alt="photo"
            width={32}
            height={32}
          />
          <p className={styles.playlistTitle}>
            Are you sure you want to delete this Chart?
          </p>
          <div className={styles.buttons}>
            <button
              onClick={() => setShowSecondPopup(false)}
              className={styles.notNow}
            >
              No
            </button>
            <button className={styles.createBtn}>Yes</button>
          </div>
        </div>
      )}
    </>
  );
}
export default function UserPlaylistsList() {
  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <p className={styles.popularText}>Popular Album</p>
            <p className={styles.seeTextStyle}>See All</p>
        </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "11px" }}>
        {userPlaylistData.map((playlist, index) => (
          <UserPlaylist
            key={index}
            image={playlist.image}
            title={playlist.title}
          />
        ))}
      </div>
    </div>
  );
}
