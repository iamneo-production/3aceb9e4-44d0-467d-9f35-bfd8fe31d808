import express from 'express';
//import { addUser, getUsers } from '../controllers/User.js';
//import { newConversation, getConversation } from '../controllers/Conversation.js';
//import { newMessage, getMessages } from '../controllers/Message.js';
import { frontPage } from '../controllers/User.js';

const route = express.Router();

// route.post('/add',addUser);
// route.get('/users',getUsers);
// route.post('/conversation/add',newConversation);
// route.post('/conversation/get',getConversation);
// route.post('/message/add',newMessage);
// route.get('/message/get/:conversationId',getMessages);
route.get('/',frontPage)


export default route;