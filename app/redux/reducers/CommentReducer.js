import {  ADD_COMMENT, ACTION_COMMENT_SUCCESS, ACTION_COMMENT_FAILD } from "../Constants";

//reducers
const INITIAL_VALUE = {success:false, data: {}, loading: false, error: '',};
export const comments = (state =INITIAL_VALUE, action) => {
    console.log('comment..: ' + action.type);
    switch(action.type){
        case ADD_COMMENT:
            return {
                ...state,
                error:'',
                loading:true
            }                
        case ACTION_COMMENT_SUCCESS:
            return{
                ...state,
                error:'',
                loading:false,
                success: true,
                data: action.data
            };
        case ACTION_COMMENT_FAILD:
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
