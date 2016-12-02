//DEPENDENCIES
var models  = require('./models');
var sequelizeConnection = models.sequelize;





//FUNCTIONS
function generate () {
	return firstNames[Math.floor(Math.random()*firstNames.length)];
};

function findFemaleNames () {
	return models.Name.findAndCountAll({
		where: {
			gender: female
		},
		limit: 10
	})
	.then(function(result) {
		console.log(result.count);
		console.log(result.rows);
	});
};

