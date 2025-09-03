import Post from "#app/models/post.js";

export default async function postCreate(request, response){
	const { title, content, url } = request.body;
	const post = await Post.create({ title, content, url, UserId: request.auth.id });
	response.end(JSON.stringify(post));
}