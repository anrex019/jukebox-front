'use client';
import { useState } from 'react';
import './songList.scss';
import Icon from '../Icon/Icon';
import { Song } from '../typesSongList/song';

type Props = {
  songs: Song[];
  title: string;
};

const SongList = ({ songs: initialSongs, title }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [songs, setSongs] = useState(initialSongs);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const handleDelete = (id: number) => {
    setSongs(songs.filter((song) => song.id !== id));
    setConfirmDeleteId(null);
    setActiveMenu(null);
  };

  return (
    <div className="song-list-wrapper">
      <h2 className="title">{title}</h2>

      <div className="dropdown">
        <button className="dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
          Top 50 Today
          <Icon name="arrow-down" alt="Dropdown arrow" width={24} height={24} />
        </button>

        {dropdownOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-item">See All</div>
            <div className="dropdown-item">See Last Month</div>
            <div className="dropdown-item">See Last Week</div>
          </div>
        )}
      </div>

      <div className="song-list">
        {songs.map((song) => (
          <div
            key={song.id}
            className="song-card"
            onClick={() => setActiveMenu(null)}
          >
            <div className="left">
              <div className="cover">
                <img src={song.cover} alt={song.title} />
                <div className="play-overlay">
                  <Icon name="play" alt="Play icon" width={32} height={32} />
                </div>
              </div>
              <div className="info">
                <div className="title">{song.title}</div>
                <div className="artist">{song.artist}</div>
              </div>
            </div>

            <div className="date">{song.date}</div>

            <div className="right">
              <div className="duration">
                <Icon name="clock" alt="Clock icon" width={24} height={24} />
                {song.duration}
              </div>
              <div className="options" onClick={(e) => {
                e.stopPropagation();
                setActiveMenu(activeMenu === song.id ? null : song.id);
              }}>
                <Icon name="dots" alt="Options" width={24} height={24} />

                {activeMenu === song.id && (
                  <div className="options-menu">
                    <div className="menu-item">
                      <Icon name="add" alt="Add" width={20} height={20} />
                      Add Playlist
                    </div>
                    <div
                      className="menu-item delete"
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

      {confirmDeleteId !== null && (
        <div className="modal-overlay" onClick={() => setConfirmDeleteId(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <div className="warning-background">
                <Icon name="warning" alt="Warning" width={40} height={40} />
              </div>
            </div>
            <p className="modal-text">Are you sure you want to delete this Chart?</p>
            <div className="modal-buttons">
              <button className="yes-btn" onClick={() => handleDelete(confirmDeleteId)}>Yes</button>
              <button className="no-btn" onClick={() => setConfirmDeleteId(null)}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SongList;