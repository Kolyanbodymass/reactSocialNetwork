import React from 'react';
import D from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
    let path = "/dialogs/" + id;
    return (
        <div className={D.dialog + ' ' + D.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = ({ message }) => {
    return (
        <div className={D.message}>{message}</div>
    )
}

const Dialogs = (props) => {

    let dialogs = [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' }
    ]

    let messages = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'Hi is your' },
        { id: 3, message: 'Yo' }
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />);
    let messagesElements = messages.map(message => <Message message={message.message} />);

    return (
        <div className={D.dialogs}>
            <div className={D.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={D.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;