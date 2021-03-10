import React from 'react';
import styles from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from 'redux-form';
import {required, maxLengthCreator} from '../../../utils/validators/validators';
import {Textarea} from '../../common/FormsControls/FormsControls';

const maxLength10 = maxLengthCreator(30);

const AddPostForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} 
                name='newPostText' 
                placeholder='Enter your post'
                validate={[required, maxLength10]} />
            <div><button>Add post</button></div>
        </form>
    )
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('messageAddPostForm'));
}
  
let AddPostFormRedux = reduxForm({form: 'messageAddPostForm', onSubmitSuccess: afterSubmit})(AddPostForm);

const MyPosts = React.memo((props) => {

    let postsElements = [...props.posts].reverse().map( p => <Post message={p.message} likeCount={p.likesCount} photo={p.photo} key={p.id} id={p.id} /> ); // Посты в обратном порядке

    let addNewPost = (values) => {
        props.addPost(values.newPostText, props.photos);
    } 

    return (
        <div className={styles.postsBlock}>
            <h3 className={styles.title}>My posts</h3>
            <div>
                <AddPostFormRedux onSubmit={addNewPost} />
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    );
})

export default MyPosts;