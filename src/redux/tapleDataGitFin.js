
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API'

const URL = "https://tstauth.smartgate-egypt.com/Jobs/Getall";

export const fetchTapleDataGitFin = createAsyncThunk(
  'tapleDataGitFin/fetchTapleDataGitFin',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`${BaseURL}/Jobs/Getfin`,{
        headers: {
          DataType: "JSON",
          Authorization:
            "Bearer " + JSON.parse(localStorage.getItem("access-token")),
          mode: 'cors',
          Accept: 'application/json',
        },
      });
      console.log(res)
      const data = await res.json();
      localStorage.setItem(
        "tapleDataGitFin",
        JSON.stringify(data)
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tapleDataGetFinSlice = createSlice({
  name: 'tapleDataGitFin',
  initialState: {
    tapleDataGitFin:  localStorage.getItem("tapleDataGitFin")
    ? JSON.parse(localStorage.getItem("tapleDataGitFin"))
    : [],
    loadingGitFin: false,
    errorGitFin: null
  },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchTapleDataGitFin.pending]: (state, action) => {
      state.loadingGitFin = true;
      state.errorGitFin = null;
    },
    [fetchTapleDataGitFin.fulfilled]: (state, action) => {
      state.tapleDataGitFin = action.payload;
      state.loadingGitAll = false;
    },
    [fetchTapleDataGitFin.rejected]: (state, action) => {
      state.errorGitFin = action.payload;
      state.loadingGitFin = false;
    },
  },
});

export default tapleDataGetFinSlice.reducer;

