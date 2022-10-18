import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import axios from 'axios';

const URL = " ";

// fetching
export const formData = createAsyncThunk("user/formData",
  async (values, thunkAPI) => {
    console.log(values)
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      const data = await res.json();
      localStorage.setItem(
        "tabledata",
        JSON.stringify(data)
      );
      return data
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
)

const initialState = {
  tableData: [],
  loading: null,
  error: null
}

export const formDataSlice = createSlice({
  name: 'taple',
  initialState,
  extraReducers: {

    [formData.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },

    [formData.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
      state.loading = false;
    
    },
    [formData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }

})

export default formDataSlice.reducer;






