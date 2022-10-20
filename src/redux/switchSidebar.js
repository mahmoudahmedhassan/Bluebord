 
import { createSlice } from "@reduxjs/toolkit";

const switcherSidebarSlice = createSlice({
  name: 'switchSidebar',
  initialState: {
    witchSidebar: false,
  },

  reducers: {
    switerSidebar: (state, action) => {
      state.witchSidebar = action.payload;
    },
  }
});

export const {
 switerSidebar
} = switcherSidebarSlice.actions;
export default switcherSidebarSlice.reducer;