import React, {useState} from 'react';
import Preloader from '../../common/Preloader/Preloader';
import styles from './ProfileInfo.module.css';
import defaultPhoto from '../../../assets/images/default_photo.jpg';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import {IconSettingsMenuItem} from '../../Navbar/NavbarConstants';

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile, errorStatus}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader preloaderClass={styles.profileInfoPreloader}/>
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

    let loadInput = null;

    function handleClick() {
        loadInput.click();
    }

    return (
        <div className={styles.descriptionBlock}>
            <div>
                <img onClick={handleClick} src={profile.photos.large || defaultPhoto} className={styles.photo}  alt="avatar" title="upload new photo"/>
            </div>
            <div>
                {isOwner && 
                    <div className={styles.wrapperInput}>
                        <input ref={(input) => { loadInput = input; }} className={styles.inputFile} type={"file"} id="input__file" onChange={onMainPhotoSelected}/>
                        <label className="button" htmlFor="input__file">Upload new photo</label>
                    </div>}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} errorStatus={errorStatus}/>
            {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} /> : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/>}
        </div>
    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={styles.profileData}>
            {isOwner && <div><a onClick={goToEditMode}><IconSettingsMenuItem cssClass={styles.svgProfile} /></a></div>}
            <div>
                <span className={styles.contactTitle}>Full Name: </span> <span className={styles.contactValue}>{profile.fullName}</span>
            </div>
            <div>
                <div>
                    <span className={styles.contactTitle}>Looking for a job? </span> <span className={styles.contactValue}>{profile.lookingForAJob ? 'Yes, it is!' : 'No, already working'}</span>
                </div>
                {profile.lookingForAJob && 
                <div>
                    <span className={styles.contactTitle}>My professional skills: </span> <span className={styles.contactValue}>{profile.lookingForAJobDescription}</span>
                </div>
                }
                <div>
                    <span className={styles.contactTitle}>About me: </span> <span className={styles.contactValue}>{profile.aboutMe}</span>
                </div>
                <div>
                    <div className={styles.contacts}>Contacts: </div>{Object.keys(profile.contacts).map(key => {
                        return (
                            profile.contacts[key] ?
                            <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} /> : null
                        )                   
                    })}
                </div>
            </div>
        </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div>
            <span className={styles.contactTitle}>{contactTitle}: </span>
            <span className={styles.contactValue}>{contactValue}</span>
        </div>
}

export default ProfileInfo;