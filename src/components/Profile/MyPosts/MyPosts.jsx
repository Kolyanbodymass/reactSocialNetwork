import React from 'react';
import MP from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likesCount} id={p.id} /> );

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