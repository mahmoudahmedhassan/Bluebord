 
import { createSlice } from "@reduxjs/toolkit";

const switchDrictionSlice = createSlice({
  name: 'Student',
  initialState: {
    dirction: localStorage.getItem("lang")
    ? JSON.parse(localStorage.getItem("lang"))
    : 'en',  },

  reducers: {
    toggleSwitchAr: (state, action) => {
      state.dirction = action.payload;
      localStorage.setItem("lang", JSON.stringify(state.dirction));

    },
    toggleSwitchEn: (state, action) => {
      state.dirction = action.payload;
      localStorage.setItem("lang", JSON.stringify(state.dirction));

    },
  }
});

export const {
  toggleSwitchAr,
  toggleSwitchEn
  
} = switchDrictionSlice.actions;
export default switchDrictionSlice.reducer;