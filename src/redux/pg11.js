
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPG11TbData = createAsyncThunk(
    'PG11TbData/fetchPG11TbData',
    async (value, thunkAPI) => {
        console.log(value)
          const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`https://tstauth.smartgate-egypt.com/jobs/PG09Ch01/${value}`, {
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

 

const PG11TbDataSlice = createSlice({
    name: 'PG10TbData',
    initialState: {
        PG11TbData:[],
        loading: false,
        error: null
    },
 
    extraReducers: {

        //fetch
        [fetchPG11TbData.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPG11TbData.fulfilled]: (state, action) => {
            state.PG10TbData = action.payload;
            state.loading = false;
        },
        [fetchPG11TbData.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    },
});
 
export default PG11TbDataSlice.reducer;

