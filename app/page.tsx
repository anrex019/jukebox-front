"use client";
import LogIn from './LogIn/LogIn';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <main className={styles.wrapper}>
      <LogIn />
    </main>
  );
}