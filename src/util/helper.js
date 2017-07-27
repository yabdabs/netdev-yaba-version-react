//Importing axios to make our front end requests
import axios from 'axios';

var helper = {
	//Get Name Function From DB
	getDevName: function(name) {
	return axios.get("/dev/:id");
	},
	saveDevName: function(){
	return axios.post("/dev/:id");
	},

  getDevPicture: function() {
	return axios.get("/dev/:id");
  },
  saveDevPicture: function(){
	return axios.post("/dev/:id");
	},

	getDevBio: function() {
	return axios.get("/dev/:id");
	},
	saveDevBio: function(){
	return axios.post("/dev/:id");
	},

	getDevLocation: function() {
	return axios.get("/dev/:id");
	},
	saveDevLocation: function(){
	return axios.post("/dev/:id");
	},

	getDevSkills: function() {
	return axios.get("/dev/:id");
	},
	saveDevSkills: function(){
	return axios.post("/dev/:id");
	},


	getDevPortfolio: function() {
	return axios.get("/dev/:id");
	},
	saveDevPortfolio: function(){
	return axios.post("/dev/:id");
	},

	getDevCollabs: function() {
	return axios.get("/dev/:id");
	},
	saveDevCollabs: function() {
	return axios.post("/dev/:id");
	}




}

export default helper;