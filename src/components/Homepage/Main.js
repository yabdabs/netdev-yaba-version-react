import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';

import Header from '../Profile/header';
import Background from './Background';


class Main extends React.Component {

	render(){

		return(
      <div>
        <Header _handleProfileClick={this.props._handleProfileClick}/>
        <Background firstName={this.props.firstName} lastName={this.props.lastName}/>
      </div>

		);
	}
};

export default Main;
