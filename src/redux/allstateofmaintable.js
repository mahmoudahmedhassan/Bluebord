import { createSlice } from '@reduxjs/toolkit';

const stateOfMainTable = createSlice({
    name: 'alarm',
    initialState: {
      Show:false,
    },
    reducers: {
        toggleModal: (state,action) => {
        state.Show = action.payload;
      },
    }
});

export const {toggleModal} = stateOfMainTable.actions;
export default stateOfMainTable.reducer;