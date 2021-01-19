import React from 'react';
import { Redirect } from 'react-router';
import D from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageText = state.newMessageText;


    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    }

    if (!props.isAuth) return <Redirect to={'/login'} />;
    
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
                        value={newMessageText} />
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;