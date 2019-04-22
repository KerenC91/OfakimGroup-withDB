module.exports = (sequelize, Sequelize) => {
	const User = sequelize.define('user', {
	  fullName: {
		  type: Sequelize.STRING
	  },
	  email: {
		  type: Sequelize.STRING
		},
		dateOfBirth: {
		  type: Sequelize.STRING
		},
		phoneNumber: {
		  type: Sequelize.STRING
		},
		gender: {
		  type: Sequelize.STRING
	  }
	});
	return User;
}