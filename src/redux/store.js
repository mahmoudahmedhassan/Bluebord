import { configureStore } from '@reduxjs/toolkit'
import users from './index';
import dirction from './toggledirction';
import formData from './formData';
export  const store = configureStore({
  reducer: {
    users ,
    dirction,
    formData
  },
})