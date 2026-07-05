import React, { useRef } from 'react';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './Contact.module.css';

const Contact = () => {
  const ref = useScrollAnimation();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно добавить отправку в Telegram или другую логику
    alert('Заявка отправлена!');
    formRef.current.reset();
  };

  return (
    <section className="section contact" id="contact" ref={ref}>
      <div className="container">
        <div className="sec-head">
          <div className="sec-tag"><i className="feather icon-mail"></i> Связаться</div>
          <h2 className="sec-title">Получите <span>бесплатную стратегию</span></h2>
          <p className="sec-sub">Оставьте заявку — я отвечу в течение 2 часов</p>
        </div>
        <div className="glass form-wrap">
          <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.row}>
              <div className="form-group">
                <label htmlFor="name">Имя *</label>
                <input type="text" id="name" placeholder="Иван" required />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Телефон или Telegram *</label>
                <input type="tel" id="phone" placeholder="+7 (999) 123-45-67" required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="example@mail.ru" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Опишите задачу</label>
              <textarea id="message" placeholder="Коротко о вашем бизнесе"></textarea>
            </div>
            <div className="form-check">
              <input type="checkbox" id="agree" required />
              <label htmlFor="agree">Согласен на обработку данных <a href="/privacy.html" target="_blank">(политика)</a> *</label>
            </div>
            <button type="submit" className="btn btn-lg form-submit">Отправить <i className="feather icon-arrow-right"></i></button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;