import React from 'react';
import D from './../Dialogs.module.css';

const Message = (props) => {
    return (
        <div className={D.message}>{props.message}</div>
    )
}

export default Message;