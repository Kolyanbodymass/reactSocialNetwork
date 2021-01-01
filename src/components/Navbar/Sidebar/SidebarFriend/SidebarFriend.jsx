import React from 'react';
import SF from './SidebarFriend.module.css';

const SidebarFriend = (props) => {

    return (
        <div className={SF.item}>
            <img src={props.src} alt="avatarka" />
            <div>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default SidebarFriend;