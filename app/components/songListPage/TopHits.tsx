import { songs } from "../data/charts-data";
import SongList from "../../(auth)/songList/sontList";

const TopCharts = () => {
  return (
    <div>
      <SongList title="Top Hits" songs={songs} />{" "}
    </div>
  );
};

export default TopCharts;
