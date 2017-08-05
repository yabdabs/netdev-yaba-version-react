import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';
import helper from '../../util/helper';

import Header from './Header';
import Background from './Background';


class Main extends React.Component {

	render(){

		return(
      <div>
        <Header />
        <Background handleChange={this.props.handleChange} editIntro={this.props.editIntro} idPic={this.props.idPic} firstName={this.props.firstName} lastName={this.props.lastName}
			bio={this.props.bio} skills={this.props.skills} portfolio={this.props.portfolio} friends={this.props.friends}
			location={this.props.location}/>
      </div>

		);
	}
};

export default Main

