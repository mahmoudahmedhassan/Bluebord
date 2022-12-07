
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API';

export const fetchPG5MdData = createAsyncThunk(
    'PG5MdData/fetchPG5MdData',
    async (value, thunkAPI) => {
         const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${BaseURL}jobs/PG05TbInfo/${value.t101String}/${value.t102}`, {
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

 

const PG5MdDataSlice = createSlice({
    name: 'PG5MdData',
    initialState: {
        PG5MdData:
            //  localStorage.getItem("userDetailsData")
            // ? JSON.parse(localStorage.getItem("userDetailsData"))
            // : 
            [],
        loading: false,
        error: null
    },
 
    extraReducers: {

        //fetch
        [fetchPG5MdData.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPG5MdData.fulfilled]: (state, action) => {
            state.PG5MdData = action.payload;
            state.loading = false;
        },
        [fetchPG5MdData.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    },
});
 
export default PG5MdDataSlice.reducer;

