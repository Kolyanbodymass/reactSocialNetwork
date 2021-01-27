import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import { BrowserRouter, Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer.jsx';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginPage from './components/Login/Login';
import {connect} from 'react-redux';
import {initializeApp} from './redux/app-reducer';

import './App.css';
import Preloader from './components/common/Preloader/Preloader.js';


class App extends React.Component {

	componentDidMount() {
        this.props.initializeApp();
    }

	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}

		return (
			<BrowserRouter>
				<div className="app-wrapper">
					<HeaderContainer />
					<Navbar sidebar={this.props.store.sidebar}/>
					<div className="app-wrapper-content">
						<Route path="/profile/:userId?" 
							render={ () => <ProfileContainer /> } />
						{/* <Route path="/dialogs" component={ SomeComponent } /> */}
						<Route path="/dialogs" 
							render={ () => <DialogsContainer /> } />
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
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
