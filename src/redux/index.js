import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import axios from 'axios';

const URL = "https://uniserv.azhar-edu.org/Security/CollegeUsers/TryLogin";

// fetching
export const insertUserData = createAsyncThunk("user/insertUserData",
  async (values, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
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

// .then(({data,status}) => {
//       if (status ===200) {
//           localStorage.setItem(
//               "current-user",
//               JSON.stringify(data)
//           );
//           localStorage.setItem(
//               "access-token",
//               JSON.stringify(data.token)
//           );
//           return data;
//        }

//   }

 
const initialState = {
  users:{},
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

      state.users=action.payload;
      state.loading = false;
    },

    [insertUserData.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  }

})

export default userSlice.reducer;






