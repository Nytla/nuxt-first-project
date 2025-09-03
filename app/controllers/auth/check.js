import { AUTH_JWT_ALG, AUTH_JWT_SECRET } from '#app/config/auth.js';
import User from '#app/models/user.js';
import jwt from 'jsonwebtoken'

export default async function check(request, response){
	const header = request.headers.authorization ?? 'Bearer null';
	const [ _, token ] = header.split(' ');
	let res = { auth: false };
	
	try{
		const tokenData = jwt.verify(token, AUTH_JWT_SECRET, { algorithms: [ AUTH_JWT_ALG ] });
		const user = await User.findByPk(tokenData.id);
		res = { auth: true, user };
	}
	catch(e){
		// silence
	}

	if(request.query.delay){
		setTimeout(() => response.json(res), 300);
	}
	else{
		response.json(res);
	}
}