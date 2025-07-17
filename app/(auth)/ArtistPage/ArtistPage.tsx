'use client';
import styles from './PopularArtist.module.scss';

const artists = [
    { name: 'Måneskin', image: 'maneskin.png' },
    { name: 'Foo Fighters', image: 'FooFighters.png' },
    { name: 'Kay G', image: 'kayG.png' },
    { name: 'Phoebe Bridgers', image: 'PhoebeBridgers.png' },
    { name: 'Calvin Harris', image: 'CalvinHarris.png' },
    { name: 'David Guetta', image: 'DavidGuetta.png' },
    { name: 'Fred again', image: 'fFredagain.png' },
    { name: 'Lana Del Rey', image: 'lana.png' },
    { name: 'SZA', image: 'SZA.png' },
    { name: 'Charli XCX', image: 'CharliXCX.png' },
    { name: 'Tate McRae', image: 'TateMcRae.png' },
    { name: 'Sabrina Carpenter', image: 'Sabrina.png' },
];

const PopularArtist = () => {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>Popular Artist</h2>
            <div className={styles.main}>
                {artists.map((artist, index) => (
                    <div key={index} className={styles.card}>
                        <div
                            className={styles.image}
                            style={{
                                backgroundImage: `url(/PopularArtistPage/${artist.image})`,

                            }}
                        />
                        <p className={styles.name}>{artist.name}</p>

                    </div>

                ))}
            </div>
        </section>
    );
};

export default PopularArtist;