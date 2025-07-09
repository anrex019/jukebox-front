'use client';
import { useState } from 'react';
import styles from './songList.module.scss';
import { Song } from '../typesSongList/song';
import HitListHeader from '../HitListHeader/HitListHeader';
import Icon from '../Icon/Icon';

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

  const handleDelete = (id: number) => {
    setSongs(songs.filter((song) => song.id !== id));
    setConfirmDeleteId(null);
    setActiveMenu(null);
  };

  return (
    <div className={styles.songListWrapper}>
      <HitListHeader title={title} onClick={() => console.log('See All clicked')} />

      <div className={styles.songList}>
        {songs.map((song, index) => (
          <div
            key={song.id}
            className={styles.songCard}
            onClick={() => setActiveMenu(null)}
          >
            <div className={styles.left}>
              <div className={styles.number}>{index + 1}</div>
              <div className={styles.cover}>
                <img src={song.cover} alt={song.title} />
                <div className={styles.playOverlay}>
                  <Icon name="play" alt="Play icon" width={32} height={32} />
                </div>
              </div>
              <div className={styles.info}>
                <div className={styles.title}>{song.title}</div>
                <div className={styles.artist}>{song.artist}</div>
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
                <Icon name="dots" alt="Options" width={24} height={24} />

                {activeMenu === song.id && (
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
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete Modal */}
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
              <button className={styles.yesBtn} onClick={() => handleDelete(confirmDeleteId)}>Yes</button>
              <button className={styles.noBtn} onClick={() => setConfirmDeleteId(null)}>No</button>
            </div>
          </div>
        </div>
      )}

      {/* Playlist Modal */}
      {showPlaylistModal && (
        <div className={styles.modalOverlay} onClick={() => setShowPlaylistModal(false)}>
          <div className={styles.createModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2 className={styles.createTitle}>Create Playlist</h2>
              <div className={styles.closeIcon} onClick={() => setShowPlaylistModal(false)}>
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
              <button className={styles.noBtn} onClick={() => setShowPlaylistModal(false)}>Not Now</button>
              <button className={styles.yesBtn} onClick={() => {
                console.log("Playlist Created:", playlistTitle);
                setShowPlaylistModal(false);
              }}>Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongList;