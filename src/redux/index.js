import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import axios from 'axios';
import {BaseURL} from '../assets/API';

const URL = "https://tstauth.smartgate-egypt.com/auth/token";

// fetching
export const insertUserData = createAsyncThunk("user/insertUserData",
  async (values, thunkAPI) => {
    console.log(values);
    const { rejectWithValue, getState } = thunkAPI;
    try {
 
      const res = await fetch(`${BaseURL}auth/token`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(values),
        mode: 'cors'

      })
      console.log(res)
      const data = await res.json();
      localStorage.setItem(
        "current-user",
        JSON.stringify(data)
      );
      localStorage.setItem(
        "access-token",
        JSON.stringify(data.token)
      );
       return data
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
)

const initialState = {
  users:  localStorage.getItem("current-user")
  ? JSON.parse(localStorage.getItem("current-user"))
  : {},
  loading: null,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {

    [insertUserData.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },

    [insertUserData.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.users = action.payload;
      state.loading = false;

    },
    [insertUserData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }

})

export default userSlice.reducer;






