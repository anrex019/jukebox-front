import styles from './Icon.module.scss'
import React from 'react';

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
      src={`/icons/${name.toLowerCase()}.svg`}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
      className={`${styles.icon} ${isActive ? styles.active : ''}`}
    />
  );
};

export default Icon;