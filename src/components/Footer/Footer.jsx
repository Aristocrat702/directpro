import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <span className={styles.logo}>AZ</span>
            <p>AI Marketing Engineer</p>
          </div>
          <div className={styles.social}>
            <a href="https://t.me/ArkadyDirect" target="_blank"><i className="feather icon-send"></i></a>
            <a href="https://wa.me/79870201212" target="_blank"><i className="feather icon-message-circle"></i></a>
            <a href="mailto:arkady@az.marketing"><i className="feather icon-mail"></i></a>
          </div>
          <div className={styles.contacts}>
            <a href="tel:+79870201212">+7 (987) 020-12-12</a>
            <a href="mailto:arkady@az.marketing">arkady@az.marketing</a>
          </div>
          <div className={styles.bottom}>© 2026 AZ Marketing. Все права защищены.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;