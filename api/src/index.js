'use strict';

const express = require('express');
const {host, port} = require("../configuration/indx.js");
const {connectDB} = require("../utils/db.js");
const {User} = require("./models/user.js");


const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/user', async (req, res) => {
    try {
        const user = new User({userName: "Mykhailo@Kulish", age: 22});
        await user.save();
        const users = await User.find();
        res.json(users);
    } catch (e) {
        res.send(e.message);
    }
})

connectDB()
    .on('error', console.error.bind(console, 'connection error:'))
    .once('open', startServer)


function startServer() {

    app.listen(port, () => {
            console.log(`Running on http://${host}:${port}`);
        });
}



