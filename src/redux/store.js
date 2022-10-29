import { configureStore } from '@reduxjs/toolkit'
import users from './index';
import dirction from './toggledirction';
import formData from './formData';
import switchSidebar from './switchSidebar';
import tapleDataSlice from './tapleData';
import tapleDataGetAllSlice from './tapleDataGetAll';
import tapleDataGetHidSlice from './tapleDataGetHid';
import tapleDataGetFinSlice from './tapleDataGitFin';
import UsersTapleDataSlice from './usersTaple';
import UserTapleDataSlice from './userDetailsTapleData';
import UsersTapleData_2Slice from './usersTaple_2';
import UserTapleData_2Slice from './userDetailsTapleData_2';


export  const store = configureStore({
  reducer: {
    users ,
    dirction,
    switchSidebar,
    formData,
    tapleDataSlice,
    tapleDataGetAllSlice,
    tapleDataGetHidSlice,
    tapleDataGetFinSlice,
    UsersTapleDataSlice,
    UserTapleDataSlice,
    UsersTapleData_2Slice,
    UserTapleData_2Slice

  },
})