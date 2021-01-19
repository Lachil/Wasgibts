import { LOGIN_SUCCESS, ON_LOGIN, LOGIN_FAILED, ON_REGIST, REGIST_SUCCESS, REGIST_FAILED } from "../Constants";

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
