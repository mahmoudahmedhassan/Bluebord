
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API'

export const fetchPG10TbData = createAsyncThunk(
    'PG10TbData/fetchPG10TbData',
    async (_, thunkAPI) => {
        console.log(BaseURL)
          const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`${BaseURL}jobs/PG09`, {
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

 

const PG10TbDataSlice = createSlice({
    name: 'PG10TbData',
    initialState: {
        PG10TbData:[],
        loading: false,
        error: null
    },
 
    extraReducers: {

        //fetch
        [fetchPG10TbData.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPG10TbData.fulfilled]: (state, action) => {
            state.PG10TbData = action.payload;
            state.loading = false;
        },
        [fetchPG10TbData.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    },
});
 
export default PG10TbDataSlice.reducer;

