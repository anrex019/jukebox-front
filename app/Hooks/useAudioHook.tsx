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


  musicClick: () => Promise<void>;
  muteImageClick: () => void;
  volumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  progressChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nextSong: () => void;
  previousSong: () => void;
  selectSong: (index: number) => void;


  formatTime: (time: number) => string;
}

export const useAudioHook = (songs: Song[]): UseAudioHookReturn => {
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const [muteClicked, setMuteClicked] = useState(false);
  const [click, setClick] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null!);

  const currentSong = songs.length > 0 ? songs[currentSongIndex] : null;

  const formatTime = (time: number) => {
    if (isNaN(time) || !isFinite(time)) return "00:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };


  const resetPlaybackState = () => {
    setIsPlaying(false);
    setClick(false);
    setProgress(0);
    setCurrentTime(0);
    setDuration(0);
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
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    changeSong(nextIndex);
  };

  const previousSong = () => {
    const prevIndex =
      currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
    changeSong(prevIndex);
  };

  const selectSong = (index: number) => {
    changeSong(index);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      console.log("Audio ref is null!");
      return;
    }


    if (currentSong) {
      audio.src = currentSong.music;
      audio.volume = volume / 100;
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
      // Auto-play next song
      nextSong();
    };

    const handleError = (e: Event) => {
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
  }, [currentSongIndex, songs, volume]);

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
    setMuteClicked(!muteClicked);
    if (audioRef.current) {
      audioRef.current.muted = !muteClicked;
    }
  };

  const volumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
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
      musicClick,
      muteImageClick,
      volumeChange,
      progressChange,
      nextSong,
      previousSong,
      selectSong,
      formatTime,
    };
};
