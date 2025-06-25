'use client';

import React, { useState } from 'react';
import styles from './InputText.module.scss';

const InputText = () => {
  const [value, setValue] = useState('');
  const [state, setState] = useState<'neutral' | 'success' | 'warning' | 'error'>('neutral');

  const handleChange = (e) => {
    const val = e.target.value;
    const inputValue = e.target.value;
    setValue(inputValue);
    
    if (inputValue === '') setState('neutral');
    else if (inputValue.length < 3) setState('warning');
    else if (inputValue.length > 10) setState('error');
    else setState('success');
  };

  return (
    <div className={`${styles.inputWrapper} ${styles['state_' + state]}`}>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter text"
        value={value}
        onChange={handleChange}
      />
     
    </div>
  );
};

export default InputText;