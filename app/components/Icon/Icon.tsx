import Image from 'next/image';
import styles from './Icon.module.scss';
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
    <div className={`${styles.icon} ${isActive ? styles.active : ''}`} onClick={onClick} style={{ width, height, position: 'relative' }}>
      <Image
        src={`/icons/${name.toLowerCase()}.svg`}
        alt={alt}
        fill
        style={{ objectFit: 'contain' }}
        priority={true}
        sizes={`${width}px`}
      />
    </div>
  );
};

export default Icon;
