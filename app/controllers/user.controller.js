const db = require('../config/db.config.js');
const User = db.user;
 
// Save FormData - User to MySQL
exports.save = (req, res) => {
	console.log('Post a User: ' + JSON.stringify(req.body));
	
	User.create({
		fullName: req.body.fullName,
		email: req.body.email,
		dateOfBirth: req.body.dateOfBirth,
		phoneNumber: req.body.phoneNumber,
		gender: req.body.gender,
	},{
		attributes: {include: ['fullName', 'email', 'dateOfBirth', 'phoneNumber', 'gender']}
	}).then(user => {
		res.send(user);
	})
};
 
// Fetch all Users
exports.findAll = (req, res) => {
	console.log("Get All Users");
	User.findAll({
		attributes: ['id', 'fullName', 'email', 'dateOfBirth', 'phoneNumber', 'gender']
	}).then(users => {
	   res.send(users);
	});
};