import React from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import DialogsContainer from './components/Dialogs/DialogsContainer.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';


const App = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar sidebar={props.state.sidebar} />
				<div className="app-wrapper-content">
					<Route path="/profile" 
						render={ () => <Profile store={props.store} /> } />
					{/* <Route path="/dialogs" component={ SomeComponent } /> */}
					<Route path="/dialogs" 
						render={ () => <DialogsContainer store={props.store} /> } />
					<Route path="/news" 
						render={ () => <News /> } />
					<Route path="/music" 
						render={ () => <Music /> } />
					<Route path="/settings" 
						render={ () => <Settings /> } />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
