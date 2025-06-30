import { useRef, useState, useEffect } from "react";

interface Song {
  id: number;
  artistName: string;
  songName: string;
  image: string;
  music: string;
}

interface UseAudioHookReturn {
  audioRef: React.RefObject<HTMLAudioElement>;
  currentSongIndex: number;
  currentSong: Song | null;
  isPlaying: boolean;
  progress: number;
  currentTime: number;
  duration: number;
  volume: number;
  muteClicked: boolean;
  click: boolean;
  isRandom: boolean;
  isRepeat: boolean;
  musicClick: () => void;
  muteImageClick: () => void;
  volumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  progressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextSong: () => void;
  previousSong: () => void;
  selectSong: (index: number) => void;
  formatTime: (time: number) => string;
  toggleRandom: () => void;
  toggleRepeat: () => void;
}

export const useAudioHook = (songs: Song[]): UseAudioHookReturn => {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [muteClicked, setMuteClicked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isRandom, setIsRandom] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [playedSongs, setPlayedSongs] = useState<number[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null!);

  const click = isPlaying;
  const currentSong = songs.length > 0 ? songs[currentSongIndex] : null;

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  const resetPlaybackState = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
  };

  useEffect(() => {
    audioRef.current
      .play()
      .then(() => {
        console.log("salai");
      })
      .catch((error) => {
        console.log("Error playing audio:", error);
      });
  }, []);

  const getRandomSongIndex = () => {
    if (songs.length <= 1) return 0;

    if (playedSongs.length >= songs.length - 1) {
      setPlayedSongs([currentSongIndex]);
    }

    const availableSongs = songs
      .map((_, index) => index)
      .filter(
        (index) => index !== currentSongIndex && !playedSongs.includes(index)
      );

    if (availableSongs.length === 0) {
      return (currentSongIndex + 1) % songs.length;
    }

    const randomIndex = Math.floor(Math.random() * availableSongs.length);
    const selectedSong = availableSongs[randomIndex];

    setPlayedSongs((prev) => [...prev, selectedSong]);
    return selectedSong;
  };

  const changeSong = (newIndex: number) => {
    if (newIndex >= 0 && newIndex < songs.length) {
      resetPlaybackState();
      setCurrentSongIndex(newIndex);

      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = songs[newIndex].music;
        audioRef.current.load();
      }

      if (isPlaying) {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
    }
  };

  console.log(isPlaying, "playing");

  const nextSong = () => {
    let nextIndex;

    if (isRepeat) {
      nextIndex = currentSongIndex % songs.length;
    } else {
      if (isRandom) {
        nextIndex = getRandomSongIndex();
      } else {
        nextIndex = (currentSongIndex + 1) % songs.length;
      }
    }

    changeSong(nextIndex);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            console.log("Playing next song");
          })
          .catch((error) => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
      }
    }, 100);
  };
  
  const previousSong = () => {
    let prevIndex;

    if (isRandom) {
      prevIndex = getRandomSongIndex();
    } else {
      prevIndex =
        currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    }

    changeSong(prevIndex);
  };

  const selectSong = (index: number) => {
    changeSong(index);
  };

  const toggleRandom = () => {
    setIsRandom((prev) => !prev);
    setPlayedSongs([currentSongIndex]);
  };

  const toggleRepeat = () => {
    setIsRepeat((prev) => !prev);
  };

  const volumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const muteImageClick = () => {
    const newMuteState = !muteClicked;
    setMuteClicked(newMuteState);
    if (audioRef.current) {
      audioRef.current.muted = newMuteState;
    }
  };

  const progressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const musicClick = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (currentSong) {
      audio.src = currentSong.music;
      audio.volume = volume / 100;
      audio.muted = muteClicked;
    }

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

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);

      if (isRepeat) {
        audioRef.current.loop = !audioRef.current.loop;
        audio.play().catch((error) => {
          console.error("Error repeating audio:", error);
        });
      } else {
        nextSong();
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex, isRepeat]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = muteClicked;
    }
  }, [muteClicked]);

  return {
    audioRef,
    currentSongIndex,
    currentSong,
    isPlaying,
    progress,
    currentTime,
    duration,
    volume,
    muteClicked,
    click,
    isRandom,
    isRepeat,
    musicClick,
    muteImageClick,
    volumeChange,
    progressChange,
    nextSong,
    previousSong,
    selectSong,
    formatTime,
    toggleRandom,
    toggleRepeat,
  };
};
