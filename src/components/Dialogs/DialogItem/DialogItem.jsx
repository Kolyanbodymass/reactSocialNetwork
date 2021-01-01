import React from 'react';
import D from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = ({ name, id }) => {
    let path = "/dialogs/" + id;
    return (
        <div className={D.dialog + ' ' + D.active}>
            <NavLink to={path}>{name}</NavLink>
        </div>
    )
}

export default DialogItem;