
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchUsersTapleData_2 = createAsyncThunk(
  'usrsTapleData_2/fetchUsersTapleData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI; 
    try {
      const res = await fetch('https://tstauth.smartgate-egypt.com/jobs/getprod', {
      });
       const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

 const UsersTapleData_2Slice = createSlice({
  name: 'usrsTapleData_2',
  initialState: { usrsTapleData_2: [], loading: false, error: null },
  reducers: {},
  extraReducers: {

    //fetch
    [fetchUsersTapleData_2.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsersTapleData_2.fulfilled]: (state, action) => {
      state.usrsTapleData_2 = action.payload;
      state.loading = false;
    },
    [fetchUsersTapleData_2.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default UsersTapleData_2Slice.reducer;

