"use client";
import React, { useState, ChangeEvent, ReactNode, forwardRef } from "react";
import styles from "./InputText.module.scss";

interface props {
  type?: string;
  placeholder?: string;
  value?: () => void;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const InputText = forwardRef<HTMLInputElement, props>((props, ref) => {
  const [state, setState] = useState<
    "neutral" | "success" | "warning" | "error"
  >("neutral");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(e);
    const inputValue = e.target.value;

    if (inputValue === "") setState("neutral");
    else if (inputValue.length > 3) setState("warning");
    else if (inputValue.length < 8) setState("error");
    else setState("success");
  };

  return (
    <div className={`${styles.inputWrapper} ${styles["state_" + state]}`}>
      <input
        className={styles.input}
        type={props.type}
        placeholder={props.placeholder}
        onChange={handleChange}
        name={props.name}
        ref={ref}
      />
    </div>
  );
});

export default InputText;
