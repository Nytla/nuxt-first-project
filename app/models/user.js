import { DataTypes } from 'sequelize';
import sequelize from '#app/global/sequelize.js';

const User = sequelize.define(
	'User', 
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		login: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true  
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		defaultScope: {
			attributes: { exclude: [ 'password', 'createdAt', 'updatedAt' ] }
		},
		scopes: {
			auth: {
				attributes: {}
			}
		}
	}
);

export default User;