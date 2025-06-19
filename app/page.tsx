'use client';

import { AlbumCard } from './components/AlbumCard';

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