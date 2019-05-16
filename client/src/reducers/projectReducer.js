import { GET_PROJECTS, PROJECTS_LOADING } from '../action/types';

const initialState = {
    projects:[],
    loading: false
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_PROJECTS:
            return{
                ...state,
                projects: action.payload,
                loading: false
            };
        case PROJECTS_LOADING:
            return {
                ...state,
                loading: true
            }

            default: 
                return state;
    }
}