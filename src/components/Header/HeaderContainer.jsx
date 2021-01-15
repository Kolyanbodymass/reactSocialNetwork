import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData, setAuthUserPhoto} from '../../redux/auth-reducer';
import * as axios from 'axios';

class HeaderContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                    this.onAuthPhoto(id);
                }
            });
    }

    onAuthPhoto = (id) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
            .then(response => {
                this.props.setAuthUserPhoto(response.data.photos);
        });
    }

    render() {
        return (
            <Header {...this.props} photos={this.props.photos}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    photos: state.auth.photos
});



export default connect(mapStateToProps, {setAuthUserData, setAuthUserPhoto})(HeaderContainer);