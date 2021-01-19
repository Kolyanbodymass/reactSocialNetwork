import {headerAPI} from '../Api/Api';

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
                ...action.data,
                isAuth: true
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

export const setAuthUserData = (id, email, login) => ({ type: SET_USER_DATA, data: {id, email, login} })
export const setAuthUserPhoto = (photos) => ({type: SET_AUTH_PHOTO, photos})

export const getAuthUserData = () => (dispatch) => {
    headerAPI.getHeaderAuth()
        .then(data => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data;
                dispatch(setAuthUserData(id, email, login));
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

export default authReducer;