import { DB_DIALECT, DB_NAME, DB_PASS, DB_PORT, DB_STORAGE, DB_USER } from "#app/config/db.js";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
	dialect: DB_DIALECT,
	storage: DB_STORAGE,
	port: DB_PORT
});

try {
	await sequelize.authenticate();
	console.log('Connection has been established successfully.');
} catch (error) {
	console.error('Unable to connect to the database:', error);
}

export default sequelize;