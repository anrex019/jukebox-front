"use client";
import HomePages from "./(auth)/homepage/page";
import Player from "./components/Player/Player";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <HomePages />

    </main>

  );
}