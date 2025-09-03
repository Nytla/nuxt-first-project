import Post from "#app/models/post.js";
import User from "#app/models/user.js";

export default async function postOne(req, resp){
	// return resp.status(500).end('');
	
	const post = await Post.findByPkOrFail(req.params.id, {
		order: [[ 'createdAt', 'DESC' ]],
		limit: 10,
		include: [
			User
		]
	});

	setTimeout(() => resp.json(post), 500);
}