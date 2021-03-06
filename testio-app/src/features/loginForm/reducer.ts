import { combineReducers } from 'redux';
import { handleAction } from 'redux-actions';
import { updateSimpleValue } from 'utils/createReducer';
import {
  REQUEST_FAILED,
  SET_LOADER,
  SET_LOGIN_VALUE,
  SET_PASSWORD_VALUE
} from './constants';
import { IForm } from './types';

const loginInputReducer = handleAction(SET_LOGIN_VALUE, updateSimpleValue, '');
const loaderReducer = handleAction(SET_LOADER, updateSimpleValue, false);
const passwordInputReducer = handleAction(
  SET_PASSWORD_VALUE,
  updateSimpleValue,
  ''
);
const requestFailedReducer = handleAction(
  REQUEST_FAILED,
  updateSimpleValue,
  false
);

export default combineReducers<IForm>({
  error: requestFailedReducer,
  isLoading: loaderReducer,
  password: passwordInputReducer,
  username: loginInputReducer
});
