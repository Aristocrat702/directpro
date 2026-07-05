import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Cases.module.css';

const slides = [
  { number: '-40%', label: 'CPA', desc: 'Мебельный магазин — снизили стоимость заявки на 40%' },
  { number: '340%', label: 'ROI', desc: 'Стоматология — реклама окупилась за 2 недели' },
  { number: '320%', label: 'ROI', desc: 'Онлайн-школа — 450 лидов в месяц' },
];

const Cases = () => {
  const ref = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="section cases" id="cases" ref={ref}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag"><i className="feather icon-folder"></i> Кейсы</div>
          <h2 className="sec-title">Реальные <span>результаты</span></h2>
          <p className="sec-sub">Цифры и факты</p>
        </div>
        <div className={styles.slider}>
          <div className={styles.slide}>
            <div className={styles.number}>{slides[current].number}</div>
            <div className={styles.label}>{slides[current].label}</div>
            <div className={styles.desc}>{slides[current].desc}</div>
          </div>
          <div className={styles.nav}>
            <button onClick={prevSlide}><i className="feather icon-chevron-left"></i></button>
            <button onClick={nextSlide}><i className="feather icon-chevron-right"></i></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cases;