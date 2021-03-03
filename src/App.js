import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { HashRouter, Route, Switch, withRouter, Redirect } from 'react-router-dom';
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

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));


class App extends React.Component {

    catchAllUnhandledErrors = (reason, promise) => {
        alert("Some error occured");
        //console.error(promiseRejectionEvent);
    }
    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }
    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
					<Switch>
						<Route exact path="/" 
							render={ () => <Redirect to={"/profile"} />}/>
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
						<Route path="*" 
							render={ () => <div>404 NOT FOUND</div> } />
					</Switch>
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
	return <HashRouter>
		<Provider store={store}>
			<AppContainer />
		</Provider>
	</HashRouter>
}

export default SamuraiJSApp;