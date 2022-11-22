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
import switchTableDataPage3 from './switchTableDataPage3';
import stateOfMainTable from './allstateofmaintable';
import entryDatatablePG05Tp01Slice from './entryData2PG05Tp01';
import entryDatatable_PG05Ch01Slice from './entryData2PG05Ch01';
import entryDatatable_PG05Ch02Slice from './entryData2PG05Ch02';
import entryDatatable_PG05Ch03Slice from './entryData2PG05Ch03'; 
import PG5MdDataSlice from './PG5MdSlice';
import Pg06Bt01DataSlice from './Pg06Bt01TableSlice';
import PG07DataSlice from './PG07Slice'
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
    UserTapleData_2Slice,
    switchTableDataPage3,
    stateOfMainTable,
    entryDatatablePG05Tp01Slice,
    entryDatatable_PG05Ch01Slice,
    entryDatatable_PG05Ch02Slice,
    entryDatatable_PG05Ch03Slice,
    PG5MdDataSlice,
    Pg06Bt01DataSlice,
    PG07DataSlice,

  },
})