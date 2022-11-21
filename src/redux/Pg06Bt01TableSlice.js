
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPg06Bt01Data = createAsyncThunk(
    'Pg06Bt01Data/fetchPg06Bt01Data',
    async (value, thunkAPI) => {
        console.log('value', value)
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`https://tstauth.smartgate-egypt.com/jobs/Pg06Bt01/${value.t101}/${value.t103}`, {
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

const Pg06Bt01DataSlice = createSlice({
    name: 'Pg06Bt01Data',
    initialState: {
        Pg06Bt01Data:
            //  localStorage.getItem("userDetailsData")
            // ? JSON.parse(localStorage.getItem("userDetailsData"))
            // : 
            [],
        loading: false,
        error: null
    },
 
    extraReducers: {

        //fetch
        [fetchPg06Bt01Data.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPg06Bt01Data.fulfilled]: (state, action) => {
            state.Pg06Bt01Data = action.payload;
            state.loading = false;
        },
        [fetchPg06Bt01Data.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    },
});
 
export default Pg06Bt01DataSlice.reducer;

