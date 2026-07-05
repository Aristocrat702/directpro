import React from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Testimonials.module.css';

const testimonials = [
  { quote: '«Снизили CPA на 40%, заявок стало в 2 раза больше. Аркадий всегда на связи.»', author: 'Алексей Петров, мебельный магазин' },
  { quote: '«Реклама окупилась за 2 недели. Всё подробно объясняет.»', author: 'Екатерина Смирнова, стоматология' },
  { quote: '«ROI 320% — лучший результат за 3 года.»', author: 'Михаил Волков, онлайн-школа' },
];

const Testimonials = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section testimonials" id="testimonials" ref={ref}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag"><i className="feather icon-message-circle"></i> Отзывы</div>
          <h2 className="sec-title">Что говорят <span>клиенты</span></h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((item, i) => (
            <div key={i} className={`glass test-card anim anim-d${i}`}>
              <div className={styles.quote}>"</div>
              <p className={styles.text}>{item.quote}</p>
              <div className={styles.author}>{item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;