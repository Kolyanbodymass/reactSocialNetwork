import React from 'react';
import Profile from './Profile.jsx';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import {getAuthUserPhoto} from '../../redux/auth-reducer';
import { withRouter } from 'react-router-dom';
class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login');
            }
        }

        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        this.props.getAuthUserPhoto(userId)
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile(); 
        }
    }

    render() {
        return (
            <Profile {...this.props} 
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}
                saveProfile={this.props.saveProfile}
                savePhoto={this.props.savePhoto} 
                errorStatus={this.props.errorStatus}/>
        )
    }    
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAurh: state.auth.isAuth,
    errorStatus: state.profilePage.errorStatus
});

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile, getAuthUserPhoto}),
    withRouter
)(ProfileContainer);