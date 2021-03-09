import React from 'react';
import styles from './Sidebar.module.css';
import SidebarFriend from './SidebarFriend/SidebarFriend.jsx';

const Sidebar = (props) => {
    
    let SidebarFriendElements = props.friends.map( f => <SidebarFriend src={f.src} name={f.name} key={f.id} id={f.id} /> );

    return (
       <div className={styles.sidebar}>
            <div className={styles.title}>Friends:</div>
            <div className={styles.itemsWrapper}>
                {SidebarFriendElements}
            </div>
       </div> 
    );
}

export default Sidebar;