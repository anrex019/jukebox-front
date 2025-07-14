import React, { Dispatch, SetStateAction, useState } from 'react';
import styles from './CreatePlaylistPopup.module.scss';

interface Props {
  onClose: () => void;
  onCreate: (title: string) => void;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
  onConfirm: () => void;
}

const CreatePlaylistPopup: React.FC<Props> = ({ onClose, onCreate }) => {
  const [title, setTitle] = useState('');

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <div className={styles.header}>
          <h2 style={{ color: 'white' }}>Create Playlist</h2>
          <button onClick={onClose} className={styles.closeBtn}>
            ✕
          </button>
        </div>

        <div className={styles.inputGroup}>
          <label>Playlist title:</label>
          <input
            type="text"
            placeholder="Filter Playlist"
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
                onCreate(title.trim());
                setTitle('');
              }
            }}
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePlaylistPopup;