
import { songs } from "@/components/data/charts-data";
import SongList from "../../components/songList/sontList";

const TopCharts = () => {
  return (
    <div>
      <SongList title="Top Charts" songs={songs} />{" "}
    </div>
  );
};

export default TopCharts;
