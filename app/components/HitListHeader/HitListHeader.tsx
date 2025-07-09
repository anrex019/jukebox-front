import styles from './HitListHeader.module.scss';

type Props = {
  title: string;
  onClick?: () => void;
};

const HitListHeader = ({ title, onClick }: Props) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      <button className={styles.seeAll} onClick={onClick}>See All</button>
      
    </div>
  );
};

export default HitListHeader;