import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {URL_LOGIN, ON_LOGIN, LOGIN_FAILED, LOGIN_SUCCESS,
    URL_REGIST, ON_REGIST, REGIST_SUCCESS, REGIST_FAILED,
    URL_ALL_CATEGORIES, URL_ADD_CATEGORY, UPDATE_CATEGORIES, ADD_CATEGORY
    , GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_SUCCESS, GET_ALL_CATEGORIES_FAILD 
    ,LOADING_DATA,LOADING_SUCCESS, LOADING_FAILD,
  TOKEN, USER, GET_ALL_ENTRIES} from '../Constants'

//user actions
export const onLogin =({username, password}) => {
    return (dispatch) => {      
        dispatch({ type: ON_LOGIN });
        axios.post( URL_LOGIN,
        { username, password })
            .then(resp => handleResponse(dispatch, resp.data, ON_LOGIN))
            .catch(error => onFailed(dispatch, 'Anmeldung fehlgeschlagen!', ON_LOGIN) );
    }
} 

export const onRegist =({username, password, categories}) => {
  return (dispatch) => {      
      dispatch({ type: ON_REGIST });
      axios.post( URL_REGIST,
      { username, password, categories })
          .then(resp => handleResponse(dispatch, resp.data, ON_REGIST))
          .catch(error => onFailed(dispatch, 'Registierung fehlgeschlagen!', ON_REGIST) );
  }
} 


export const getAllCategories =() => {
  return (dispatch) => {        
    dispatch({ type: GET_ALL_CATEGORIES });
    axios.get( URL_ALL_CATEGORIES)
        .then(resp => handleResponse(dispatch, resp.data, GET_ALL_CATEGORIES))
        .catch(error => onLoadingFailed(dispatch, 'Fehler beim Daten holen!', GET_ALL_CATEGORIES) );      
  }
} 

const onSuccess = (dispatch, data, type) => {
  switch(type){
    case ON_LOGIN:
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
    case LOADING_DATA:
      dispatch({ type: LOADING_SUCCESS, data });
    break;
    case GET_ALL_CATEGORIES:
      dispatch({ type: GET_ALL_CATEGORIES_SUCCESS, data });
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
      case LOADING_DATA:
        dispatch({ type: LOADING_FAILD, error})
      break;
      case GET_ALL_CATEGORIES:
        dispatch({ type: GET_ALL_CATEGORIES_FAILD, error})
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
      case GET_ALL_CATEGORIES:
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

    }
  }

