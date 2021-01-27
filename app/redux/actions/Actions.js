import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {URL_LOGIN, ON_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS,
    URL_REGIST, ON_REGIST, REGIST_SUCCESS, REGIST_FAILED,
    URL_ALL_CATEGORIES, URL_ADD_CATEGORY, UPDATE_CATEGORIES, ADD_CATEGORY
    , GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILD,
    ACTION_CATEGORY_FAILD,ACTION_CATEGORY_SUCCESS
    ,LOADING_DATA,LOADING_SUCCESS, LOADING_FAILD,
    ADD_COMMENT, ACTION_COMMENT_FAILD, 
    TOKEN, USER
  , GET_ALL_ENTRIES,ADD_ENTRY, URL_ADD_ENTRY, ACTION_ENTRY_SUCCESS, ACTION_ENTRY_FAILD, URL_ALL_ENTRIES, URL_ADD_COMMENT, ACTION_COMMENT_SUCCESS, 
  ON_TOKEN_CHECK, URL_IS_TOKEN_VAILD, TOKEN_VAILD, TOKEN_NOT_VAILD} from '../Constants'

//user actions
export const onLogin =({username, password}) => {
    return (dispatch) => {      
        dispatch({ type: ON_LOGIN });
        axios.post( URL_LOGIN,
        { username, password })
            .then(resp => handleResponse(dispatch, resp.data, ON_LOGIN))
            .catch(error => onFailed(dispatch, 'Anmeldung fehlgeschlagen!\n' + error, ON_LOGIN) );
    }
} 

export const onRegist =({username, password, categories}) => {
  return (dispatch) => {      
      dispatch({ type: ON_REGIST });
      axios.post( URL_REGIST, { username, password, categories })
          .then(resp => handleResponse(dispatch, resp.data, ON_REGIST))
          .catch(error => onFailed(dispatch, 'Registierung fehlgeschlagen!\n' + error, ON_REGIST) );
  }
} 

export const checkToken = () =>{
  return (dispatch) =>{
    dispatch({type: ON_TOKEN_CHECK});
    AsyncStorage.getItem(TOKEN).then((token) => {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;    
      axios.get(URL_IS_TOKEN_VAILD)
      .then(resp => handleResponse(dispatch, resp.data, ON_TOKEN_CHECK))
      .catch(error => onFailed(dispatch, 'Token not vaild\n' + error, ON_TOKEN_CHECK));
    });
  }
}

// categories actions
export const getAllCategories =() => {
  return (dispatch) => {        
    dispatch({ type: GET_ALL_CATEGORIES });
    axios.get( URL_ALL_CATEGORIES)
        .then(resp => handleResponse(dispatch, resp.data, GET_ALL_CATEGORIES))
        .catch(error => onFailed(dispatch, 'Fehler beim Daten holen!\n' + error, GET_ALL_CATEGORIES) );  
  }
} 

export const addCategory =({name}) => {
  return (dispatch) => {        
    dispatch({ type: ADD_CATEGORY });
    axios.post( URL_ADD_CATEGORY, {name})
        .then(resp => handleResponse(dispatch, resp.data, ADD_CATEGORY))
        .catch(error => onFailed(dispatch, 'Fehler beim Einfügen der Kategorie!\n' + error, ADD_CATEGORY) );  
  }
} 

export const addComment =({entryId, comment}) => {
  return (dispatch) => {       
    console.log('Dispatching >> ADD_COMMENT ' + JSON.stringify({entryId, comment})); 
    dispatch({ type: ADD_COMMENT });
    axios.post( URL_ADD_COMMENT, {entryId, comment})
        .then(resp => handleResponse(dispatch, resp.data, ADD_COMMENT))
        .catch(error => onFailed(dispatch, 'Fehler beim Einfügen des Kommentars!\n' + error, ADD_COMMENT) );  
  }
} 



// entry actions
export const addEntry =({text, category}) => {
  return (dispatch) => {        
    dispatch({ type: ADD_ENTRY });
    axios.post( URL_ADD_ENTRY, { text, category } )
        .then(resp => handleResponse(dispatch, resp.data, ADD_ENTRY))
        .catch(error => onFailed(dispatch, 'Eintrag konnte nicht eingefügt werden!\n' + error, ADD_ENTRY) );      
  }
} 

export const getAllEntries =() => {
  return (dispatch) => {        
    dispatch({ type: GET_ALL_ENTRIES });
    axios.get( URL_ALL_ENTRIES)
        .then(resp => handleResponse(dispatch, resp.data, GET_ALL_ENTRIES))
        .catch(error => onFailed(dispatch, 'Fehler beim Einfügen der Kategorie!\n' + error, GET_ALL_ENTRIES) );      
  }
} 




