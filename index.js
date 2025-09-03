import 'dotenv/config'
import registerRoutes from '#app/router.js';
import '#app/global/sequelize.js'
import express from 'express';
import initKernel from '#app/kernel.js';
import { APP_PORT } from '#app/config/app.js';

const app = express();
initKernel(app);

const server = app.listen(APP_PORT);

registerRoutes(app, server);

app.use(function(_, response){
	response.status(404).json('not found');
});

console.log('Server is active now');