import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoute from "./routers/pageRoute.js";
dotenv.config();
// connection to the DB
conn();

const app=express() 
const port  = process.env.PORT;
// ejs template engine 
app.set('view engine','ejs');

// static file middleware
app.use(express.static('public'))

app.use("/",pageRoute);
app.listen(port,()=>{
    console.log(`port : ${port}`)
})

