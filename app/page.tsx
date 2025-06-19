'use client';

import { AlbumCard } from './components/albumCard/AlbumCard';

export default function HomePage() {
  return (
    <main className="main">
      <AlbumCard
        title="Eminem"
        image="/images/eminem.jpg"
        onClick={() => console.log('Clicked')}
      />
    </main>
  );
}