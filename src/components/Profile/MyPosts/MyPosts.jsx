import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(10);

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
            <Field component={Textarea} 
                name='newPostBody' 
                placeholder='Enter your post'
                validate={[required, maxLength10]} />
            <div><button>Add post</button></div>
        </form>
    )
}

const AddPostFormRedux = reduxForm({form: 'messageAddPostForm'})(AddPostForm);

export default MyPosts;