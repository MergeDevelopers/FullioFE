import { createSlice } from '@reduxjs/toolkit'

export const pickDate = createSlice({
  name: 'pickDate',
  initialState: {
    pickDay: [],
  },
  reducers: {
    updatePickedDay: (state, action) => {
      const pickDay = action.payload;
      const pickedDays = state.pickDay;
      
      if(pickedDays.includes(pickDay)) {
        state.pickDay = pickedDays.filter(day => day !== pickDay);
        return;
      }
      if(pickedDays.length === 2) {
        state.pickDay = [pickDay];
      } else {
        state.pickDay = [...pickedDays, pickDay].sort((a, b) => a - b);
      }
    },
    clearPickedDay: (state) => {
      state.pickDay = [];
    }
  }
});

export const { 
  updatePickedDay,
  clearPickedDay,
} = pickDate.actions;
export default pickDate.reducer;
