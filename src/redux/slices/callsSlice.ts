import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export type Calls = {
  id: number;
  type: number;
  employee: string;
  date: string;
  time: string;
  partner_data: {
    origin: string;
    phone: string;
  };
  duration: string;
  record: string;
  partnerId: string;
};

interface CallsState {
  calls: Calls[];
  status: 'loading' | 'success' | 'error';
}

const initialState: CallsState = {
  calls: [],
  status: 'loading',
};

export const fetchCalls = createAsyncThunk('calls/fetchAllCalls', async (params: any) => {
  const { dateFrom, dateTo, type } = params;

  const { data } = await axios({
    method: 'post',
    url: 'https://api.skilla.ru/mango/getList',
    params: {
      date_start: dateFrom,
      date_end: dateTo,
      in_out: type === 'Входящие' ? '1' : type === 'Исходящие' ? '0' : '',
      limit: '50',
    },
    headers: {
      Authorization: 'Bearer testtoken',
    },
  });
  return data.results;
});

export const callsSlice = createSlice({
  name: 'calls',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCalls.pending, (state) => {
      state.status = 'loading';
      state.calls = [];
    });
    builder.addCase(fetchCalls.fulfilled, (state, action) => {
      state.status = 'success';
      const arrCalls: Calls[] = [];
      action.payload.map((call: any) =>
        arrCalls.push({
          id: call.id,
          type: call.in_out,
          employee: call.person_avatar,
          time: call.date.split(' ')[1].split(':').slice(0, 2).join(':'),
          partner_data: {
            origin: call.partner_data.name,
            phone:
              '+' +
              call.partner_data.phone.split('').slice(0, 1).join('') +
              ' (' +
              call.partner_data.phone.split('').slice(1, 4).join('') +
              ') ' +
              call.partner_data.phone.split('').slice(4, 7).join('') +
              '-' +
              call.partner_data.phone.split('').slice(7, 9).join('') +
              '-' +
              call.partner_data.phone.split('').slice(9).join(''),
          },
          duration:
            call.time === 0
              ? ''
              : call.time < 60
              ? `0` + ':' + (call.time > 9 ? `${call.time}` : '0' + `${call.time}`)
              : `${Math.floor(call.time / 60)}` + ':' + (call.time % 60 > 9 ? `${call.time % 60}` : '0' + `${call.time % 60}`),
          date: call.date_notime,
          record: call.record,
          partnerId: call.partnership_id,
        }),
      );
      const uniqCalls = new Set(arrCalls);
      state.calls = Array.from(uniqCalls);
    });
    builder.addCase(fetchCalls.rejected, (state) => {
      state.status = 'error';
      state.calls = [];
    });
  },
});

export const {} = callsSlice.actions;
export default callsSlice.reducer;
