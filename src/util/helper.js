//Importing axios to make our front end requests
import axios from 'axios';

var helper = {
	//Get Name Function From DB
	getDevName: function() {
		return axios.get("/dev/:id");
	},
  getDevPicture: function() {
	return axios.get("/dev/:id");
  },
	getDevBio: function() {
	return axios.get("/dev/:id");
	},
	getDevLocation: function() {
	return axios.get("/dev/:id");
	},
	getDevSkills: function() {
	return axios.get("/dev/:id");
	},
	getDevPortfolio: function() {
	return axios.get("/dev/:id");
	},
	getDevCollabs: function() {
	return axios.get("/dev/:id");
	}




}

export default helper;