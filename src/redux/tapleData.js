
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTapleData = createAsyncThunk(
  'tapleData/fetchTapleData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('https://smartgate-egypt.com/Jobs/GetAll',{
         Authorization:JSON.parse(localStorage.getItem("access-token")),
         mode:'no-cors'

      });
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
 

const tapleDataSlice = createSlice({
  name: 'tapleData',
  initialState: { tapleData: [], loading: false, error: null },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchTapleData.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchTapleData.fulfilled]: (state, action) => {
      state.tapleData = action.payload;
      state.loading = false;
    },
    [fetchTapleData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default tapleDataSlice.reducer;

