import React from 'react';
import Header from './components/Header/Header.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Profile from './components/Profile/Profile.jsx';

import './App.css';

const App = () => {
	return (
		<div className="app-wrapper">
			<Header />
			<Navbar />
			<Profile />
		</div>
	);
}

export default App;
