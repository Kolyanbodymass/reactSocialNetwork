import React from 'react';
import P from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={P.img} src='https://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg' />
            </div>
            <div className={P.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;