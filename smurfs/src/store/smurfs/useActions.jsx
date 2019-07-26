import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import axios from '../../helpers/axiosConfig';
import {
    ADD_SMURF_FAIL,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS,
    DELETE_SMURF_FAILURE,
    DELETE_SMURF_START,
    DELETE_SMURF_SUCCESS,
    FETCH_SMURF_FAILURE,
    FETCH_SMURF_START,
    FETCH_SMURF_SUCCESS,
    UPDATE_SMURF_FAILURE,
    UPDATE_SMURF_START,
    UPDATE_SMURF_SUCCESS
} from 'types';


export const useActions = () => {
    const dispatch = useDispatch();

    const fetchSmurf = useCallback(() => {
        dispatch({type: FETCH_SMURF_START});
        axios.get('/smurfs').then(smurf => dispatch({
            type: FETCH_SMURF_SUCCESS,
            payload: smurf.data
        })).catch(error => dispatch({type: FETCH_SMURF_FAILURE, payload: error}))
    }, []);

    const addSmurf = useCallback(smurf => {
        dispatch({type: ADD_SMURF_START});
        axios.post('/smurfs', smurf).then(smurf => dispatch({
            type: ADD_SMURF_SUCCESS,
            payload: smurf.data
        })).catch(error => dispatch({type: ADD_SMURF_FAIL, payload: error}))
    }, []);

    const updateSmurf = useCallback(smurf => {
        dispatch({type: UPDATE_SMURF_START});
        axios.put(`/smurfs/${smurf.id}`, smurf).then(smurf => dispatch({
            type: UPDATE_SMURF_SUCCESS,
            payload: smurf.data
        })).catch(error => dispatch({type: UPDATE_SMURF_FAILURE, payload: error}))
    }, []);

    const deleteSmurf = useCallback(id => {
        dispatch({type: DELETE_SMURF_START});
        axios.delete(`/smurfs/${id}`).then(smurf => dispatch({
            type: DELETE_SMURF_SUCCESS,
            payload: smurf.data
        })).catch(error => dispatch({type: DELETE_SMURF_FAILURE, payload: error}))
    }, [])

    return {fetchSmurf, addSmurf, updateSmurf, deleteSmurf}
};
