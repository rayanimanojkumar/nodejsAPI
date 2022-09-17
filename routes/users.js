import express from 'express';
// const express = require("express");
// const app = express();

import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// app.use(express.json());

let users = []

router.get('/',(req, res)=>{
    // console.log(users);
    // res.json(users);
    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    // const userid = uuidv4();

    // const userWithId = {...user, id:uuidv4()}

    users.push({...user, id:uuidv4()});

    res.send(`user with the name ${user.firstName} added to the database!`);
});

router.get('/:id',(req, res) => {
    const {id} = req.params;
    const findUser = users.find((user)=> user.id == id);
    res.send(findUser);

});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    users = users.filter((user)=> user.id != id);
    res.send(`user with the id ${id} deleted from the database.`);
});

router.patch('/:id', (req,  res)=>{
    const {id} = req.params;

    const {firstName, lastName, age}=req.body;

    const user = users.find((user)=> user.id == id);

    if(firstName){
        user.firstName = firstName;
    }

    if(lastName){
        user.lastName = lastName;
    }

    if(age){
        user.age = age;
    }

    res.send(`user with the id ${id} has updated`);
});

export default router; 