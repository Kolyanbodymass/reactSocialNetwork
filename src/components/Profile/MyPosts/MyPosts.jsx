import React from 'react';
import MP from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message="Hi, how are you?" likeCount="15"/>
                <Post message="It's my first post" likeCount="3"/>
            </div>
        </div>
    );
}

export default MyPosts;