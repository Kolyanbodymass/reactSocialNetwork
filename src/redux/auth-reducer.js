import {headerAPI, authAPI} from '../Api/Api';
import {stopSubmit} from 'redux-form';
import { securityAPI } from './../Api/Api';

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';
const SET_AUTH_PHOTO = 'samurai-network/auth/SET_AUTH_PHOTO';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photos: null,
    captchaUrl: null // if null, then captcha is not recuired
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return { 
                ...state,
                ...action.payload
            }
        case SET_AUTH_PHOTO:
            return {                
                ...state,
                photos: action.photos
            }
        default: 
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATA, payload: {id, email, login, isAuth} })
export const setAuthUserPhoto = (photos) => ({type: SET_AUTH_PHOTO, photos})

export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl} })

export const getAuthUserData = () => async (dispatch) => {
    let response = await headerAPI.getHeaderAuth();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));

        getAuthUserPhoto(id);
    }
}

export const getAuthUserPhoto = (id) => async (dispatch) => {
    let response = await headerAPI.getHeaderPhoto(id);

    dispatch(setAuthUserPhoto(response.data.photos));    
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
        
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        dispatch(stopSubmit('login', {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;   
    
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
        
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
}

export default authReducer;