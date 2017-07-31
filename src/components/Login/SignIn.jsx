import React from 'react'
import { Redirect } from 'react-router-dom'

class SignIn extends React.Component {
    constructor(){
    super()
    this.state = {
        // email: '',  
        // password: '',  
        redirectTo: null
    } //close state
  }//close constructor

  render(){
  if (this.state.redirectTo) {
    return <Redirect to={{ pathname: this.state.redirectTo }} />
  }
  else {
    return (
      /*<!-- LOGIN PAGE HEADER -->*/
      <div className="navbar-fixed">
        <nav id="dyna-nav" role="navigation">
          <div className="nav-wrapper container"> 
            <div className="row">
              {/*<!-- LOGO -->*/}
              <div className="col s3">
                <a id="logo" href="/" className="brand-logo">
                NetDev.me</a>
              </div>
              {/*END LOGO*/}
        
              {/*SPACER DIV*/}
              <div className="col s3"></div>
              {/*END SPACER DIV*/}
              {/*LOGIN FORM*/}
              <div className="col s6">
                  <div className="row">
                    <form className="col s12">
                      <div className="input-field col s4">
                        <input 
                          placeholder="Email"
                           id="email"
                           type="email"
                           name="email"
                           onChange={this.props.handleChange}
                           value={this.props.email}
                           className="validate form-entry"/>
                          <label for="email"></label>
                        </div>
                        <div className="input-field col s4">
                          <input                        
                            placeholder="Password" 
                            id="password" 
                            type="password" 
                            name="password"
                            className="validate form-entry"
                            onChange={this.props.handleChange}
                            value={this.props.password}
                            />
                          <label for="password"></label>
                        </div>                    
                            
                      <div className="col s4">
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.props.handleSubmit}>
                            Sign In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>
        </nav>
      </div>
  )//close first return
  } //close first conditional
}//close render
}

    


export default SignIn