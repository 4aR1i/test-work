import React from 'react';

import './header.scss';

const days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const month = [
  'янв',
  'фев',
  'марта',
  'апр',
  'мая',
  'июня',
  'июля',
  'авг',
  'сент',
  'окт',
  'нояб',
  'дек',
];
const date = new Date();
const dateToday = days[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()];

const Header: React.FC = () => {
  return (
    <div className="calls__header header">
      <p className="header__date">{dateToday}</p>
      <div className="header__statistics statistics">
        <div className="statistics__item item">
          <p className="item__title">
            Новые звонки <span className="green">20 из 30 шт</span>
          </p>
          <div className="item__line">
            <p></p>
          </div>
        </div>
        <div className="statistics__item item">
          <p className="item__title">
            Качество разговоров <span className="yellow">40%</span>
          </p>
          <div className="item__line">
            <p></p>
          </div>
        </div>
        <div className="statistics__item item">
          <p className="item__title">
            Конверсия в заказ <span className="red">67%</span>
          </p>
          <div className="item__line">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
