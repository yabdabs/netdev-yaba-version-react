var React = require('react');


class loginTest extends React.Component {
  constructor(){
    super();

    this.state = {
      user: null
    };
  }

  componentDidMount(){
    //hit the server to grab the user

    //set state for the user 
  }

  render() {
  		if (!this.state.user) {
  		    return (
  		    	<div>
  		    		<a href="/login">Login</a>
  		    		<br />
  		    		<a href="/register">Register</a>
  		    	</div>
      		);
  		} else if (this.state.user) {
  			return (
  				<div>
  					<p>You are currently logged in as {this.state.user}.</p>
  					<a href="/logout">Logout</a>
  				</div>	
  			);
  		};

  	}

  
};

module.exports = loginTest;