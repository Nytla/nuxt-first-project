import { DataTypes, Model } from 'sequelize';
import sequelize from '#app/global/sequelize.js';
import User from './user.js';
import Error404 from '#app/core/errors/Error404.js';

class Post extends Model {}

Post.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		url: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true  
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [5, 255]
			}
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [25, 1000]
			}
		},
	},
	{
		modelName: 'Post',
		sequelize
	}
);

Post.belongsTo(User);
User.hasMany(Post);

Post.findByPkOrFail = async function(pk, options = {}){
	const res = await this.findByPk(pk, options);

	if(res === null){
		throw new Error404('post not found');
	}

	return res;
}

export default Post;