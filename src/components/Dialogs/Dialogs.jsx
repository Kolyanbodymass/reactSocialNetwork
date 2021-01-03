import React from 'react';
import D from './Dialogs.module.css';
import Message from './Message/Message.jsx';
import DialogItem from './DialogItem/DialogItem.jsx';

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch( { type: 'ADD-MESSAGE'});
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text}
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
                        ref={newMessageElement} 
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