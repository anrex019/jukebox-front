"use client";

import HomePages from './(auth)/page';
import UserPlaylistsList from './components/userPlaylist/userPlaylistComp';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <HomePages />
    </main>

  );
}