 
import { createSlice } from "@reduxjs/toolkit";

const switchDrictionSlice = createSlice({
  name: 'Student',
  initialState: {
    dirction: 'en',
  },

  reducers: {
    toggleSwitchAr: (state, action) => {
      state.dirction = action.payload;
    },
    toggleSwitchEn: (state, action) => {
      state.dirction = action.payload;
    },
  }
});

export const {
  toggleSwitchAr,
  toggleSwitchEn
  
} = switchDrictionSlice.actions;
export default switchDrictionSlice.reducer;