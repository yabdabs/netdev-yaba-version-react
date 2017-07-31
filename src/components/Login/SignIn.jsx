import React from 'react'
import { Redirect } from 'react-router-dom'

class SignIn extends React.Component {
    constructor(){
    super()
    this.state = {
        username: '',  
        password: '',  
        redirectTo: null
    } //close state

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }//close constructor

     handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }

    handleSubmit(event) {
      event.preventDefault()
      console.log('handleSubmit')
      this.props._login(this.state.username, this.state.password)
      this.setState({
        redirectTo: '/'
      })
    }
    
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
               onChange={this.handleChange}
               value={this.state.username}
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
                onChange={this.handleChange}
                value={this.state.password}/>
              <label for="password"></label>
            </div>                    
                  
          <div className="col s4">
              <button className="btn waves-effect waves-light" type="submit" name="action">
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