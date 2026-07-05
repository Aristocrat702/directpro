import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Advantages.module.css';

const advantages = [
  { icon: 'check-circle', title: 'Гарантия результата', desc: '14 дней — нет заявок, возврат денег.' },
  { icon: 'file', title: 'Работа по договору', desc: 'Все обязательства зафиксированы.' },
  { icon: 'lock', title: 'Конфиденциальность', desc: 'Подписываем NDA.' },
  { icon: 'eye', title: 'Полная прозрачность', desc: 'Доступ к кампаниям и аналитике 24/7.' },
];

const Advantages = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section" id="advantages" ref={ref}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag"><i className="feather icon-shield"></i> Преимущества</div>
          <h2 className="sec-title">Почему <span>AZ</span></h2>
          <p className="sec-sub">Коротко о главном</p>
        </div>
        <div className={styles.grid}>
          {advantages.map((item, i) => (
            <div key={i} className={`glass advantage-item anim anim-d${i}`}>
              <i className={`feather icon-${item.icon}`}></i>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;