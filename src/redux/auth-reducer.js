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

export default authReducer;