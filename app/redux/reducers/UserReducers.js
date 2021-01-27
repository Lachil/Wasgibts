import { LOGIN_SUCCESS, ON_LOGIN, LOGIN_FAILED, 
    ON_REGIST, REGIST_SUCCESS, REGIST_FAILED, 
    ON_TOKEN_CHECK, TOKEN_VAILD, TOKEN_NOT_VAILD } from "../Constants";

//reducers
const INITIAL_VALUE = { user: null, loading: false, error: '',};
export const auth = (state =INITIAL_VALUE, action) => {
    console.log('userReducer..: ' + action.type);
    switch(action.type){
        case ON_LOGIN:
            return {
                ...state,
                error:'',
                loading:true
            }
        case LOGIN_SUCCESS:
            return{
                ...state,
                error:'',
                loading:false,
                user: action.user
            };
        case LOGIN_FAILED:
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


export const regist = (state =INITIAL_VALUE, action) => {
    console.log('registReducer..: ' + action.type);
    console.log('user >>: ' + action.user);
    switch(action.type){
        case ON_REGIST:
            return {
                ...state,
                error:'',
                loading:true
            }
        case REGIST_SUCCESS:
            return{
                ...state,
                error:'',
                loading:false,
                user: action.user
            };
        case REGIST_FAILED:
            return {
                ...state,
                loading:false,
                error: action.error
            }
        default:
            return {
                ...state, loading: false
            };
        }
 }

 export const token = (state = { user: null, loading: false}, action) => {
    switch(action.type){
        case ON_TOKEN_CHECK:
            return {
                ...state,
                loading: true
            }
        case TOKEN_VAILD:
            return{
                user: action.user,
                loading: false
            };
        case TOKEN_NOT_VAILD:
            return {
                ...state,
                user: null,
                loading: false
            }
        default:
            return {
                ...state
            };
        }
 }

