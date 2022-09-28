import { configureStore } from '@reduxjs/toolkit'
import users from './index'
export  const store = configureStore({
  reducer: {
    users 
 },
})