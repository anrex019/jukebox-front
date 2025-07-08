import Header from '@/components/Header/Header';
import styles from './page.module.scss';
import TopBanner from '@/components/topBanner/TopBanner';
import PopularArtists from '@/components/PopularArtists/PopularArtists';

const HomePages = () => {

    return(
        <div className={styles.container}>
            <div className={styles.headerContainer}>
                <Header />
                <TopBanner />
            </div>
            <PopularArtists />
        </div>
    )
}
export default HomePages;