import React from 'react';
import D from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogItem = ({name, id}) => {
    let path = "/dialogs/" + id;
    return (
        <div className={D.dialog + ' ' + D.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

const Message = ({message}) => {
    return (
        <div className={D.message}>{message}</div>
    )
}

const Dialogs = (props) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hi is your'},
        {id: 3, message: 'Yo'}
    ]

    return (
        <div className={D.dialogs}>
            <div className={D.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={D.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs;