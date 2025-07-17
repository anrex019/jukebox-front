'use client';

import { useEffect, useState } from 'react';
import styles from './songList.module.scss';
import { Song } from '../../components/typesSongList/song';
import HitListHeader from '../../components/HitListHeader/HitListHeader';
import Icon from '../../components/Icon/Icon';
import Image from 'next/image';

type Props = {
  songs: Song[];
  title: string;
};

const SongList = ({ songs: initialSongs, title }: Props) => {
  const [songs, setSongs] = useState(initialSongs);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  const [playlistTitle, setPlaylistTitle] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleDelete = (id: number) => {
    setSongs(songs.filter((song) => song.id !== id));
    setConfirmDeleteId(null);
    setActiveMenu(null);
  };

  return (
    <div className={styles.songListWrapper}>
      <HitListHeader title={title} onClick={() => console.log('See All clicked')} />

      <div className={styles.dropdownWrapper}>
        <div
          className={styles.dropdownButton}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <span>Top 50 Today</span>
          <Icon name="arrow-down" alt="Dropdown" width={16} height={16} />
        </div>

        {dropdownOpen && (
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownItem}>See All</div>
            <div className={styles.dropdownItem}>See Last Week</div>
            <div className={styles.dropdownItem}>See Last Month</div>
          </div>
        )}
      </div>

      <div className={styles.songList}>
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={styles.songCard}
            onClick={() => setActiveMenu(null)}
          >
            <div className={styles.left}>
              {!isMobile && <div className={styles.number}>{index + 1}</div>}
              <div className={styles.cover}>
                <Image src={song.cover} alt={song.title} width={56} height={56} />
                <div className={styles.playOverlay}>
                  <Icon name="play" alt="Play icon" width={32} height={32} />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.title}>{song.title}</div>
                <div className={styles.artist}>{song.artist}</div>
                <div className={styles.durationTwo}>
                  <Icon name="clock" alt="Clock icon" width={24} height={24} />
                  {song.duration}
                </div>
              </div>
            </div>

            <div className={styles.date}>{song.date}</div>

            <div className={styles.right}>
              <div className={styles.duration}>
                <Icon name="clock" alt="Clock icon" width={24} height={24} />
                {song.duration}
              </div>
              <div
                className={styles.options}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveMenu(activeMenu === song.id ? null : song.id);
                }}
              >

                <Icon
                  name={isMobile ? 'burgermenu' : 'dots'}
                  alt="Options"
                  width={24}
                  height={24}
                />

                {activeMenu === song.id && (
                  <>
                      <div className={styles.optionsMenu}>
                        <div
                          className={styles.menuItem}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowPlaylistModal(true);
                          }}
                        >
                          <Icon name="add" alt="Add" width={20} height={20} />
                          Add Playlist
                        </div>
                        <div
                          className={`${styles.menuItem} ${styles.delete}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setConfirmDeleteId(song.id);
                          }}
                        >
                          <Icon name="delete" alt="Delete" width={20} height={20} />
                          Delete
                        </div>
                      </div>
                  
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {confirmDeleteId !== null && (
        <div className={styles.modalOverlay} onClick={() => setConfirmDeleteId(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalIcon}>
              <div className={styles.warningBackground}>
                <Icon name="warning" alt="Warning" width={40} height={40} />
              </div>
            </div>
            <p className={styles.modalText}>Are you sure you want to delete this Chart?</p>
            <div className={styles.modalButtons}>
              <button
                className={styles.yesBtn}
                onClick={() => handleDelete(confirmDeleteId)}
              >
                Yes
              </button>
              <button
                className={styles.noBtn}
                onClick={() => setConfirmDeleteId(null)}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {showPlaylistModal && (
        <div className={styles.modalOverlay} onClick={(e) => {
          setShowPlaylistModal(false)
          e.stopPropagation()
        }}>
          <div className={styles.addListStyle}>
            {isMobile && <div className={styles.dragHandle}></div>}
            <div className={styles.modalHeader}>
              <h2 className={styles.createTitle}>Create Playlist</h2>
              <div
                className={styles.closeIcon}
                onClick={() => setShowPlaylistModal(false)}
              >
                <Icon name="x" alt="Close" width={24} height={24} />
              </div>
            </div>
            <label htmlFor="playlistInput" className={styles.playlistLabel}>
              Playlist title:
            </label>
            <input
              type="text"
              id="playlistInput"
              className={styles.playlistInput}
              placeholder="Filter Playlist"
              value={playlistTitle}
              onChange={(e) => setPlaylistTitle(e.target.value)}
            />
            <div className={styles.modalButtons}>
              <button
                className={styles.noBtn}
                onClick={() => setShowPlaylistModal(false)}
              >
                Not Now
              </button>
              <button
                className={styles.yesBtn}
                onClick={() => {
                  console.log('Playlist Created:', playlistTitle);
                  setShowPlaylistModal(false);
                  setShowAlert(true);
                  setTimeout(() => setShowAlert(false), 3000);
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      )}

   
    </div>
  );
};

export default SongList;
