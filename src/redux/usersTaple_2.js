
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API'

export const fetchUsersTapleData_2 = createAsyncThunk(
  'usrsTapleData_2/fetchUsersTapleData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI; 
    try {
      const res = await fetch(`${BaseURL}jobs/getprod`, {
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

