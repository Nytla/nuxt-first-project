import Post from "#app/models/post.js";

export default async function postRemove(request, response){
	const post = await Post.findByPkOrFail(request.params.id);

	if(post.UserId !== request.auth.id){
		return response.status(403).json('forbidden');
	}

	await post.destroy();
	response.end(JSON.stringify(true));
}