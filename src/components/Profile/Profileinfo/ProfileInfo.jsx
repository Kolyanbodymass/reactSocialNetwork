import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import P from './ProfileInfo.module.css';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={P.img} src='https://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg' />
            </div>
            <div className={P.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;