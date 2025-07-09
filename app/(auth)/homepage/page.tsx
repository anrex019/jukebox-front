import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import TopBanner from "@/components/topBanner/TopBanner";
import PopularArtists from "@/components/PopularArtists/PopularArtists";
import MusicCard from "@/components/musicCard/musicCard";
import TopHits from "@/components/songListPage/TopHits";
import TopCharts from "@/components/songListPage/TopCharts";

const HomePages = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
        <TopBanner />
      </div>
      <div className={styles.hitStyle}>
        <TopHits />
      </div>
      <PopularArtists />
      <div className={styles.hitStyle}>
        <TopCharts />
      </div>
    </div>
  );
};
export default HomePages;
