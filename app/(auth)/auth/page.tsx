import styles from "./page.module.scss";
import TopBanner from "@/components/topBanner/TopBanner";
import PopularArtists from "@/components/PopularArtists/PopularArtists";
import UserPlaylistsList from "@/(auth)/userPlaylist/userPlaylistComp";
import Header from "@/components/Header/Header";
import Player from "@/components/Player/Player";
import TopHits from "../songListPage/TopHits";
import TopCharts from "../songListPage/TopHits";

const HomePage = () => {
  return (
    <>
    {/* <Header /> */}
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
    {/* <Player /> */}
    </>
  );
};
export default HomePage;
