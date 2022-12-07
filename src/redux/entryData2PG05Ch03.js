import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API';

let URL =`${BaseURL}jobs/PG05Ch03`;

export const fetchEntryDatatable_PG05Ch03 =createAsyncThunk(
    'tableData_PG05Ch03/fetchEntryDatatable_PG05Ch03',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(URL, {
        headers: {
          DataType: "JSON",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("access-token")),
          mode: 'cors',
          Accept: 'application/json',
        },
      });
       const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
 )
 
const entryDatatable_PG05Ch03Slice =createSlice({
    name: 'tableData_PG05Ch03',
    initialState: { tableData_PG05Ch03: [], loading: false, error: null },
    extraReducers: {
        //fetch
        [fetchEntryDatatable_PG05Ch03.pending]: (state,) => {
          state.loading = true;
          state.error = null;
        },
        [fetchEntryDatatable_PG05Ch03.fulfilled]: (state, action) => {
          state.tableData_PG05Ch03 = action.payload;
          state.loading = false;
        },
        [fetchEntryDatatable_PG05Ch03.rejected]: (state, action) => {
          state.error = action.payload;
          state.loading = false;
        },
      },
 })
export default entryDatatable_PG05Ch03Slice.reducer;
