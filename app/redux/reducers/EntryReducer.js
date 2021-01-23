import {  ADD_ENTRY, ACTION_ENTRY_FAILD, ACTION_ENTRY_SUCCESS, GET_ALL_ENTRIES } from "../Constants";

//reducers
const INITIAL_VALUE = {success:false, data: [], loading: false, error: '',};
export const entries = (state =INITIAL_VALUE, action) => {
    console.log('entries..: ' + action.type);
    switch(action.type){
        case ADD_ENTRY:
        case GET_ALL_ENTRIES:
            return {
                ...state,
                error:'',
                loading:true
            }                
        case ACTION_ENTRY_SUCCESS:
            return{
                ...state,
                error:'',
                loading:false,
                success: true,
                data: action.data
            };
        case ACTION_ENTRY_FAILD:
            return {
                ...state,
                loading:false,
                error: action.error,
                success: false
            }
        default:
            return {
                state
            };
        }
 }
