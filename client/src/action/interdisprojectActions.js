import axios from 'axios';
import { GET_INTER_PROJECTS, INTER_PROJECTS_LOADING } from './types';

export const getInterDisProjects = () => dispatch => {
    dispatch(setInterDisProjectsLoading());
    axios
        .get('/api/interdisproj')
        .then(res => 
            dispatch({
                type: GET_INTER_PROJECTS,
                payload: res.data
            })
        )
}

export const setInterDisProjectsLoading = () => {
    return {
        type: INTER_PROJECTS_LOADING
    }
}