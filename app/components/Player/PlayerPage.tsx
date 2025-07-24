'use client'
import styles from "./PlayerPage.module.scss";
import { useAudioHook } from "@/Hooks/useAudioHook";
import Image from "next/image";
import { musicPropsInterface } from "./interface/music-props.interface";
import { useState } from "react";

const songs = [
  {
    id: 1,
    artistName: "Star Boy",
    songName: "The Weeknd",
    image: "/starBoyPopup.png",
    music: "/TheWeeknd.mp3",
  },
  {
    id: 2,
    artistName: "West Side",
    songName: "Tupac",
    image: "/tupacPopup.png",
    music: "/2Pac.mp3",
  },
  {
    id: 3,
    artistName: "Steel D.R.E",
    songName: "Snoop dog",
    image: "/snoopdogPopup.png",
    music: "/SnoopDog.mp3",
  },
  {
    id: 4,
    artistName: "Without me",
    songName: "Eminem",
    image: "/eminemPopup.png",
    music: "/Eminem.mp3",
  },
];

const PlayerPage = () => {
  const {
    audioRef,
    currentSong,
    progress,
    click,
    currentTime,
    duration,
    isRandom,
    isRepeat,
    musicClick,
    progressChange,
    nextSong,
    previousSong,
    formatTime,
    toggleRandom,
    toggleRepeat,
  } = useAudioHook(songs);

  if (!currentSong) {
    return <div>No songs available</div>;
  }

  const [showPopup, setShowPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);
  const [selectedMusicId, setSelectedMusicId] = useState<number | null>(null);
  const [musicList, setMusicList] = useState(musicPropsInterface);
  const [popupMusicId, setPopupMusicId] = useState<number | null>(null);

  return (
    <>
    <div className={styles.center}>
        <div key={currentSong.id} className={styles.container}>
        <audio ref={audioRef} preload="metadata" />
        <div className={styles.headerContainer}>
          <Image
            className={styles.backStyle}
            src="/back.svg"
            alt="photo"
            width={24}
            height={24}
          />
          <div className={styles.artistNameAndSong}>
            <p className={styles.artistNameStyle}>{currentSong.artistName}</p>
            <p className={styles.songnameStyle}>{currentSong.songName}</p>
          </div>
          <Image
            className={styles.showMoreStyle}
            src="/showMore.svg"
            alt="photo"
            width={24}
            height={24}
          />
        </div>
        <Image className={styles.imageStyles} src={currentSong.image} alt="photo" width={696} height={456} />
        <div className={styles.rangeContainer}>
          <p className={`${styles.time} ${styles.timeMobile}`}>{formatTime(currentTime)}</p>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={progressChange}
            className={styles.rangeStyleContainer}
            style={{
              background: `linear-gradient(to right, #A50F46 ${progress}%, #ccc ${progress}%)`,
            }}
          />
          <p className={styles.time}>{formatTime(duration)}</p>
        </div>
        <div className={styles.musicControlStyle}>
          <Image
            className={styles.imgStyle}
            src={isRandom ? "/Rendom.svg" : "Rendom-on.svg"}
            alt="random"
            width={48}
            height={48}
            onClick={toggleRandom}
          />
          <Image
            className={styles.imgStyle}
            src="LeftMusic.svg"
            alt="photo"
            onClick={previousSong}
            width={48}
            height={48}
          />
          <Image
            className={styles.imgStyle}
            src={click ? "Paus.svg" : "Play.svg"}
            alt="photo"
            onClick={musicClick}
            width={48}
            height={48}
          />
          <Image
            className={styles.imgStyle}
            src="RightMusic.svg"
            alt="photo"
            onClick={nextSong}
            width={48}
            height={48}
          />
          <Image
            className={styles.imgStyle}
            src={isRepeat ? "/Replay.svg" : "/Replay-on.svg"}
            alt="repeat"
            width={48}
            height={48}
            onClick={toggleRepeat}
          />
        </div>
        <div className={styles.listContainer}>
          {musicList.map((music) => (
            <div key={music.id} className={styles.listStyle}>
              <div className={styles.artistHistory}>
                <div className={styles.textStyleAndPhoto}>
                  <Image
                    className={styles.imgStyle}
                    src={music.image}
                    alt="Photo"
                    width={56}
                    height={56}
                  />
                  <div className={styles.textStyle}>
                    <p className={styles.gettingStyleText}>{music.title}</p>
                    <p className={styles.whiteTextStyle}>{music.artist}</p>
                  </div>
                </div>

                <div className={styles.timAndMoreStyleContainer}>
                  <p className={`${styles.time} ${styles.timeStyle}`}>
                    {formatTime(duration)}
                  </p>
                  <Image
                    className={styles.imgStyle}
                    onClick={() =>
                      setPopupMusicId((prev) =>
                        prev === music.id ? null : music.id
                      )
                    }
                    src="/more.svg"
                    alt="More"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
              {popupMusicId === music.id && (
                <div className={styles.popup}>
                  <div
                    onClick={() => {
                      setPopupMusicId(null);
                      setSelectedMusicId(music.id);
                      setShowSecondPopup(true);
                    }}
                    className={styles.trash}
                  >
                    <Image
                      src="/trash.png"
                      alt="Trash"
                      width={20}
                      height={20}
                    />
                    <p className={styles.deleteStyleText}>Delete</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {showPopup && (
          <div className={styles.popup}>
            <div
              onClick={() => {
                setShowPopup(false);
                setShowSecondPopup(true);
              }}
              className={styles.trash}
            >
              <Image src="/trash.png" alt="Trash" width={24} height={24} />
              <p>Delete</p>
            </div>
          </div>
        )}

        {showSecondPopup && (
          <div className={`${styles.innerPopup} ${styles.secondPopup}`}>
            <Image
              className={styles.warning}
              src="/warning.svg"
              alt="Warning"
              width={32}
              height={32}
            />
            <p className={styles.playlistTitle}>
              Are you sure you want to delete this song?
            </p>
            <div className={styles.buttons}>
              <button
                onClick={() => {
                  setShowSecondPopup(false);
                  setSelectedMusicId(null);
                }}
                className={styles.notNow}
              >
                No
              </button>
              <button
                className={styles.createBtn}
                onClick={() => {
                  if (selectedMusicId !== null) {
                    setMusicList((prev) =>
                      prev.filter((item) => item.id !== selectedMusicId)
                    );
                  }
                  setShowSecondPopup(false);
                  setSelectedMusicId(null);
                }}
              >
                Yes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
      
    </>
  );
};
export default PlayerPage;
