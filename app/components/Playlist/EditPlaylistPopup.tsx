// components/EditPlaylistPopup.tsx
import React, { useState } from 'react';
import styles from './CreatePlaylistPopup.module.scss';  
import CreatePlaylistPopup from './CreatePlaylistPopup';

interface Props {
  initialTitle: string;
  onClose: () => void;
  onSave: (title: string) => void;
}

const EditPlaylistPopup: React.FC<Props> = ({ initialTitle, onClose, onSave }) => {
  const [title, setTitle] = useState(initialTitle);

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h2 style={{ color: 'white' }}>Change Playlist Name</h2>
          <button onClick={onClose} className={styles.closeBtn}>
            ✕
          </button>
        </div>

        <div className={styles.inputGroup}>
          <label>Playlist title:</label>
          <input
            type="text"
            placeholder="Enter new name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
        </div>

        <div className={styles.buttons}>
          <button className={styles.noBtn} onClick={onClose}>
            Not Now
          </button>
          <button
            className={styles.yesBtn}
            onClick={() => {
              if (title.trim()) {
                onSave(title.trim());
              }
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export { EditPlaylistPopup, CreatePlaylistPopup };