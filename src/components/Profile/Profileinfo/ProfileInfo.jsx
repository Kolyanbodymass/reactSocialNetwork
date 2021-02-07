import React, {useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import defaultPhoto from '../../../assets/images/default_photo.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            } 
        );
    }

    return (
        <div className={styles.descriptionBlock}>
            <div className={styles.photo}>
                <img src={profile.photos.large || defaultPhoto} className={styles.photo} alt="profile photo"/>
            </div>
            <div>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
            {isOwner && <div><button onClick={goToEditMode}>edit</button></div>}
            <div>
                Full Name: {profile.fullName}
            </div>
            <div>
                <div>
                    Looking for a job? {profile.lookingForAJob ? 'Yes, it is!' : 'No, already working'}
                </div>
                {profile.lookingForAJob && 
                <div>
                    My professional skills: {profile.lookingForAJobDescription}
                </div>
                }
                <div>
                    About me: {profile.aboutMe}
                </div>
                <div>
                    Contacts: {Object.keys(profile.contacts).map(key => {
                        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                    })}
                </div>
            </div>
        </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>{contactTitle}: {contactValue}</div>
}

export default ProfileInfo;