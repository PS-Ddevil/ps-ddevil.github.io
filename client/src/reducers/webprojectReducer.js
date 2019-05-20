import { GET_WEB_PROJECTS, WEB_PROJECTS_LOADING } from '../action/types';

const initialState = {
    webprojects:[],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_WEB_PROJECTS:
            return{
                ...state,
                webprojects: action.payload,
                loading: false
            };
        case WEB_PROJECTS_LOADING:
            return {
                ...state,
                loading: true
            }
            default: 
                return state;
    }
}