
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API';

export const fetchPG2Md01Data = createAsyncThunk(
    'PG2Md01Data/fetchPG2Md01Data',
    async (value, thunkAPI) => {
        console.log(value)
         const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${BaseURL}jobs/PG2Md01/${value.id}/${value.id2}`, {
                headers: {
                    DataType: "JSON",
                    Authorization:
                        "Bearer " + JSON.parse(localStorage.getItem("access-token")),
                    mode: 'cors',
                    Accept: 'application/json',
                },
            });
            const data = await res.json();
            // localStorage.setItem(
            //     "userDetailsData",
            //     JSON.stringify(data)
            // );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

 

const PG2Md01DataSlice = createSlice({
    name: 'PG2Md01Data',
    initialState: {
        PG2Md01Data:
            //  localStorage.getItem("userDetailsData")
            // ? JSON.parse(localStorage.getItem("userDetailsData"))
            // : 
            [],
        loading: false,
        error: null
    },
 
    extraReducers: {

        //fetch
        [fetchPG2Md01Data.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPG2Md01Data.fulfilled]: (state, action) => {
            state.PG2Md01Data = action.payload;
            state.loading = false;
        },
        [fetchPG2Md01Data.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    },
});
 
export default PG2Md01DataSlice.reducer;

