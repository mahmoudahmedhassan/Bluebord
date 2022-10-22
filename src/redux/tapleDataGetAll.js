
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const URL ="https://tstauth.smartgate-egypt.com/Jobs/Getall";

export const fetchTapleDataGitAll = createAsyncThunk(
  'tapleDataGitAll/fetchTapleData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://tstauth.smartgate-egypt.com/Jobs/Getall");
      console.log(res)
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

 const tapleDataGetAllSlice = createSlice({
  name: 'tapleDataGitAll',
  initialState: { tapleDataGitAll: [], loading: false, error: null },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchTapleDataGitAll.pending]: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    [fetchTapleDataGitAll.fulfilled]: (state, action) => {
      state.tapleDataGitAll = action.payload;
      state.loading = false;
    },
    [fetchTapleDataGitAll.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default tapleDataGetAllSlice.reducer;

