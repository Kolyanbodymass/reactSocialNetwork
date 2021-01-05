import React from 'react';
import D from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    }
    
    return (
        <div className={D.dialogs}>
            <div className={D.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={D.messages}>
                {messagesElements}
                <div>
                    <textarea 
                        onChange={onMessageChange} 
                        value={props.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;