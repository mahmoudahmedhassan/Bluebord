import { createSlice } from '@reduxjs/toolkit';

const initialState ={
    toggle:true,
  }
export const toggleSlice = createSlice({
    name: 'toggle',
    initialState,
    reducer:{
        openSidebar:(stata,action) => {
            stata.toggle=action.payload;
        },
    },

   })
  export const {openSidebar}= toggleSlice.actions;
  export default toggleSlice.reducer; 