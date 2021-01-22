import {  ADD_ENTRY, ACTION_ENTRY_FAILD, ACTION_ENTRY_SUCCESS } from "../Constants";

//reducers
const INITIAL_VALUE = {success:false, loading: false, error: '',};
export const entries = (state =INITIAL_VALUE, action) => {
    console.log('entries..: ' + action.type);
    switch(action.type){
        case ADD_ENTRY:
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
                success: true
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
