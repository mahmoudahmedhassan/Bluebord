import { configureStore } from '@reduxjs/toolkit'
import users from './index';
import dirction from './toggledirction';
import formData from './formData';
import switchSidebar from './switchSidebar';
import tapleDataSlice from './tapleData'
export  const store = configureStore({
  reducer: {
    users ,
    dirction,
    switchSidebar,
    formData,
    tapleDataSlice
  },
})