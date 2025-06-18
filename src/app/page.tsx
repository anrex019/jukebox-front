import Image from "next/image";
import styles from "./page.module.css";
import Button from "./Button/Button";

export default function Home() {

  const useerLogdIn = true;

  return (
    <div className={styles.container}>
      {useerLogdIn 
        ? <Button disabled={false} title="Neutral" />
        : <Button disabled={true} title="Disabled" />
      }
    </div>
  );
}
