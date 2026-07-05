import React, { useState, useEffect } from 'react';
import styles from './Preloader.module.css';

const Preloader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.preloader}>
      <div className={styles.logo}>AZ</div>
      <div className={styles.line}></div>
      <div className={styles.glow}></div>
    </div>
  );
};

export default Preloader;