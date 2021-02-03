import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer.jsx';
import LoginPage from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';
import store from './redux/redux-store';
import {Provider} from 'react-redux';
import {compose} from 'redux';

import './App.css';
import Preloader from './components/common/Preloader/Preloader.js';
import {withSuspense} from './hoc/withSuspense';

// import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
// import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

	componentDidMount() {
        this.props.initializeApp();
    }

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<div className="app-wrapper">
				<HeaderContainer />
				<Navbar friends={this.props.friends}/>
				<div className="app-wrapper-content">
					<Route path="/profile/:userId?" 
						render={ withSuspense(ProfileContainer) } />
					<Route path="/dialogs" 
						render={ withSuspense(DialogsContainer) } />
					<Route path="/news" 
						render={ () => <News /> } />
					<Route path="/music" 
						render={ () => <Music /> } />
					<Route path="/settings" 
						render={ () => <Settings /> } />
					<Route path="/users" 
						render={ () => <UsersContainer /> } />
					<Route path="/login" 
						render={ () => <LoginPage /> } />
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized,
	friends: state.sidebar.friends
})

const AppContainer = compose(
	withRouter,
	connect(mapStateToProps, {initializeApp}))(App);

const SamuraiJSApp = (props) => {
	return <BrowserRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</BrowserRouter>
}

export default SamuraiJSApp;