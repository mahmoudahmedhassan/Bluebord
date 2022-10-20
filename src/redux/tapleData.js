import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
 const URL = 'https://tstm.smartgate-egypt.com/api/Values/GAJ';

export const fetchTapleData = createAsyncThunk(
    'tapleData/fetchTapleData',
    async (_,thunkAPI)=>{
        const { rejectWithValue}= thunkAPI;
        try{
         const res = await fetch(URL);
         const data = await res.json();
         return data
        }
        catch(err){
            return rejectWithValue(err.message);
        }
    }
  )

  const initialState = {
    tapleData:[],
    loading: false,
    error: null,
   }
  
  export const tapleDataSlice= createSlice({
    name: 'tapleData',
    initialState,
    extraReducers:{
        
    [fetchTapleData.pending]: (state) => {
        state.loading = true;
        state.error = null;
      },
      [fetchTapleData.fulfilled]: (state, action) => {
        state.tapleData = action.payload;
        state.loading = false;
      },
      [fetchTapleData.rejected]: (state, action) => {
        state.error = action.payload;
        state.loading = false;
      },

    }
  })

  export default tapleDataSlice