import React from 'react';
import MP from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 3}
    ]

    return (
        <div className={MP.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={MP.posts}>
                <Post message={postData[0].message} likeCount={postData[0].likesCount} />
                <Post message={postData[1].message} likeCount={postData[1].likesCount} />
            </div>
        </div>
    );
}

export default MyPosts;