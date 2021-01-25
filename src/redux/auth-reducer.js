import {headerAPI, authAPI} from '../Api/Api';

const SET_USER_DATA = 'SET_USER_DATA';
const SET_AUTH_PHOTO = 'SET_AUTH_PHOTO';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    photos: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
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

export const getAuthUserData = () => (dispatch) => {
    headerAPI.getHeaderAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login, true));
                getAuthUserPhoto(id);
            }
        });
}

export const getAuthUserPhoto = (id) => (dispatch) => {
    headerAPI.getHeaderPhoto(id)
                    .then(data => {
                        dispatch(setAuthUserPhoto(data.photos));
                });
}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
        });
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}

export default authReducer;