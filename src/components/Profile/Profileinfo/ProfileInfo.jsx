import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import defaultPhoto from '../../../assets/images/default_photo.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={styles.descriptionBlock}>
            <div className={styles.photo}>
                {props.profile.photos.large == null ? <img src={defaultPhoto} alt="default photo"/> : <img src={props.profile.photos.large} alt="profile photo"/> }
            </div>
            <div>
                Full Name: {props.profile.fullName}
            </div>
            <div>
                Looking for a job? {props.profile.lookingForAJob ? 'Yes, it is!' : 'No, already working'}
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    );
}

export default ProfileInfo;