import styles from './Header.module.scss';
import Image from 'next/image';
import Search from '../Search/Search';
import { useState } from 'react';

const Header = () => {
    const [click, setClick] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const onClicked = () => {
        setClick(!click)
    }

    return (
        <div className={styles.container}>
            <div className={styles.usersProfileStylesCOntainer}>
                <Image className={styles.imgStyles} src="" alt="" width={52} height={52} />
                <p className={styles.usertsTextContainer}>Music App</p>
            </div>

            <div className={styles.allImgContainerHeader}>
                <div onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className={styles.containerImgHeader}>
                    <Image className={styles.imgHeaderContainer} src={isHovered
                        ? 'Home-Hover.svg'
                        : 'Home.svg'}
                        alt="photo" width={24} height={24} />
                    <p className={styles.headerTextContainer}>Home</p>
                </div>

                <div className={styles.containerImgHeader}>
                    <Image className={styles.imgHeaderContainer} src='Playlist.svg' alt="photo" width={24} height={24} />
                    <p className={styles.headerTextContainer}>Playlist</p>
                </div>

                <div className={styles.containerImgHeader}>
                    <Image className={styles.imgHeaderContainer} src='Artists.svg' alt="photo" width={24} height={24} />
                    <p className={styles.headerTextContainer}>Artists</p>
                </div>

                <div className={styles.containerImgHeader}>
                    <Image className={styles.imgHeaderContainer} src='Charts.svg' alt="photo" width={24} height={24} />
                    <p className={styles.headerTextContainer}>Charts</p>
                </div>

                <div className={styles.containerImgHeader}>
                    <Image className={styles.imgHeaderContainer} src='Albums.svg' alt="photo" width={24} height={24} />
                    <p className={styles.headerTextContainer}>Albums</p>
                </div>
            </div>
            {click === false && <div onClick={onClicked} className={styles.searchContainer}>
                <Image src="Search.svg" alt="Search" width={24} height={24} />
            </div>
            }
            {
                click &&
                <Search />
            }
        </div>
    )
}
export default Header;