import {  GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILD } from "../Constants";

//reducers
const INITIAL_VALUE = { data: {}, loading: false, error: '',};
export const categories = (state =INITIAL_VALUE, action) => {
    console.log('categories..: ' + action.type);
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                error:'',
                loading:true
            }
        case GET_ALL_CATEGORIES_SUCCESS:
            return{
                ...state,
                error:'',
                loading:false,
                data: action.data
            };
        case GET_ALL_CATEGORIES_FAILD:
            return {
                ...state,
                loading:false,
                error: action.error
            }
        default:
            return {
                state
            };
        }
 }
