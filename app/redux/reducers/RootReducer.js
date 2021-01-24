
import { combineReducers} from 'redux'; 

import {auth, regist} from './UserReducers' 
import {categories} from './CategoriesReducer' 
import {entries} from './EntryReducer'
import {comments} from './CommentReducer'


//root reducer
export const rootReducer = combineReducers({
    auth, regist, categories, entries, comments
}); 