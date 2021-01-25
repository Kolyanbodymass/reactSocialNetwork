import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import avatarAuth from '../../assets/images/avatarAuth.png';

const Header = (props) => {

    return (
        <header className={styles.header}>
            <img src="https://s1.logaster.com/static/v3/img/products/logo.png" />

            <div className={styles.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
            <div className={styles.avatarAuth}>           
                <img src={props.photos !== null && props.photos.small !== null ? props.photos.small : avatarAuth} />
            </div>
        </header>
    );
    
}

export default Header;

 