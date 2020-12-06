import React from 'react';
import N from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={N.nav}>
            <div className={N.item}><a>Profile</a></div>
            <div className={`${N.item} ${N.active}`}><a>Messages</a></div>
            <div className={N.item}><a>News</a></div>
            <div className={N.item}><a>Music</a></div>
            <div className={N.item}><a>Settings</a></div>
		</nav>
    );
}

export default Navbar;