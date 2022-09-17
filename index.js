import express from 'express';
// const express =  require('express');
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 3000;

app.use(bodyParser.json()); 

app.use('/users', usersRoutes);

app.get('/', (req, res, next)=>{
    // console.log('[TEST]!')

    res.send('hello from homepage')
});
app.listen(PORT, ()=>{
    console.log(`Server running on port: http://localhost:${PORT}`);
});
