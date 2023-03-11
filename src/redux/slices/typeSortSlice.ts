import { createSlice } from '@reduxjs/toolkit';

interface TypeSort {
  activeTypeModal: boolean;
  type: string;
  selectedType: boolean;
}

const initialState: TypeSort = {
  activeTypeModal: false,
  type: 'Все типы',
  selectedType: false,
};

const typeSortSlice = createSlice({
  name: 'typeSort',
  initialState,
  reducers: {
    handleTypeModal(state) {
      state.activeTypeModal = !state.activeTypeModal;
    },
    closeTypeModal(state) {
      state.activeTypeModal = false;
    },
    selectType(state, action) {
      state.type = action.payload;
      state.selectedType = true;
    },
  },
});

export const { handleTypeModal, selectType, closeTypeModal } = typeSortSlice.actions;
export default typeSortSlice.reducer;
