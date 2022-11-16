import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
let URL =" https://tstauth.smartgate-egypt.com/jobs/PG05Ch01";

export const fetchEntryDatatable_PG05Ch01 =createAsyncThunk(
    'tableData_PG05Ch01/fetchEntryDatatable_PG05Ch01',
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
 
const entryDatatable_PG05Ch01Slice =createSlice({
    name: 'tableData_PG05Ch01',
    initialState: { tableData_PG05Ch01: [], loading: false, error: null },
    extraReducers: {
        //fetch
        [fetchEntryDatatable_PG05Ch01.pending]: (state,) => {
          state.loading = true;
          state.error = null;
        },
        [fetchEntryDatatable_PG05Ch01.fulfilled]: (state, action) => {
          state.tableData_PG05Ch01 = action.payload;
          state.loading = false;
        },
        [fetchEntryDatatable_PG05Ch01.rejected]: (state, action) => {
          state.error = action.payload;
          state.loading = false;
        },
      },
 })
export default entryDatatable_PG05Ch01Slice.reducer;
