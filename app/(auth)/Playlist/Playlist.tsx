'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Character } from './interface/Playlis-props.interface';
import { characters as initialCharacters } from '../Playlist/dummy/Playlist-dummy';

import styles from './Playlist.module.scss';

import DeletePopup from './DeletePopup';
import CreatePlaylistPopup from './CreatePlaylistPopup';

type Option = {
  label: string;
  value: string;
};

const initialOptions: Option[] = [
  { label: 'For work', value: 'work' },
  { label: 'For Gym', value: 'gym' },
  { label: 'For Study', value: 'study' },
];

const CustomSelect = ({
  selected,
  onChange,
  onDeleteClick,
}: {
  selected: Option;
  onChange: (option: Option) => void;
  onDeleteClick: (value: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div className={styles.selectButton} onClick={() => setIsOpen((prev) => !prev)}>
        {selected.label}
        <span className={styles.arrow}>
          <Image src="/Row.svg" alt="arrow" width={24} height={24} />
        </span>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {initialOptions.map((option) => (
            <div key={option.value} className={styles.optionRow}>
              <span onClick={() => handleSelect(option)}>{option.label}</span>
              <div className={styles.icons}>
                <Image src="/Redact.svg" alt="edit" width={20} height={20} />
                <Image
                  src="/remove.svg"
                  alt="delete"
                  width={20}
                  height={20}
                  style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteClick(option.value);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Playlist = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(initialOptions[0]);
  const [dropdownOptions, setDropdownOptions] = useState<Option[]>(initialOptions);
  const [charactersList, setCharactersList] = useState<Character[]>(initialCharacters);

  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | number | null>(null);
  const [deleteType, setDeleteType] = useState<'dropdown' | 'character' | null>(null);

  const [showCreatePopup, setShowCreatePopup] = useState(false);
  const [newPlaylistTitle, setNewPlaylistTitle] = useState('');

  const handleDropdownDeleteClick = (value: string) => {
    setPendingDeleteId(value);
    setDeleteType('dropdown');
    setShowDeletePopup(true);
  };

  const handleCharacterDeleteClick = (id: number) => {
    setPendingDeleteId(id);
    setDeleteType('character');
    setShowDeletePopup(true);
  };

  const handleConfirmDelete = () => {
    if (deleteType === 'dropdown' && typeof pendingDeleteId === 'string') {
      setDropdownOptions((prev) => prev.filter((opt) => opt.value !== pendingDeleteId));

      if (selectedOption.value === pendingDeleteId && dropdownOptions.length > 1) {
        const nextOption = dropdownOptions.find((o) => o.value !== pendingDeleteId)!;
        setSelectedOption(nextOption);
      }
    }

    if (deleteType === 'character' && typeof pendingDeleteId === 'number') {
      setCharactersList((prev) => prev.filter((char) => char.id !== pendingDeleteId));
    }

    setPendingDeleteId(null);
    setDeleteType(null);
    setShowDeletePopup(false);
  };

  const handleCreatePlaylist = () => {
    if (newPlaylistTitle.trim()) {
      const newValue = newPlaylistTitle.toLowerCase().replace(/\s+/g, '-');

      const newOption: Option = {
        label: newPlaylistTitle.trim(),
        value: newValue,
      };

      setDropdownOptions((prev) => [...prev, newOption]);
      setSelectedOption(newOption);
      setNewPlaylistTitle('');
      setShowCreatePopup(false);
    }
  };

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.containerPlaylistBurger}>
          <div className={styles.containerOption}>
            <p className={styles.listParagrap}>My Playlist</p>
            <CustomSelect
              selected={selectedOption}
              onChange={(option) => setSelectedOption(option)}
              onDeleteClick={handleDropdownDeleteClick}
            />
          </div>

          <div
            className={styles.newPlaylistContainerStyle}
            onClick={() => setShowCreatePopup(true)}
          >
            <Image src="Plus.svg" alt="plus" height={10} width={10} />
            <p className={styles.createParagap}>Create new playlist</p>
          </div>
        </div>

        <div className={styles.playlistIsContainerAll}>
          {charactersList.map((char: Character) => (
            <div key={char.id} className={styles.playlistIsContainer}>
              <Image
                className={styles.imageStyleContainer}
                src={char.photo}
                alt="photo"
                width={336}
                height={257}
              />
              <div className={styles.characterNameContainer}>
                <div className={styles.paragrapName}>
                  <p className={styles.characterName}>{char.name}</p>
                  <p className={styles.albumParagrap}>Album</p>
                </div>
                <Image
                  src="/remove.svg"
                  alt="remove"
                  width={24}
                  height={24}
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleCharacterDeleteClick(char.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {showDeletePopup && (
        <DeletePopup onClose={() => setShowDeletePopup(false)} onConfirm={handleConfirmDelete} />
      )}

      {showCreatePopup && (
        <CreatePlaylistPopup
          onClose={() => setShowCreatePopup(false)}
          value={newPlaylistTitle}
          onChange={setNewPlaylistTitle}
          onConfirm={handleCreatePlaylist} onCreate={function (): void {
            throw new Error('Function not implemented.');
          }} />
      )}
    </div>
  );
};

export default Playlist;