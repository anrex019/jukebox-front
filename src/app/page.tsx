import Image from "next/image";
import styles from "./page.module.css";
import MusicCard from "./musicCard/musicCard";
import Font from "./font"

export default function Home() {
  return (
    <div>
      <Font />  
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
