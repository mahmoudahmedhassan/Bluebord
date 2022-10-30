
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
export const fetchUserDetailsTapleData = createAsyncThunk(
    'userTapleData/fetchUserDetailsTapleData',
    async (id, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const res = await fetch(`https://tstauth.smartgate-egypt.com/jobs/getinfopress/${id}`, {
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
                "userDetailsData",
                JSON.stringify(data)
            );
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const UserTapleDataSlice = createSlice({
    name: 'userTapleData',
    initialState: {
        userTapleData: localStorage.getItem("userDetailsData")
        ? JSON.parse(localStorage.getItem("userDetailsData"))
        : [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: {

        //fetch
        [fetchUserDetailsTapleData.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchUserDetailsTapleData.fulfilled]: (state, action) => {
            state.userTapleData = action.payload;
            state.loading = false;
        },
        [fetchUserDetailsTapleData.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
    },
});

export default UserTapleDataSlice.reducer;

