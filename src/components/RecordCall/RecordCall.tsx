import React from 'react';
import CallsSVG from '../SVG/CallsSVG';

import './recordcall.scss';

interface RecordCallProps {
  recordUrl: string;
  duration: string;
  durationEl: React.MutableRefObject<any>;
}

const RecordCall: React.FC<RecordCallProps> = ({ recordUrl, duration, durationEl }) => {
  const [play, setPlay] = React.useState(false);
  const [seconds, setSeconds] = React.useState('');
  const record = React.useRef(null);
  const [closeRecord, setCloseRecord] = React.useState(false);

  React.useEffect(() => {
    const interval = setInterval(() => {
      if (record.current) {
        setSeconds(Math.floor(record.current?.currentTime).toString());
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [record.current]);

  const togglePlay = () => {
    if (play) {
      record.current?.pause();
      setPlay(false);
    }
    if (!play) {
      record.current?.play();
      setPlay(true);
      durationEl.current.style = 'display: none';
    }
  };

  const rewind = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    record.current.currentTime = value;
  };

  const onClose = () => {
    setCloseRecord(true);
    durationEl.current.style = 'display: none';
  };

  return (
    <>
      {closeRecord ? (
        <div>{duration}</div>
      ) : (
        <div className={play ? 'record-call-active' : 'record-call'}>
          <div className="record-call__timer">{duration}</div>
          <div className="record-call__toggle" onClick={() => togglePlay()}>
            {play ? <CallsSVG id={'pause'} /> : <CallsSVG id={'play'} />}
          </div>
          <div className="record-call__progress progress">
            <input
              className="progress__bar"
              type="range"
              min="0"
              max={Math.floor(record.current?.duration).toString()}
              value={seconds}
              onChange={(e) => rewind(e)}
            />
          </div>
          <div className="record-call__download">
            <a href={recordUrl} download="record.mp3">
              <CallsSVG id={'download'} />
            </a>
          </div>
          <div className="record-call__close" onClick={() => onClose()}>
            {play ? <CallsSVG id={'close'} /> : ''}
          </div>
          <audio ref={record} src={recordUrl} />
        </div>
      )}
    </>
  );
};

export default RecordCall;
