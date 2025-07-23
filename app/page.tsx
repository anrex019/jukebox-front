"use client";
import HomePages from "./(auth)/auth/page";
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <HomePages />
    </main>
  );
}