
import { songs } from "@/components/data/charts-data";
import Chart from "@/components/Chart/page";

const ChartsPage = () => {
  return (
    <div>
      <Chart title="Top Charts" songs={songs} />{" "}
    </div>
  );
};

export default ChartsPage;
