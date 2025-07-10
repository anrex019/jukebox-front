'use client';

import React from 'react';
import styles from './DeletePopup.module.scss';
import Image from 'next/image';

interface DeletePopupProps {
  onClose: () => void;
  onConfirm: () => void;
}

const DeletePopup: React.FC<DeletePopupProps> = ({ onClose, onConfirm }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.iconContainer}>
          <Image src="/warning.svg" alt="warning" width={24} height={24} />
        </div>
        <p className={styles.message}>Are you sure you want to delete this Chart?</p>
        <div className={styles.buttons}>
          <button className={styles.yesBtn} onClick={onConfirm}>
            Yes
          </button>
          <button className={styles.noBtn} onClick={onClose}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopup;