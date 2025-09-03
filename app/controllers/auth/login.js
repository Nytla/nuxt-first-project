import { AUTH_JWT_ALG, AUTH_JWT_LIFETIME, AUTH_JWT_SECRET } from "#app/config/auth.js";
import User from "#app/models/user.js";
import { compare } from "bcrypt";
import jwt from 'jsonwebtoken'

export default async function login(req, resp){
	const { login, password } = req.body;
	const errors = [];
	let token = null;
	let user = null;

	if(!login){
		errors.push(['login', 'is_null', []]);
	}

	if(!password){
		errors.push(['password', 'is_null', []]);
	}

	if(errors.length === 0){
		user = await User.scope('auth').findOne({ where: { login } });

		if(user === null || !(await compare(password, user.password))){
			errors.push(['password', 'wrong_credentials', []]);
		}
		else{
			token = jwt.sign({ 
				id: user.id
			}, AUTH_JWT_SECRET, { algorithm: AUTH_JWT_ALG, expiresIn: AUTH_JWT_LIFETIME });
		}
	}

	if(errors.length === 0){
		const userData = user.toJSON();
		delete userData['password'];
		resp.json({ user: userData, token });
	}
	else{
		resp.status(422).json(errors);
	}
}