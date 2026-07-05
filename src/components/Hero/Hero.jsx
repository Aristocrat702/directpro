import React, { useEffect, useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Hero.module.css';

const Hero = () => {
  const heroRef = useRef(null);
  useScrollAnimation(heroRef);

  return (
    <section className={styles.hero} ref={heroRef}>
      <div className={styles.glow}></div>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <div className={styles.badge}>
            <span className={styles.dot}></span>
            <span id="badgeText">Возьму ещё 2 клиентов в работу</span>
          </div>
          <h1 className={styles.title}>
            Привожу клиентов из <span className={styles.gold}>Яндекс.Директ</span>.<br />
            Без воды. Без риска.
          </h1>
          <p className={styles.lead}>
            AI Marketing Engineer · 15 лет опыта · 200+ проектов · Средний ROI 180%
          </p>
          <div className={styles.ctas}>
            <a href="#contact" className="btn btn-lg">Получить стратегию <i className="feather icon-arrow-right"></i></a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.num} data-count="15">0</span>
              <span className={styles.lbl}>лет</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.num} data-count="200">0</span>
              <span className={styles.lbl}>проектов</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.num} data-count="180">0</span>
              <span className={styles.lbl}>окупаемость %</span>
            </div>
          </div>
        </div>
        <div className={styles.visual}>
          <div className="glass hero-card">
            <div className={styles.cardInner}>
              <div className={styles.cardImg}>
                <img src="/assets/images/hero-photo.jpg" alt="Аркадий Жилкин" loading="lazy" />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>
                  <i className="feather icon-bar-chart-2"></i> Рост заявок клиента за 3 месяца
                </div>
                <div className={styles.cardMetrics}>
                  <div className={styles.metric}>
                    <span className={styles.metricVal}>+247%</span>
                    <span className={styles.metricLbl}>заявок</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricVal}>-38%</span>
                    <span className={styles.metricLbl}>CPA</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricVal}>4.8x</span>
                    <span className={styles.metricLbl}>ROI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;