import { Character } from "./interface/Playlis-props.interface";
import styles from "./Playlist.module.scss";
import Image from "next/image";
import { characters } from "../Playlist/dummy/Playlist-dummy";

const Playlist = () => {
  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.containerPlaylistBurger}>
          <div className={styles.containerOption}>
            <p className={styles.listParagrap}>My Playlist</p>
            <select className={styles.selectContainerStyle}>
              <option>For work</option>
              <option>For Gym</option>
              <option>For Study</option>
            </select>
          </div>
          <div className={styles.newPlaylistContainerStyle}>
            <Image src="Plus.svg" alt="photo" height={10} width={10} />
            <p className={styles.createParagap}>Create new playlist</p>
          </div>
        </div>
        <div className={styles.playlistIsContainerAll}>
          {characters.map((char: Character) => (
            <div key={char.id} className={styles.playlistIsContainer}>
              <Image
                className={styles.imageStyleContainer}
                src={char.photo}
                alt="photo"
                width={336}
                height={257}
              />
              <div className={styles.characterNameContainer}>
                <div className={styles.paragrapName}>
                  <p className={styles.characterName}>{char.name}</p>
                  <p className={styles.albumParagrap}>Album</p>
                </div>
                <Image
                  className={styles.imageStyleContainer}
                  src="/Delete.svg"
                  alt="delete icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
