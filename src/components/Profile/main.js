import React from 'react';
import Profile from './profile'
import Header from './header';
import Background from './background';


class Main extends React.Component {
	constructor(){
		super()
		this.state ={
			background: ""
		}//close state
	}//close constructor


handleBackgroundChange = (pattern) => {
	this.setState({
		background: pattern
	})
}//close hBGC

	render(){

		return(
      <div>
        <Header handleBackgroundChange={this.handleBackgroundChange} background={this.state.background}
        _handleProfileClick= {this.props._handleProfileClick} _handleClickPerson = {this.props._handleClickPerson}
        />

		<Background handleChange={this.props.handleChange} editIntro={this.props.editIntro} idPic={this.props.idPic} firstName={this.props.firstName} lastName={this.props.lastName}
			bio={this.props.bio} skills={this.props.skills} portfolio={this.props.portfolio} friends={this.props.friends} pic={this.props.pic}
			location={this.props.location} handleAddSkill={this.props.handleAddSkill} skills={this.props.skills} getInitialSkills= {this.props.getInitialSkills}  background={this.state.background}/>
      </div>


		);
	}
};

export default Main