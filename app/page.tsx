
"use client";
<<<<<<< Updated upstream
import TopHits from "./components/songListPage/TopHits";
=======
import TopCharts from "./components/songListPage/TopCharts";
>>>>>>> Stashed changes
import styles from "./page.module.css";

export default function HomePage() {
  return (
<<<<<<< Updated upstream
    <main className="main">
      <TopHits/>
=======
    <main className={styles.wrapper}>
      <TopCharts />
>>>>>>> Stashed changes
    </main>

  );
}