import axios from 'axios';
import { GET_WEB_PROJECTS, WEB_PROJECTS_LOADING } from './types';

export const getWebProjects = () => dispatch => {
    dispatch(setWebProjectsLoading());
    axios
        .get('/api/webproj')
        .then(res => 
            dispatch({
                type: GET_WEB_PROJECTS,
                payload: res.data
            })
        )
}

export const setWebProjectsLoading = () => {
    return {
        type: WEB_PROJECTS_LOADING
    }
}