
import { combineReducers} from 'redux'; 

import {auth, regist} from './UserReducers' 
import {categories} from './CategoriesReducer' 


//root reducer
export const rootReducer = combineReducers({
    auth,regist,categories,
}); 