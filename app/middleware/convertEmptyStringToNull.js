export default function convertEmptyStringToNull(request, _, next){
	if(request.body && typeof request.body === "object"){
		for(let key in request.body){
			if(typeof request.body[key] === 'string'){
				request.body[key] = request.body[key].trim();
			}

			if(request.body[key] === ''){
				request.body[key] = null;
			}
		}
	}
	
	next();
}