module.exports = function(sequelize, DataTypes){
	return sequelize.define('Quiz',
		{ pregunta: DataTypes.String,
		  respuesta : DataTypes.String,
		});
}