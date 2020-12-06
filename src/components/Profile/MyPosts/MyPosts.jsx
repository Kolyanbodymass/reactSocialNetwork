import React from 'react';
import MP from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={MP.posts}>
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;