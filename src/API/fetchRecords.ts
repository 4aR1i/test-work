import axios from "axios";

export const fetchRecords = async (record: string, partnerId: string) => {
  if (record === '' || partnerId === '') return;
  const { data } = await axios({
    method: 'post',
    url: 'https://api.skilla.ru/mango/getRecord',
    params: { record: record, partnership_id: partnerId },
    headers: {
      Authorization: 'Bearer testtoken',
      'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    },
    responseType: 'blob',
  });
  let url = URL.createObjectURL(data);
  return url;
};
