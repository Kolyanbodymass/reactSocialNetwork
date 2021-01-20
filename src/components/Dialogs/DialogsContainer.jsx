import Dialogs from './Dialogs';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from '../../redux/dialogs-reducer';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => { dispatch(updateNewMessageTextActionCreator(text)); },
        addMessage: () => { dispatch(addMessageActionCreator()); }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);