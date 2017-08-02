import React from 'react';
// import helper from '../util/helper';


class Header extends React.Component { 
	
	render() {
		return (

			<div>
			{/* HEADER NAVBAR */}
			<div className="navbar-fixed">
				<nav id="dyna-nav" role="navigation">
			    <div className="nav-wrapper container">
						
						<div className="row">

							{/* LOGO */}
							<div className="col s4">
					      <a id="logo" href="/" className="brand-logo">
					      NetDev.me</a>
							</div>
							{/* END LOGO */}

							{/* SEARCH BAR */}
							<div className="col s4">
								<div className="row">

									<div className="col s1">
										<i className="fa fa-search nav-search" aria-hidden="true"></i>
									</div>

									<div className="col s11">
										<form>
							        <div className="input-field">
							          <input id="search" type="search" required />
							          <label className="label-icon" htmlFor="search"></label>
							        </div>
							      </form>	
						      </div>

						    </div>
							</div>
							{/* END SEARCH BAR */}


							{/* USER ICONS */}
							<div className="col s4">
					      <ul className="right hide-on-med-and-down">
					      	<li><a href="#"><i className="fa fa-user nav-icon" aria-hidden="true"></i></a></li>

					      	<li><a href="#"><i className="fa fa-envelope nav-icon" aria-hidden="true"></i></a></li>

					        <li><a href="#"><i className="fa fa-cog nav-icon" aria-hidden="true"></i></a></li>
					      </ul>
				      </div>
				    	{/* END USER ICONS */}

			      </div>
			    </div>
			  </nav>
		  </div>
			{/* END HEADER NAVBAR */}
			</div>
			
		);
	}
};
	

export default Header;