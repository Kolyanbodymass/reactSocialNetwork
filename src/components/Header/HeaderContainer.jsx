import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {setAuthUserData, setAuthUserPhoto} from '../../redux/auth-reducer';
import {headerAPI} from '../../Api/Api';
class HeaderContainer extends React.Component {

    componentDidMount() {
        headerAPI.getHeaderAuth()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                    this.onAuthPhoto(id);
                }
            });
    }

    onAuthPhoto = (id) => {
        headerAPI.getHeaderPhoto(id)
            .then(data => {
                this.props.setAuthUserPhoto(data.photos);
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