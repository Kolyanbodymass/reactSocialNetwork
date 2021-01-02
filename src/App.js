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


const App = (props) => {

	return (
		<BrowserRouter>
			<div className="app-wrapper">
				<Header />
				<Navbar state={props.state.sidebar} />
				<div className="app-wrapper-content">
					<Route path="/profile" 
						render={ () => <Profile 
							profilePage={props.state.profilePage} 
							addPost={props.addPost}
							updateNewPostText={props.updateNewPostText} /> } />
					{/* <Route path="/dialogs" component={ SomeComponent } /> */}
					<Route path="/dialogs" 
						render={ () => <Dialogs 
							dialogsPage={props.state.dialogsPage}
							newMessageText={props.state.dialogsPage.newMessageText} 
							addMessage={props.addMessage}
							updateNewMessageText={props.updateNewMessageText} /> } />
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
