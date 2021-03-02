import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout, getAuthUserPhoto} from '../../redux/auth-reducer';
class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserPhoto(this.props.id);
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
    id: state.auth.id,
    photos: state.auth.photos
});

export default connect(mapStateToProps, {logout, getAuthUserPhoto})(HeaderContainer);