import React from 'react';
import Header from './Header/Header';
import Call from '../../components/Call/Call';
import CallsDateSort from '../../components/Modals/CallsDateSort/CallsDateSort';

import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../redux/store';
import { fetchCalls } from '../../redux/slices/callsSlice';

import './calls.scss';
import TypeSort from '../../components/Modals/TypeSort/TypeSort';

const Calls: React.FC = () => {
  const { calls } = useSelector((state: RootState) => state.calls);
  const { dateTo, dateFrom } = useSelector((state: RootState) => state.dateSort);
  const { type } = useSelector((state: RootState) => state.typeSort);

  const dispatch = useAppDispatch();
  const isMounted = React.useRef(false);

  React.useEffect(() => {
    dispatch(fetchCalls({ dateFrom, dateTo, type }));
  }, [dateFrom, dateTo, type]);

  return (
    <div className="calls">
      <Header />
      <div className="calls__wrapper">
        <div className="calls__top">
          <CallsDateSort />
        </div>
        <div className="calls__modals">
          <TypeSort />
        </div>
        <div className="calls__info info">
          <table className="info__table table">
            <thead>
              <tr>
                <th></th>
                <th>Тип</th>
                <th>Время</th>
                <th>Сотрудник</th>
                <th>Звонок</th>
                <th>Источник</th>
                <th>Оценка</th>
                <th>Длительность</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((call) => (
                <Call key={call.id} {...call} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calls;
