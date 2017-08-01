import React from 'react';
// import helper from '../util/helper';
import Profile from './profile'
import Header from './header';
import Background from './background';


class Main extends React.Component {

	render(){

		return(
      <div>
        <Header />
        <Background />
      </div>

		);
	}
};

export default Main
