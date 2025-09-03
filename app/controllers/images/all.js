export default async function commentsAll(req, resp){
	const { params: { item, id } } = req;
	
	setTimeout(() => {
		resp.json([
			{ id: 1, title: `Image path 1 for ${item} ${id}` },
			{ id: 2, title: `Image path 2 for ${item} ${id}` }
		]);
	}, 300);
}