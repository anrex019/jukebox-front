import { useState } from "react";
import styles from "./footer.module.scss";
import Image from "next/image";

const footer = () => {
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredPlaylist, setIsHoveredPlaylist] = useState(false);
  const [isHoveredArtists, setIsHoveredArtists] = useState(false);
  const [isHoveredCharts, setIsHoveredCharts] = useState(false);
  const [isHoveredAlbums, setIsHoveredAlbums] = useState(false);
  return (
    <>
      <div className={styles.allImgContainerHeader}>
        <div
          onMouseEnter={() => setIsHoveredHome(true)}
          onMouseLeave={() => setIsHoveredHome(false)}
          className={styles.containerImgHeader}
        >
          <Image
            className={styles.imgHeaderContainer}
            src={isHoveredHome ? "/Home-Hover.svg" : "/Home.svg"}
            alt="photo"
            width={24}
            height={24}
          />
          <p className={styles.headerTextContainer}>Home</p>
        </div>

        <div
          className={styles.containerImgHeader}
          onMouseEnter={() => setIsHoveredPlaylist(true)}
          onMouseLeave={() => setIsHoveredPlaylist(false)}
        >
          <Image
            className={styles.imgHeaderContainer}
            src={isHoveredPlaylist ? "/Playlist-hover.svg" : "/Playlist.svg"}
            alt="photo"
            width={24}
            height={24}
          />
          <p className={styles.headerTextContainer}>Playlist</p>
        </div>

        <div
          className={styles.containerImgHeader}
          onMouseEnter={() => setIsHoveredArtists(true)}
          onMouseLeave={() => setIsHoveredArtists(false)}
        >
          <Image
            className={styles.imgHeaderContainer}
            src={isHoveredArtists ? "/Artists-hover.svg" : "/Artists.svg"}
            alt="photo"
            width={24}
            height={24}
          />
          <p className={styles.headerTextContainer}>Artists</p>
        </div>

        <div
          className={styles.containerImgHeader}
          onMouseEnter={() => setIsHoveredCharts(true)}
          onMouseLeave={() => setIsHoveredCharts(false)}
        >
          <Image
            className={styles.imgHeaderContainer}
            src={isHoveredCharts ? "/Charts-hover.svg" : "/Charts.svg"}
            alt="photo"
            width={24}
            height={24}
          />
          <p className={styles.headerTextContainer}>Charts</p>
        </div>

        <div
          className={styles.containerImgHeader}
          onMouseEnter={() => setIsHoveredAlbums(true)}
          onMouseLeave={() => setIsHoveredAlbums(false)}
        >
          <Image
            className={styles.imgHeaderContainer}
            src={isHoveredAlbums ? "/Albums-hover.svg" : "/Albums.svg"}
            alt="photo"
            width={24}
            height={24}
          />
          <p className={styles.headerTextContainer}>Albums</p>
        </div>
      </div>
    </>
  );
};

export default footer;
