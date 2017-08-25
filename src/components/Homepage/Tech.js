import React from 'react';
import { Button, Modal, Chip } from 'react-materialize';


class Tech extends React.Component {

	render() {
		return (

			<div>

				<div className="row">
					<div className="col s8 left-align">
						<h5><strong> TECH NEWS </strong></h5>
					</div>
					<div className="col s4 right-align">
					</div>
				</div>

				<a href="#">
					<div className="row">
						<div className="col s3">
							<img className="newsfeed-img z-depth-3" src="https://cdn.vox-cdn.com/thumbor/8GfxnxdLVI4c7wkKiZtJSsZVPTM=/0x0:1920x1080/1820x1213/filters:focal(807x387:1113x693):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56078885/FARGO_301.0.jpg"/>
						</div>
						<div className="col s9">
							<h5>FX will let you watch its shows without commercials — if you pay an extra $6 a month</h5>
							<br />
							<h6>AMC is trying (nearly) the same thing. Both of them are working with Comcast.</h6>
						</div>
					</div>
				</a>

				<br />

				<a href="#">
					<div className="row">
						<div className="col s3">
							<img className="newsfeed-img z-depth-3" src="https://cdn.vox-cdn.com/thumbor/odd-j9wQQiYVKYAlu8euP60JhhI=/0x0:3000x2113/1820x1213/filters:focal(1348x430:1828x910):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56080401/98328574.0.jpg"/>
						</div>
						<div className="col s9">
							<h5>You don’t have to be like Steve Jobs to be a great entrepreneur</h5>
							<br />
							<h6>“Built for Growth” authors Chris Kuenne and John Danner explain what you do need on the latest Recode Decode.</h6>
						</div>
					</div>
				</a>

				<br />

				<a href="#">
					<div className="row">
						<div className="col s3">
							<img className="newsfeed-img z-depth-3" src="https://cdn.vox-cdn.com/thumbor/bcRZSUYYdDg3Q5-TL9RifYIOZjc=/303x0:5147x3633/680x510/filters:format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/56075127/681720374.0.jpg"/>
						</div>
						<div className="col s9">
							<h5>Even with all our gadgets, Americans are using less electricity than 10 years ago</h5>
							<br />
							<h6>Even with all our gadgets, Americans are using less electricity than 10 years ago</h6>
						</div>
					</div>
				</a>

				<hr />
				<br />
			</div>

		);
	}
};
	
export default Tech;