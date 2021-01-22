import Dialogs from './Dialogs';
import {addMessageActionCreator} from '../../redux/dialogs-reducer';
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
        addMessage: (newMessageBody) => { dispatch(addMessageActionCreator(newMessageBody)); }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);