'use client';
import styles from './page.module.css';
import { AlbumCard } from './components/albumCard/AlbumCard';
import Player from './components/Player/Player';

export default function HomePage() {
  return (
    <main className="main">
      <div className={styles.container}>
          <Player />
      </div>
    </main>
  );
}