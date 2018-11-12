var path = require('path');


var Sequelize = require('sequelize');

var sequelize =  new Sequelize(null,null,null,
	{dialect: 'sqlite', storage: "quiz.sqlite"});

var Quiz = sequelize.import(path.join(_dirname,"quiz"));

exports.Quiz = Quiz;
