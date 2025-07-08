"use client";
import Playlist from "./components/Playlist/Playlist";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className="main">
      <Playlist />
    </main>
  );
}
