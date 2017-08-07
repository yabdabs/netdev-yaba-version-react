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
        <Background handleChange={this.props.handleChange} editIntro={this.props.editIntro} idPic={this.props.idPic} firstName={this.props.firstName} lastName={this.props.lastName}
			bio={this.props.bio} skills={this.props.skills} portfolio={this.props.portfolio} friends={this.props.friends}
			location={this.props.location} handleAddSkill={this.props.handleAddSkill}/>
      </div>

		);
	}
};

export default Main
