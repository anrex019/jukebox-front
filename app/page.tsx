"use client";
import styles from './page.module.css';
import StartLogIn from './StartPointLogIn/StartLogIn';

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <StartLogIn />
    </main>
  );
}