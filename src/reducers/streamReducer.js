import _ from 'lodash';
import ACTION_TYPES from "../actions/types";

const streamReducer = (state={},{type,payload})=>{

    switch(type){
        case ACTION_TYPES.EDIT_STREAM:
            return {...state,[payload.id]:payload};
        case ACTION_TYPES.CREATE_STREAM:
            return {...state,[payload.id]:payload};
        case ACTION_TYPES.FETCH_STREAM:
                return {...state,[payload.id]:payload};
        case ACTION_TYPES.FETCH_STREAMS:
            return {...state, ..._.mapKeys(payload,'id')};
        case ACTION_TYPES.DELETE_STREAM:
            return _.omit(state,payload)
        default:
            return state;
    }
}

export default streamReducer;