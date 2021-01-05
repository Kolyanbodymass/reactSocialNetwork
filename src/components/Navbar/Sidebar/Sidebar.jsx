import React from 'react';
import S from './Sidebar.module.css';
import SidebarFriend from './SidebarFriend/SidebarFriend.jsx';

const Sidebar = (props) => {
    
    let SidebarFriendElements = props.friends.map( f => <SidebarFriend src={f.src} name={f.name} id={f.id} /> );

    return (
       <div className={S.sidebar}>
           <div>Friends:</div>
           {SidebarFriendElements}
       </div> 
    );
}

export default Sidebar;