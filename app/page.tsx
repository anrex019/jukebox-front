"use client";
import styles from "./page.module.css";
import { AlbumCard } from "./components/albumCard/AlbumCard";
import Player from "./components/Player/Player";
import UserPlaylist from "./components/userPlaylist/userPlaylistComp";

export default function HomePage() {
  return (
    <main className="main">
      <div className={styles.container}>
        <UserPlaylist image="/LanaDelRey.png" title="Lana Del Rey" />
      </div>
    </main>
  );
}
