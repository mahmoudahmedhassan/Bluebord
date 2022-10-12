import { configureStore } from '@reduxjs/toolkit'
import users from './index';
import toggle from './togglesidebar';
export  const store = configureStore({
  reducer: {
    users ,
    toggle
 },
})