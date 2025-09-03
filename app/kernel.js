import convertEmptyStringToNull from '#app/middleware/convertEmptyStringToNull.js'
import bodyParser from 'body-parser';
import express from 'express';
import cookieParser from 'cookie-parser' 
import cors from 'cors'
import { APP_CLIENT_HOST } from './config/app.js';

export default function initKernel(app){
	app.use(express.static('public'));
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(bodyParser.json({ extended: false }));
	app.use(convertEmptyStringToNull);
	app.use(cors({
		origin: APP_CLIENT_HOST.split(',')
	}));
}