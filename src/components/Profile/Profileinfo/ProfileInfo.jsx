import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import defaultPhoto from '../../../assets/images/default_photo.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={styles.descriptionBlock}>
            <div className={styles.photo}>
                <img src={profile.photos.large || defaultPhoto} className={styles.photo} alt="profile photo"/>
            </div>
            <div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
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