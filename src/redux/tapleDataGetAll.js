
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTapleDataGitAll = createAsyncThunk(
  'tapleDataGitAll/fetchTapleData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("https://tstauth.smartgate-egypt.com/Jobs/Getall",{
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
        "tapleDataGitAll",
        JSON.stringify(data)
      );

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const tapleDataGetAllSlice = createSlice({
  name: 'tapleDataGitAll',
  initialState: {
    tapleDataGitAll:localStorage.getItem("tapleDataGitAll")
    ? JSON.parse(localStorage.getItem("tapleDataGitAll"))
    : [],
    loadingGitAll: false,
    errorGitAll: null
  },
  reducers: {},
  extraReducers: {
    //fetch
    [fetchTapleDataGitAll.pending]: (state, action) => {
      state.loadingGitAll = true;
      state.errorGitAll = null;
    },
    [fetchTapleDataGitAll.fulfilled]: (state, action) => {
      state.tapleDataGitAll = action.payload;
      state.loadingGitAll = false;
    },
    [fetchTapleDataGitAll.rejected]: (state, action) => {
      state.errorGitAll = action.payload;
      state.loadingGitAll = false;
    },
  },
});

export default tapleDataGetAllSlice.reducer;

