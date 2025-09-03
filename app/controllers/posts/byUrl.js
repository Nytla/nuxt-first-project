import Post from "#app/models/post.js";
import User from "#app/models/user.js";

export default async function byUrl(req, resp){
	console.log(req.params.url);
	const post = await Post.findOne({
		include: [
			User
		],
		where: {
			url: req.params.url
		}
	});

	if(post == null){
		resp.status(404).json('not found');
	}		
	else{
		resp.json(post);
	}
}