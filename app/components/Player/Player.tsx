"use client";
import styles from "./Player.module.scss";
import Image from "next/image";
import { useAudioHook } from "../../Hooks/useAudioHook";
import { songs } from "./interface/songsProps.interface";

const Player = () => {
  const {
    audioRef,
    currentSong,
    progress,
    volume,
    muteClicked,
    click,
    currentTime,
    duration,
    isRandom,
    isRepeat,
    musicClick,
    muteImageClick,
    volumeChange,
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

  return (
    <>
      <div key={currentSong.id} className={styles.container}>
        <audio ref={audioRef} preload="metadata" />
        <div className={styles.artistContainer}>
          <div className={styles.artistCardContainer}>
            <Image
              className={styles.imgStyles}
              src={currentSong.image}
              alt="photo"
              width={74}
              height={74}
            />
            <div className={styles.artistNameContainer}>
              <div className={styles.artistNameImageContainer}>
                <p className={styles.artistName}>{currentSong.artistName}</p>
                <Image
                  className={styles.talgaStyle}
                  src="Talga.svg"
                  alt="photo"
                  width={24}
                  height={24}
                />
              </div>
              <p className={styles.artistGroupName}>{currentSong.songName}</p>
            </div>
          </div>
          <div className={styles.musicControlContainer}>
            <Image
              className={styles.imgStyle}
              src={isRandom ? "/Rendom.svg" : "Rendom-on.svg"}
              alt="random"
              width={24}
              height={24}
              onClick={toggleRandom}
            />
            <Image
              className={styles.imgStyle}
              src={isRepeat ? "/Replay.svg" : "/Replay-on.svg"}
              alt="repeat"
              width={24}
              height={24}
              onClick={toggleRepeat}
            />
          </div>
        </div>
        <div className={styles.controlMusicPlay}>
          <div className={styles.playAndPausContainer}>
            <Image
              className={styles.imgStyle}
              src="Left.svg"
              alt="photo"
              width={48}
              height={48}
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
              src="Right.svg"
              alt="photo"
              width={48}
              height={48}
            />
          </div>
          <div className={styles.rangeContainer}>
            <p className={styles.time}>{formatTime(currentTime)}</p>
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
        </div>
        <div className={styles.voisContainer}>
          <div
            className={styles.favouriteAndVoisContainer}
            onClick={muteImageClick}
          >
            <Image
              className={styles.imgStyle}
              src={muteClicked ? "Mute.svg" : "Vois.svg"}
              alt="photo"
              width={24}
              height={24}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={volumeChange}
            className={styles.rangeVoisContainer}
            style={{
              background: `linear-gradient(to right, #A50F46 ${volume}%, #ccc ${volume}%)`,
            }}
          />
        </div>
        <div className={styles.pausAndPlayStyle}>
          <Image
            className={styles.imgStyle}
            src={click ? "Paus.svg" : "Play.svg"}
            alt="photo"
            onClick={musicClick}
            width={48}
            height={48}
          />
        </div>
      </div>
    </>
  );
};

export default Player;
