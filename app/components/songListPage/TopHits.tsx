import SongList from '../songList/sontList';
import { songs } from '../data/hits-data';

const TopHits = () => {
  return <SongList title="Top Hits" songs={songs} />;
};

export default TopHits;