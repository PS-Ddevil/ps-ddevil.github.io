import { GET_INTER_PROJECTS, INTER_PROJECTS_LOADING } from '../action/types';

const initialState = {
    interdisprojects:[],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_INTER_PROJECTS:
            return{
                ...state,
                interdisprojects: action.payload,
                loading: false
            };
        case INTER_PROJECTS_LOADING:
            return {
                ...state,
                loading: true
            }
            default: 
                return state;
    }
}