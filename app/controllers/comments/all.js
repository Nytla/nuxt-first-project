export default async function commentsAll(req, resp){
	const { params: { item, id } } = req;
	
	resp.json([
		{ id: 1, title: `Comment for ${item} ${id}` },
		{ id: 2, title: `Comment other text for ${item} ${id}` }
	]);
}