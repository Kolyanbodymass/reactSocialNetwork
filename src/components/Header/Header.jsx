import React from 'react';
import Styles from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={Styles.header}>
            <img src="https://s1.logaster.com/static/v3/img/products/logo.png" />

            <div className={Styles.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>
    );
}

export default Header;