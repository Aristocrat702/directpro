import React, { useState, useEffect } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>AZ</a>
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          <a href="#value">Обо мне</a>
          <a href="#cases">Кейсы</a>
          <a href="#process">Процесс</a>
          <a href="#advantages">Преимущества</a>
          <a href="#contact" className="btn">Связаться</a>
        </nav>
        <button className={`${styles.burger} ${menuOpen ? styles.active : ''}`} onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;