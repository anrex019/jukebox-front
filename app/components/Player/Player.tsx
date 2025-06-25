import { useRef, useState, useEffect } from "react";
import styles from "./Player.module.scss";
import Image from "next/image";

const songs = [
  {
    id: 1,
    artistName: "Petto",
    songName: "დაუგეგმავი",
    image: "/Petto.png",
    music: "/petto.mp3",
  },
];

const Player = () => {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [muteClicked, setMuteCliked] = useState(false);
  const [click, setClick] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      console.log("Audio ref is null!");
      return;
    }
    console.log("Audio ref loaded successfully:", audio);

    const updateProgress = () => {
      const current = audio.currentTime;
      const duration = audio.duration;
      setCurrentTime(current);
      if (duration && !isNaN(duration) && isFinite(duration)) {
        setProgress((current / duration) * 100);
      }
    };

    const updateDuration = () => {
      if (
        audio.duration &&
        !isNaN(audio.duration) &&
        isFinite(audio.duration)
      ) {
        setDuration(audio.duration);
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setClick(false);
      setProgress(0);
      setCurrentTime(0);
    };

    const handleError = (e) => {
      console.error("Audio loading error:", e);
      console.error("Error details:", audio.error);
    };

    const handleCanPlay = () => {
      console.log("Audio can play, duration:", audio.duration);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("durationchange", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("durationchange", updateDuration);
    };
  }, []);

  const musicClick = async () => {
    console.log("Music click triggered, audioRef.current:", audioRef.current);
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          await audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      } catch (error) {
        console.error("Error playing audio:", error);
      }
    } else {
      console.error("Audio ref is null in musicClick!");
    }
    setClick(!click);
  };

  const muteImageClick = () => {
    setMuteCliked(!muteClicked);
    if (audioRef.current) {
      audioRef.current.muted = !muteClicked;
    }
  };

  const volumeChange = (e) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const progressChange = (e) => {
    const newProgress = Number(e.target.value);
    setProgress(newProgress);
    if (
      audioRef.current &&
      duration &&
      !isNaN(duration) &&
      isFinite(duration)
    ) {
      const newTime = (newProgress / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  return (
    <>
      {songs.map((song) => (
        <div key={song.id} className={styles.container}>
          <audio
            src={song.music}
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
                src={song.image}
                alt="photo"
                width={74}
                height={74}
              />
              <div className={styles.artistNameContainer}>
                <div className={styles.artistNameImageContainer}>
                  <p className={styles.artistName}>{song.artistName}</p>
                  <img src="Talga.svg" alt="photo" />
                </div>
                <p className={styles.artistGroupName}>{song.songName}</p>
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
      ))}
    </>
  );
};
export default Player;