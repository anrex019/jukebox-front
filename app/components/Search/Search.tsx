import styles from './Search.module.scss';
import Image from 'next/image';

const Search = () => {

    return (
        <div className={styles.container}>
            <img src="Search.svg" alt="Search" width={24} height={24} />
            <input className={styles.searchContainer} type="text" placeholder="Search" />
        </div>
    )
}
export default Search;