import React from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import News from './components/News/News.jsx';
import Music from './components/Music/Music.jsx';
import Settings from './components/Settings/Settings.jsx';
import {BrowserRouter, Route} from 'react-router-dom';

import './App.css';

const App = () => {
	return (
		<BrowserRouter>
			<div className="app-wrapper">
			<Header />
			<Navbar />
				<div className="app-wrapper-content">
					<Route path="/dialogs" component={Dialogs}/>
					<Route path="/profile" component={Profile}/>
					<Route path="/news" component={News}/>
					<Route path="/music" component={Music}/>
					<Route path="/settings" component={Settings}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
