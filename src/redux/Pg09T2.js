
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API';

export const fetchPG09T2Data = createAsyncThunk(
    'PG09T2Data/fetchPG09T2Data',
    async (value, thunkAPI) => {
        console.log(value)
         const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${BaseURL}jobs/Pg09T2/${value.sd}/${value.t101}`, {
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

 

const PG09T2DataSlice = createSlice({
    name: 'PG09T2Data',
    initialState: {
        PG09T2Data:
            //  localStorage.getItem("userDetailsData")
            // ? JSON.parse(localStorage.getItem("userDetailsData"))
            // : 
            [],
        loading: false,
        error: null
    },
 
    extraReducers: {

        //fetch
        [fetchPG09T2Data.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPG09T2Data.fulfilled]: (state, action) => {
            state.PG09T2Data = action.payload;
            state.loading = false;
        },
        [fetchPG09T2Data.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    },
});
 
export default PG09T2DataSlice.reducer;

