import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onAddMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action);
    }
    
    return (<Dialogs updateNewMessageBody={onMessageChange} addMessage={onAddMessage} dialogsPage={state}/>)
}

export default DialogsContainer;