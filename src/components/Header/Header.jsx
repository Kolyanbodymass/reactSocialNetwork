import React from 'react';
import styles from './Header.module.css';
import {NavLink} from 'react-router-dom';
import avatarAuth from '../../assets/images/avatarAuth.png';
import subscribe from '../../assets/images/subscribe.png';

const Header = (props) => {

    return (
        <header className={styles.header}>
            <img src={subscribe} alt="logo"/>

            <div className={styles.loginBlock}>
                {props.isAuth ? <div>{props.login} - <button className={styles.buttonLogout} onClick={props.logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
            <NavLink to={'/profile'} className={styles.avatarAuth}>           
                <img src={props.photos !== null && props.photos.small !== null ? props.photos.small : avatarAuth} alt="avatar"/>
            </NavLink>
        </header>
    );
    
}

export default Header;

 