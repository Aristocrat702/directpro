import React, { useState } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './FAQ.module.css';

const faqs = [
  { q: 'Сколько времени занимает настройка?', a: '5-7 рабочих дней.' },
  { q: 'Какой минимальный бюджет?', a: 'От 50 000 руб в месяц.' },
  { q: 'Что будет, если реклама не окупится?', a: 'Верну деньги за настройку, если за 14 дней нет роста заявок.' },
];

const FAQ = () => {
  const ref = useScrollAnimation();
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="section faq" id="faq" ref={ref}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag"><i className="feather icon-help-circle"></i> Частые вопросы</div>
          <h2 className="sec-title">Ответы на <span>важные вопросы</span></h2>
        </div>
        <div className={styles.list}>
          {faqs.map((item, i) => (
            <div key={i} className={`glass faq-item ${active === i ? styles.active : ''}`}>
              <div className={styles.q} onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <div className={styles.toggle}><i className="feather icon-plus"></i></div>
              </div>
              <div className={styles.a}>
                <div className={styles.inner}>{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;