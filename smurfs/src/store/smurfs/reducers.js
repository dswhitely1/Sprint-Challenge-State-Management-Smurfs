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
} from './types';
import {createReducer} from "../../helpers/createReducer";

const initialState = {
    smurfs: [],
    isLoading: false,
    errors: null
};

const retrieveSmurfStart = (state, payload) => ({...state, isLoading: true, errors: null});

const retrieveSmurfSuccess = (state, payload) => ({...state, isLoading: false, smurfs: payload, errors: null});

const retrieveSmurfError = (state, payload) => ({...state, isLoading: false, error: payload});

const addSmurfStart = (state, payload) => ({...state, isLoading: true, errors: null});

const addSmurfSuccess = (state, payload) => ({...state, isLoading: false, smurfs: payload, errors: null});

const addSmurfFail = (state, payload) => ({...state, isLoading: false, error: payload});

const editSmurfStart = (state, payload) => ({...state, isLoading: true, errors: null});

const editSmurfSuccess = (state, payload) => ({...state, isLoading: false, smurfs: payload, errors: null});

const editSmurfFail = (state, payload) => ({...state, isLoading: false, error: payload});

const sendSmurfToVolcanoStart = (state, payload) => ({...state, isLoading: true, errors: null});

const sendSmurfToVolcanoSuccess = (state, payload) => ({...state, isLoading: false, smurfs: payload, errors: null});

const sendSmurfToVolcanoFail = (state, payload) => {
    // THIS SHOULD NEVER FAIL, JUST PUSH HIS BLUE ARSE IN
    return {...state, isLoading: false, error: payload}
};

export default createReducer(initialState, {
    [ADD_SMURF_START]: addSmurfStart,
    [ADD_SMURF_SUCCESS]: addSmurfSuccess,
    [ADD_SMURF_FAIL]: addSmurfFail,
    [FETCH_SMURF_START]: retrieveSmurfStart,
    [FETCH_SMURF_SUCCESS]: retrieveSmurfSuccess,
    [FETCH_SMURF_FAILURE]: retrieveSmurfError,
    [UPDATE_SMURF_START]: editSmurfStart,
    [UPDATE_SMURF_SUCCESS]: editSmurfSuccess,
    [UPDATE_SMURF_FAILURE]: editSmurfFail,
    [DELETE_SMURF_START]: sendSmurfToVolcanoStart,
    [DELETE_SMURF_SUCCESS]: sendSmurfToVolcanoSuccess,
    [DELETE_SMURF_FAILURE]: sendSmurfToVolcanoFail
})