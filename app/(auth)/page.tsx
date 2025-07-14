import Header from "@/components/Header/Header";
import styles from "./page.module.scss";
import TopBanner from "@/components/topBanner/TopBanner";
import PopularArtists from "@/components/PopularArtists/PopularArtists";
import TopHits from "@/components/songListPage/TopHits";
import TopCharts from "@/components/songListPage/TopCharts";
import UserPlaylistsList from "@/(auth)/userPlaylist/userPlaylistComp";

const HomePages = () => {
  return (
    <div className={styles.container}>
      <TopBanner />
      <div className={styles.hitStyle}>
        <TopHits />
      </div>
      <UserPlaylistsList />
      <PopularArtists />
      <div className={styles.hitStyle}>
        <TopCharts />
      </div>
    </div>
  );
};
export default HomePages;
