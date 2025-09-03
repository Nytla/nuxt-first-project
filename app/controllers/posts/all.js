import Post from "#app/models/post.js";
import User from "#app/models/user.js";

export default async function postsAll(_req, resp){
	const posts = await Post.findAll({
		order: [[ 'createdAt', 'DESC' ]],
		limit: 10,
		include: [
			User
		]
	});

	setTimeout(() => resp.json(posts), 0);
}
