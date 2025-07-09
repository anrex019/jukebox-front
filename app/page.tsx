
"use client";
import AlbumCard from "./components/albumCard/AlbumCard";
import MusicCard from "./components/musicCard/musicCard";
import PopularArtists from "./components/PopularArtists/PopularArtists";
import TopCharts from "./components/songListPage/TopCharts";
import TopHits from "./components/songListPage/TopHits";
import styles from './page.module.css'
export default function HomePage() {
  return (


    <main className={styles.wrapper}>
      <TopCharts />
      <TopHits />
      
    
    </main>

  );
}