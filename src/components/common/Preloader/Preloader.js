import React from 'react';
import preloader from '../../../assets/images/preloader.svg';
import styles from  './Preloader.module.css';
import classNames from 'classnames';

let Preloader = (props) => {
    // return <img className={props.preloader} src={preloader} alt="preloader"/>
    return (
        <div className={classNames(styles.backdrop, props.preloaderClass)}>
            <div className={styles.loader}> 
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
                <div className={styles.dot}></div>
            </div>
        </div>
    )
}

export default Preloader;