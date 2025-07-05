import SongList from '../songList/sontList';
import { songs } from '../data/charts-data'; 

const TopCharts = () => {
  return <SongList title="Top Charts" songs={songs} />;
};

export default TopCharts;