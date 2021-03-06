import axios from 'axios';
import { push } from 'connected-react-router';
import { setLoggedInStatus, setToken } from 'features/user/actions';
import { ITokenAPI } from 'features/user/types';
import { createAction } from 'redux-actions';
import { ThunkAction } from 'redux-thunk';
import { API_ROUTES, APP_ROUTES } from 'Routes';
import { IApp } from 'types';
import {
  REQUEST_FAILED,
  SET_LOADER,
  SET_LOGIN_VALUE,
  SET_PASSWORD_VALUE
} from './constants';

export const setLoginInput = createAction(SET_LOGIN_VALUE);
export const setPasswordInput = createAction(SET_PASSWORD_VALUE);
export const setRequestFailed = createAction(REQUEST_FAILED);
export const setLoader = createAction(SET_LOADER);

// Thunks
export const onSubmit = (): ThunkAction<void, IApp, {}, any> => (
  dispatch,
  getState
) => {
  dispatch(setLoader(true));
  dispatch(getToken());
};

export const getToken = (): ThunkAction<void, IApp, {}, any> => (
  dispatch,
  getState
) => {
  const state = getState();

  return axios
    .request<ITokenAPI>({
      data: {
        password: state.form.password,
        username: state.form.username
      },
      headers: {
        'content-type': 'application/json'
      },
      method: 'POST',
      url: API_ROUTES.TOKEN
    })
    .then(({ data }) => {
      dispatch(setToken(data.token));
      dispatch(setLoggedInStatus(true));
      dispatch(push(APP_ROUTES.FORM_PAGE));
      dispatch(setLoader(false));
    })
    .catch(() => {
      dispatch(setRequestFailed(true));
      dispatch(setLoader(false));
    });
};
