import Post from "#app/models/post.js";

export default async function postUpdate(request, response){
	const post = await Post.findByPkOrFail(request.params.id);

	if(post.UserId !== request.auth.id){
		return response.status(403).json('forbidden');
	}

	const { title, content, url } = request.body;
	await post.update({ title, content, url });

	response.end(JSON.stringify(post));
}

