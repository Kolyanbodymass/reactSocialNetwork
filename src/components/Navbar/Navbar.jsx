import React from 'react';
import N from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar.jsx';

const Navbar = (props) => {
    return (
        <nav className={N.nav}>
            <div className={N.item}>
                <NavLink to="/Profile" activeClassName={N.active}>Profile</NavLink>
            </div>
            <div className={`${N.item} ${N.active}`}>
                <NavLink to="/Dialogs" activeClassName={N.active}>Messages</NavLink>
            </div>
            <div className={N.item}>
                <NavLink to="/News" activeClassName={N.active}>News</NavLink>
            </div>
            <div className={N.item}>
                <NavLink to="/Music" activeClassName={N.active}>Music</NavLink>
                </div>
            <div className={N.item}>
                <NavLink to="/Settings" activeClassName={N.active}>Settings</NavLink>
            </div>
            <Sidebar friends={props.sidebar.friends} />
		</nav>
    );
}

export default Navbar;