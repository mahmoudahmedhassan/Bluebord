
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API'

export const fetchUserDetailsTapleData_2 = createAsyncThunk(
    'userTapleData_2/fetchUserDetailsTapleData_2',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${BaseURL}jobs/getinfoprod/${id}`, {
                headers: {
                    DataType: "JSON",
                    Authorization:
                      "Bearer " + JSON.parse(localStorage.getItem("access-token")),
                    mode: 'cors',
                    Accept: 'application/json',
                  },
            });
            const data = await res.json();
            localStorage.setItem(
                "userDetailsData_2",
                JSON.stringify(data)
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const UserTapleData_2Slice = createSlice({
    name: 'userTapleData_2',
    initialState: {
        userTapleData_2: localStorage.getItem("userDetailsData_2")
        ? JSON.parse(localStorage.getItem("userDetailsData_2"))
        : [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {

        //fetch
        [fetchUserDetailsTapleData_2.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchUserDetailsTapleData_2.fulfilled]: (state, action) => {
            state.userTapleData_2 = action.payload;
            state.loading = false;
        },
        [fetchUserDetailsTapleData_2.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export default UserTapleData_2Slice.reducer;

