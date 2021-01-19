import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {getAuthUserData, getAuthUserPhoto} from '../../redux/auth-reducer';
class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
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



export default connect(mapStateToProps, {getAuthUserData, getAuthUserPhoto})(HeaderContainer);