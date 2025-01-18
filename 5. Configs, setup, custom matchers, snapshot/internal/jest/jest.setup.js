require('dotenv').config();

// This will run before Jest is loaded
global.myGlobalVariable = 'Hello, World!';

global.SECRET_TOKEN = process.env.SECRET_TOKEN;
