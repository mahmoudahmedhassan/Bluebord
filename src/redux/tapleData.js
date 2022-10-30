
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchTapleData = createAsyncThunk(
  'tapleData/fetchTapleData',
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch('https://tstAuth.smartgate-egypt.com/Jobs/Getpro', {
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

