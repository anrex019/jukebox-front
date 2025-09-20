import styles from './HitListHeader.module.scss';

type Props = {
  title: string;
  onClick?: () => void;
};

const HitListHeaders = ({ title, onClick }: Props) => {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default HitListHeaders;