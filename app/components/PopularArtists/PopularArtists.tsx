'use client';

import React from 'react';
import styles from './PopularArtists.module.scss';
import Image from 'next/image';

const artists = [
  { name: 'Bruno Mars', image: '/popularArtist/brunoMars.jpg' },
  { name: 'Travis Skot', image: '/popularArtist/TravisSkot.jpg' },
  { name: 'Snoopdog', image: '/popularArtist/snoopdog.jpg' },
  { name: 'Wiz Khlifa', image: '/popularArtist/WizKhlifa.jpg' },
  { name: 'Tupac', image: '/popularArtist/tupac.jpg' },
  { name: 'Eminem', image: '/popularArtist/eminem.jpg' },
];

const PopularArtists = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headerRow}>
        <h2 className={styles.title}>Popular Artists</h2>
        <button className={styles.seeAll}>See all</button>
      </div>

      <div className={styles.artistGrid}>
        {artists.map((artist, index) => (
          <div key={index} className={styles.artistCard}>
            <Image src={artist.image} alt={artist.name} className={styles.artistImage} width={100} height={100} />
            <p className={styles.artistName}>{artist.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;