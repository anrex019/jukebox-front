"use client";
import PopularArtists from './(auth)/ArtistPage/ArtistPage';
import HomePages from './(auth)/page';
import TopCharts from './(auth)/songListPage/TopCharts';
import HitListHeader from './components/HitListHeader/HitListHeader';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <TopCharts />
    </main>
  );
}