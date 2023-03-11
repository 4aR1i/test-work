import React from 'react';
import { useSelector } from 'react-redux';
import { closeTypeModal, handleTypeModal, selectType } from '../../../redux/slices/typeSortSlice';
import { RootState, useAppDispatch } from '../../../redux/store';
import CallsSVG from '../../SVG/CallsSVG';

import './typesort.scss';

export const typeItems = [
  { id: 1, title: 'Все типы' },
  { id: 2, title: 'Входящие' },
  { id: 3, title: 'Исходящие' },
];

const TypeSort: React.FC = () => {
  const { activeTypeModal, type, selectedType } = useSelector((state: RootState) => state.typeSort);
  const dispatch = useAppDispatch();
  const typeSortRef = React.useRef(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!typeSortRef.current.contains(event.target)) {
        dispatch(closeTypeModal());
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const selectTypeSortItem = (title: string) => {
    dispatch(selectType(title));
  };
  return (
    <div className="type-sort" onClick={() => dispatch(handleTypeModal())} ref={typeSortRef}>
      <div className={selectedType ? 'type-sort__title-active' : 'type-sort__title'}>{type}</div>
      <div className="type-sort__icon">{activeTypeModal ? <CallsSVG id={'arrowTop'} /> : <CallsSVG id={'arrowDown'} />}</div>
      {activeTypeModal ? (
        <div className="type-sort__modal modal-type">
          {typeItems.map((item) => (
            <div
              key={item.id}
              onClick={() => selectTypeSortItem(item.title)}
              className={item.title === type ? 'modal-type__item-active' : 'modal-type__item'}
            >
              {item.title}
            </div>
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default TypeSort;
