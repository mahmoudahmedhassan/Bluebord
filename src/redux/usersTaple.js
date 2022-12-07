
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API'

export const fetchUsersTapleData = createAsyncThunk(
  'usrsTapleData/fetchUsersTapleData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI; 
    try {
      const res = await fetch(`${BaseURL}jobs/getfinpress`, {
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

 const UsersTapleDataSlice = createSlice({
  name: 'usrsTapleData',
  initialState: { usrsTapleData: [], loading: false, error: null },
  reducers: {},
  extraReducers: {

    //fetch
    [fetchUsersTapleData.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchUsersTapleData.fulfilled]: (state, action) => {
      state.usrsTapleData = action.payload;
      state.loading = false;
    },
    [fetchUsersTapleData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default UsersTapleDataSlice.reducer;

