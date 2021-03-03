import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './Profileinfo/ProfileInfo';
import town from '../../assets/images/town.jpg'

const Profile = (props) => {
    return (
        <div>
            <img className={styles.img} src={town} alt="headers profile"/>
            <div className={styles.profile}>
                <ProfileInfo savePhoto={props.savePhoto} 
                    isOwner={props.isOwner} 
                    profile={props.profile} 
                    status={props.status}
                    saveProfile={props.saveProfile} 
                    updateStatus={props.updateStatus} 
                    errorStatus={props.errorStatus}/>
                <MyPostsContainer />
            </div>
        </div>
        
    );
}

export default Profile;