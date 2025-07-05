'use client';
import { useState } from 'react';
import './songList.scss';
import Icon from '../Icon/Icon';
import { Song } from '../typesSongList/song';

type Props = {
  songs: Song[];
  title: string;
};

const SongList = ({ songs, title }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
          <div key={song.id} className="song-card">
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
              <div className="options">
                <Icon name="dots" alt="Options" width={24} height={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongList;