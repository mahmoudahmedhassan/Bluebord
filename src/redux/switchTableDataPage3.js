
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWitchTableDataPage3 = createAsyncThunk(
  'switchTableData/fetchWitchTableDataPage3',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI; 
    try {
      const res = await fetch('https://tstauth.smartgate-egypt.com/jobs/PG04Sw01', {
     
      });
       const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

 const switchTableDataPage3 = createSlice({

  name: 'switchTableData',
  initialState: { switchTableData: [], loading: false, error: null },
  reducers: {},
  extraReducers: {

    //fetch
    [fetchWitchTableDataPage3.pending]: (state,) => {
      state.loading = true;
      state.error = null;
    },
    [fetchWitchTableDataPage3.fulfilled]: (state, action) => {
      state.switchTableData = action.payload;
      state.loading = false;
    },
    [fetchWitchTableDataPage3.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default switchTableDataPage3.reducer;

