
import { combineReducers} from 'redux'; 

import {auth, regist} from './UserReducers' 
import {categories} from './CategoriesReducer' 
import {entries} from './EntryReducer'


//root reducer
export const rootReducer = combineReducers({
    auth, regist, categories, entries
}); 