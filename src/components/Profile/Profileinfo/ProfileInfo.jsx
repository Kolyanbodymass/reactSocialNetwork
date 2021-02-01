import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import defaultPhoto from '../../../assets/images/default_photo.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (
        <div className={styles.descriptionBlock}>
            <div className={styles.photo}>
                {profile.photos.large == null ? <img src={defaultPhoto} alt="default photo"/> : <img src={profile.photos.large} alt="profile photo"/> }
            </div>
            <div>
                Full Name: {profile.fullName}
            </div>
            <div>
                Looking for a job? {profile.lookingForAJob ? 'Yes, it is!' : 'No, already working'}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );
}

export default ProfileInfo;