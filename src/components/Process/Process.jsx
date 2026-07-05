import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Process.module.css';

const steps = [
  { num: '01', title: 'Бриф', desc: 'Созваниваемся, разбираем бизнес и цели.' },
  { num: '02', title: 'Анализ', desc: 'Исследую нишу, конкурентов, собираю семантику.' },
  { num: '03', title: 'Запуск', desc: 'Настраиваю кампании, пишу объявления, подключаю аналитику.' },
  { num: '04', title: 'Оптимизация', desc: 'Ежедневная работа над ставками, A/B тесты, отчёты.' },
];

const Process = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section process" id="process" ref={ref}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag"><i className="feather icon-layers"></i> Процесс</div>
          <h2 className="sec-title">Как мы <span>работаем</span></h2>
          <p className="sec-sub">4 шага до запуска</p>
        </div>
        <div className={styles.grid}>
          {steps.map((step, i) => (
            <div key={i} className={`glass process-item anim anim-d${i}`}>
              <span className={styles.num}>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;