import React from 'react';
import ReactDOM from 'react-dom';

import Main from './components/Main';
import Header from './components/Header';
import Background from './components/Background';
import Profile from './components/Profile';
import Intro from './components/Intro';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Network from './components/Network';
import Contact from './components/Contact';


ReactDOM.render(
	<Main>
		<Header />
		<Background>
			<Profile>
				<Intro />
				<Skills />
				<Projects />
				<Network />
				<Contact />
			</Profile>
		</Background>
	</Main>, 
	document.getElementById('root'));