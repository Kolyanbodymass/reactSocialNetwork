import React from 'react';
import H from './Header.module.css';

const Header = () => {
    return (
        <header className={H.header}>
            <img src="https://s1.logaster.com/static/v3/img/products/logo.png" />
        </header>
    );
}

export default Header;