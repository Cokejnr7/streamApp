import ACTION_TYPES from "./types";
import stream from '../api/streams';
import history from '../history';

//SIGNS USER IN 
export const signIn = (userId) => {
    return {
        type: ACTION_TYPES.SIGN_IN,
        payload: userId
    }
}

//SIGNS USER OUT
export const signOut = () => {
    return {
        type: ACTION_TYPES.SIGN_OUT
    }
}

//CREATES NEW STREAM - POST
export const createStream = formValues => async (dispatch, getState) => {
    const { userId } = getState().auth
    const response = await stream.post('/streams', { ...formValues, userId });
    dispatch({ type: ACTION_TYPES.CREATE_STREAM, payload: response.data });
    history.push('/')
}

//FETCHES ALREADY EXISTING STREAM - GET
export const fetchStream = id => async dispatch => {
    const response = await stream.get(`/streams/${id}`);
    dispatch({ type: ACTION_TYPES.FETCH_STREAM, payload: response.data });
}

//FETCHES ALL STREAMS - GET
export const fetchStreams = () => async dispatch => {
    const response = await stream.get('/streams');
    dispatch({ type: ACTION_TYPES.FETCH_STREAMS, payload: response.data });
}

//DELETES A STREAM - DELETE
export const deleteStream = id => async dispatch => {
    await stream.delete(`/streams/${id}`)
    dispatch({ type: ACTION_TYPES.DELETE_STREAM, payload: id });
    history.push('/')
}

//EDITS A STREAM - PUT
export const editStream = (id, formValues) => async dispatch => {
    const response = await stream.patch(`/streams/${id}`, formValues);
    dispatch({ type: ACTION_TYPES.EDIT_STREAM, payload: response.data });
    history.push('/')
}