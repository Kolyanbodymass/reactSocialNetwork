import React from 'react';
import styles from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './Profileinfo/ProfileInfo';

const Profile = (props) => {

    return (
        <div>
            <img className={styles.img} src='https://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg' />
            <div className={styles.profile}>
                <ProfileInfo profile={props.profile} />
                <MyPostsContainer />
            </div>
        </div>
        
    );
}

export default Profile;