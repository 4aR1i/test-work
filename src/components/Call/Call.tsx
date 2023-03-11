import React from 'react';

import CallsSVG from '../SVG/CallsSVG';
import { Calls } from '../../redux/slices/callsSlice';
import { useGetRecords } from '../../hooks/useGetRecords';
import RecordCall from '../RecordCall/RecordCall';

const Call: React.FC<Calls> = ({ duration, type, employee, time, partner_data, record, partnerId }) => {
  const url = useGetRecords(record, partnerId);
  const durationEl = React.useRef(null);

  return (
    <tr>
      <td className="table__checkbox"></td>
      <td className="table__type">
        {duration > '0' && type === 1 ? (
          <CallsSVG id={'incoming'} />
        ) : duration > '0' && type === 0 ? (
          <CallsSVG id={'outgoing'} />
        ) : duration === '' && type === 1 ? (
          <CallsSVG id={'missedIncoming'} />
        ) : (
          <CallsSVG id={'missedOutgoing'} />
        )}
      </td>
      <td className="table__time">{time}</td>
      <td className="table__employee">
        <img src={employee ? employee : 'https://lk.skilla.ru/img/noavatar.jpg'} alt="Person" />
      </td>
      <td className="table__phone">{partner_data.phone}</td>
      <td className="table__origin">{partner_data.origin}</td>
      <td className="table__grade"></td>
      <td className="table__duration">
        <span ref={durationEl}>{duration}</span>
        {record !== '' && partnerId !== '' ? <RecordCall recordUrl={url} duration={duration} durationEl={durationEl} /> : ''}
      </td>
    </tr>
  );
};

export default Call;
