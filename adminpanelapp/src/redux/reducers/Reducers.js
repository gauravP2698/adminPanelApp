import {  combineReducers } from 'redux'; 
import userList from './userList'; 

const reducers = combineReducers({   
    userList:userList
 })  
export default reducers;