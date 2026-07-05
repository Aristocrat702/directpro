import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Value.module.css';

const Value = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section" id="value" ref={ref}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag"><i className="feather icon-zap"></i> Кто я</div>
          <h2 className="sec-title">AI Marketing <span>Engineer</span></h2>
          <p className="sec-sub">Я не просто настраиваю рекламу — я создаю системы, которые приносят клиентов автоматически.</p>
        </div>
        <div className={styles.grid}>
          <div className="glass value-item anim">
            <i className="feather icon-cpu"></i>
            <h3>AI-автоматизация</h3>
            <p>Нейросети для прогнозирования бюджета, генерации гипотез и оптимизации ставок в реальном времени.</p>
          </div>
          <div className="glass value-item anim anim-d1">
            <i className="feather icon-bar-chart-2"></i>
            <h3>Аналитика под ключ</h3>
            <p>Сквозная аналитика, Яндекс.Метрика, цели, коллтрекинг — вы видите всю картину продаж.</p>
          </div>
          <div className="glass value-item anim anim-d2">
            <i className="feather icon-message-circle"></i>
            <h3>Telegram-боты</h3>
            <p>Автоматизация заявок, CRM-интеграция, уведомления — весь бизнес в одном мессенджере.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;