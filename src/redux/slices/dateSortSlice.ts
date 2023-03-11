import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import { dateItems } from '../../components/Modals/CallsDateSort/CallsDateSort';

const dateToday = dayjs().toISOString().slice(0, 10);
const datePerThreeDays = dayjs().subtract(3, 'day').toISOString().slice(0, 10);
const datePerWeek = dayjs().subtract(7, 'day').toISOString().slice(0, 10);
const datePerMonth = dayjs().subtract(1, 'month').toISOString().slice(0, 10);
const datePerYear = dayjs().subtract(1, 'year').toISOString().slice(0, 10);

interface DateSort {
  slide: number;
  activeDateModal: boolean;
  dateTo: string;
  dateFrom: string;
}

const initialState: DateSort = {
  slide: 0,
  activeDateModal: false,
  dateTo: dateToday,
  dateFrom: datePerThreeDays,
};

export const dateSortSlice = createSlice({
  name: 'dateSort',
  initialState,
  reducers: {
    changeSlide(state, action) {
      let slideCount = 0;
      if (state.slide + action.payload < 0) {
        slideCount = dateItems.length - 1;
      } else {
        slideCount = (state.slide + action.payload) % dateItems.length;
      }
      state.slide = slideCount;
      if (slideCount + 1 === 1) {
        state.dateFrom = datePerThreeDays;
      } else if (slideCount + 1 === 2) {
        state.dateFrom = datePerWeek;
      } else if (slideCount + 1 === 3) {
        state.dateFrom = datePerMonth;
      } else if (slideCount + 1 === 4) {
        state.dateFrom = datePerYear;
      }
    },
    handleDateModal(state) {
      state.activeDateModal = !state.activeDateModal;
    },
    closeDateModal(state) {
      state.activeDateModal = false;
    },
    goToSlide(state, action) {
      state.slide = (action.payload - 1) % dateItems.length;
    },
    changeDateFrom(state, action) {
      if (action.payload === 1) {
        state.dateFrom = datePerThreeDays;
      } else if (action.payload === 2) {
        state.dateFrom = datePerWeek;
      } else if (action.payload === 3) {
        state.dateFrom = datePerMonth;
      } else if (action.payload === 4) {
        state.dateFrom = datePerYear;
      }
    },
    enterDateFrom(state, action) {
      state.dateFrom = action.payload;
    },
    enterDateTo(state, action) {
      state.dateTo = action.payload;
    },
  },
});

export const { changeSlide, handleDateModal, closeDateModal, goToSlide, changeDateFrom, enterDateFrom, enterDateTo } =
  dateSortSlice.actions;
export default dateSortSlice.reducer;
