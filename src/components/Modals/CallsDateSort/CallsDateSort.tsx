import React from 'react';
import { useSelector } from 'react-redux';
import {
  changeSlide,
  handleDateModal,
  goToSlide,
  changeDateFrom,
  enterDateFrom,
  enterDateTo,
  closeDateModal,
} from '../../../redux/slices/dateSortSlice';
import { RootState, useAppDispatch } from '../../../redux/store';
import CallsSVG from '../../SVG/CallsSVG';

import './callsdatesort.scss';

export const dateItems = [
  { id: 1, title: '3 дня' },
  { id: 2, title: 'Неделя' },
  { id: 3, title: 'Месяц' },
  { id: 4, title: 'Год' },
];

const CallsDateSort: React.FC = () => {
  const { slide, activeDateModal } = useSelector((state: RootState) => state.dateSort);
  const dispatch = useAppDispatch();
  const [exactDateFrom, setExactDateForm] = React.useState('');
  const [exactDateTo, setExactDateTo] = React.useState('');
  const dateSortRef = React.useRef(null);
  const inputDateFrom = React.useRef(null);
  const inputDateTo = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dateSortRef.current.contains(event.target)) {
        dispatch(closeDateModal());
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const selectDateSortItem = (id: number) => {
    dispatch(goToSlide(id));
    dispatch(changeDateFrom(id));
    dispatch(handleDateModal());
  };

  const selectExactDates = (from: string, to: string) => {
    dispatch(enterDateFrom(from));
    dispatch(enterDateTo(to));
    dispatch(handleDateModal());
  };

  return (
    <div className="date-sort" ref={dateSortRef}>
      <div className="date-sort__slider slider">
        <div className="slider__arrow left" onClick={() => dispatch(changeSlide(-1))}>
          <CallsSVG id={'arrowLeft'} />
        </div>
        <div className="slider__arrow right" onClick={() => dispatch(changeSlide(1))}>
          <CallsSVG id={'arrowRight'} />
        </div>
        <div className="slider__list list" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {dateItems.map((item) => (
            <div key={item.id} className="list__item">
              <p onClick={() => dispatch(handleDateModal())}>
                <CallsSVG id={'calendar'} />
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {activeDateModal ? (
        <div className="date-sort__modal-date modal-date">
          {dateItems.map((item) => (
            <p
              className={item.id - 1 === slide ? 'modal-date__item-active' : 'modal-date__item'}
              onClick={() => selectDateSortItem(item.id)}
              key={item.id}
            >
              {item.title}
            </p>
          ))}
          <div className="modal-date__exact exact">
            <p className="exact__title">Указать даты</p>
            <input
              ref={inputDateFrom}
              className="exact__input-date"
              type="text"
              placeholder="__.__.__"
              onFocus={() => {
                inputDateFrom.current.type = 'date';
                inputDateTo.current.type = 'date';
                inputDateFrom.current.className = 'exact__input-date-focus';
                inputDateTo.current.className = 'exact__input-date-focus';
              }}
              onChange={(e) => setExactDateForm(e.target.value)}
            />
            <span>-</span>
            <input
              ref={inputDateTo}
              className="exact__input-date"
              type="text"
              placeholder="__.__.__"
              onFocus={() => {
                inputDateTo.current.type = 'date';
                inputDateFrom.current.type = 'date';
                inputDateTo.current.className = 'exact__input-date-focus';
                inputDateFrom.current.className = 'exact__input-date-focus';
              }}
              onChange={(e) => setExactDateTo(e.target.value)}
            />
            <div className="exact__icon" onClick={() => selectExactDates(exactDateFrom, exactDateTo)}>
              <CallsSVG id={'calendar'} />
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default CallsDateSort;
