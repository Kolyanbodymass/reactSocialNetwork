import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import defaultPhoto from '../../../assets/images/default_photo.jpg';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={styles.descriptionBlock}>
            <div className={styles.photo}>
                {props.profile.photos.large == null ? <img src={defaultPhoto}/> : <img src={props.profile.photos.large}/> }
            </div>
            <div>
                Full Name: {props.profile.fullName}
            </div>
            <div>
                Looking for a job? {props.profile.lookingForAJob ? 'Yes, it is!' : 'No, already working'}
            </div>
            <ProfileStatus status={"Hello, my frends!"} />
        </div>
    );
}

export default ProfileInfo;