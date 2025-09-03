import Post from "#app/models/post.js";

export default async function postsByUser(req, resp){
	const posts = await Post.findAll({
		order: [[ 'createdAt', 'DESC' ]],
		where: {
			userId: req.auth.id
		}
	});

	resp.json(posts);
}
