import { songs } from '../data/charts-data';
import HitListHeader from '../HitListHeader/HitListHeader';
import SongList from '../songList/sontList';

const TopCharts = () => {
  return (
    <div>
 <SongList title="Top Hits" songs={songs} />;    </div>
  );
};

export default TopCharts;