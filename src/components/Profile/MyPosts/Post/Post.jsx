import React from 'react';
import styles from './Post.module.css';

const Post = ({ message, likeCount, photo }) => {

    return (
        <div className={styles.item}>
            <div>
                <img src={photo} alt="avatarka" />
            </div>
            <div className={styles.message}>
                {message}
            </div>
            <div>
                <span>Like {likeCount}</span>
            </div>
        </div>
    )
}

export default Post;