import styles from "./footer.module.scss"
import Image from "next/image"
import React, { useState, useRef, useEffect } from "react";

type footerProps = {
    image?: any,
    title?: string;
}

const footer = ({ image, title }: footerProps) => {
    const [isHoveredHome, setIsHoveredHome] = useState(false);
    const [isHoveredPlaylist, setIsHoveredPlaylist] = useState(false);
    const [isHoveredArtists, setIsHoveredArtists] = useState(false);
    const [isHoveredCharts, setIsHoveredCharts] = useState(false);
    const [isHoveredAlbums, setIsHoveredAlbums] = useState(false);
    const [isPlaylistPopup, setIsPlaylistPopup] = useState(false);
    const [showInnerPopup, setShowInnerPopup] = useState(false);
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
                    onClick={() => setIsPlaylistPopup(true)}
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
            {isPlaylistPopup && (
                <div className={styles.playlistPopup}>
                    <div className={styles.popup}>
                        <div
                            onClick={() => {
                                setShowInnerPopup(true);
                                setIsPlaylistPopup(false);
                            }}
                            className={styles.playlist}>
                        </div>
                        <div
                            onClick={() => {
                                setShowInnerPopup(false);
                            }}
                            className={styles.trash}
                        >
                            
                        </div>
                    </div>
                    <h3 className={styles.title}>{title}</h3>
                            <div className={styles.popupHeader}>
                                <h2 className={styles.create}>Playlist</h2>
                                <Image
                                    onClick={() => setIsPlaylistPopup(false)}
                                    src="/close.svg"
                                    alt="photo"
                                    width={40}
                                    height={40}
                                />
                            </div>
                            <div className={styles.inputAndTitle}>
                                <input
                                    type="text"
                                    placeholder="Filter Playlist"
                                    className={styles.input}
                                />
                            </div>
                            <div className={styles.buttons}>
                                <button
                                    onClick={() => setIsPlaylistPopup(false)}
                                    className={styles.notNow}>Not Now</button>
                                <button className={styles.createBtn}>Create</button>
                            </div>
                        </div>
                    )}
        </>
    )
}

export default footer