'use client';
import { useState } from 'react';
import './TopHits.scss';
import { songs } from './data';
import Icon from '../Icon/Icon';
import { Song } from './types';



const TopHits = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="top-hits">
      <h2 className="title">Top Hits</h2>

      <div className="dropdown">
        <button
          className="dropdown-btn"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
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
        {songs.map((song: Song) => (
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

            <div className="right">
              <div className="date">{song.date}</div>
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

export default TopHits;