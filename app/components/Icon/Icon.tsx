import styles from './Icon.module.scss';

type IconProps = {
  name: string;
  isActive?: boolean;
  onClick?: () => void;
  alt: string;
  width: number;
  height: number;
};

const Icon = ({ name, isActive, onClick, alt, width, height }: IconProps) => {
  return (
    <img
      src={`/icons/${name}.svg`}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      className={`${styles.icon} ${isActive ? styles.active : ''}`}
    />
  );
};

export default Icon;