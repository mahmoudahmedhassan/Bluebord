
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// const URL ="https://tstauth.smartgate-egypt.com/Jobs/Getall";

export const fetchTapleDataGitHid = createAsyncThunk(
  'tapleDataGitHid/fetchTapleDataGitHid',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://tstAuth.smartgate-egypt.com/Jobs/GetHld");
      console.log(res)
      const data = await res.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

 const tapleDataGetHidSlice = createSlice({
  name: 'tapleDataGitHid',
  initialState: { tapleDataGitHid: [], loadingGitHid: false, errorGitHid: null },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchTapleDataGitHid.pending]: (state, action) => {
      state.loadingGitHid = true;
      state.errorGitHid = null;
    },
    [fetchTapleDataGitHid.fulfilled]: (state, action) => {
      state.tapleDataGitHid = action.payload;
      state.loadingGitHid = false;
    },
    [fetchTapleDataGitHid.rejected]: (state, action) => {
      state.errorGitHid = action.payload;
      state.loadingGitHid = false;
    },
  },
});

export default tapleDataGetHidSlice.reducer;

