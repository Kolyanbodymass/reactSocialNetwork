import {addPostActionCreator, addPost} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        photos: state.auth.photos
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (newPostText) => { dispatch(addPostActionCreator(newPostText)); }
//     }
// }

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts);

export default MyPostsContainer;