import Image from "next/image";
import styles from "./page.module.css";
import MusicCard from "./musicCard/musicCard";

export default function Home() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Mulish:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet" />
      <MusicCard
        numeration={1}
        picture="/dieWithASmile.png"
        name="Die With A Smile"
        artist="Lady Gaga, Bruno Mars"
        date="16 jun,2023"
        duration="3:12"
      />
    </div>
  );
}
