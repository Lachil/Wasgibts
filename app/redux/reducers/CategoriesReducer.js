import {  GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILD, ADD_CATEGORY, ACTION_CATEGORY_FAILD, ACTION_CATEGORY_SUCCESS } from "../Constants";

//reducers
const INITIAL_VALUE = { data: {}, success : false, loading: false, error: '',};
export const categories = (state =INITIAL_VALUE, action) => {
    console.log('categories..: ' + action.type);
    switch(action.type){
        case GET_ALL_CATEGORIES:
            return {
                ...state,
                error:'',
                loading:true
            }
        case ADD_CATEGORY:
            return{
                ...state,
                loading: true,
                error: action.error
            }
        case ACTION_CATEGORY_SUCCESS:
            return{
                ...state,
                data: action.data,
                success: true,
                loading: false,
            }
        case ACTION_CATEGORY_FAILD:
            return{
                ...state,
                success: false,
                loading: false,
                error: action.error
            }            
        default:
            return {
                state
            };
        }
 }
