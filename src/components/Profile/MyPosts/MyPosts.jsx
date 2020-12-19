import React from 'react';
import MP from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 3}
    ]

    let postsElements = posts.map( post => <Post message={posts.message} likeCount={posts.likesCount} /> );

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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;