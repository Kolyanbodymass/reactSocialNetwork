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
    return (
        <div className={D.dialogs}>
            <div className={D.dialogsItems}>
                <DialogItem name="Dimych" id="1" />
                <DialogItem name="Andrey" id="2" />
                <DialogItem name="Sveta" id="3" />
                <DialogItem name="Sasha" id="4" />
                <DialogItem name="Victor" id="5" />
                <DialogItem name="Valera" id="6" />
            </div>
            <div className={D.messages}>
                <Message message="Hi" />
                <Message message="Hi is your" />
                <Message message="Yo" />
            </div>
        </div>
    )
}

export default Dialogs;