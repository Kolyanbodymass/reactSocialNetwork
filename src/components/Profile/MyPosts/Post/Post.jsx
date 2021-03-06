import React from 'react';
import P from './Post.module.css';

const Post = ({ message, likeCount, photo }) => {

    return (
        <div className={P.item}>
            <img src={photo} alt="avatarka" />
                {message}
            <div>
                <span>Like {likeCount}</span>
            </div>
        </div>
    )
}

export default Post;