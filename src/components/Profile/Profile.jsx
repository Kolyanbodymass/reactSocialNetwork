import React from 'react';
import P from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return (
        <div className={P.content}>
            <img className={P.img} src='https://www.imgworlds.com/wp-content/uploads/2015/12/generic.jpg' />
            <div>
            ava + description
            </div>
            <div>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;