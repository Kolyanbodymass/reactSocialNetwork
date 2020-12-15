import React from 'react';
import P from './Post.module.css';

const Post = ({message, likeCount}) => {
    return (
        <div className={P.item}>
            <img src="https://99px.ru/sstorage/53/2014/10/tmb_111953_6447.jpg" />
            {message};
            <div>
                <span>Like {likeCount}</span>
            </div>
        </div>
    )
}

export default Post;