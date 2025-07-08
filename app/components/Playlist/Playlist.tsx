"use client";

import { useState } from "react";
import { Character } from "./interface/Playlis-props.interface";
import styles from "./Playlist.module.scss";
import Image from "next/image";
import { characters } from "../Playlist/dummy/Playlist-dummy";

type Option = {
  label: string;
  value: string;
};

const options: Option[] = [
  { label: "For work", value: "work" },
  { label: "For Gym", value: "gym" },
  { label: "For Study", value: "study" },
];

const CustomSelect = ({
  selected,
  onChange,
}: {
  selected: Option;
  onChange: (option: Option) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: Option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={styles.dropdownWrapper}>
      <div
        className={styles.selectButton}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {selected.label}
        <span className={styles.arrow}><Image src='/Row.svg' alt="photo" width={24} height={24} /></span>
      </div>

      {isOpen && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div key={option.value} className={styles.optionRow}>
              <span onClick={() => handleSelect(option)}>{option.label}</span>
              <div className={styles.icons}>
                <Image src="/Redact.svg" alt="edit" width={20} height={20} />
                <Image src="/remove.svg" alt="delete" width={20} height={20} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Playlist = () => {
  const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  return (
    <div className={styles.center}>
      <div className={styles.container}>
        <div className={styles.containerPlaylistBurger}>
          <div className={styles.containerOption}>
            <p className={styles.listParagrap}>My Playlist</p>
            <CustomSelect
              selected={selectedOption}
              onChange={(option) => {
                console.log("Selected:", option.value);
                setSelectedOption(option);
              }}
            />
          </div>
          <div className={styles.newPlaylistContainerStyle}>
            <Image src="Plus.svg" alt="photo" height={10} width={10} />
            <p className={styles.createParagap}>Create new playlist</p>
          </div>
        </div>
        <div className={styles.playlistIsContainerAll}>
          {characters.map((char: Character) => (
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
                  className={styles.imageStyleContainer}
                  src="/remove.svg"
                  alt="remove"
                  width={24}
                  height={24}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
