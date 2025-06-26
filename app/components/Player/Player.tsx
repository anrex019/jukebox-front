import styles from "./Player.module.scss";
import Image from "next/image";
import { useAudioHook } from "../../Hooks/useAudioHook"; 

const songs = [
  {
    id: 1,
    artistName: "Star Boy",
    songName: "The Weeknd",
    image: "/Starboy.png",
    music: "/TheWeeknd.mp3",
  },
  {
    id: 2,
    artistName: "West Side",
    songName: "Tupac",
    image: "/TuPac.png",
    music: "/2Pac.mp3",
  },
  {
    id: 3,
    artistName: "Steel D.R.E",
    songName: "Snoop dog",
    image: "/SnoopDog.png",
    music: "/SnoopDog.mp3",
  },
  {
    id: 4,
    artistName: "Without me",
    songName: "Eminem",
    image: "/Eminem.png",
    music: "/Eminem.mp3",
  }
];

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
    musicClick,
    muteImageClick,
    volumeChange,
    progressChange,
    nextSong,
    previousSong,
    formatTime,
  } = useAudioHook(songs);

  if (!currentSong) {
    return <div>No songs available</div>;
  }

  return (
    <>
      <div key={currentSong.id} className={styles.container}>
        <audio
          ref={audioRef}
          preload="metadata"
          onLoadStart={() => console.log("Audio loading started")}
          onCanPlay={() => console.log("Audio can play")}
          onError={(e) => console.log("Audio loading error:", e)}
        />
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
                <img src="Talga.svg" alt="photo" />
              </div>
              <p className={styles.artistGroupName}>{currentSong.songName}</p>
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
            <img
              className={styles.imgStyle}
              src="LeftMusic.svg"
              alt="photo"
              onClick={previousSong}
            />
            <img
              className={styles.imgStyle}
              src={click ? "Paus.svg" : "Play.svg"}
              alt="photo"
              onClick={musicClick}
            />
            <img
              className={styles.imgStyle}
              src="RightMusic.svg"
              alt="photo"
              onClick={nextSong}
            />
            <img className={styles.imgStyle} src="Right.svg" alt="photo" />
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
            <img
              className={styles.imgStyle}
              src={muteClicked ? "Mute.svg" : "Vois.svg"}
              alt="photo"
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
      </div>
    </>
  );
};

export default Player;