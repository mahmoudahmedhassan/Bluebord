import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
let URL =" https://tstauth.smartgate-egypt.com/jobs/PG05Tp01";

export const fetchEntryDatatablePG05Tp01 =createAsyncThunk(
    'tableDataPG05Tp01/fetchEntryDatatablePG05Tp01',
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
const entryDatatablePG05Tp01Slice =createSlice({
    name: 'tableDataPG05Tp01',
    initialState: { tableDataPG05Tp01: [], loading: false, error: null },
    extraReducers: {
        //fetch
        [fetchEntryDatatablePG05Tp01.pending]: (state,) => {
          state.loading = true;
          state.error = null;
        },
        [fetchEntryDatatablePG05Tp01.fulfilled]: (state, action) => {
          state.tableDataPG05Tp01 = action.payload;
          state.loading = false;
        },
        [fetchEntryDatatablePG05Tp01.rejected]: (state, action) => {
          state.error = action.payload;
          state.loading = false;
        },
      },

})
export default entryDatatablePG05Tp01Slice.reducer;
