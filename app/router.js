import check from "./controllers/auth/check.js";
import login from "./controllers/auth/login.js";
import postsAll from "./controllers/posts/all.js";
import postCreate from "./controllers/posts/create.js";
import postOne from "./controllers/posts/one.js";
import postByUrl from "./controllers/posts/byUrl.js";
import postsByUser from "./controllers/posts/byUser.js";
import postRemove from "./controllers/posts/remove.js";
import postUpdate from "./controllers/posts/update.js";
import commentsAll from "./controllers/comments/all.js";
import imagesAll from "./controllers/images/all.js";
import Router from "./core/router.js";

import auth from "./middleware/auth.js";

export default function registerRoutes(app){
	const router = new Router(app);

	router.get('/auth/check', check);
	router.post('/auth/login', login);

	router.get('/posts', postsAll);
	router.get('/posts/my', postsByUser, [ auth ]);
	router.get('/posts/:id', postOne);
	router.post('/posts', postCreate, [ auth ]);
	router.delete('/posts/:id', postRemove, [ auth ]);
	router.put('/posts/:id', postUpdate, [ auth ]);
	
	// these urls are not in docs
	router.get('/posts/byurl/:url', postByUrl);
	router.get('/comments/:item/:id', commentsAll);
	router.get('/images/:item/:id', imagesAll);
};