// handle response
const onSuccess = (dispatch, data, type) => {
  switch(type){
    case ON_LOGIN:
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.token;
      console.log('token is setted: AFTER_LOGIN: ' + axios.defaults.headers.common['Authorization']);
      console.log('data: ' + JSON.stringify(data));     
      AsyncStorage.setItem(USER, data.user);
      AsyncStorage.setItem(TOKEN, data.token)
      .then(() => {
        dispatch({ type: LOGIN_SUCCESS, user: data.user })
      });
    break;
    case ON_REGIST:
      AsyncStorage.setItem(USER, data.user);
      AsyncStorage.setItem(TOKEN, data.token)
      .then(() => {
        dispatch({ type: REGIST_SUCCESS, user: data.user });
      });
    break;
    case ON_TOKEN_CHECK:
      dispatch({ type: TOKEN_VAILD, user: data });
    break;
    case LOADING_DATA:
      dispatch({ type: LOADING_SUCCESS, data });
    break;
    case ADD_ENTRY:
      dispatch({ type: ACTION_ENTRY_SUCCESS, data });
    break;
    case GET_ALL_ENTRIES:
      dispatch({ type: ACTION_ENTRY_SUCCESS, data });
    break;
    case GET_ALL_CATEGORIES:
      dispatch({ type: ACTION_CATEGORY_SUCCESS, data });
    break;
    case ADD_CATEGORY:
      dispatch({ type: ACTION_CATEGORY_SUCCESS, data });
    break;
    case ADD_COMMENT:
      dispatch({ type: ACTION_COMMENT_SUCCESS, data });
    break;
  }
  };
  
  const onFailed = (dispatch, error, type) => {
    switch(type){
      case ON_LOGIN:
        dispatch({ type: LOGIN_FAILED, error})
      break;
      case ON_REGIST:
        dispatch({ type: REGIST_FAILED, error})
      break;
      case ON_TOKEN_CHECK:
        console.log('TOKEN_ON_FAILD' + JSON.stringify(error));
        dispatch({ type: TOKEN_NOT_VAILD, error})
      break;
      case LOADING_DATA:
        dispatch({ type: LOADING_FAILD, error})
      break;
      case ADD_ENTRY:
        dispatch({ type: ACTION_ENTRY_FAILD, error})
      break;
      case GET_ALL_ENTRIES:
        dispatch({ type: ACTION_ENTRY_FAILD, error})
      break;
      case GET_ALL_CATEGORIES:
        dispatch({ type: ACTION_CATEGORY_FAILD, error})
      break;
      case ADD_CATEGORY:
        dispatch({ type: ACTION_CATEGORY_FAILD, error})
      break;
      case ADD_COMMENT:
        dispatch({ type: ACTION_COMMENT_FAILD, error})
      break;
    }
  };
  
  
  const handleResponse = (dispatch, data, type) => {
    switch(type){
      case ON_LOGIN:
        if (!data.token) {
          onFailed(dispatch, data.error, type);
        }else {
          onSuccess(dispatch, data, type)
        }
        break;
      case ON_REGIST:
        console.log('response: ' + JSON.stringify(data));
        if (!data) {
          onFailed(dispatch, data.error, type);
        }else {
          onSuccess(dispatch, data, type)
        }
        break;
        case ON_TOKEN_CHECK:
          console.log('TOKEN RESPONSE.data: ' + JSON.stringify(data));
          if (!data) {
            onFailed(dispatch, data.error, type);
          }else {
            onSuccess(dispatch, data, type);
          }
        break;  
        case GET_ALL_CATEGORIES:
        if (!data) {
          onFailed(dispatch, data.error, type);
        }else {
          onSuccess(dispatch, data, type);
        }
      break;
      case ADD_CATEGORY:
        if (!data) {
          onFailed(dispatch, data.error, type);
        }else {
          onSuccess(dispatch, data, type);
        }
      break;
      case LOADING_DATA:
        if (!data) {
          onFailed(dispatch, data.error, type);
        }else {
          onSuccess(dispatch, data, type);
        }
      break;
      case ADD_ENTRY:
        if (!data) {
          onFailed(dispatch, data.error, type);
        }else {
          onSuccess(dispatch, data, type);
        }
      break;
      case GET_ALL_ENTRIES:
        if (!data) {
          onFailed(dispatch, data.error, type);
        }else {
          onSuccess(dispatch, data, type);
        }
      break;
      case ADD_COMMENT:
        if (!data) {
          onFailed(dispatch, data.error, type);
        }else {
          onSuccess(dispatch, data, type);
        }
      break; 
    }
  }

