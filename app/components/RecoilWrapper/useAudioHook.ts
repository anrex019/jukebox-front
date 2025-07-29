import { useRecoilState } from "recoil";
import {
  currentSongIndexAtom,
  isPlayingAtom,
  isRandomAtom,
  isRepeatAtom,
  volumeAtom,
  muteAtom,
  playedSongsAtom,
} from "@/components/RecoilWrapper/audioAtom";
import { useEffect, useRef } from "react";
import { songs } from "@/components/Player/interface/songsProps.interface";

export const useAudioHook = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [currentSongIndex, setCurrentSongIndex] =
    useRecoilState(currentSongIndexAtom);
  const [isPlaying, setIsPlaying] = useRecoilState(isPlayingAtom);
  const [isRandom, setIsRandom] = useRecoilState(isRandomAtom);
  const [isRepeat, setIsRepeat] = useRecoilState(isRepeatAtom);
  const [volume, setVolume] = useRecoilState(volumeAtom);
  const [mute, setMute] = useRecoilState(muteAtom);
  const [playedSongs, setPlayedSongs] = useRecoilState(playedSongsAtom);

  const currentSong = songs[currentSongIndex];

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    if (isRandom) {
      let nextIndex;
      const remaining = songs
        .map((_, i) => i)
        .filter((i) => !playedSongs.includes(i) && i !== currentSongIndex);
      if (remaining.length === 0) {
        setPlayedSongs([currentSongIndex]);
        nextIndex = (currentSongIndex + 1) % songs.length;
      } else {
        nextIndex = remaining[Math.floor(Math.random() * remaining.length)];
        setPlayedSongs([...playedSongs, nextIndex]);
      }
      setCurrentSongIndex(nextIndex);
    } else {
      const nextIndex = (currentSongIndex + 1) % songs.length;
      setCurrentSongIndex(nextIndex);
    }
  };

  const playPrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.volume = mute ? 0 : volume / 100;
  }, [volume, mute]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSongIndex, isPlaying]);

  return {
    audioRef,
    currentSong,
    currentSongIndex,
    setCurrentSongIndex,
    isPlaying,
    togglePlayPause,
    playNextSong,
    playPrevSong,
    volume,
    setVolume,
    mute,
    setMute,
    isRandom,
    setIsRandom,
    isRepeat,
    setIsRepeat,
  };
};
