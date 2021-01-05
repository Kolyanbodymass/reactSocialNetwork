import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 3}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrew' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Victor' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hi is your' },
                { id: 3, message: 'Yo' }
            ],
            newMessageText: 'YoYoYo'
        },
        sidebar: {
            friends: [
                { id: 1, name: 'Kolya', src: 'https://g0.sunmag.me/sunmag.me/wp-content/uploads/2019/11/sunmag-004-small-avatar.png' },
                { id: 2, name: 'Katya', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOfqBBnGW-ntm2BhRJQQJupmw5Gh5drIDnvA&usqp=CAU' },
                { id: 3, name: 'Vova', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7wIM1l36lND_jsEwki3UCnRpcTzs-AfPv-A&usqp=CAU' },
            ]
        }
    
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) { // { type: 'ADD-POST}
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;

window.store = store;