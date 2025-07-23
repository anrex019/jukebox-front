"use client"

import styles from "./Header.module.scss";
import Image from "next/image";
import Search from "../Search/Search";
import React, { useState, useRef, useEffect } from "react";

const Header = () => {
  const [click, setClick] = useState(false);
  const [isHoveredHome, setIsHoveredHome] = useState(false);
  const [isHoveredPlaylist, setIsHoveredPlaylist] = useState(false);
  const [isHoveredArtists, setIsHoveredArtists] = useState(false);
  const [isHoveredCharts, setIsHoveredCharts] = useState(false);
  const [isHoveredAlbums, setIsHoveredAlbums] = useState(false);

  const searchRef = useRef<HTMLDivElement>(null);

  const onClicked = () => {
    setClick(!click);
  };

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setClick(false);
      }
    };

    if (click) {
      document.addEventListener("mousedown", clickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [click]);

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.usersProfileStylesCOntainer}>
          <Image
            className={styles.imgStyles}
            src="/"
            alt="/"
            width={52}
            height={52}
          />
          <p className={styles.usertsTextContainer}>Music App</p>
        </div>

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
        {click === false && (
          <div onClick={onClicked} className={styles.searchContainer}>
            <Image src="Search.svg" alt="Search" width={24} height={24} />
          </div>
        )}
        {click && (
          <div ref={searchRef}>
            <Search />
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
