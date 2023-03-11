import { useEffect, useState } from 'react';
import { fetchRecords } from '../API/fetchRecords';

export const useGetRecords = (record: string, partnerId: string) => {
  const [urlRecord, setUrlRecord] = useState('');
  useEffect(() => {
    fetchRecords(record, partnerId).then((res) => setUrlRecord(res));
  }, [record, partnerId]);
  return urlRecord;
};
