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
        <MusicCard numeration={1} picture={undefined} name={"awd"} artist={"awdaw"} date={1221} duration={"awdw"} />
      </div>
      <PopularArtists />
      <div className={styles.hitStyle}>
        <MusicCard numeration={1} picture={undefined} name={""} artist={""} date={undefined} duration={""} />
      </div>
    </div>
  );
};
export default HomePages;
