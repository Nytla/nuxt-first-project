import { ValidationError } from "sequelize";
import Error404 from "./errors/Error404.js";

class Router{
	constructor(app){
		this.app = app;
	}

	get(url, controller, middlewares = []){
		this.app.get(url, ...middlewares, this.#handleErrors(controller))
	}

	post(url, controller, middlewares = []){
		this.app.post(url, ...middlewares, this.#handleErrors(controller))
	}

	put(url, controller, middlewares = []){
		this.app.put(url, ...middlewares, this.#handleErrors(controller))
	}

	patch(url, controller, middlewares = []){
		this.app.patch(url, ...middlewares, this.#handleErrors(controller))
	}

	delete(url, controller, middlewares = []){
		this.app.delete(url, ...middlewares, this.#handleErrors(controller))
	}

	#handleErrors(controller){
		return async function(request, response, next){
			try{
				await controller(request, response, next);
			}
			catch(e){
				if(e instanceof Error404){
					response.status(404).end(JSON.stringify('Not found'));
					return;
				}

				if(e instanceof ValidationError){
					response.status(422).json(e.errors.map(err => ([
						err.path, 
						err.validatorKey,
						err.validatorArgs
					])));
					return;
				}
				
				if(e.name === 'SequelizeForeignKeyConstraintError'){
					response.status(422).json([[
						e.fields[0], 'rel', []
					]]);
					return;
				}
		
				console.log(e);
				response.status(500).end(JSON.stringify('Server bug'));
			}
		}
	}
}

export default Router;