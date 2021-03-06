import {usersAPI, profileAPI} from '../Api/Api';
import {setAuthUserPhoto} from './auth-reducer';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_ERROR_STATUS = 'SET_ERROR_STATUS';
const SET_POST_PHOTO = "SET_POST_PHOTO";

let initialState = {
    posts: [
        {id: 1, photo: null, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, photo: null, message: 'It\'s my first post', likesCount: 3}
    ],
    profile: null,
    status: '',
    errorStatus: null,
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        }
        case SAVE_PHOTO_SUCCESS: {
            return {...state, profile: {...state.profile, photos: action.photos}}
        }
        case SET_ERROR_STATUS: {
            return {...state, errorStatus: action.errorStatus}
        }
        case SET_POST_PHOTO: {
            let obj = {...state, posts: [...state.posts]}
            obj.posts.forEach(e => {e.photo = action.photo;})
            return obj;
        }
        default: 
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({ type: SET_STATUS, status})
export const deletePost = (postId) => ({ type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos})
export const setErrorStatus = (errorStatus) => ({ type: SET_ERROR_STATUS, errorStatus})
export const setPostPhoto = (photo) => ({type: SET_POST_PHOTO, photo})

export const addPost = (newPostText, photos) => async (dispatch) => {
    dispatch(addPostActionCreator(newPostText));
    dispatch(setPostPhoto(photos.small))
}

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getProfile(userId);

    dispatch(setUserProfile(response.data));
    dispatch(setPostPhoto(response.data.photos.small))
}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch(error) {
        console.log(error.message);  
        dispatch(setErrorStatus(error.message));
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));
        dispatch(setPostPhoto(response.data.data.photos.small))
        dispatch(setAuthUserPhoto(response.data.data.photos));
    } 
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile)

    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        const string = response.data.messages[0];
        const splitString = () => {
            const arrayOfStrings = string.split('>');
            return arrayOfStrings[1].slice(0, -1).toLowerCase();
        }

        dispatch(stopSubmit("edit-profile", {"contacts": {[splitString()]: string}} ));
        return Promise.reject(string);
    }
}



export default profileReducer; 