import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {
    
    let postsElements = props.posts.map( p => <Post message={p.message} likeCount={p.likesCount} key={p.id} id={p.id} /> );

    let addNewPost = (values) => {
        props.addPost(values.newPostBody);
    } 

    return (
        <div className={styles.postsBlock}>
            <h3>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost} />
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
}

const AddPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='newPostBody' placeholder='Enter your post' />
            <div><button>Add post</button></div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'messageAddPostForm'})(AddPostForm);

export default MyPosts;