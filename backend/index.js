import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import route from './routes/Routes.js';
import Connection from './database/db.js';

const app = express();
app.use(cors());
app.use(express.static('public'))
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}))
 app.use('/',route);

const server = http.createServer(app);
Connection('rounak','rounak')
const PORT=8080;
server.listen(PORT,()=>{
    console.log(`Server is running  on port ${PORT}.`);
})


