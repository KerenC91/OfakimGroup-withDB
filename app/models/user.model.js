module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  fullname: {
		  type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
		},
		dateofbirth: {
		  type: Sequelize.STRING
		},
		phonenumber: {
		  type: Sequelize.STRING
		},
		gender: {
		  type: Sequelize.STRING
	  }
	});
	return User;
}