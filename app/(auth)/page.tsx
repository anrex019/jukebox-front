import styles from "./page.module.scss";
import TopBanner from "@/components/topBanner/TopBanner";
import PopularArtists from "@/components/PopularArtists/PopularArtists";
import UserPlaylistsList from "@/(auth)/userPlaylist/userPlaylistComp";
import TopCharts from "./songListPage/TopCharts";
import TopHits from "./songListPage/TopHits";

const HomePages = () => {
  return (
    <>
      {/* <div className={styles.container}>
        <TopBanner />
        <div className={styles.hitStyle}>
          <TopHits />
        </div>
        <UserPlaylistsList />
        <PopularArtists />
        <div className={styles.hitStyle}>
          <TopCharts />
        </div>
      </div> */}
    </>
  );
};
export default HomePages;
