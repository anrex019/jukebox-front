import { atom } from "recoil";
import { songs } from "@/components/Player/interface/songsProps.interface";

// Index of current song
export const currentSongIndexAtom = atom<number>({
  key: "currentSongIndex",
  default: 0,
});

export const isPlayingAtom = atom<boolean>({
  key: "isPlaying",
  default: false,
});

export const isRandomAtom = atom<boolean>({
  key: "isRandom",
  default: false,
});

export const isRepeatAtom = atom<boolean>({
  key: "isRepeat",
  default: false,
});

export const volumeAtom = atom<number>({
  key: "volume",
  default: 100,
});

export const muteAtom = atom<boolean>({
  key: "mute",
  default: false,
});

export const playedSongsAtom = atom<number[]>({
  key: "playedSongs",
  default: [],
});
