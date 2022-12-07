
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {BaseURL} from '../assets/API';
export const fetchPG07Data = createAsyncThunk(
    'PG07Data/fetchPG07Data',
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
       
        try {
            const res = await fetch(`${BaseURL}jobs/Pg07`, {
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

//  delele Post

export const deleteRow = createAsyncThunk('post/deletePost',
    async (id, thunkAPI) => {
        console.log(id)

        const { rejectWithValue } = thunkAPI;

        try {
            await fetch(`https://tstauth.smartgate-egypt.com/jobs/Pg07/${id}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json; charset=UTF-8' }
            })
            return id

        } catch (err) {
            return rejectWithValue(err.message)
        }
    })



const PG07DataSlice = createSlice({
    name: 'PG07Data',
    initialState: {
        PG07Data:
            //  localStorage.getItem("userDetailsData")
            // ? JSON.parse(localStorage.getItem("userDetailsData"))
            // : 
            [],
        loading: false,
        error: null
    },

    extraReducers: {

        //fetch
        [fetchPG07Data.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [fetchPG07Data.fulfilled]: (state, action) => {
            state.PG07Data = action.payload;
            state.loading = false;
        },
        [fetchPG07Data.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },
        // ***************** delete *****************

        [deleteRow.pending]: (state) => {
            state.loading = true;
            state.error = false;
        },
        [deleteRow.fulfilled]: (state, action) => {
            state.PG07Data = state.PG07Data.filter(el => el.id !== action.payload)
            state.loading = false;
        },
        [deleteRow.rejected]: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        },

    },
});

export default PG07DataSlice.reducer;

// axios({
//     method: "post",
//     url: "Alarm/GetNedapAccessControlStatus",
//     baseURL: alarmApiUrl,
//     data: {
//       touchPointIp: ip,
//     },
//     headers: {
//       "Cache-Control": "no-cache",
//       "Content-Type": "application/json",
//     },
//   })
//     .then((responseText) => {
//       res(responseText);
//     })
//     .catch((error) => {
//       rej(error);
//     });