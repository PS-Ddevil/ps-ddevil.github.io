import { combineReducers } from 'redux';
import webprojectReducer from './webprojectReducer';
import interdisprojectReducer from './interdisprojectReducer';

export default combineReducers({
    webprojects: webprojectReducer,
    interdisprojects: interdisprojectReducer 
})