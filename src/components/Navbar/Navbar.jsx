import React from 'react';
import styles from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar.jsx';
import classNames from 'classnames';
import {svgPhotoProfile, svgPhotoMessage, svgPhotoUsers, svgPhotoNews, svgPhotoMusic, svgPhotoSettings} from './NavbarConstants';

const Navbar = (props) => {

    return (
        <div className={styles.navbar}>
            <nav>
                <NavMenuItem nameItem='Profile' svgPhoto={svgPhotoProfile} />
                <NavMenuItem nameItem='Dialogs' svgPhoto={svgPhotoMessage} />
                <NavMenuItem nameItem='Users' svgPhoto={svgPhotoUsers} />
                <NavMenuItem nameItem='News' svgPhoto={svgPhotoNews} />
                <NavMenuItem nameItem='Music' svgPhoto={svgPhotoMusic} />
                <NavMenuItem nameItem='Settings' svgPhoto={svgPhotoSettings} />
            </nav>
            <Sidebar friends={props.friends} />
        </div>
    );
}

const NavMenuItem = ({nameItem, svgPhoto}) => {
    return (
         <div className={classNames(styles.item, styles.profile)}>
            <NavLink to={`/${nameItem}`} activeClassName={styles.active}>
                {svgPhoto}
                {nameItem}
            </NavLink>
        </div>
    )
}

export default Navbar;