const db = require('../config/db.config.js');
const User = db.user;
 
// Save FormData - User to MySQL
exports.save = (req, res) => {
	console.log('Post a User: ' + JSON.stringify(req.body));
	
	User.create({
		fullname: req.body.fullname,
		email: req.body.email,
		dateofbirth: req.body.dateofbirth,
		phonenumber: req.body.phonenumber,
		gender: req.body.gender,
	},{
		attributes: {include: ['fullname', 'email', 'dateofbirth', 'phonenumber', 'gender']}
	}).then(user => {
		res.send(user);
	})
};
 
// Fetch all Users
exports.findAll = (req, res) => {
	console.log("Get All Users");
	User.findAll({
		attributes: ['id', 'fullname', 'email', 'dateofbirth', 'phonenumber', 'gender']
	}).then(users => {
	   res.send(users);
	});
};